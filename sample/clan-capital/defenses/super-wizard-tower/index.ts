import { clanCapital } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const d = clanCapital().defenses().superWizardTower().first()!;

log('=== superWizardTower() [Clan Capital] ===');
log(`id:                          ${d.id}`);
log(`name:                        ${d.name}`);
log(`base:                        ${d.base}`);
log(`category:                    ${d.category}`);
log(`targetType:                  ${d.targetType}`);
log(`size:                        ${d.size}`);
log(`range:                       ${d.modes.normal.range} tiles`);
log(`attackSpeed:                 ${d.modes.normal.attackSpeed}s`);
log(`damageType:                  ${d.modes.normal.damageType}`);
log(`maxChainTargets:             ${d.modes.normal.maxChainTargets}`);
log('');

log('--- Super Wizard Tower Levels ---');
log('Lv  DPS    DPH(P)  DPH(S)  HP     Build Cost  CH  DH');
for (const lvl of d.levels) {
  const cost = lvl.buildCost.toLocaleString();
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.stats.normal.dps).padStart(3)}    ${String(lvl.stats.normal.damagePerShot).padStart(5)}   ${String(lvl.stats.normal.secondaryChainDamagePerShot).padStart(4)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(10)}  ${lvl.capitalHallRequired}   ${lvl.districtHallRequired}`,
  );
}
log('');

log('--- Availability per Capital Hall ---');
log('CH  Count');
for (const entry of d.availablePerCapitalHall ?? []) {
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
