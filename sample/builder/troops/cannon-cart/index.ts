import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const t = builder().troops().cannonCart().first()!;

log('=== cannonCart() [Builder Base] ===');
log(`id:           ${t.id}`);
log(`name:         ${t.name}`);
log(`base:         ${t.base}`);
log(`category:     ${t.category}`);
log(`housingSpace: ${t.housingSpace}`);
log(`specialAbility: ${t.specialAbility}`);
log('');
log('-- Cannon Mode --');
log(`movementSpeed:${t.movementSpeed}`);
log(`range:        ${t.range}`);
log(`attackSpeed:  ${t.attackSpeed}s`);
log(`damageType:   ${t.damageType}`);
log(`targetType:   ${t.targetType}`);
log('-- Mortar Mode --');
log(`movementSpeed:${t.mortarMovementSpeed}`);
log(`range:        ${t.mortarRange}`);
log(`attackSpeed:  ${t.mortarAttackSpeed}s`);
log(`damageType:   ${t.mortarDamageType}`);
log(`builderBarracksRequired: ${t.builderBarracksRequired}`);
log('');

log('--- Level Stats ---');
for (const lvl of t.levels) {
  const research =
    lvl.researchCost === 0
      ? 'N/A'
      : `${lvl.researchCost.toLocaleString()} BE, ${formatBuildTime(lvl.researchTime)}`;
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | cannon dps: ${lvl.dps} | mortar dps: ${lvl.mortarDps} | SL${lvl.starLabRequired} | research: ${research}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of t.levels) {
  images.check(`lv${lvl.level} cannon`, lvl.images.normal);
  images.check(`lv${lvl.level} mortar`, lvl.images.mortarMode!);
}

log(images.report());

writeOutput(__dirname);
