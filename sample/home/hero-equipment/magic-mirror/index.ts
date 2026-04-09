import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../../../src';

const lines: string[] = [];

const e = home().heroEquipment().magicMirror().first()!;
lines.push(`${e.name} (${e.id})`);
lines.push(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
lines.push(`  levels: ${e.levels.length}`);
lines.push(`  ability.invisibilityDuration: ${e.ability?.['invisibilityDuration']}`);
lines.push('');

lines.push('Level stats:');
for (const lvl of e.levels) {
  lines.push(
    `  ${lvl.level}: Clones:${lvl.stats['clones']} Duration:${lvl.stats['cloneDuration']} ` +
      `CloneDPS:${lvl.stats['cloneDps']} CloneHP:${lvl.stats['cloneHealth']} ` +
      `HPRec+${lvl.hpRecoveryIncrease} HP+${lvl.hitpointIncrease} ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} Starry:${lvl.upgradeStarryOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

const output = lines.join('\n');
console.log(output);

fs.writeFileSync(path.join(__dirname, 'output.txt'), output + '\n');
