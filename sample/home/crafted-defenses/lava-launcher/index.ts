import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ll = home().craftedDefenses().lavaLauncher().first()!;

log('=== lavaLauncher() ===');
log(`id:            ${ll.id}`);
log(`name:          ${ll.name}`);
log(`base:          ${ll.base}`);
log(`category:      ${ll.category}`);
log(`size:          ${ll.size}`);
log(`craftingPhase: ${ll.craftingPhase}`);
log(`isCurrent:     ${ll.isCurrent}`);
log(`targetType:    ${ll.targetType}`);
log('');

ll.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
ll.images.forEach((img) => {
  images.check(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal);
});
log(images.report());

writeOutput(__dirname);
