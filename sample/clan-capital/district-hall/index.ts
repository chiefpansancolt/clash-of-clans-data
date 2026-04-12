import { clanCapital } from '../../../src';
import { createImageCounter, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const dh = clanCapital().districtHall().first()!;

log('=== districtHall() [Clan Capital] ===');
log(`id:                          ${dh.id}`);
log(`name:                        ${dh.name}`);
log(`base:                        ${dh.base}`);
log(`category:                    ${dh.category}`);
log(`size:                        ${dh.size}`);
log('');

log('--- District Hall Levels ---');
log('Lv  HP      Build Cost   BC  WV  BL  BW  DC  GQ  SP  GM');
for (const lvl of dh.levels) {
  const cost = lvl.buildCost > 0 ? lvl.buildCost.toLocaleString() : 'N/A';
  const req = lvl.capitalHallRequired;
  const sp = req.skeletonPark != null ? String(req.skeletonPark) : 'N/A';
  const gm = req.goblinMines != null ? String(req.goblinMines) : 'N/A';
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(10)}  ${String(req.barbarianCamp).padStart(2)}  ${String(req.wizardValley).padStart(2)}  ${String(req.balloonLagoon).padStart(2)}  ${String(req.buildersWorkshop).padStart(2)}  ${String(req.dragonCliffs).padStart(2)}  ${String(req.golemQuarry).padStart(2)}  ${sp.padStart(2)}  ${gm.padStart(2)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of dh.levels) {
  images.check(`level-${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
