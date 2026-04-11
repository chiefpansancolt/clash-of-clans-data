import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const m = builder().traps().mine().first()!;

log('=== mine() [Builder Base] ===');
log(`id:             ${m.id}`);
log(`name:           ${m.name}`);
log(`base:           ${m.base}`);
log(`category:       ${m.category}`);
log(`size:           ${m.size}`);
log(`target:         ${m.targetType}`);
log(`triggerRadius:  ${m.triggerRadius}`);
log(`damageRadius:   ${m.damageRadius}`);
log('');

log('--- Available Per Builder Hall ---');
for (const a of m.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of m.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | dmg: ${String(lvl.damage).padStart(3)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of m.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
  images.check(`lv${String(lvl.level).padStart(2)} air   `, lvl.images.air!);
}

log(images.report());

writeOutput(__dirname);
