import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const sam = home().traps().seekingAirMine().first()!;

log('=== seekingAirMine() ===');
log(`id:             ${sam.id}`);
log(`name:           ${sam.name}`);
log(`size:           ${sam.size}`);
log(`triggerRadius:  ${sam.triggerRadius} tiles`);
log(`damageType:     ${sam.damageType}`);
log(`targetType:     ${sam.targetType}`);
log(`levels:         ${sam.levels.length}`);
log('');
log('Level  Damage  Cost          Build Time   XP     TH');
sam.levels.forEach((l) => {
  const cost = l.buildCost.toLocaleString().padStart(12);
  const bt =
    [
      l.buildTime.days ? `${l.buildTime.days}d` : '',
      l.buildTime.hours ? `${l.buildTime.hours}h` : '',
      l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ')
      .padStart(10) || '   instant';
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.damage).padStart(6)} ${cost}  ${bt}  ${String(l.xpGained).padStart(5)}   ${l.townHallRequired}`,
  );
});
log('');

log('--- Available per Town Hall ---');
log('TH  Count');
sam.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(2)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
sam.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
