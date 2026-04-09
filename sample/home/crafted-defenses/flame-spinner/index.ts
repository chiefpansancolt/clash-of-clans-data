import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const fs_ = home().craftedDefenses().flameSpinner().first()!;

log('=== flameSpinner() ===');
log(`id:            ${fs_.id}`);
log(`name:          ${fs_.name}`);
log(`craftingPhase: ${fs_.craftingPhase}`);
log(`isCurrent:     ${fs_.isCurrent}`);
log(`targetType:    ${fs_.targetType}`);
log('');

fs_.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
fs_.images.forEach((img) => {
  images.check(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal);
});
log(images.report());

writeOutput(__dirname);
