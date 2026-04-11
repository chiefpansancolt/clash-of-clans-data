import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const s = builder().armyBuildings().starLaboratory().first()!;

log('=== starLaboratory() [Builder Base] ===');
log(`id:       ${s.id}`);
log(`name:     ${s.name}`);
log(`base:     ${s.base}`);
log(`category: ${s.category}`);
log(`size:     ${s.size}`);
log('');

log('--- All Levels ---');
for (const lvl of s.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(4)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString().padStart(9)} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of s.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
