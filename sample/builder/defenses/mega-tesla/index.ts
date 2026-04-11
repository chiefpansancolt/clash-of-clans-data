import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const mt = builder().defenses().megaTesla().first()!;

log('=== megaTesla() [Builder Base] ===');
log(`id:       ${mt.id}`);
log(`name:     ${mt.name}`);
log(`base:     ${mt.base}`);
log(`category: ${mt.category}`);
log(`size:     ${mt.size}`);
log(`target:   ${mt.targetType}`);
log('');

log('--- Mode ---');
log('normal:', mt.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of mt.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of mt.levels) {
  const s = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(s.dps).padStart(3)} | dmg/shot: ${String(s.damagePerShot).padStart(3)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of mt.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
