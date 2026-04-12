import { clanCapital } from '../../../src';
import { createImageCounter, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const w = clanCapital().walls().wall().first()!;

log('=== wall() [Clan Capital] ===');
log(`id:                          ${w.id}`);
log(`name:                        ${w.name}`);
log(`base:                        ${w.base}`);
log(`category:                    ${w.category}`);
log(`size:                        ${w.size}`);
log('');

log('--- Wall Levels ---');
log('Lv  HP      Build Cost  CH Req  DH Req');
for (const lvl of w.levels) {
  const cost = lvl.buildCost > 0 ? lvl.buildCost.toLocaleString() : 'N/A';
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(10)}  ${String(lvl.capitalHallRequired).padStart(6)}  ${String(lvl.districtHallRequired).padStart(6)}`,
  );
}
log('');

log('--- Available Per Capital Hall ---');
for (const entry of w.availablePerCapitalHall) {
  log(`  CH${entry.capitalHallLevel}: ${entry.count}`);
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of w.levels) {
  images.check(`level-${lvl.level} normal`, lvl.images.normal);
  images.check(`level-${lvl.level} corner`, lvl.images.corner);
}
log(images.report());

writeOutput(__dirname);
