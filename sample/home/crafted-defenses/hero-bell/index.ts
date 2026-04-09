import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const hb = home().craftedDefenses().heroBell().first()!;

log('=== heroBell() ===');
log(`id:            ${hb.id}`);
log(`name:          ${hb.name}`);
log(`craftingPhase: ${hb.craftingPhase}`);
log(`isCurrent:     ${hb.isCurrent}`);
log(`targetType:    ${hb.targetType}`);
log('');

hb.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
hb.images.forEach((img) => {
  images.check(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal);
});
log(images.report());

writeOutput(__dirname);
