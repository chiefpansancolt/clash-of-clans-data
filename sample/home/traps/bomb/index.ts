import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const b = home().traps().bomb().first()!;

log('=== bomb() ===');
log(`id:             ${b.id}`);
log(`name:           ${b.name}`);
log(`size:           ${b.size}`);
log(`triggerRadius:  ${b.triggerRadius} tiles`);
log(`damageRadius:   ${b.damageRadius} tiles`);
log(`damageType:     ${b.damageType}`);
log(`targetType:     ${b.targetType}`);
log(`levels:         ${b.levels.length}`);
log('');
log('Level  Damage   Cost          Build Time   XP     TH');
b.levels.forEach((l) => {
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
b.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(2)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
b.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
