import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const db = home().armyBuildings().darkBarracks().first()!;

log('=== darkBarracks() ===');
log(`id:       ${db.id}`);
log(`name:     ${db.name}`);
log(`base:     ${db.base}`);
log(`category: ${db.category}`);
log(`size:     ${db.size}`);
log(`levels:   ${db.levels.length}`);
log('');

log('Level  HP     Unlocked Unit        Build Cost      Build Time    XP    TH');
db.levels.forEach((l) => {
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
  const unit = l.unlockedUnit.padEnd(20);
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(4)}  ${unit}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
db.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
