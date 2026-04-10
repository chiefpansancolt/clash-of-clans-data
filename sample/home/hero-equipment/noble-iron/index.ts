import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().nobleIron().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: DmgPerShot:${lvl.stats['damagePerShotIncrease']} Range:${lvl.stats['attackRange']} ` +
      `Attacks:${lvl.stats['numberOfAttacks']} Speed+${lvl.stats['attackSpeedIncrease']}% ` +
      `HP+${lvl.hitpointIncrease} Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
