import { clanCapital } from '../../../../../src';
import { ClanCapitalSpellFactory } from '../../../../../src/types';
import { createImageCounter, createLogger } from '../../../../helper';

const { log, writeOutput } = createLogger();

const sf = clanCapital()
  .armyBuildings()
  .spellFactories()
  .healSpellFactory()
  .first()! as ClanCapitalSpellFactory;

log('=== healSpellFactory() [Clan Capital] ===');
log(`id:                ${sf.id}`);
log(`spellUnlocked:     ${sf.spellUnlocked}`);
log(`size:              ${sf.size}`);
log(`district:          ${sf.availablePerDistrict.map((d) => d.district).join(', ')}`);
log(`levels:            ${sf.levels.length}`);
log(`HP range:          ${sf.levels[0].hitpoints} – ${sf.levels[sf.levels.length - 1].hitpoints}`);
log('');

log('Lv  HP      Build Cost  DH Req');
const images = createImageCounter();
for (const lvl of sf.levels) {
  const cost = lvl.buildCost > 0 ? lvl.buildCost.toLocaleString() : 'free';
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(10)}  ${String(lvl.districtHallRequired).padStart(6)}`,
  );
  images.check(`${sf.id} level-${lvl.level} normal`, lvl.images.normal);
}
log('');

log('--- Image Validation ---');
log(images.report());

writeOutput(__dirname);
