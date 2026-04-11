import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const pt = builder().traps().pushTrap().first()!;

log('=== pushTrap() [Builder Base] ===');
log(`id:             ${pt.id}`);
log(`name:           ${pt.name}`);
log(`base:           ${pt.base}`);
log(`category:       ${pt.category}`);
log(`size:           ${pt.size}`);
log(`target:         ${pt.targetType}`);
log(`triggerRadius:  ${pt.triggerRadius}`);
log(`aoeRadius:      ${pt.aoeRadius}`);
log(`pushDistance:   ${pt.pushDistance}`);
log('');

log('--- Available Per Builder Hall ---');
for (const a of pt.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of pt.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | capacity: ${String(lvl.springCapacity).padStart(2)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of pt.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
