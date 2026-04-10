import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().frostFlake().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  ability: slowDown=${e.ability?.['slowDown']}`);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: Damage:${lvl.stats['projectileDamage']} SlowDuration:${lvl.stats['slowDownDuration']} ` +
      `Targets:${lvl.stats['numberOfTargets']} HP+${lvl.hitpointIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} Starry:${lvl.upgradeStarryOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
