import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().monolithArrow().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  unlock: ${e.unlockRequirement.join(' | ')}`);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: Extra(<180):${lvl.stats['extraDamageBelow180']} Extra(181-250):${lvl.stats['extraDamage181To250']} ` +
      `Extra(251+):${lvl.stats['extraDamage251Plus']} DmgReduction:${lvl.stats['incomingDamageReduction']} ` +
      `HP+${lvl.hitpointIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} Starry:${lvl.upgradeStarryOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
