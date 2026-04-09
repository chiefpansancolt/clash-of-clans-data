import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const w = home().walls().wall().first()!;

log('=== wall() ===');
log(`id:       ${w.id}`);
log(`name:     ${w.name}`);
log(`size:     ${w.size}`);
log(`levels:   ${w.levels.length}`);
log('');
log('Level  HP        Gold       Elixir     Rings  TH');
w.levels.forEach((l) => {
  const goldCost = l.buildCost.toLocaleString().padStart(10);
  const acceptsElixir = l.buildCostResource === 'Gold or Elixir';
  const elixirCol = acceptsElixir ? l.buildCost.toLocaleString().padStart(10) : '       N/A';
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(6)}   ${goldCost} ${elixirCol}  ${String(l.wallRings).padStart(5)}   ${l.townHallRequired}`,
  );
});
log('');

log('--- Walls Available per Town Hall ---');
log('TH  Count');
w.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(3)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
w.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
