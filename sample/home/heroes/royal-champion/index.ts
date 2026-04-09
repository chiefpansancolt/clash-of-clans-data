import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const h = home().heroes().royalChampion().first()!;

log('=== royalChampion() ===');
log(`id:               ${h.id}`);
log(`name:             ${h.name}`);
log(`category:         ${h.category}`);
log(`base:             ${h.base}`);
log(`preferredTarget:  ${h.preferredTarget}`);
log(`attackType:       ${h.attackType}`);
log(`movementSpeed:    ${h.movementSpeed}`);
log(`attackSpeed:      ${h.attackSpeed}s`);
log(`range:            ${h.range} tile(s)`);
log(`searchRadius:     ${h.searchRadius} tiles`);
log(`specialAbility:   ${h.specialAbility}`);
log('');

log('--- All Levels ---');
log('Lvl  DPS   DPH    HP   Recovery  Upgrade Cost  Upgrade Time  HH');
for (const lvl of h.levels) {
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
    `  ${String(lvl.level).padStart(3)}  ${String(lvl.damagePerSecond).padStart(4)}  ${String(lvl.damagePerHit).padStart(6)}  ${String(lvl.hitpoints).padStart(6)}  ${String(lvl.healthRecovery).padStart(8)}  ${cost.padStart(12)}  ${ut.padStart(12)}   ${lvl.heroHallLevelRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', h.images.icon);
log(images.report());

writeOutput(__dirname);
