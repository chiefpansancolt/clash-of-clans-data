import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().electroBoots().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(
  `  ability: auraAttackSpeed=${e.ability?.['auraAttackSpeed']} auraRadius=${e.ability?.['auraRadius']}`,
);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: AuraDPS:${lvl.stats['auraDps']} DmgPerHit:${lvl.stats['auraDamagePerHit']} ` +
      `Healing:${lvl.stats['selfHealingPerSecond']}/s HP+${lvl.hitpointIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} Starry:${lvl.upgradeStarryOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
