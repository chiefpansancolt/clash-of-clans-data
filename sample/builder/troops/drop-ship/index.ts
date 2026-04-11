import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const t = builder().troops().dropShip().first()!;

log('=== dropShip() [Builder Base] ===');
log(`id:                   ${t.id}`);
log(`name:                 ${t.name}`);
log(`base:                 ${t.base}`);
log(`category:             ${t.category}`);
log(`housingSpace:         ${t.housingSpace}`);
log(`movementSpeed:        ${t.movementSpeed}`);
log(`range:                ${t.range}`);
log(`damageType:           ${t.damageType}`);
log(`targetType:           ${t.targetType}`);
log(`preferredTarget:      ${t.preferredTarget}`);
log(`specialAbility:       ${t.specialAbility}`);
log(`skeletonsSummoned:    ${t.skeletonsSummoned} (max ${t.skeletonsMax})`);
log(`skeletonSummonCooldown: ${t.skeletonSummonCooldown}s`);
log(`builderBarracksRequired: ${t.builderBarracksRequired}`);
log('');

log('--- Level Stats ---');
for (const lvl of t.levels) {
  const research =
    lvl.researchCost === 0
      ? 'N/A'
      : `${lvl.researchCost.toLocaleString()} BE, ${formatBuildTime(lvl.researchTime)}`;
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | death: ${lvl.deathDamage} | bombDmg: ${lvl.skeletonBombDamage} | bombSkeletons: ${lvl.skeletonBombSkeletons} | SL${lvl.starLabRequired} | research: ${research}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of t.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
