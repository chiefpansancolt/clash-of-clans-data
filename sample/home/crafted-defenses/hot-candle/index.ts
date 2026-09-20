import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const hc = home().craftedDefenses().hotCandle().first()!;

log('=== hotCandle() ===');
log(`id:            ${hc.id}`);
log(`name:          ${hc.name}`);
log(`base:          ${hc.base}`);
log(`category:      ${hc.category}`);
log(`size:          ${hc.size}`);
log(`craftingPhase: ${hc.craftingPhase}`);
log(`isCurrent:     ${hc.isCurrent}`);
log(`targetType:    ${hc.targetType}`);
log(`stats:         ${JSON.stringify(hc.stats)}`);
log('');

hc.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
hc.images.forEach((img) => {
  images.check(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal);
});
log(images.report());

writeOutput(__dirname);
