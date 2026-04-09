import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const dd = home().resourceBuildings().darkElixirDrill().first()!;

log('=== darkElixirDrill() ===');
log(`id:       ${dd.id}`);
log(`name:     ${dd.name}`);
log(`base:     ${dd.base}`);
log(`category: ${dd.category}`);
log(`size:     ${dd.size}`);
log(`levels:   ${dd.levels.length}`);
log('');

log('Level  HP    Capacity    Prod/hr    Build Cost      Build Time    XP    TH');
dd.levels.forEach((l) => {
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
  const cap = l.capacity.toLocaleString().padStart(8);
  const prod =
    l.productionRate !== undefined ? l.productionRate.toLocaleString().padStart(7) : '    N/A';
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(4)}  ${cap}  ${prod}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Dark Elixir Drill Available per Town Hall ---');
log('TH  Count');
dd.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(3)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
dd.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
