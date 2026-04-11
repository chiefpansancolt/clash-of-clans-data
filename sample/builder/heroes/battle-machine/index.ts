import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const h = builder().heroes().battleMachine().first()!;

log('=== battleMachine() [Builder Base] ===');
log(`id:                    ${h.id}`);
log(`name:                  ${h.name}`);
log(`base:                  ${h.base}`);
log(`category:              ${h.category}`);
log(`preferredTarget:       ${h.preferredTarget}`);
log(`attackType:            ${h.attackType}`);
log(`movementSpeed:         ${h.movementSpeed}`);
log(`attackSpeed:           ${h.attackSpeed}s`);
log(`range:                 ${h.range} tiles`);
log(`specialAbility:        ${h.specialAbility}`);
log('');

log('--- Hero Levels ---');
log('Lv  DPS   DPH    HP   AL  BH  Upgrade Cost    Upgrade Time');
for (const lvl of h.levels) {
  const cost = lvl.upgradeCost.toLocaleString();
  const time = formatBuildTime(lvl.upgradeTime);
  const al = lvl.abilityLevel === null ? 'N/A' : String(lvl.abilityLevel);
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.damagePerSecond).padStart(4)}  ${String(lvl.damagePerHit).padStart(5)}  ${String(lvl.hitpoints).padStart(5)}  ${al.padStart(3)}  ${lvl.builderHallLevelRequired}  ${cost.padStart(13)}  ${time}`,
  );
}
log('');

log('--- Electric Hammer Ability ---');
log(
  `Cooldown: ${h.ability!.cooldownPerChargeLevel}s per charge level | Duration: ${h.ability!.durationHits} hits`,
);
log('');
log('AL  CL1 DPS  CL1 HR  CL2 DPS  CL2 HR  CL2 Targets  CL3 DPS  CL3 HR  CL3 Targets');
for (const al of h.ability!.levels) {
  log(
    `${al.abilityLevel}   ${String(al.chargeLevel1.dps).padStart(7)}  ${String(al.chargeLevel1.healthRecovery).padStart(6)}  ${String(al.chargeLevel2.dps).padStart(7)}  ${String(al.chargeLevel2.healthRecovery).padStart(6)}  ${String(al.chargeLevel2.targets).padStart(10)}  ${String(al.chargeLevel3.dps).padStart(7)}  ${String(al.chargeLevel3.healthRecovery).padStart(6)}  ${String(al.chargeLevel3.targets).padStart(10)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', h.images.icon);
log(images.report());

writeOutput(__dirname);
