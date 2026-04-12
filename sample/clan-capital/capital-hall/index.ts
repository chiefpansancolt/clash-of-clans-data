import { clanCapital } from '../../../src';
import { createImageCounter, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const ch = clanCapital().capitalHall().first()!;

log('=== capitalHall() [Clan Capital] ===');
log(`id:                          ${ch.id}`);
log(`name:                        ${ch.name}`);
log(`base:                        ${ch.base}`);
log(`category:                    ${ch.category}`);
log(`size:                        ${ch.size}`);
log('');

log('--- Weapon Mode ---');
log(`range:                       ${ch.weaponMode.range} tiles`);
log(`attackSpeed:                 ${ch.weaponMode.attackSpeed}s`);
log(`damageType:                  ${ch.weaponMode.damageType}`);
log(`targetType:                  ${ch.weaponMode.targetType}`);
log('');

log('--- Capital Hall Levels ---');
log('Lv  HP       Build Cost  CH Upgrades  New Upgrades  MaxBuildings  DPS   DPH');
for (const lvl of ch.levels) {
  const cost = lvl.buildCost > 0 ? lvl.buildCost.toLocaleString() : 'N/A';
  const chUpgrades =
    lvl.capitalUpgradesRequired != null ? String(lvl.capitalUpgradesRequired) : 'N/A';
  const newUpgrades =
    lvl.newCapitalUpgradesRequired != null ? String(lvl.newCapitalUpgradesRequired) : 'N/A';
  const dps = lvl.dps != null ? String(lvl.dps) : 'N/A';
  const dph = lvl.damagePerShot != null ? String(lvl.damagePerShot) : 'N/A';
  log(
    `${String(lvl.level).padStart(2)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(10)}  ${chUpgrades.padStart(11)}  ${newUpgrades.padStart(12)}  ${String(lvl.maxBuildings).padStart(12)}  ${dps.padStart(3)}  ${dph.padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of ch.levels) {
  images.check(`level-${lvl.level} normal`, lvl.images.normal);
  if (lvl.images.active) {
    images.check(`level-${lvl.level} active`, lvl.images.active);
  }
}
log(images.report());

writeOutput(__dirname);
