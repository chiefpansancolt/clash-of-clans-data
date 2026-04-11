import { builder } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const b = builder().resourceBuildings().bobControl().first()!;

log('=== bobControl() [Builder Base] ===');
log(`id:       ${b.id}`);
log(`name:     ${b.name}`);
log(`base:     ${b.base}`);
log(`category: ${b.category}`);
log(`size:     ${b.size}`);
log('');

log('--- Available Per Builder Hall ---');
for (const a of b.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of b.levels) {
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | buildCost: ${lvl.buildCost.toLocaleString()} | bh${lvl.builderHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of b.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
