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

const f = home().troops().furnace().first()!;

log('=== furnace() ===');
log(`id:                   ${f.id}`);
log(`name:                 ${f.name}`);
log(`troopType:            ${f.troopType}`);
log(`targetType:           ${f.targetType}`);
log(`damageType:           ${f.damageType}`);
log(`housingSpace:         ${f.housingSpace}`);
log(`movementSpeed:        ${f.movementSpeed} (cannot move)`);
log(`lifetime:             ${f.lifetime}s`);
log(`barracks lvl:         ${f.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl  Firemites     HP  Research Cost    Research Time  Lab  TH');
for (const lvl of f.levels) {
  const rt =
    [
      lvl.researchTime.days ? `${lvl.researchTime.days}d` : '',
      lvl.researchTime.hours ? `${lvl.researchTime.hours}h` : '',
      lvl.researchTime.minutes ? `${lvl.researchTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.researchCost ? lvl.researchCost.toLocaleString() : 'N/A';
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.firemitesSpawned).padStart(9)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', f.images.icon)) passed++;
else failed++;
for (const lvl of f.levels) {
  if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
