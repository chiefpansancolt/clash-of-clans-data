import { BuilderBarracksBuilding } from '../../../../src';
import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const b = builder().armyBuildings().builderBarracks().first()! as BuilderBarracksBuilding;

log('=== builderBarracks() [Builder Base] ===');
log(`id:       ${b.id}`);
log(`name:     ${b.name}`);
log(`base:     ${b.base}`);
log(`category: ${b.category}`);
log(`size:     ${b.size}`);
log('');

log('--- All Levels ---');
for (const lvl of b.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(4)} | unlocks: ${lvl.unlockedUnit.padEnd(20)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString().padStart(9)} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of b.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
