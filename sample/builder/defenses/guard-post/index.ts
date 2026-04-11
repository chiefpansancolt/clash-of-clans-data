import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const gp = builder().defenses().guardPost().first()!;

log('=== guardPost() [Builder Base] ===');
log(`id:       ${gp.id}`);
log(`name:     ${gp.name}`);
log(`base:     ${gp.base}`);
log(`category: ${gp.category}`);
log(`size:     ${gp.size}`);
log(`target:   ${gp.targetType}`);
log('');

log('--- Defending Troops ---');
for (const t of gp.defendingTroops ?? []) {
  log(`  ${t.name}: ${t.count}`);
}
log('');

log('--- Available Per Builder Hall ---');
for (const a of gp.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of gp.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | troop lv: ${String(lvl.troopLevel).padStart(2)} | xp: ${String(lvl.xpGained).padStart(4)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of gp.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
