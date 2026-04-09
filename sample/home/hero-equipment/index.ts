import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../../src';

const lines: string[] = [];

const all = home().heroEquipment().get();
lines.push(`Total hero equipment: ${all.length}`);
lines.push('');

lines.push('All equipment:');
for (const e of all) {
  const maxLvl = e.levels[e.levels.length - 1];
  lines.push(
    `  ${e.id} | ${e.name} | hero: ${e.hero} | rarity: ${e.rarity} | ` +
      `abilityType: ${e.abilityType} | levels: ${e.levels.length} | ` +
      `maxHP+: ${maxLvl.hitpointIncrease}`,
  );
}

lines.push('');
lines.push('byHero("barbarian-king"):');
for (const e of home().heroEquipment().byHero('barbarian-king').get()) {
  lines.push(`  ${e.id}`);
}

lines.push('');
lines.push('byRarity("Common"):');
for (const e of home().heroEquipment().byRarity('Common').get()) {
  lines.push(`  ${e.id}`);
}

lines.push('');
lines.push('byBlacksmith(3):');
for (const e of home().heroEquipment().byBlacksmith(3).get()) {
  lines.push(`  ${e.id}`);
}

const output = lines.join('\n');
console.log(output);

fs.writeFileSync(path.join(__dirname, 'output.txt'), output + '\n');
