import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const gm = home().resourceBuildings().goldMine().first()!;

log('=== goldMine() ===');
log(`id:       ${gm.id}`);
log(`name:     ${gm.name}`);
log(`base:     ${gm.base}`);
log(`category: ${gm.category}`);
log(`size:     ${gm.size}`);
log(`levels:   ${gm.levels.length}`);
log('');

log('Level  HP    Capacity        Prod/hr        Build Cost      Build Time    XP    TH');
gm.levels.forEach((l) => {
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
  const cap = l.capacity.toLocaleString().padStart(14);
  const prod =
    l.productionRate !== undefined
      ? l.productionRate.toLocaleString().padStart(13)
      : '          N/A';
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(4)}  ${cap}  ${prod}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Gold Mine Available per Town Hall ---');
log('TH  Count');
gm.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(3)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
gm.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
