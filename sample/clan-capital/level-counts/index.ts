import { clanCapital } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const cc = clanCapital();
const chLevels = [1, 3, 5, 7, 9, 10] as const;

// ── Helpers ───────────────────────────────────────────────────────────────────

const N = (n: string | number, w: number) => String(n).padStart(w);
const S = (s: string, w: number) => s.padEnd(w);
const DIV = '─'.repeat(72);

// ── Summary table ─────────────────────────────────────────────────────────────

const districtKeys = [
  'capitalPeak',
  'barbarianCamp',
  'wizardValley',
  'balloonLagoon',
  'buildersWorkshop',
  'dragonCliffs',
  'golemQuarry',
  'skeletonPark',
  'goblinMines',
] as const;

type DistrictKey = (typeof districtKeys)[number];

const colWidth = 12;
const labelWidth = 5;
const topCols = ['troops', 'spells', 'total'] as const;

log('=== clanCapital().levelCountAtClanCapital(chLevel) — Summary ===');
log('');
log(
  'CH'.padEnd(labelWidth) +
    districtKeys.map((c) => c.padStart(colWidth)).join('') +
    topCols.map((c) => c.padStart(colWidth)).join(''),
);
log('-'.repeat(labelWidth + (districtKeys.length + topCols.length) * colWidth));

for (const ch of chLevels) {
  const counts = cc.levelCountAtClanCapital(ch);
  log(
    `CH${String(ch).padEnd(labelWidth - 2)}` +
      districtKeys.map((k) => String(counts[k].total).padStart(colWidth)).join('') +
      topCols.map((k) => String(counts[k]).padStart(colWidth)).join(''),
  );
}

// ── Pre-fetch data once ───────────────────────────────────────────────────────

type CCBuildingLike = {
  name: string;
  availablePerCapitalHall?: { capitalHallLevel: number; count: number }[];
  availablePerDistrict: { district: string; countPerDistrictHall: number[] }[];
  levels: { level: number; districtHallRequired?: number; capitalHallRequired?: number }[];
};

const defenses = cc.defenses().get() as unknown as CCBuildingLike[];
const armyBuildings = cc.armyBuildings().get() as unknown as CCBuildingLike[];
const barracks = cc.armyBuildings().barracks().get() as unknown as CCBuildingLike[];
const spellFactories = cc.armyBuildings().spellFactories().get() as unknown as CCBuildingLike[];
const allDistrictBuildings = [...defenses, ...armyBuildings, ...barracks, ...spellFactories];
const capitalPeakBuildings = defenses.filter(
  (b) => b.availablePerCapitalHall && b.availablePerCapitalHall.some((e) => e.count > 0),
);
const troops = cc.troops().get();
const spells = cc.spells().get();
const wall = cc.walls().wall().first()! as unknown as {
  availablePerCapitalHall: { capitalHallLevel: number; count: number }[];
  availablePerDistrict: { district: string; countPerDistrictHall: number[] }[];
  levels: { level: number; districtHallRequired: number; capitalHallRequired: number }[];
};

const districtHall = cc.districtHall().first()!;

// ── Helpers for breakdown ─────────────────────────────────────────────────────

function getMaxDHLevel(district: string, chLevel: number): number {
  return districtHall.levels
    .filter((l) => {
      const req = (l.capitalHallRequired as unknown as Record<string, number>)[district];
      return req !== undefined && req <= chLevel;
    })
    .reduce((m, l) => Math.max(m, l.level), 0);
}

function sectionHeader(label: string, total: number) {
  log('');
  log(`  ${label.toUpperCase()} (${total})`);
  log(`  ${S('Name', 36)}${N('Count', 7)}${N('MaxLvl', 8)}${N('Subtotal', 10)}`);
  log(`  ${DIV}`);
}

function sectionRow(name: string, count: number, maxLevel: number, contrib: number) {
  log(`  ${S(name, 36)}${N(count, 7)}${N(maxLevel, 8)}${N(contrib, 10)}`);
}

function labHeader(label: string, total: number) {
  log('');
  log(`  ${label.toUpperCase()} (${total})`);
  log(`  ${S('Name', 44)}${N('MaxLvl', 8)}`);
  log(`  ${DIV}`);
}

function labRow(name: string, maxLevel: number) {
  log(`  ${S(name, 44)}${N(maxLevel, 8)}`);
}

function showDistrictSection(
  buildings: CCBuildingLike[],
  district: string,
  dhLevel: number,
  structuresTotal: number,
) {
  sectionHeader(`${district} — structures (${structuresTotal})`, structuresTotal);
  let subtotal = 0;
  for (const b of buildings) {
    const distEntry = b.availablePerDistrict.find((d) => d.district === district);
    if (!distEntry) continue;
    const count = distEntry.countPerDistrictHall[dhLevel - 1] ?? 0;
    if (count === 0) continue;
    const maxLevel = b.levels
      .filter((l) => (l.districtHallRequired ?? 0) <= dhLevel)
      .reduce((m, l) => Math.max(m, l.level), 0);
    const contrib = count * maxLevel;
    if (contrib > 0) {
      sectionRow(b.name, count, maxLevel, contrib);
      subtotal += contrib;
    }
  }
  if (subtotal === 0) log(`  (none)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 36)}${N('', 7)}${N('', 8)}${N(subtotal, 10)}`);
}

function showWallSection(
  wallObj: typeof wall,
  district: string,
  dhLevel: number,
  wallsTotal: number,
) {
  const distEntry = wallObj.availablePerDistrict.find((d) => d.district === district);
  const count = distEntry ? (distEntry.countPerDistrictHall[dhLevel - 1] ?? 0) : 0;
  const maxLevel =
    count > 0
      ? wallObj.levels
          .filter((l) => l.districtHallRequired <= dhLevel)
          .reduce((m, l) => Math.max(m, l.level), 0)
      : 0;
  sectionHeader(`${district} — walls (${wallsTotal})`, wallsTotal);
  if (wallsTotal > 0) sectionRow('Wall', count, maxLevel, wallsTotal);
  else log(`  (none)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 36)}${N('', 7)}${N('', 8)}${N(wallsTotal, 10)}`);
}

// ── Per-CH detailed breakdown ─────────────────────────────────────────────────

for (const ch of chLevels) {
  const counts = cc.levelCountAtClanCapital(ch);

  log('');
  log('');
  log(`${'═'.repeat(72)}`);
  log(` CH${ch}  —  Total: ${counts.total.toLocaleString()}`);
  log(`${'═'.repeat(72)}`);

  // ── Capital Peak ────────────────────────────────────────────────────────────
  sectionHeader('Capital Peak — structures', counts.capitalPeak.structures);
  let cpTotal = 0;
  for (const b of capitalPeakBuildings) {
    const avail = b.availablePerCapitalHall!;
    const count = avail.find((e) => e.capitalHallLevel === ch)?.count ?? 0;
    if (count === 0) continue;
    const maxLevel = b.levels
      .filter((l) => (l.capitalHallRequired ?? 0) <= ch)
      .reduce((m, l) => Math.max(m, l.level), 0);
    const contrib = count * maxLevel;
    if (contrib > 0) {
      sectionRow(b.name, count, maxLevel, contrib);
      cpTotal += contrib;
    }
  }
  if (cpTotal === 0) log(`  (none)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 36)}${N('', 7)}${N('', 8)}${N(cpTotal, 10)}`);

  const cpWallCount =
    wall.availablePerCapitalHall.find((e) => e.capitalHallLevel === ch)?.count ?? 0;
  const cpWallMaxLevel =
    cpWallCount > 0
      ? wall.levels
          .filter((l) => l.capitalHallRequired <= ch)
          .reduce((m, l) => Math.max(m, l.level), 0)
      : 0;
  sectionHeader('Capital Peak — walls', counts.capitalPeak.walls);
  if (counts.capitalPeak.walls > 0)
    sectionRow('Wall', cpWallCount, cpWallMaxLevel, counts.capitalPeak.walls);
  else log(`  (none)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 36)}${N('', 7)}${N('', 8)}${N(counts.capitalPeak.walls, 10)}`);

  // ── Districts ───────────────────────────────────────────────────────────────
  const districts: DistrictKey[] = [
    'barbarianCamp',
    'wizardValley',
    'balloonLagoon',
    'buildersWorkshop',
    'dragonCliffs',
    'golemQuarry',
    'skeletonPark',
    'goblinMines',
  ];

  for (const district of districts) {
    const dhLevel = getMaxDHLevel(district, ch);
    if (dhLevel === 0) {
      log('');
      log(`  ${district.toUpperCase()} — not unlocked at CH${ch}`);
      continue;
    }
    log('');
    log(`  ── ${district} (DH${dhLevel}) ──`);
    showDistrictSection(allDistrictBuildings, district, dhLevel, counts[district].structures);
    showWallSection(wall, district, dhLevel, counts[district].walls);
  }

  // ── Troops ──────────────────────────────────────────────────────────────────
  const globalMaxDH = Math.max(...districts.map((d) => getMaxDHLevel(d, ch)));
  labHeader(`Troops  (max DH level: ${globalMaxDH})`, counts.troops);
  for (const t of troops) {
    const maxLevel = t.levels
      .filter((l) => l.districtHallRequired <= globalMaxDH)
      .reduce((m, l) => Math.max(m, l.level), 0);
    if (maxLevel > 0) labRow(t.name, maxLevel);
  }
  if (counts.troops === 0) log(`  (none)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 44)}${N(counts.troops, 8)}`);

  // ── Spells ──────────────────────────────────────────────────────────────────
  labHeader(`Spells  (max DH level: ${globalMaxDH})`, counts.spells);
  for (const s of spells) {
    const maxLevel = s.levels
      .filter((l) => l.districtHallRequired <= globalMaxDH)
      .reduce((m, l) => Math.max(m, l.level), 0);
    if (maxLevel > 0) labRow(s.name, maxLevel);
  }
  if (counts.spells === 0) log(`  (none)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 44)}${N(counts.spells, 8)}`);
}

writeOutput(__dirname);
