import { calculators } from '../../src';
import { BuildTime } from '../../src/types';
import { createLogger } from '../helper';

const { log, writeOutput } = createLogger();

const calc = calculators();

// ── Helpers ──────────────────────────────────────────────────────────────────

function fmt(t: BuildTime): string {
  const parts: string[] = [];
  if (t.days) parts.push(`${t.days}d`);
  if (t.hours) parts.push(`${t.hours}h`);
  if (t.minutes) parts.push(`${t.minutes}m`);
  if (t.seconds) parts.push(`${t.seconds}s`);
  return parts.length ? parts.join(' ') : '0s';
}

function row(label: string, before: BuildTime, after: BuildTime): void {
  log(`  ${label.padEnd(30)} ${fmt(before).padEnd(15)} → ${fmt(after)}`);
}

// ── Boost Calculators ─────────────────────────────────────────────────────────

log('=== calculators().boost() ===');
log('');

const buildTime: BuildTime = { days: 5, hours: 12, minutes: 0, seconds: 0 };
const researchTime: BuildTime = { days: 14, hours: 0, minutes: 0, seconds: 0 };

log('Builder Boost (build time: 5d 12h)');
log(`  ${'Tier'.padEnd(30)} ${'Before'.padEnd(15)}   After`);
row('Tier 1 (10%)', buildTime, calc.boost().builderBoost(buildTime, 10));
row('Tier 2 (15%)', buildTime, calc.boost().builderBoost(buildTime, 15));
row('Tier 3 (20%)', buildTime, calc.boost().builderBoost(buildTime, 20));
log('');

log('Research Boost (research time: 14d)');
log(`  ${'Tier'.padEnd(30)} ${'Before'.padEnd(15)}   After`);
row('Tier 1 (10%)', researchTime, calc.boost().researchBoost(researchTime, 10));
row('Tier 2 (15%)', researchTime, calc.boost().researchBoost(researchTime, 15));
row('Tier 3 (20%)', researchTime, calc.boost().researchBoost(researchTime, 20));
log('');

// ── Cost Boost ────────────────────────────────────────────────────────────────

type CostSample = { cost: number; resource: 'Gold' | 'Elixir' | 'Dark Elixir' };
const costSamples: CostSample[] = [
  { cost: 5_000_000, resource: 'Gold' },
  { cost: 8_500_000, resource: 'Elixir' },
  { cost: 300_000,   resource: 'Dark Elixir' },
];

log('Builder Boost Cost Reduction');
log(`  ${'Resource'.padEnd(16)} ${'Original'.padEnd(14)} ${'Tier 1 (10%)'.padEnd(16)} ${'Tier 2 (15%)'.padEnd(16)} Tier 3 (20%)`);
for (const { cost, resource } of costSamples) {
  const t1 = calc.boost().builderBoostCost(cost, resource, 10).toLocaleString();
  const t2 = calc.boost().builderBoostCost(cost, resource, 15).toLocaleString();
  const t3 = calc.boost().builderBoostCost(cost, resource, 20).toLocaleString();
  log(`  ${resource.padEnd(16)} ${cost.toLocaleString().padEnd(14)} ${t1.padEnd(16)} ${t2.padEnd(16)} ${t3}`);
}
log('');

log('Research Boost Cost Reduction');
log(`  ${'Resource'.padEnd(16)} ${'Original'.padEnd(14)} ${'Tier 1 (10%)'.padEnd(16)} ${'Tier 2 (15%)'.padEnd(16)} Tier 3 (20%)`);
for (const { cost, resource } of costSamples) {
  const t1 = calc.boost().researchBoostCost(cost, resource, 10).toLocaleString();
  const t2 = calc.boost().researchBoostCost(cost, resource, 15).toLocaleString();
  const t3 = calc.boost().researchBoostCost(cost, resource, 20).toLocaleString();
  log(`  ${resource.padEnd(16)} ${cost.toLocaleString().padEnd(14)} ${t1.padEnd(16)} ${t2.padEnd(16)} ${t3}`);
}
log('');

// ── Potion / Snack Calculators ────────────────────────────────────────────────

log('=== calculators().potions() ===');
log('');

const sampleTimes: Record<string, BuildTime> = {
  '3h build': { days: 0, hours: 3, minutes: 0, seconds: 0 },
  '24h build': { days: 1, hours: 0, minutes: 0, seconds: 0 },
  '7d research': { days: 7, hours: 0, minutes: 0, seconds: 0 },
};

log(`  ${'Input Time'.padEnd(16)} ${'Builder Potion (-10h)'.padEnd(24)} ${'Research Potion (-24h)'.padEnd(24)} ${'Pet Potion (-24h)'.padEnd(22)} ${'Builder Bite (-2h)'.padEnd(20)} Study Soup (-4h)`);
for (const [label, t] of Object.entries(sampleTimes)) {
  const bp = fmt(calc.potions().builderPotion(t));
  const rp = fmt(calc.potions().researchPotion(t));
  const pp = fmt(calc.potions().petPotion(t));
  const bb = fmt(calc.potions().builderBite(t));
  const ss = fmt(calc.potions().studySoup(t));
  log(
    `  ${label.padEnd(16)} ${bp.padEnd(24)} ${rp.padEnd(24)} ${pp.padEnd(22)} ${bb.padEnd(20)} ${ss}`,
  );
}
log('');

// ── Gems Calculator ───────────────────────────────────────────────────────────

log('=== calculators().gems() ===');
log('');

const gemSamples: BuildTime[] = [
  { days: 0, hours: 0, minutes: 0, seconds: 0 },
  { days: 0, hours: 0, minutes: 0, seconds: 1 },
  { days: 0, hours: 0, minutes: 3, seconds: 0 },
  { days: 0, hours: 1, minutes: 0, seconds: 0 },
  { days: 1, hours: 0, minutes: 0, seconds: 0 },
  { days: 5, hours: 6, minutes: 5, seconds: 1 },
  { days: 14, hours: 0, minutes: 0, seconds: 0 },
];

log(`  ${'Time'.padEnd(20)} Gems`);
for (const t of gemSamples) {
  const gemCost = calc.gems().cost(t);
  log(`  ${fmt(t).padEnd(20)} ${gemCost.toLocaleString()}`);
}
log('');

// ── Helpers Calculator ────────────────────────────────────────────────────────

log('=== calculators().helpers() ===');
log('');

const longTime: BuildTime = { days: 7, hours: 0, minutes: 0, seconds: 0 };

log('Lab Assistant (7d remaining research)');
log(`  ${'Level'.padEnd(8)} WorkRate  Result`);
for (let lvl = 1; lvl <= 12; lvl++) {
  const result = fmt(calc.helpers().labAssistant(longTime, lvl as 1));
  log(`  Lv ${String(lvl).padStart(2)}    ${String(lvl).padStart(2)}x       ${result}`);
}
log('');

log("Builder's Apprentice (7d remaining build)");
log(`  ${'Level'.padEnd(8)} WorkRate  Result`);
for (let lvl = 1; lvl <= 8; lvl++) {
  const result = fmt(calc.helpers().buildersApprentice(longTime, lvl as 1));
  log(`  Lv ${String(lvl).padStart(2)}    ${String(lvl).padStart(2)}x       ${result}`);
}
log('');

log('Alchemist (Gold/Elixir → Dark Elixir)');
log(`  ${'Level'.padEnd(8)} ${'Input'.padEnd(14)} ${'Base DE'.padEnd(12)} ${'Bonus'.padEnd(10)} Total`);
for (let lvl = 1; lvl <= 7; lvl++) {
  // Use full conversion max for each level
  const lvlData = [1_500_000, 2_250_000, 3_000_000, 4_500_000, 6_000_000, 7_500_000, 10_500_000];
  const r = calc.helpers().alchemist(lvlData[lvl - 1], lvl as 1);
  log(
    `  Lv ${String(lvl).padStart(2)}    ${r.input.toLocaleString().padEnd(14)} ${String(r.base).padEnd(12)} ${String(r.bonus).padEnd(10)} ${r.total.toLocaleString()}`,
  );
}
log('');

log('Prospector (max daily ore)');
const ore = calc.helpers().prospector(1);
log(`  Shiny Ore: ${ore.shinyOre.toLocaleString()}`);
log(`  Glowy Ore: ${ore.glowyOre.toLocaleString()}`);
log(`  Starry Ore: ${ore.starryOre.toLocaleString()}`);

writeOutput(__dirname);
