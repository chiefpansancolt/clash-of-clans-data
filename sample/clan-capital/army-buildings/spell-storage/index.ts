import { clanCapital } from '../../../../src';
import { ClanCapitalSpellStorageBuilding } from '../../../../src/types';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ss = clanCapital().armyBuildings().spellStorage().first()! as ClanCapitalSpellStorageBuilding;

log('=== spellStorage() [Clan Capital] ===');
log(`id:                          ${ss.id}`);
log(`name:                        ${ss.name}`);
log(`base:                        ${ss.base}`);
log(`category:                    ${ss.category}`);
log(`size:                        ${ss.size}`);
log('');

log('--- Spell Storage Levels ---');
log('Lv  Spell Capacity  HP      Build Cost  DH Req');
for (const lvl of ss.levels) {
  const cost = lvl.buildCost > 0 ? lvl.buildCost.toLocaleString() : 'N/A';
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.spellCapacity).padStart(14)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(10)}  ${String(lvl.districtHallRequired).padStart(6)}`,
  );
}
log('');

log('--- Available Per District ---');
for (const entry of ss.availablePerDistrict) {
  log(`  ${entry.district}: [${entry.countPerDistrictHall.join(', ')}]`);
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of ss.levels) {
  images.check(`level-${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
