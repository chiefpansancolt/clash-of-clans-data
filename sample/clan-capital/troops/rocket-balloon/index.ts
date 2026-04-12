import { clanCapital } from '../../../../src';
import { ClanCapitalTroop } from '../../../../src/types';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const troops = clanCapital().troops().rocketBalloon();

log('=== rocketBalloon() [Clan Capital] ===');
log(`Total troop count: ${troops.count()}`);
log('');

const images = createImageCounter();

for (const t of troops.get() as ClanCapitalTroop[]) {
  log(`--- ${t.name} ---`);
  log(`id:             ${t.id}`);
  log(`damageType:     ${t.damageType}`);
  log(`targetType:     ${t.targetType}`);
  log(`housingSpace:   ${t.housingSpace}`);
  log(`movementSpeed:  ${t.movementSpeed}`);
  log(`attackSpeed:    ${t.attackSpeed}`);
  log(`preferredTarget: ${t.preferredTarget}`);
  log(`specialAbility: ${t.specialAbility}`);
  log(`boostDuration:  ${t.boostDuration}`);
  log(`levels:         ${t.levels.length}`);
  images.check(`${t.id} icon`, t.images.icon);
  log('');

  log('Lv   HP   DPS  DmgPerShot  DeathDmg  DH Req');
  for (const lvl of t.levels) {
    log(
      `${String(lvl.level).padStart(2)}  ${String(lvl.hitpoints).padStart(4)}  ${String(lvl.stats.normal.dps).padStart(3)}  ${String(lvl.stats.normal.damagePerShot).padStart(10)}  ${String(lvl.deathDamage).padStart(8)}  ${String(lvl.districtHallRequired).padStart(6)}`,
    );
    images.check(`${t.id} level-${lvl.level} normal`, lvl.images.normal);
  }
  log('');
}

log('--- Image Validation ---');
log(images.report());

writeOutput(__dirname);
