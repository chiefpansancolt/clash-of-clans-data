import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const gc = builder().defenses().giantCannon().first()!;

log('=== giantCannon() [Builder Base] ===');
log(`id:       ${gc.id}`);
log(`name:     ${gc.name}`);
log(`base:     ${gc.base}`);
log(`category: ${gc.category}`);
log(`size:     ${gc.size}`);
log(`target:   ${gc.targetType}`);
log('');

log('--- Mode ---');
log('normal:', gc.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of gc.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of gc.levels) {
  const s = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(s.dps).padStart(2)} | dmg/shot: ${String(s.damagePerShot).padStart(3)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of gc.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
