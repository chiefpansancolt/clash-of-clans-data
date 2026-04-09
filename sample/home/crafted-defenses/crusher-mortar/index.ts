import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const cm = home().craftedDefenses().crusherMortar().first()!;

log('=== crusherMortar() ===');
log(`id:            ${cm.id}`);
log(`name:          ${cm.name}`);
log(`craftingPhase: ${cm.craftingPhase}`);
log(`isCurrent:     ${cm.isCurrent}`);
log(`targetType:    ${cm.targetType}`);
log('');

cm.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
cm.images.forEach((img) => {
  images.check(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal);
});
log(images.report());

writeOutput(__dirname);
