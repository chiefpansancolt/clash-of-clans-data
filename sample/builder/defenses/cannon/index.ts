import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const c = builder().defenses().cannon().first()!;

log('=== cannon() [Builder Base] ===');
log(`id:       ${c.id}`);
log(`name:     ${c.name}`);
log(`base:     ${c.base}`);
log(`category: ${c.category}`);
log(`size:     ${c.size}`);
log(`target:   ${c.targetType}`);
log('');

log('--- Mode ---');
log('normal:', c.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of c.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of c.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)} | xp: ${String(lvl.xpGained).padStart(3)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of c.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
