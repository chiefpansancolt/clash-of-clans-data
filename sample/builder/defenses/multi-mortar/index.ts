import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const mm = builder().defenses().multiMortar().first()!;

log('=== multiMortar() [Builder Base] ===');
log(`id:       ${mm.id}`);
log(`name:     ${mm.name}`);
log(`base:     ${mm.base}`);
log(`category: ${mm.category}`);
log(`size:     ${mm.size}`);
log(`target:   ${mm.targetType}`);
log('');

log('--- Mode ---');
log('normal:', mm.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of mm.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of mm.levels) {
  const s = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(s.dps).padStart(2)} | shots: ${s.shotsPerBurst} | gap: ${s.timeBetweenBursts}s | xp: ${String(lvl.xpGained).padStart(4)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of mm.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
