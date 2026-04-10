import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().henchmenPuppet().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  levels: ${e.levels.length}`);
log(`  ability.henchmenCount: ${e.ability?.['henchmenCount']}`);
log(`  ability.invisibilityDuration: ${e.ability?.['invisibilityDuration']}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: HenchmenLvl:${lvl.stats['henchmenLevel']} DPS+${lvl.stats['dpsIncrease']} ` +
      `HP+${lvl.hitpointIncrease} HPRecovery+${lvl.hpRecoveryIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
