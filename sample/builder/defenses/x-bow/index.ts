import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const xb = builder().defenses().xBow().first()!;

log('=== xBow() [Builder Base] ===');
log(`id:       ${xb.id}`);
log(`name:     ${xb.name}`);
log(`base:     ${xb.base}`);
log(`category: ${xb.category}`);
log(`size:     ${xb.size}`);
log(`target:   ${xb.targetType}`);
log('');

log('--- Mode ---');
log('normal:', xb.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of xb.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of xb.levels) {
  const s = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(s.dps).padStart(4)} | dmg/shot: ${String(s.damagePerShot).padStart(6)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of xb.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
