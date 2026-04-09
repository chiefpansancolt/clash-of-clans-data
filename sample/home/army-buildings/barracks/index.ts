import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const b = home().armyBuildings().barracks().first()!;

log('=== barracks() ===');
log(`id:       ${b.id}`);
log(`name:     ${b.name}`);
log(`base:     ${b.base}`);
log(`category: ${b.category}`);
log(`size:     ${b.size}`);
log(`levels:   ${b.levels.length}`);
log('');

log('Level  HP     Unlocked Unit     Build Cost      Build Time    XP    TH');
b.levels.forEach((l) => {
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
  const unit = l.unlockedUnit.padEnd(17);
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(4)}  ${unit}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
b.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
