import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const ht = builder().defenses().hiddenTesla().first()!;

log('=== hiddenTesla() [Builder Base] ===');
log(`id:       ${ht.id}`);
log(`name:     ${ht.name}`);
log(`base:     ${ht.base}`);
log(`category: ${ht.category}`);
log(`size:     ${ht.size}`);
log(`target:   ${ht.targetType}`);
log('');

log('--- Mode ---');
log('normal:', ht.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of ht.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of ht.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)} | xp: ${String(lvl.xpGained).padStart(3)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of ht.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
