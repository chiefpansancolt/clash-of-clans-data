import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ht = home().craftedDefenses().hookTower().first()!;

log('=== hookTower() ===');
log(`id:            ${ht.id}`);
log(`name:          ${ht.name}`);
log(`craftingPhase: ${ht.craftingPhase}`);
log(`isCurrent:     ${ht.isCurrent}`);
log(`targetType:    ${ht.targetType}`);
log('');

ht.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
ht.images.forEach((img) => {
  images.check(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal);
});
log(images.report());

writeOutput(__dirname);
