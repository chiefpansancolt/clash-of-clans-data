/**
 * Profile parser — resolves raw numeric dataIds from a game-state snapshot
 * (e.g. tmp/output.json) into human-readable structured data.
 *
 * The parser itself is pure: it accepts a lookup map so it has no filesystem
 * dependency. See `src/parser/lookup.ts` for the lookup builder.
 */

// ---------------------------------------------------------------------------
// Raw input types (shape of output.json)
// ---------------------------------------------------------------------------

export interface RawEntry {
  data: number;
  lvl?: number;
  cnt?: number;
  timer?: number;
  helper_cooldown?: number;
  helper_recurrent?: boolean;
  gear_up?: number;
}

export interface RawModule {
  data: number;
  lvl: number;
}

export interface RawCraftedType {
  data: number;
  modules: RawModule[];
}

export interface RawCraftingStation extends RawEntry {
  types: RawCraftedType[];
}

export interface RawProfile {
  tag: string;
  timestamp: number;
  // home village
  helpers?: RawEntry[];
  guardians?: RawEntry[];
  buildings?: Array<RawEntry | RawCraftingStation>;
  traps?: RawEntry[];
  units?: RawEntry[];
  siege_machines?: RawEntry[];
  heroes?: RawEntry[];
  spells?: RawEntry[];
  pets?: RawEntry[];
  equipment?: RawEntry[];
  // builder base
  buildings2?: RawEntry[];
  traps2?: RawEntry[];
  units2?: RawEntry[];
  heroes2?: RawEntry[];
}

// ---------------------------------------------------------------------------
// Parsed output types
// ---------------------------------------------------------------------------

export interface ParsedLevel {
  level: number;
  count?: number;
}

export interface ParsedModule {
  dataId: number;
  name: string;
  level: number;
}

export interface ParsedCraftedType {
  dataId: number;
  name: string;
  modules: ParsedModule[];
}

export interface ParsedEntry {
  dataId: number;
  name: string;
  /** Multiple levels when the same building exists at different upgrade levels (e.g. Walls). */
  levels: ParsedLevel[];
  upgrading: boolean;
  gearUp?: number;
  /** For the crafting station only */
  craftedTypes?: ParsedCraftedType[];
}

export interface ParsedSection {
  label: string;
  entries: ParsedEntry[];
}

export interface ParsedProfile {
  tag: string;
  timestamp: number;
  home: ParsedSection[];
  builder: ParsedSection[];
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

const CRAFTING_STATION_ID = 1000097;

function resolve(id: number, lookup: Map<number, string>): string {
  return lookup.get(id) ?? `[${id}]`;
}

function parseEntry(raw: RawEntry, lookup: Map<number, string>): ParsedEntry {
  return {
    dataId: raw.data,
    name: resolve(raw.data, lookup),
    levels: [{ level: raw.lvl ?? 0, count: raw.cnt }],
    upgrading: raw.timer !== undefined,
    gearUp: raw.gear_up,
  };
}

function mergeEntries(entries: ParsedEntry[]): ParsedEntry[] {
  const map = new Map<number, ParsedEntry>();
  for (const entry of entries) {
    const existing = map.get(entry.dataId);
    if (existing) {
      existing.levels.push(...entry.levels);
      if (entry.upgrading) existing.upgrading = true;
    } else {
      map.set(entry.dataId, { ...entry, levels: [...entry.levels] });
    }
  }
  return [...map.values()];
}

function parseSection(
  label: string,
  rawEntries: RawEntry[] | undefined,
  lookup: Map<number, string>,
): ParsedSection {
  if (!rawEntries || rawEntries.length === 0) return { label, entries: [] };
  const entries = mergeEntries(rawEntries.map((r) => parseEntry(r, lookup)));
  return { label, entries };
}

function parseCraftingStation(raw: RawCraftingStation, lookup: Map<number, string>): ParsedEntry {
  const craftedTypes: ParsedCraftedType[] = raw.types.map((t) => ({
    dataId: t.data,
    name: resolve(t.data, lookup),
    modules: t.modules.map((m) => ({
      dataId: m.data,
      name: resolve(m.data, lookup),
      level: m.lvl,
    })),
  }));
  return {
    dataId: raw.data,
    name: resolve(raw.data, lookup),
    levels: [],
    upgrading: raw.timer !== undefined,
    craftedTypes,
  };
}

// ---------------------------------------------------------------------------
// Main parser
// ---------------------------------------------------------------------------

export function parseProfile(raw: RawProfile, lookup: Map<number, string>): ParsedProfile {
  // Split buildings: crafting station vs everything else
  const craftingStation: RawCraftingStation[] = [];
  const regularBuildings: RawEntry[] = [];

  for (const b of raw.buildings ?? []) {
    if (b.data === CRAFTING_STATION_ID && 'types' in b) {
      craftingStation.push(b as RawCraftingStation);
    } else {
      regularBuildings.push(b);
    }
  }

  const craftingSection: ParsedSection = {
    label: 'Crafting Station',
    entries: craftingStation.map((cs) => parseCraftingStation(cs, lookup)),
  };

  const home: ParsedSection[] = [
    parseSection('Buildings', regularBuildings, lookup),
    ...(craftingStation.length > 0 ? [craftingSection] : []),
    parseSection('Traps', raw.traps, lookup),
    parseSection('Troops', raw.units, lookup),
    parseSection('Siege Machines', raw.siege_machines, lookup),
    parseSection('Heroes', raw.heroes, lookup),
    parseSection('Spells', raw.spells, lookup),
    parseSection('Pets', raw.pets, lookup),
    parseSection('Hero Equipment', raw.equipment, lookup),
    parseSection('Guardians', raw.guardians, lookup),
    parseSection('Helpers', raw.helpers, lookup),
  ].filter((s) => s.entries.length > 0);

  const builder: ParsedSection[] = [
    parseSection('Buildings', raw.buildings2, lookup),
    parseSection('Traps', raw.traps2, lookup),
    parseSection('Troops', raw.units2, lookup),
    parseSection('Heroes', raw.heroes2, lookup),
  ].filter((s) => s.entries.length > 0);

  return {
    tag: raw.tag,
    timestamp: raw.timestamp,
    home,
    builder,
  };
}
