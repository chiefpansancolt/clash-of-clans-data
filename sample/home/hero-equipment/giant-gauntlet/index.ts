import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().giantGauntlet().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  levels: ${e.levels.length} | areaDamageRadius: ${e.ability!['areaDamageRadius']} tiles`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: ${lvl.stats['abilityDuration']} ${lvl.stats['incomingDamageReduction']} reduction ` +
      `DPS+${lvl.stats['dpsIncrease']} Heal:${lvl.stats['selfHealingPerSecond']}/s ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} Starry:${lvl.upgradeStarryOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
