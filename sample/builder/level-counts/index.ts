import { builder } from '../../../src';
import { armyCampData } from '../../../src/modules/builder/army-buildings/army-camp';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const b = builder();
const bhLevels = [1, 3, 5, 7, 10] as const;

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
  availablePerBuilderHall: { builderHallLevel: number; count: number }[],
  bh: number,
) {
  return availablePerBuilderHall.find((e) => e.builderHallLevel === bh)?.count ?? 0;
}

function getMaxBuilderHallLevel(
  levels: { level: number; builderHallRequired: number }[],
  bh: number,
) {
  return levels
    .filter((l) => l.builderHallRequired <= bh)
    .reduce((m, l) => Math.max(m, l.level), 0);
}

// ── Summary table ─────────────────────────────────────────────────────────────

const cols = ['structures', 'traps', 'starLab', 'heroes', 'walls', 'total'] as const;
const colWidth = 13;
const labelWidth = 5;

log('=== builder().levelCountAtBuilderHall(bhLevel) — Summary ===');
log('');
log('BH'.padEnd(labelWidth) + cols.map((c) => c.padStart(colWidth)).join(''));
log('-'.repeat(labelWidth + cols.length * colWidth));

for (const bh of bhLevels) {
  const counts = b.levelCountAtBuilderHall(bh);
  log(
    `BH${String(bh).padEnd(labelWidth - 2)}` +
      cols.map((c) => String(counts[c]).padStart(colWidth)).join(''),
  );
}

// ── Pre-fetch data once ───────────────────────────────────────────────────────

type BBBuildingLike = {
  name: string;
  availablePerBuilderHall: { builderHallLevel: number; count: number }[];
  levels: { level: number; builderHallRequired: number }[];
};

const defenses = b.defenses().get() as unknown as BBBuildingLike[];
const armyBuildings = b.armyBuildings().get() as unknown as BBBuildingLike[];
const resourceBuildings = b.resourceBuildings().get() as unknown as BBBuildingLike[];
const traps = b.traps().get() as unknown as BBBuildingLike[];
const starLab = b.armyBuildings().starLaboratory().first()! as unknown as BBBuildingLike;
const troops = b.troops().get();
const heroes = b.heroes().get();
const wall = b.walls().wall().first()!;

// ── Per-BH detailed breakdown ─────────────────────────────────────────────────

for (const bh of bhLevels) {
  log('');
  log('');
  log(`${'═'.repeat(72)}`);
  log(` BH${bh}  —  Total: ${b.levelCountAtBuilderHall(bh).total.toLocaleString()}`);
  log(`${'═'.repeat(72)}`);

  const counts = b.levelCountAtBuilderHall(bh);

  // ── Structures ──────────────────────────────────────────────────────────────
  let structuresTotal = 0;
  header('Structures', counts.structures);
  for (const building of [...defenses, ...armyBuildings, ...resourceBuildings]) {
    const count = getCountAt(building.availablePerBuilderHall, bh);
    const maxLevel = getMaxBuilderHallLevel(building.levels, bh);
    const contrib = count * maxLevel;
    if (contrib > 0) {
      row(building.name, count, maxLevel, contrib);
      structuresTotal += contrib;
    }
  }
  // Army Camp has no upgrade levels — each instance built counts as 1.
  const armyCampInstanceCount = armyCampData.instances.filter(
    (i) => i.builderHallRequired <= bh,
  ).length;
  if (armyCampInstanceCount > 0) {
    row(armyCampData.name, armyCampInstanceCount, 1, armyCampInstanceCount);
    structuresTotal += armyCampInstanceCount;
  }
  log(`  ${DIV}`);
  log(`  ${S('Total', 32)}${N('', 7)}${N('', 8)}${N(structuresTotal, 10)}`);

  // ── Traps ───────────────────────────────────────────────────────────────────
  let trapsTotal = 0;
  header('Traps', counts.traps);
  for (const t of traps) {
    const count = getCountAt(t.availablePerBuilderHall, bh);
    const maxLevel = getMaxBuilderHallLevel(t.levels, bh);
    const contrib = count * maxLevel;
    if (contrib > 0) {
      row(t.name, count, maxLevel, contrib);
      trapsTotal += contrib;
    }
  }
  if (trapsTotal === 0) log(`  (none at this BH level)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 32)}${N('', 7)}${N('', 8)}${N(trapsTotal, 10)}`);

  // ── Star Lab (troops) ────────────────────────────────────────────────────────
  const maxStarLabLevel = getMaxBuilderHallLevel(starLab.levels, bh);
  let starLabTotal = 0;
  labHeader(`Star Lab  (Star Laboratory lvl ${maxStarLabLevel})`, counts.starLab);
  for (const t of troops) {
    const maxLevel = t.levels
      .filter((l) => l.starLabRequired <= maxStarLabLevel)
      .reduce((m, l) => Math.max(m, l.level), 0);
    if (maxLevel > 0) {
      labRow(t.name, maxLevel);
      starLabTotal += maxLevel;
    }
  }
  if (starLabTotal === 0) log(`  (none at this BH level)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 44)}${N(starLabTotal, 8)}`);

  // ── Heroes ───────────────────────────────────────────────────────────────────
  let heroesTotal = 0;
  labHeader('Heroes', counts.heroes);
  for (const h of heroes) {
    const maxLevel = h.levels
      .filter((l) => l.builderHallLevelRequired <= bh)
      .reduce((m, l) => Math.max(m, l.level), 0);
    if (maxLevel > 0) {
      labRow(h.name, maxLevel);
      heroesTotal += maxLevel;
    }
  }
  if (heroesTotal === 0) log(`  (none at this BH level)`);
  log(`  ${DIV}`);
  log(`  ${S('Total', 44)}${N(heroesTotal, 8)}`);

  // ── Walls ────────────────────────────────────────────────────────────────────
  const wallCount = getCountAt(wall.availablePerBuilderHall, bh);
  const maxWallLevel = getMaxBuilderHallLevel(
    wall.levels as unknown as { level: number; builderHallRequired: number }[],
    bh,
  );
  const wallsTotal = wallCount * maxWallLevel;
  header('Walls', wallsTotal);
  if (wallsTotal > 0) row(wall.name, wallCount, maxWallLevel, wallsTotal);
  log(`  ${DIV}`);
  log(`  ${S('Total', 32)}${N('', 7)}${N('', 8)}${N(wallsTotal, 10)}`);
}

writeOutput(__dirname);
