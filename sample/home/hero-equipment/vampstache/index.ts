import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().vampstache().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: HealPerHit:${lvl.stats['healPerHit']} ` +
      `DPS+${lvl.stats['dpsIncrease']} Speed:${lvl.stats['attackSpeedIncrease']} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} ` +
      `Blacksmith:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
