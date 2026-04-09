import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const r = home().craftedDefenses().roaster().first()!;

log('=== roaster() ===');
log(`id:            ${r.id}`);
log(`name:          ${r.name}`);
log(`base:          ${r.base}`);
log(`category:      ${r.category}`);
log(`size:          ${r.size}`);
log(`craftingPhase: ${r.craftingPhase}`);
log(`isCurrent:     ${r.isCurrent}`);
log(`targetType:    ${r.targetType}`);
log('');

r.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('=== home().craftedDefenses() context ===');
log(`Phase 3 count: ${home().craftedDefenses().byPhase(3).count()}`);
log(`current() count: ${home().craftedDefenses().current().count()}`);
log('');

log('--- Image Validation ---');
const images = createImageCounter();
r.images.forEach((img) => {
  images.check(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal);
});
log(images.report());

writeOutput(__dirname);
