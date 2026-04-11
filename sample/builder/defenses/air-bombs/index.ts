import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const ab = builder().defenses().airBombs().first()!;

log('=== airBombs() [Builder Base] ===');
log(`id:       ${ab.id}`);
log(`name:     ${ab.name}`);
log(`base:     ${ab.base}`);
log(`category: ${ab.category}`);
log(`size:     ${ab.size}`);
log(`target:   ${ab.targetType}`);
log('');

log('--- Mode ---');
log('normal:', ab.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of ab.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of ab.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of ab.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
