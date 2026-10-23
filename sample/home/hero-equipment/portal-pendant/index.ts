import { home } from '../../../../src';
import { createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const e = home().heroEquipment().portalPendant().first()!;
log(`${e.name} (${e.id})`);
log(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
log(`  ability: redeploySpeedIncrease=${e.ability?.['redeploySpeedIncrease']}`);
log(`  levels: ${e.levels.length}`);
log('');

log('Level stats:');
for (const lvl of e.levels) {
  log(
    `  ${lvl.level}: Radius:${lvl.stats['portalTileRadius']} Heal:${lvl.stats['healingOnRedeploy']} ` +
      `Haste:${lvl.stats['hasteOnRedeploy']} Capacity:${lvl.stats['recallCapacity']} ` +
      `HP+${lvl.hitpointIncrease} HPRecovery+${lvl.hpRecoveryIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} Starry:${lvl.upgradeStarryOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

writeOutput(__dirname);
