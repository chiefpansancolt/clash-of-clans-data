import { clanCapital } from '../../../../src';
import { ClanCapitalArmyBuilding } from '../../../../src/types';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ac = clanCapital().armyBuildings().armyCamp().first()! as ClanCapitalArmyBuilding;

log('=== armyCamp() [Clan Capital] ===');
log(`id:                          ${ac.id}`);
log(`name:                        ${ac.name}`);
log(`base:                        ${ac.base}`);
log(`category:                    ${ac.category}`);
log(`size:                        ${ac.size}`);
log('');

log('--- Army Camp Levels ---');
log('Lv  Housing Space  HP    Build Cost  DH Req');
for (const lvl of ac.levels) {
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.housingSpace).padStart(13)}  ${String(lvl.hitpoints).padStart(4)}  ${lvl.buildCost.toLocaleString().padStart(10)}  ${String(lvl.districtHallRequired).padStart(6)}`,
  );
}
log('');

log('--- Available Per District ---');
for (const entry of ac.availablePerDistrict) {
  log(`  ${entry.district}: [${entry.countPerDistrictHall.join(', ')}]`);
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of ac.levels) {
  images.check(`level-${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
