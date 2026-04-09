import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ph = home().armyBuildings().petHouse().first()!;

log('=== petHouse() ===');
log(`id:       ${ph.id}`);
log(`name:     ${ph.name}`);
log(`base:     ${ph.base}`);
log(`category: ${ph.category}`);
log(`size:     ${ph.size}`);
log(`levels:   ${ph.levels.length}`);
log('');

log('Level  HP     Build Cost       Build Time    XP    TH  Unlocked Pet');
ph.levels.forEach((l) => {
  const bt = [
    l.buildTime.days ? `${l.buildTime.days}d` : '',
    l.buildTime.hours ? `${l.buildTime.hours}h` : '',
    l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
    l.buildTime.seconds ? `${l.buildTime.seconds}s` : '',
  ]
    .filter(Boolean)
    .join(' ')
    .padStart(10);
  const cost = l.buildCost.toLocaleString().padStart(14);
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(5)}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}  ${l.unlockedPet}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
ph.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
