import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const t = builder().troops().electrofireWizard().first()!;

log('=== electrofireWizard() [Builder Base] ===');
log(`id:                    ${t.id}`);
log(`name:                  ${t.name}`);
log(`base:                  ${t.base}`);
log(`category:              ${t.category}`);
log(`housingSpace:          ${t.housingSpace}`);
log(`movementSpeed:         ${t.movementSpeed}`);
log(`range:                 ${t.range}`);
log(`attackSpeed (fire):    ${t.attackSpeed}s`);
log(`damageType:            ${t.damageType}`);
log(`targetType:            ${t.targetType}`);
log(`specialAbility:        ${t.specialAbility}`);
log(`abilityCooldown:       ${t.abilityCooldown}s`);
log(`electroAttackSpeed:    ${t.electroAttackSpeed}s`);
log(`electroNumberOfTargets: ${t.electroNumberOfTargets}`);
log(`electroChainDamageDecay: ${t.electroChainDamageDecay}`);
log(`builderBarracksRequired: ${t.builderBarracksRequired}`);
log('');

log('--- Level Stats (Inferno Mode) ---');
for (const lvl of t.levels) {
  const research =
    lvl.researchCost === 0
      ? 'N/A'
      : `${lvl.researchCost.toLocaleString()} BE, ${formatBuildTime(lvl.researchTime)}`;
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | initDPS: ${lvl.infernoInitialDps} | @1.5s: ${lvl.infernoDpsAfter1_5s} | @3.0s: ${lvl.infernoDpsAfter3_0s} | SL${lvl.starLabRequired} | research: ${research}`,
  );
}
log('');

log('--- Level Stats (Electro Mode) ---');
for (const lvl of t.levels) {
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | dps: ${lvl.electroDps} | dph: ${lvl.electroDamagePerShot}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of t.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
  images.check(`lv${lvl.level} electroMode`, lvl.images.electroMode!);
}

log(images.report());

writeOutput(__dirname);
