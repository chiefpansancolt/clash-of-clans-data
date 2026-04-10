import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().hasteVial().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: Dur:${lvl.stats['abilityDuration']} Speed:${lvl.stats['speedIncrease']} ` +
      `AbilityAtkSpd:${lvl.stats['abilityAttackSpeedIncrease']} DPS+${lvl.stats['dpsIncrease']} ` +
      `HeroAtkSpd:${lvl.stats['attackSpeedIncrease']} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
