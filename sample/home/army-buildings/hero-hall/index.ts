import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const hh = home().armyBuildings().heroHall().first()!;

log('=== heroHall() ===');
log(`id:       ${hh.id}`);
log(`name:     ${hh.name}`);
log(`base:     ${hh.base}`);
log(`category: ${hh.category}`);
log(`size:     ${hh.size}`);
log(`levels:   ${hh.levels.length}`);
log('');

log('Level  HP     Slots  Unlocked Hero       Build Cost       Build Time    XP      TH');
hh.levels.forEach((l) => {
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
  const hero = (l.unlockedHero ?? '-').padEnd(20);
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(5)}  ${String(l.heroSlots).padStart(5)}  ${hero}  ${cost}  ${bt}  ${String(l.xpGained).padStart(5)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
hh.levels.forEach((l) => {
  images.check(`level ${l.level} normal`, l.images.normal);
  images.check(`level ${l.level} active`, l.images.active);
});
log(images.report());

writeOutput(__dirname);
