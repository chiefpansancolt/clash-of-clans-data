import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().earthquakeBoots().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: HP+${lvl.hitpointIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} ` +
      `Blacksmith:${lvl.blacksmithLevelRequired} ` +
      `Building:${lvl.stats['buildingDamagePercent']} Troop:${lvl.stats['troopDamagePercent']} DPS+${lvl.stats['dpsIncrease']}`,
  );
}

writeOutput(__dirname);
