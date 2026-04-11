import { builder } from '../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../helper';

const { log, writeOutput } = createLogger();

const bh = builder().builderHall().first()!;

log('=== builderHall() [Builder Base] ===');
log(`id:                          ${bh.id}`);
log(`name:                        ${bh.name}`);
log(`base:                        ${bh.base}`);
log(`category:                    ${bh.category}`);
log(`size:                        ${bh.size}`);
log('');

log('--- Builder Hall Levels ---');
log('Lv  HP     Build Cost      Build Time  XP   MaxBuildings');
for (const lvl of bh.levels) {
  const cost = lvl.buildCost > 0 ? lvl.buildCost.toLocaleString() : 'N/A';
  const time = lvl.buildCost > 0 ? formatBuildTime(lvl.buildTime) : 'N/A';
  const xp = lvl.xpGained > 0 ? String(lvl.xpGained) : 'N/A';
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(13)}  ${time.padEnd(10)}  ${xp.padStart(4)}  ${lvl.maxBuildings}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of bh.levels) {
  images.check(`level-${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
