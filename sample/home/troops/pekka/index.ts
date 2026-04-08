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

const p = home().troops().pekka().first()!;

log('=== pekka() ===');
log(`id:           ${p.id}`);
log(`name:         ${p.name}`);
log(`troopType:    ${p.troopType}`);
log(`targetType:   ${p.targetType}`);
log(`damageType:   ${p.damageType}`);
log(`housingSpace: ${p.housingSpace}`);
log(`movementSpeed:${p.movementSpeed}`);
log(`attackSpeed:  ${p.attackSpeed}s`);
log(`range:        ${p.range}`);
log(`barracks lvl: ${p.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH      HP   Research Cost       Research Time  Lab  TH');
for (const lvl of p.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(s.dps).padStart(4)}  ${String(s.damagePerShot).padStart(6)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', p.images.icon)) passed++;
else failed++;
for (const lvl of p.levels) {
  if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
