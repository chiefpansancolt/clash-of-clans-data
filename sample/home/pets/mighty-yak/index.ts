import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const p = home().pets().mightyYak().first()!;

log('=== mightyYak() ===');
log(`id:                       ${p.id}`);
log(`name:                     ${p.name}`);
log(`category:                 ${p.category}`);
log(`targetType:               ${p.targetType}`);
log(`preferredTarget:          ${p.preferredTarget}`);
log(`attackType:               ${p.attackType}`);
log(`movementSpeed:            ${p.movementSpeed}`);
log(`attackSpeed:              ${p.attackSpeed}s`);
log(`range:                    ${p.range} tiles`);
log(`petHouseLevelReq:         ${p.petHouseLevelRequired}`);
log(`specialAbility:           ${p.specialAbility}`);
log(`rageDuration:             ${p.rageDuration}s`);
log(`rageSpeedIncrease:        ${p.rageSpeedIncrease}`);
log(`rageDamageIncreasePercent:${p.rageDamageIncreasePercent}%`);
log('');

log('--- All Levels ---');
log('Lvl  DPS    DPH  WallDmg      HP  Upgrade Cost  Upgrade Time  PH  TH');
for (const lvl of p.levels) {
  const ut =
    [
      lvl.upgradeTime.days ? `${lvl.upgradeTime.days}d` : '',
      lvl.upgradeTime.hours ? `${lvl.upgradeTime.hours}h` : '',
      lvl.upgradeTime.minutes ? `${lvl.upgradeTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.upgradeCost ? lvl.upgradeCost.toLocaleString() : 'N/A';
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.damagePerSecond).padStart(3)}  ${String(lvl.damagePerHit).padStart(5)}  ${String(lvl.damageVsWalls).padStart(7)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(12)}  ${ut.padStart(12)}   ${lvl.petHouseLevelRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', p.images.icon);
images.check('normal', p.images.normal);
log(images.report());

writeOutput(__dirname);
