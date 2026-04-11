import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const st = builder().traps().springTrap().first()!;

log('=== springTrap() [Builder Base] ===');
log(`id:             ${st.id}`);
log(`name:           ${st.name}`);
log(`base:           ${st.base}`);
log(`category:       ${st.category}`);
log(`size:           ${st.size}`);
log(`target:         ${st.targetType}`);
log(`triggerRadius:  ${st.triggerRadius}`);
log(`springCapacity: ${st.springCapacity}`);
log('');

log('--- Available Per Builder Hall ---');
for (const a of st.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of st.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | dmg: ${String(lvl.damage).padStart(3)} | dmg vs heroes: ${String(lvl.damageVsHeroes).padStart(5)} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of st.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
