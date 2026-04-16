import { clanCapital } from '../../../../src';
import { ClanCapitalTroop } from '../../../../src/types';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const troops = clanCapital().troops().hogRaiders();

log('=== hogRaiders() [Clan Capital] ===');
log(`Total troop count: ${troops.count()}`);
log('');

const images = createImageCounter();

for (const t of troops.get() as ClanCapitalTroop[]) {
  log(`--- ${t.name} ---`);
  log(`id:              ${t.id}`);
  log(`unitName:        ${t.unitName}`);
  log(`damageType:      ${t.damageType}`);
  log(`targetType:      ${t.targetType}`);
  log(`housingSpace:    ${t.housingSpace}`);
  log(`movementSpeed:   ${t.movementSpeed}`);
  log(`range:           ${t.range}`);
  log(`preferredTarget: ${t.preferredTarget}`);
  log(`specialAbility:  ${t.specialAbility}`);
  log(`levels:          ${t.levels.length}`);
  images.check(`${t.id} icon`, t.images.icon);
  log('');

  log('  [Hog Glider levels]');
  log('  Lv   HP   DmgPerShot  DH Req');
  for (const lvl of t.levels) {
    log(
      `  ${String(lvl.level).padStart(2)}  ${String(lvl.hitpoints).padStart(3)}  ${String(lvl.stats.normal.damagePerShot).padStart(10)}  ${String(lvl.districtHallRequired).padStart(6)}`,
    );
    images.check(`${t.id} level-${lvl.level} normal`, lvl.images.normal);
  }
  log('');

  if (t.subUnits && t.subUnits.length > 0) {
    for (const sub of t.subUnits) {
      log(`  [${sub.name} — subUnit]`);
      log(`  damageType:    ${sub.damageType}`);
      log(`  targetType:    ${sub.targetType}`);
      log(`  movementSpeed: ${sub.movementSpeed}`);
      log(`  attackSpeed:   ${sub.attackSpeed}`);
      log(`  range:         ${sub.range}`);
      log(`  preferredTarget: ${sub.preferredTarget}`);
      log('');
      log('  Lv   HP     DPS  DmgPerShot');
      for (const lvl of sub.levels) {
        log(
          `  ${String(lvl.level).padStart(2)}  ${String(lvl.hitpoints).padStart(4)}  ${String(lvl.stats.normal.dps).padStart(4)}  ${String(lvl.stats.normal.damagePerShot).padStart(10)}`,
        );
        images.check(`${t.id} sub-unit ${sub.name} level-${lvl.level} normal`, lvl.images.normal);
      }
      log('');
    }
  }
}

log('--- Image Validation ---');
log(images.report());

writeOutput(__dirname);
