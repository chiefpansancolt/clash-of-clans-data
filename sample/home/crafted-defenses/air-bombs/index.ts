import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ab = home().craftedDefenses().airBombs().first()!;

log('=== airBombs() ===');
log(`id:            ${ab.id}`);
log(`name:          ${ab.name}`);
log(`base:          ${ab.base}`);
log(`category:      ${ab.category}`);
log(`size:          ${ab.size}`);
log(`craftingPhase: ${ab.craftingPhase}`);
log(`isCurrent:     ${ab.isCurrent}`);
log(`targetType:    ${ab.targetType}`);
log('');

ab.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
ab.images.forEach((img) => {
  images.check(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal);
});
log(images.report());

writeOutput(__dirname);
