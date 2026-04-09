import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../../../src';

const lines: string[] = [];

const e = home().heroEquipment().invisibilityVial().first()!;
lines.push(`${e.name} (${e.id})`);
lines.push(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
lines.push(`  levels: ${e.levels.length}`);
lines.push('');

lines.push('Level stats:');
for (const lvl of e.levels) {
  lines.push(
    `  ${lvl.level}: ${lvl.stats['abilityDuration']} DmgPerShot+${lvl.stats['damagePerShotIncrease']} ` +
      `HP+${lvl.hitpointIncrease} Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

const output = lines.join('\n');
console.log(output);

fs.writeFileSync(path.join(__dirname, 'output.txt'), output + '\n');
