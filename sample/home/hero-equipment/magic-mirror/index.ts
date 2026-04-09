import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().magicMirror().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  levels: ${e.levels.length}`);
log(`  ability.invisibilityDuration: ${e.ability?.['invisibilityDuration']}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: Clones:${lvl.stats['clones']} Duration:${lvl.stats['cloneDuration']} ` +
      `CloneDPS:${lvl.stats['cloneDps']} CloneHP:${lvl.stats['cloneHealth']} ` +
      `HPRec+${lvl.hpRecoveryIncrease} HP+${lvl.hitpointIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} Starry:${lvl.upgradeStarryOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
