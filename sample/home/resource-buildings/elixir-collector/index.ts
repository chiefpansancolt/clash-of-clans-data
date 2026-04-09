import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ec = home().resourceBuildings().elixirCollector().first()!;

log('=== elixirCollector() ===');
log(`id:       ${ec.id}`);
log(`name:     ${ec.name}`);
log(`base:     ${ec.base}`);
log(`category: ${ec.category}`);
log(`size:     ${ec.size}`);
log(`levels:   ${ec.levels.length}`);
log('');

log('Level  HP    Capacity        Prod/hr        Build Cost      Build Time    XP    TH');
ec.levels.forEach((l) => {
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

log('--- Elixir Collector Available per Town Hall ---');
log('TH  Count');
ec.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(3)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
ec.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
