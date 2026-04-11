import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const roaster = builder().defenses().roaster().first()!;

log('=== roaster() [Builder Base] ===');
log(`id:       ${roaster.id}`);
log(`name:     ${roaster.name}`);
log(`base:     ${roaster.base}`);
log(`category: ${roaster.category}`);
log(`size:     ${roaster.size}`);
log(`target:   ${roaster.targetType}`);
log('');

log('--- Mode ---');
log('normal:', roaster.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of roaster.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of roaster.levels) {
  const s = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(s.dps).padStart(3)} | dmg/shot: ${String(s.damagePerShot).padStart(2)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of roaster.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
