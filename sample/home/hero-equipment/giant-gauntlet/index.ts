import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../../../src';

const lines: string[] = [];

const e = home().heroEquipment().giantGauntlet().first()!;
lines.push(`${e.name} (${e.id})`);
lines.push(`  hero: ${e.hero} | rarity: ${e.rarity} | abilityType: ${e.abilityType}`);
lines.push(
  `  levels: ${e.levels.length} | areaDamageRadius: ${e.ability!['areaDamageRadius']} tiles`,
);
lines.push('');

lines.push('Level stats:');
for (const lvl of e.levels) {
  lines.push(
    `  ${lvl.level}: ${lvl.stats['abilityDuration']} ${lvl.stats['incomingDamageReduction']} reduction ` +
      `DPS+${lvl.stats['dpsIncrease']} Heal:${lvl.stats['selfHealingPerSecond']}/s ` +
      `Shiny:${lvl.upgradeShinyOre} Glowy:${lvl.upgradeGlowingOre} Starry:${lvl.upgradeStarryOre} ` +
      `BS:${lvl.blacksmithLevelRequired}`,
  );
}

const output = lines.join('\n');
console.log(output);

fs.writeFileSync(path.join(__dirname, 'output.txt'), output + '\n');
