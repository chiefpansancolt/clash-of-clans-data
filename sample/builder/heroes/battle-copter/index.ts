import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const h = builder().heroes().battleCopter().first()!;

log('=== battleCopter() [Builder Base] ===');
log(`id:                          ${h.id}`);
log(`name:                        ${h.name}`);
log(`base:                        ${h.base}`);
log(`category:                    ${h.category}`);
log(`preferredTarget:             ${h.preferredTarget}`);
log(`attackType:                  ${h.attackType}`);
log(`movementSpeed:               ${h.movementSpeed}`);
log(`attackSpeed:                 ${h.attackSpeed}s`);
log(`range:                       ${h.range} tiles`);
log(`specialAbility:              ${h.specialAbility}`);
log('');

log('--- Hero Levels ---');
log('Lv  DPS     DPH    HP    AL  BH  Upgrade Cost    Upgrade Time');
for (const lvl of h.levels) {
  const cost = lvl.upgradeCost.toLocaleString();
  const time = formatBuildTime(lvl.upgradeTime);
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.damagePerSecond).padStart(4)}  ${String(lvl.damagePerHit).padStart(6)}  ${String(lvl.hitpoints).padStart(5)}  ${String(lvl.abilityLevel).padStart(2)}  ${lvl.builderHallLevelRequired}  ${cost.padStart(13)}  ${time}`,
  );
}
log('');

log('--- Bomb Rush Ability ---');
log(
  `Cooldown: ${h.ability!.cooldownPerChargeLevel}s per charge level | Movement speed: ${h.ability!.movementSpeedDuringAbility}`,
);
log('');
log('AL  CL1 Dmg  CL1 Radius  CL1 HR  CL2 Dmg  CL2 Radius  CL2 HR  CL3 Dmg  CL3 Radius  CL3 HR');
for (const al of h.ability!.levels) {
  log(
    `${al.abilityLevel}   ${String(al.chargeLevel1.damage).padStart(7)}  ${String(al.chargeLevel1.damageRadius).padStart(10)}  ${String(al.chargeLevel1.healthRecovery).padStart(6)}  ${String(al.chargeLevel2.damage).padStart(7)}  ${String(al.chargeLevel2.damageRadius).padStart(10)}  ${String(al.chargeLevel2.healthRecovery).padStart(6)}  ${String(al.chargeLevel3.damage).padStart(7)}  ${String(al.chargeLevel3.damageRadius).padStart(10)}  ${String(al.chargeLevel3.healthRecovery).padStart(6)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', h.images.icon);
log(images.report());

writeOutput(__dirname);
