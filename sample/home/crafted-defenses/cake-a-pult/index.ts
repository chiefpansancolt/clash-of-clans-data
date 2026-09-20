import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const cap = home().craftedDefenses().cakeAPult().first()!;

log('=== cakeAPult() ===');
log(`id:            ${cap.id}`);
log(`name:          ${cap.name}`);
log(`base:          ${cap.base}`);
log(`category:      ${cap.category}`);
log(`size:          ${cap.size}`);
log(`craftingPhase: ${cap.craftingPhase}`);
log(`isCurrent:     ${cap.isCurrent}`);
log(`targetType:    ${cap.targetType}`);
log(`stats:         ${JSON.stringify(cap.stats)}`);
log('');

cap.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
cap.images.forEach((img) => {
  images.check(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal);
});
log(images.report());

writeOutput(__dirname);
