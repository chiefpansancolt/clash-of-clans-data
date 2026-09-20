import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const hh = home().craftedDefenses().heroHunter().first()!;

log('=== heroHunter() ===');
log(`id:            ${hh.id}`);
log(`name:          ${hh.name}`);
log(`base:          ${hh.base}`);
log(`category:      ${hh.category}`);
log(`size:          ${hh.size}`);
log(`craftingPhase: ${hh.craftingPhase}`);
log(`isCurrent:     ${hh.isCurrent}`);
log(`targetType:    ${hh.targetType}`);
log(`stats:         ${JSON.stringify(hh.stats)}`);
log('');

hh.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
hh.images.forEach((img) => {
  images.check(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal);
});
log(images.report());

writeOutput(__dirname);
