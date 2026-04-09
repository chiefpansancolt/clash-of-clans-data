import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ab = home().traps().airBomb().first()!;

log('=== airBomb() ===');
log(`id:             ${ab.id}`);
log(`name:           ${ab.name}`);
log(`size:           ${ab.size}`);
log(`triggerRadius:  ${ab.triggerRadius} tiles`);
log(`damageRadius:   ${ab.damageRadius} tiles`);
log(`damageType:     ${ab.damageType}`);
log(`targetType:     ${ab.targetType}`);
log(`levels:         ${ab.levels.length}`);
log('');
log('Level  Damage  Cost          Build Time   XP     TH');
ab.levels.forEach((l) => {
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
ab.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(2)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
ab.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
