import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const bh = home().otherBuildings().bobsHut().first()!;

log('=== bobsHut() ===');
log(`id:       ${bh.id}`);
log(`name:     ${bh.name}`);
log(`base:     ${bh.base}`);
log(`category: ${bh.category}`);
log(`size:     ${bh.size}`);
log(`levels:   ${bh.levels.length}`);
log('');

log('Level  HP');
for (const l of bh.levels) {
  log(`  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(3)}`);
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const l of bh.levels) {
  images.check(`level ${l.level}`, l.images.normal);
}
log(images.report());

writeOutput(__dirname);
