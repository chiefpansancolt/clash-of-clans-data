import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../../../src';

const ROOT = path.resolve(__dirname, '../../../..');

const lines: string[] = [];
const log = (...args: unknown[]) => {
  const line = args
    .map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)))
    .join(' ');
  lines.push(line);
  console.log(line);
};

function checkImage(label: string, imagePath: string): boolean {
  if (fs.existsSync(path.join(ROOT, imagePath))) return true;
  console.error(`  MISSING image for ${label}: ${imagePath}`);
  return false;
}

const d = home().troops().druid().first()!;

log('=== druid() ===');
log(`id:                   ${d.id}`);
log(`name:                 ${d.name}`);
log(`troopType:            ${d.troopType}`);
log(`targetType:           ${d.targetType}`);
log(`damageType:           ${d.damageType}`);
log(`housingSpace:         ${d.housingSpace}`);
log(`movementSpeed:        ${d.movementSpeed}`);
log(`attackSpeed:          ${d.attackSpeed}s`);
log(`range:                ${d.range}`);
log(`numberOfTargets:      ${d.numberOfTargets}`);
log(`evolveTime:           ${d.evolveTime}s`);
log(`specialAbility:       ${d.specialAbility}`);
log(`barracks lvl:         ${d.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl    HPS    HPH  HeroHPS    HP  Research Cost    Research Time  Lab  TH');
for (const lvl of d.levels) {
  const rt =
    [
      lvl.researchTime.days ? `${lvl.researchTime.days}d` : '',
      lvl.researchTime.hours ? `${lvl.researchTime.hours}h` : '',
      lvl.researchTime.minutes ? `${lvl.researchTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.researchCost ? lvl.researchCost.toLocaleString() : 'N/A';
  const n = lvl.stats.normal;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(n.healingPerSecond).padStart(4)}  ${String(n.healingPerPulse).padStart(4)}  ${String(n.healingPerSecondOnHeroes).padStart(7)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', d.images.icon)) passed++;
else failed++;
const uniquePaths = [...new Set(d.levels.map((l) => l.images.normal))];
for (const imgPath of uniquePaths) {
  const label = imgPath.split('/').pop()!;
  if (checkImage(label, imgPath)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
