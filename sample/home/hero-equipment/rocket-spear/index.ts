import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().rocketSpear().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  ability: range=${e.ability?.['attackRange']} aoeRadius=${e.ability?.['areaDamageRadius']}`);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: DmgPerShot:${lvl.stats['damagePerShotIncrease']} Attacks:${lvl.stats['numberOfAttacks']} ` +
      `DPS+${lvl.stats['dpsIncrease']} HP+${lvl.hitpointIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} Starry:${lvl.upgradeStarryOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
