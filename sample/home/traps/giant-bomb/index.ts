import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const gb = home().traps().giantBomb().first()!;

log('=== giantBomb() ===');
log(`id:             ${gb.id}`);
log(`name:           ${gb.name}`);
log(`size:           ${gb.size}`);
log(`triggerRadius:  ${gb.triggerRadius} tiles`);
log(`damageType:     ${gb.damageType}`);
log(`targetType:     ${gb.targetType}`);
log(`levels:         ${gb.levels.length}`);
log('');
log('Level  Damage  DmgRadius   Cost          Build Time   XP     TH');
gb.levels.forEach((l) => {
  const cost = l.buildCost.toLocaleString().padStart(12);
  const radius = String(l.damageRadius ?? '-').padStart(9);
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
    `  ${String(l.level).padStart(2)}   ${String(l.damage).padStart(6)} ${radius} ${cost}  ${bt}  ${String(l.xpGained).padStart(5)}   ${l.townHallRequired}`,
  );
});
log('');

log('--- Available per Town Hall ---');
log('TH  Count');
gb.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(2)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
gb.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
