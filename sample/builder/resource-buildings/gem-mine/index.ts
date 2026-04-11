import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const g = builder().resourceBuildings().gemMine().first()!;

log('=== gemMine() [Builder Base] ===');
log(`id:       ${g.id}`);
log(`name:     ${g.name}`);
log(`base:     ${g.base}`);
log(`category: ${g.category}`);
log(`size:     ${g.size}`);
log('');

log('--- Available Per Builder Hall ---');
for (const a of g.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of g.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(4)} | cap: ${String(lvl.capacity).padStart(2)} gems | rate: ${String(lvl.productionRate).padStart(4)}/day | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of g.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
