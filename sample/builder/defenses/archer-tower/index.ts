import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const at = builder().defenses().archerTower().first()!;

log('=== archerTower() [Builder Base] ===');
log(`id:       ${at.id}`);
log(`name:     ${at.name}`);
log(`base:     ${at.base}`);
log(`category: ${at.category}`);
log(`size:     ${at.size}`);
log(`target:   ${at.targetType}`);
log('');

log('--- Modes ---');
log('normal (long range):', at.modes.normal);
if (at.modes.fastAttack) log('fastAttack:', at.modes.fastAttack);
log('');

log('--- Available Per Builder Hall ---');
for (const a of at.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of at.levels) {
  const fa = lvl.stats.fastAttack ? ` | fa dps: ${lvl.stats.fastAttack.dps}` : '';
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | lr dps: ${String(lvl.stats.normal.dps).padStart(3)}${fa} | xp: ${String(lvl.xpGained).padStart(3)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of at.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
