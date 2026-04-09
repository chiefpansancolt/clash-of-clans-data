import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const lab = home().armyBuildings().laboratory().first()!;

log('=== laboratory() ===');
log(`id:       ${lab.id}`);
log(`name:     ${lab.name}`);
log(`base:     ${lab.base}`);
log(`category: ${lab.category}`);
log(`size:     ${lab.size}`);
log(`levels:   ${lab.levels.length}`);
log('');

log('Level  HP     Build Cost      Build Time    XP     TH');
lab.levels.forEach((l) => {
  const bt =
    [
      l.buildTime.days ? `${l.buildTime.days}d` : '',
      l.buildTime.hours ? `${l.buildTime.hours}h` : '',
      l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
      l.buildTime.seconds ? `${l.buildTime.seconds}s` : '',
    ]
      .filter(Boolean)
      .join(' ')
      .padStart(10) || '   instant';
  const cost = l.buildCost.toLocaleString().padStart(13);
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(4)}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
lab.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
