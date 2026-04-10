import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().hogRiderPuppet().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: HogRiders:${lvl.stats['summonedHogRiders']} HogLvl:${lvl.stats['hogRiderLevel']} ` +
      `HP+${lvl.hitpointIncrease} HpRec+${lvl.hpRecoveryIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
