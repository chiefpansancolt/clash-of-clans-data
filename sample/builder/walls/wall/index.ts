import { builder } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const w = builder().walls().wall().first()!;

log('=== wall() [Builder Base] ===');
log(`id:       ${w.id}`);
log(`name:     ${w.name}`);
log(`base:     ${w.base}`);
log(`category: ${w.category}`);
log(`size:     ${w.size}`);
log('');

log('--- Available Per Builder Hall ---');
for (const a of w.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of w.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | cost: ${String(lvl.buildCost).padStart(9)} ${lvl.buildCostResource} | rings: ${lvl.wallRings} | bh${lvl.builderHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of w.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
