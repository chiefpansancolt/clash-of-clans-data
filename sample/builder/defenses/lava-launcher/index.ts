import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const ll = builder().defenses().lavaLauncher().first()!;

log('=== lavaLauncher() [Builder Base] ===');
log(`id:       ${ll.id}`);
log(`name:     ${ll.name}`);
log(`base:     ${ll.base}`);
log(`category: ${ll.category}`);
log(`size:     ${ll.size}`);
log(`target:   ${ll.targetType}`);
log('');

log('--- Mode ---');
log('normal:', ll.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of ll.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of ll.levels) {
  const s = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(s.dps).padStart(4)} | burn dps: ${String(s.burnDps).padStart(4)} | total burn: ${String(s.totalBurnDamage).padStart(3)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of ll.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
