import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const hb = home().armyBuildings().heroBanner().first()!;

log('=== heroBanner() ===');
log(`id:          ${hb.id}`);
log(`name:        ${hb.name}`);
log(`base:        ${hb.base}`);
log(`category:    ${hb.category}`);
log(`size:        ${hb.size}`);
log(`description: ${hb.description}`);
log('');

log('Available per Town Hall:');
hb.availablePerTownHall.forEach((e) => {
  log(`  TH${String(e.townHallLevel).padStart(2)}: ${e.count}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
const variants = Object.entries(hb.images) as [string, string][];
for (const [variant, imgPath] of variants) {
  images.check(variant, imgPath);
}
log(images.report());

writeOutput(__dirname);
