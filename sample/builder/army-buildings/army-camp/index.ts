import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const a = builder().armyBuildings().armyCamp().first()!;

log('=== armyCamp() [Builder Base] ===');
log(`id:       ${a.id}`);
log(`name:     ${a.name}`);
log(`base:     ${a.base}`);
log(`category: ${a.category}`);
log(`size:     ${a.size}`);
log('');

log('--- Available Per Builder Hall ---');
for (const e of a.availablePerBuilderHall) {
  log(`  BH${e.builderHallLevel}: ${e.count}`);
}
log('');

log('--- All Levels (Nth camp built) ---');
for (const lvl of a.levels) {
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString().padStart(9)} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of a.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
