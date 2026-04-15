import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const a = builder().armyBuildings().reinforcementCamp().first()!;

log('=== reinforcementCamp() [Builder Base] ===');
log(`id:       ${a.id}`);
log(`name:     ${a.name}`);
log(`base:     ${a.base}`);
log(`category: ${a.category}`);
log(`size:     ${a.size}`);
log('');

log('--- Available Per Builder Hall ---');
for (const e of a.availablePerBuilderHall) {
  log(`  BH${e.builderHallLevel}: ${e.count}`);
}
log('');

log('--- Level Stats (building has 1 level — never upgrades) ---');
for (const lvl of a.levels) {
  log(`lv${lvl.level} | hp: ${lvl.hitpoints}`);
}
log('');

log('--- Instances (each copy built separately) ---');
for (const inst of a.instances) {
  log(
    `instance ${inst.instance} | bh${inst.builderHallRequired} | cost: ${inst.buildCost.toLocaleString()} ${inst.buildCostResource} | time: ${formatBuildTime(inst.buildTime)} | xp: ${inst.xpGained}`,
  );
}
log('');

log('--- byBuilderHall(6) ---');
const atBH6 = builder().armyBuildings().reinforcementCamp().byBuilderHall(6).first()!;
log(`instances: ${atBH6.instances.length}`);
log('');

log('--- byBuilderHall(9) ---');
const atBH9 = builder().armyBuildings().reinforcementCamp().byBuilderHall(9).first()!;
log(`instances: ${atBH9.instances.length}`);
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of a.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
