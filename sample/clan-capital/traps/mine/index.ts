import { clanCapital } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const t = clanCapital().traps().mine().first()!;

log('=== mine() [Clan Capital] ===');
log(`id:                          ${t.id}`);
log(`name:                        ${t.name}`);
log(`base:                        ${t.base}`);
log(`category:                    ${t.category}`);
log(`targetType:                  ${t.targetType}`);
log(`size:                        ${t.size}`);
log(`triggerRadius:               ${t.triggerRadius} tiles`);
log(`damageRadius:                ${t.damageRadius} tiles`);
log(`damageType:                  ${t.damageType}`);
log('');

log('--- Mine Levels ---');
log('Lv  Damage  Build Cost  CH  DH');
for (const lvl of t.levels) {
  const cost = lvl.buildCost.toLocaleString();
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.damage).padStart(6)}  ${cost.padStart(10)}   ${lvl.capitalHallRequired}   ${lvl.districtHallRequired}`,
  );
}
log('');

log('--- Availability per Capital Hall ---');
log('CH  Count');
for (const entry of t.availablePerCapitalHall ?? []) {
  log(`${String(entry.capitalHallLevel).padStart(2)}  ${entry.count}`);
}
log('');

log('--- Availability per District ---');
const districtLabel: Record<string, string> = {
  barbarianCamp: 'Barbarian Camp',
  wizardValley: 'Wizard Valley',
  balloonLagoon: 'Balloon Lagoon',
  buildersWorkshop: "Builder's Workshop",
  dragonCliffs: 'Dragon Cliffs',
  golemQuarry: 'Golem Quarry',
  skeletonPark: 'Skeleton Park',
  goblinMines: 'Goblin Mines',
};
for (const entry of t.availablePerDistrict) {
  const name = districtLabel[entry.district] ?? entry.district;
  const counts = entry.countPerDistrictHall.map((count, i) => `DH${i + 1}:${count}`).join('  ');
  log(`${name.padEnd(20)}  ${counts}`);
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of t.levels) {
  images.check(`level-${lvl.level} normal`, lvl.images.normal);
  if (lvl.images.air) {
    images.check(`level-${lvl.level} air`, lvl.images.air);
  }
}
log(images.report());

writeOutput(__dirname);
