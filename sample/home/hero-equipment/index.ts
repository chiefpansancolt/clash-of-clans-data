import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = home().heroEquipment().get();
log(`Total hero equipment: ${all.length}`);
log('');

log('All equipment:');
for (const e of all) {
  const maxLvl = e.levels[e.levels.length - 1];
  log(
    `  ${e.id} | ${e.name} | hero: ${e.hero} | rarity: ${e.rarity} | ` +
      `abilityType: ${e.abilityType} | levels: ${e.levels.length} | ` +
      `maxHP+: ${maxLvl.hitpointIncrease}`,
  );
}

log('');
log('byHero("barbarian-king"):');
for (const e of home().heroEquipment().byHero('barbarian-king').get()) {
  log(`  ${e.id}`);
}

log('');
log('byRarity("Common"):');
for (const e of home().heroEquipment().byRarity('Common').get()) {
  log(`  ${e.id}`);
}

log('');
log('byBlacksmith(3):');
for (const e of home().heroEquipment().byBlacksmith(3).get()) {
  log(`  ${e.id}`);
}

writeOutput(__dirname);
