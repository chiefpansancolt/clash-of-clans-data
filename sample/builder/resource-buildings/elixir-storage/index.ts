import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = builder().resourceBuildings().elixirStorage().first()!;

log('=== elixirStorage() [Builder Base] ===');
log(`id:       ${e.id}`);
log(`name:     ${e.name}`);
log(`base:     ${e.base}`);
log(`category: ${e.category}`);
log(`size:     ${e.size}`);
log('');

log('--- Available Per Builder Hall ---');
for (const a of e.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of e.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | cap: ${String(lvl.capacity).padStart(9)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of e.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
