import { clanCapital } from '../../../../src';
import { ClanCapitalBarracksBuilding } from '../../../../src/types';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const barracks = clanCapital().armyBuildings().barracks();

log('=== barracks() [Clan Capital] ===');
log(`Total barracks count: ${barracks.count()}`);
log('');

const images = createImageCounter();

for (const b of barracks.get() as ClanCapitalBarracksBuilding[]) {
  log(`--- ${b.name} ---`);
  log(`id:                ${b.id}`);
  log(`troopUnlocked:     ${b.troopUnlocked}`);
  log(`size:              ${b.size}`);
  log(`district:          ${b.availablePerDistrict.map((d) => d.district).join(', ')}`);
  log(`levels:            ${b.levels.length}`);
  log(`HP range:          ${b.levels[0].hitpoints} – ${b.levels[b.levels.length - 1].hitpoints}`);

  log('Lv  HP      Build Cost  DH Req');
  for (const lvl of b.levels) {
    const cost = lvl.buildCost > 0 ? lvl.buildCost.toLocaleString() : 'free';
    log(
      `${String(lvl.level).padStart(2)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(10)}  ${String(lvl.districtHallRequired).padStart(6)}`,
    );
    images.check(`${b.id} level-${lvl.level} normal`, lvl.images.normal);
  }
  log('');
}

log('--- Image Validation ---');
log(images.report());

writeOutput(__dirname);
