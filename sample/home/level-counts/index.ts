import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const h = home();
const thLevels = [1, 5, 10, 15, 17, 18] as const;

// ── Helpers ───────────────────────────────────────────────────────────────────

const N = (n: string | number, w: number) => String(n).padStart(w);
const S = (s: string, w: number) => s.padEnd(w);
const DIV = '─'.repeat(72);

function header(label: string, total: number) {
  log('');
  log(`  ${label.toUpperCase()} (${total})`);
  log(`  ${S('Name', 32)}${N('Count', 7)}${N('MaxLvl', 8)}${N('Subtotal', 10)}`);
  log(`  ${DIV}`);
}

function row(name: string, count: number, maxLevel: number, contrib: number) {
  log(`  ${S(name, 32)}${N(count, 7)}${N(maxLevel, 8)}${N(contrib, 10)}`);
}

function labHeader(label: string, total: number) {
  log('');
  log(`  ${label.toUpperCase()} (${total})`);
  log(`  ${S('Name', 44)}${N('Levels', 8)}`);
  log(`  ${DIV}`);
}

function labRow(name: string, levels: number) {
  log(`  ${S(name, 44)}${N(levels, 8)}`);
}

function getCountAt(
  availablePerTownHall: { townHallLevel: number; count: number; countAfterMerges?: number }[],
  th: number,
) {
  const entry = availablePerTownHall.find((e) => e.townHallLevel === th);
  if (!entry) return 0;
  return entry.countAfterMerges ?? entry.count;
}

function getMaxNormalLevel(
  levels: { level: number; townHallRequired: number; supercharge?: boolean | null }[],
  th: number,
) {
  return levels
    .filter((l) => l.supercharge !== true && l.townHallRequired <= th)
    .reduce((m, l) => Math.max(m, l.level), 0);
}

function getSuperChargeLevelCount(
  levels: { level: number; townHallRequired: number; supercharge?: boolean | null }[],
  th: number,
) {
  return levels.filter((l) => l.supercharge === true && l.townHallRequired <= th).length;
}

// ── Summary table ─────────────────────────────────────────────────────────────

const cols = [
  'structures',
  'traps',
  'superCharge',
  'lab',
  'heroes',
  'guardians',
  'equipment',
  'pets',
  'craftedDefenses',
  'walls',
  'total',
] as const;

const colWidth = 13;
const labelWidth = 5;

log('=== home().levelCountAtTownHall(thLevel) — Summary ===');
log('');
log('TH'.padEnd(labelWidth) + cols.map((c) => c.padStart(colWidth)).join(''));
log('-'.repeat(labelWidth + cols.length * colWidth));

for (const th of thLevels) {
  const counts = h.levelCountAtTownHall(th);
  log(
    `TH${String(th).padEnd(labelWidth - 2)}` +
      cols.map((c) => String(counts[c]).padStart(colWidth)).join(''),
  );
}

// ── Per-TH detailed breakdown ─────────────────────────────────────────────────

// Pre-fetch all data once
const defenses = h.defenses().get();
const armyCamp = h.armyBuildings().get(); // army camp only
const barracks = h.armyBuildings().barracks().first()!;
const darkBarracks = h.armyBuildings().darkBarracks().first()!;
const laboratory = h.armyBuildings().laboratory().first()!;
const spellFactory = h.armyBuildings().spellFactory().first()!;
const darkSpellFactory = h.armyBuildings().darkSpellFactory().first()!;
const heroHall = h.armyBuildings().heroHall().first()!;
const blacksmith = h.armyBuildings().blacksmith().first()!;
const workshop = h.armyBuildings().workshop().first()!;
const petHouse = h.armyBuildings().petHouse().first()!;
const resourceBuildings = h.resourceBuildings().get();
const clanCastle = h.resourceBuildings().clanCastle().first()!;
const traps = h.traps().get();
const troops = h.troops().get();
const spells = h.spells().get();
const siegeMachines = h.siegeMachines().get();
const guardians = h.guardians().get();
const heroEquipment = h.heroEquipment().get();
const pets = h.pets().get();
const currentCraftedDefenses = h.craftedDefenses().current().get();
const wall = h.walls().wall().first()!;

const armyBuildingList = [
  ...armyCamp,
  barracks,
  darkBarracks,
  laboratory,
  spellFactory,
  darkSpellFactory,
  heroHall,
  blacksmith,
  workshop,
  petHouse,
];

for (const th of thLevels) {
  log('');
  log('');
  log(`${'═'.repeat(72)}`);
  log(` TH${th}  —  Total: ${h.levelCountAtTownHall(th).total.toLocaleString()}`);
  log(`${'═'.repeat(72)}`);

  // ── Structures ──────────────────────────────────────────────────────────────
  let structuresTotal = 0;
  type BuildingLike = {
    name: string;
    availablePerTownHall: { townHallLevel: number; count: number }[];
    levels: { level: number; townHallRequired: number; supercharge?: boolean | null }[];
  };

  const allStructureBuildings: BuildingLike[] = [
    ...(defenses as unknown as BuildingLike[]),
    ...(armyBuildingList as unknown as BuildingLike[]),
    ...(resourceBuildings as unknown as BuildingLike[]),
    clanCastle as unknown as BuildingLike,
  ];

  header('Structures', h.levelCountAtTownHall(th).structures);
  for (const b of allStructureBuildings) {
    const count = getCountAt(b.availablePerTownHall, th);
    const maxLevel = getMaxNormalLevel(b.levels, th);
    const contrib = count * maxLevel;
    if (contrib > 0) {
      row(b.name, count, maxLevel, contrib);
      structuresTotal += contrib;
    }
  }
  log(`  ${DIV}`);
  log(`  ${S('Total', 32)}${N('', 7)}${N('', 8)}${N(structuresTotal, 10)}`);

  // ── Traps ───────────────────────────────────────────────────────────────────
  let trapsTotal = 0;
  header('Traps', h.levelCountAtTownHall(th).traps);
  for (const t of traps as unknown as BuildingLike[]) {
    const count = getCountAt(t.availablePerTownHall, th);
    const maxLevel = getMaxNormalLevel(t.levels, th);
    const contrib = count * maxLevel;
    if (contrib > 0) {
      row(t.name, count, maxLevel, contrib);
      trapsTotal += contrib;
    }
  }
  log(`  ${DIV}`);
  log(`  ${S('Total', 32)}${N('', 7)}${N('', 8)}${N(trapsTotal, 10)}`);

  // ── SuperCharge ─────────────────────────────────────────────────────────────
  let superChargeTotal = 0;
  const superChargeBuildings: BuildingLike[] = [
    ...(defenses as unknown as BuildingLike[]),
    ...(resourceBuildings as unknown as BuildingLike[]),
  ];
  header('SuperCharge', h.levelCountAtTownHall(th).superCharge);
  for (const b of superChargeBuildings) {
    const count = getCountAt(b.availablePerTownHall, th);
    const scCount = getSuperChargeLevelCount(b.levels, th);
    const contrib = count * scCount;
    if (contrib > 0) {
      row(b.name, count, scCount, contrib);
      superChargeTotal += contrib;
    }
  }
  if (superChargeTotal === 0) log(`  (none at this TH level)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 32)}${N('', 7)}${N('', 8)}${N(superChargeTotal, 10)}`);

  // ── Lab ─────────────────────────────────────────────────────────────────────
  let labTotal = 0;
  labHeader('Lab (Troops + Spells + Siege)', h.levelCountAtTownHall(th).lab);
  for (const t of troops) {
    const levels = t.levels.filter((l) => l.townHallRequired <= th).length;
    if (levels > 0) {
      labRow(t.name, levels);
      labTotal += levels;
    }
  }
  log(`  ${S('── Spells ──', 44)}`);
  for (const s of spells) {
    const levels = s.levels.filter((l) => l.townHallRequired <= th).length;
    if (levels > 0) {
      labRow(s.name, levels);
      labTotal += levels;
    }
  }
  log(`  ${S('── Siege Machines ──', 44)}`);
  for (const sm of siegeMachines) {
    const levels = sm.levels.filter((l) => l.townHallRequired <= th).length;
    if (levels > 0) {
      labRow(sm.name, levels);
      labTotal += levels;
    }
  }
  log(`  ${DIV}`);
  log(`  ${S('Total', 44)}${N(labTotal, 8)}`);

  // ── Heroes ──────────────────────────────────────────────────────────────────
  const eligibleHeroHallLevels = heroHall.levels.filter((l) => l.townHallRequired <= th);
  const maxHeroHallData =
    eligibleHeroHallLevels.length > 0
      ? eligibleHeroHallLevels[eligibleHeroHallLevels.length - 1]
      : null;
  const heroesTotal = h.levelCountAtTownHall(th).heroes;
  log('');
  log(`  HEROES (${heroesTotal})`);
  if (maxHeroHallData) {
    log(`  Hero Hall level ${maxHeroHallData.level} (TH${th} cap)`);
    log(`  ${S('Hero', 44)}${N('Cap Lvl', 8)}`);
    log(`  ${DIV}`);
    for (const [key, cap] of Object.entries(maxHeroHallData.heroLevelCaps) as [
      string,
      number | undefined,
    ][]) {
      if ((cap ?? 0) > 0) labRow(key, cap!);
    }
  } else {
    log(`  (Hero Hall not yet unlocked at TH${th})`);
  }
  log(`  ${DIV}`);
  log(`  ${S('Total', 44)}${N(heroesTotal, 8)}`);

  // ── Guardians ────────────────────────────────────────────────────────────────
  let guardiansTotal = 0;
  header('Guardians', h.levelCountAtTownHall(th).guardians);
  for (const g of guardians as unknown as BuildingLike[]) {
    const count = getCountAt(g.availablePerTownHall, th);
    const maxLevel = getMaxNormalLevel(g.levels, th);
    const contrib = count * maxLevel;
    if (contrib > 0) {
      row(g.name, count, maxLevel, contrib);
      guardiansTotal += contrib;
    }
  }
  if (guardiansTotal === 0) log(`  (none at this TH level)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 32)}${N('', 7)}${N('', 8)}${N(guardiansTotal, 10)}`);

  // ── Equipment ────────────────────────────────────────────────────────────────
  const blacksmithAvailable = getCountAt(blacksmith.availablePerTownHall, th) > 0;
  const maxBlacksmithLevel = blacksmithAvailable
    ? blacksmith.levels
        .filter((l) => l.townHallRequired <= th)
        .reduce((m, l) => Math.max(m, l.level), 0)
    : -1;
  const equipmentTotal = h.levelCountAtTownHall(th).equipment;
  labHeader(
    `Equipment  (Blacksmith lvl ${maxBlacksmithLevel >= 0 ? maxBlacksmithLevel : 'N/A'})`,
    equipmentTotal,
  );
  if (maxBlacksmithLevel >= 0) {
    for (const eq of heroEquipment) {
      const levels = eq.levels.filter(
        (l) => l.blacksmithLevelRequired <= maxBlacksmithLevel,
      ).length;
      if (levels > 0) labRow(eq.name, levels);
    }
  } else {
    log(`  (Blacksmith not yet unlocked at TH${th})`);
  }
  log(`  ${DIV}`);
  log(`  ${S('Total', 44)}${N(equipmentTotal, 8)}`);

  // ── Pets ─────────────────────────────────────────────────────────────────────
  const petsTotal = h.levelCountAtTownHall(th).pets;
  labHeader('Pets', petsTotal);
  for (const p of pets) {
    const levels = p.levels.filter((l) => l.townHallRequired <= th).length;
    if (levels > 0) labRow(p.name, levels);
  }
  if (petsTotal === 0) log(`  (none at this TH level)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 44)}${N(petsTotal, 8)}`);

  // ── Crafted Defenses ─────────────────────────────────────────────────────────
  const craftedDefensesTotal = h.levelCountAtTownHall(th).craftedDefenses;
  labHeader('Crafted Defenses (current phase)', craftedDefensesTotal);
  for (const d of currentCraftedDefenses) {
    for (const m of d.modules) {
      labRow(`${d.name} — ${m.name}`, m.upgrades.length);
    }
  }
  log(`  ${DIV}`);
  log(`  ${S('Total', 44)}${N(craftedDefensesTotal, 8)}`);

  // ── Walls ────────────────────────────────────────────────────────────────────
  const wallCount = getCountAt(wall.availablePerTownHall, th);
  const maxWallLevel = getMaxNormalLevel(
    wall.levels as { level: number; townHallRequired: number; supercharge?: boolean | null }[],
    th,
  );
  const wallsTotal = wallCount * maxWallLevel;
  header('Walls', wallsTotal);
  if (wallsTotal > 0) row(wall.name, wallCount, maxWallLevel, wallsTotal);
  log(`  ${DIV}`);
  log(`  ${S('Total', 32)}${N('', 7)}${N('', 8)}${N(wallsTotal, 10)}`);
}

writeOutput(__dirname);
