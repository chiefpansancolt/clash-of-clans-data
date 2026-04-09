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

const m = home().siegeMachines().wallWrecker().first()!;

log('=== wallWrecker() ===');
log(`id:                   ${m.id}`);
log(`name:                 ${m.name}`);
log(`category:             ${m.category}`);
log(`housingSpace:         ${m.housingSpace}`);
log(`workshopLevelReq:     ${m.workshopLevelRequired}`);
log(`preferredTarget:      ${m.preferredTarget}`);
log(`attackType:           ${m.attackType}`);
log(`movementSpeed:        ${m.movementSpeed}`);
log(`attackSpeed:          ${m.attackSpeed}s`);
log('');

log('--- All Levels ---');
log('Lvl   DPS  DPH  vsWalls     HP  Research Cost  Research Time  Lab  TH');
for (const lvl of m.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.damagePerSecond).padStart(5)}  ${String(lvl.damagePerHit).padStart(5)}  ${String(lvl.damageVsWalls).padStart(7)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', m.images.icon)) passed++;
else failed++;
for (const lvl of m.levels) {
  if (checkImage(`level-${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
