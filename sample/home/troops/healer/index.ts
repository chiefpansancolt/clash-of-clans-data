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

const h = home().troops().healer().first()!;

log('=== healer() ===');
log(`id:           ${h.id}`);
log(`name:         ${h.name}`);
log(`troopType:    ${h.troopType}`);
log(`targetType:   ${h.targetType}`);
log(`damageType:   ${h.damageType}`);
log(`housingSpace: ${h.housingSpace}`);
log(`movementSpeed:${h.movementSpeed}`);
log(`healSpeed:    ${h.attackSpeed}s`);
log(`range:        ${h.range}`);
log(`barracks lvl: ${h.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   HPS  HPP   HPS(Hero)  HPP(Hero)     HP   Research Cost       Research Time  Lab  TH');
for (const lvl of h.levels) {
  const rt =
    [
      lvl.researchTime.days ? `${lvl.researchTime.days}d` : '',
      lvl.researchTime.hours ? `${lvl.researchTime.hours}h` : '',
      lvl.researchTime.minutes ? `${lvl.researchTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.researchCost ? lvl.researchCost.toLocaleString() : 'N/A';
  const s = lvl.stats.normal;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(s.healingPerSecond).padStart(3)}  ${String(s.healingPerPulse).padStart(4)}  ${String(s.healingPerSecondOnHeroes).padStart(9)}  ${String(s.healingPerPulseOnHeroes).padStart(9)}  ${String(lvl.hitpoints).padStart(4)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', h.images.icon)) passed++;
else failed++;
for (const lvl of h.levels) {
  if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
