import { clanCapital } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const d = clanCapital().defenses().superGiantPost().first()!;

log('=== superGiantPost() [Clan Capital] ===');
log(`id:                          ${d.id}`);
log(`name:                        ${d.name}`);
log(`base:                        ${d.base}`);
log(`category:                    ${d.category}`);
log(`targetType:                  ${d.targetType}`);
log(`size:                        ${d.size}`);
log('');

log('--- Defending Troops ---');
for (const troop of d.defendingTroops ?? []) {
  log(`${troop.name.padEnd(20)}  ×${troop.count}`);
}
log('');

log('--- Super Giant Post Levels ---');
log('Lv  HP      Build Cost  CH  DH  TroopLv');
for (const lvl of d.levels) {
  const cost = lvl.buildCost.toLocaleString();
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.hitpoints).padStart(4)}  ${cost.padStart(10)}   ${lvl.capitalHallRequired}   ${lvl.districtHallRequired}       ${lvl.troopLevel}`,
  );
}
log('');

log('--- Availability per Capital Hall ---');
for (const entry of d.availablePerCapitalHall ?? []) {
  log(`CH${entry.capitalHallLevel}: ${entry.count}`);
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
for (const entry of d.availablePerDistrict) {
  const name = districtLabel[entry.district] ?? entry.district;
  const counts = entry.countPerDistrictHall.map((count, i) => `DH${i + 1}:${count}`).join('  ');
  log(`${name.padEnd(20)}  ${counts}`);
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of d.levels) {
  images.check(`level-${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
