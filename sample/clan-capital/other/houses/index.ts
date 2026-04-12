import { clanCapital } from '../../../../src';
import { ClanCapitalHouse } from '../../../../src/types';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const houses = clanCapital().other().houses();

log('=== houses() [Clan Capital] ===');
log(`Total house count: ${houses.count()}`);
log('');

const images = createImageCounter();

for (const h of houses.get() as ClanCapitalHouse[]) {
  log(`--- ${h.name} ---`);
  log(`id:       ${h.id}`);
  log(`size:     ${h.size}`);
  log(`HP:       ${h.levels[0].hitpoints}`);
  log(`cost:     ${h.levels[0].buildCost.toLocaleString()} ${h.levels[0].buildCostResource}`);
  log(`districts: ${h.availablePerDistrict.map((d) => d.district).join(', ')}`);

  for (const lvl of h.levels) {
    images.check(`${h.id} level-${lvl.level} normal`, lvl.images.normal);
    images.check(`${h.id} level-${lvl.level} ruin`, lvl.images.ruin);
  }
  log('');
}

log('--- Image Validation ---');
log(images.report());

writeOutput(__dirname);
