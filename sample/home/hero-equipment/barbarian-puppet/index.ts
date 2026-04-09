import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().barbarianPuppet().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: HP+${lvl.hitpointIncrease} Recovery+${lvl.hpRecoveryIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} ` +
      `Blacksmith:${lvl.blacksmithLevelRequired} ` +
      `Barbarians:${lvl.stats['summonedBarbarians']} Dmg:${lvl.stats['barbarianDamageIncrease']}`,
  );
}

writeOutput(__dirname);
