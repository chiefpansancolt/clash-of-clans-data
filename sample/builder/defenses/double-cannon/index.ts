import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const dc = builder().defenses().doubleCannon().first()!;

log('=== doubleCannon() [Builder Base] ===');
log(`id:       ${dc.id}`);
log(`name:     ${dc.name}`);
log(`base:     ${dc.base}`);
log(`category: ${dc.category}`);
log(`size:     ${dc.size}`);
log(`target:   ${dc.targetType}`);
log('');

log('--- Mode ---');
log('normal:', dc.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of dc.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of dc.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)} | xp: ${String(lvl.xpGained).padStart(3)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of dc.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
