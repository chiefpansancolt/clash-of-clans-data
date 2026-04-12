import { clanCapital } from '../../../../../src';
import { ClanCapitalHouse } from '../../../../../src/types';
import { createImageCounter, createLogger } from '../../../../helper';

const { log, writeOutput } = createLogger();

const h = clanCapital().other().houses().goblinHall().first()! as ClanCapitalHouse;

log('=== goblinHall() [Clan Capital] ===');
log(`id:       ${h.id}`);
log(`size:     ${h.size}`);
log(`HP:       ${h.levels[0].hitpoints}`);
log(`cost:     ${h.levels[0].buildCost.toLocaleString()} ${h.levels[0].buildCostResource}`);
log(`districts: ${h.availablePerDistrict.map((d) => d.district).join(', ')}`);

const images = createImageCounter();
for (const lvl of h.levels) {
  images.check(`${h.id} level-${lvl.level} normal`, lvl.images.normal);
  images.check(`${h.id} level-${lvl.level} ruin`, lvl.images.ruin);
}
log('');

log('--- Image Validation ---');
log(images.report());

writeOutput(__dirname);
