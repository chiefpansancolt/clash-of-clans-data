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

const rr = home().troops().rootRider().first()!;

log('=== rootRider() ===');
log(`id:               ${rr.id}`);
log(`name:             ${rr.name}`);
log(`troopType:        ${rr.troopType}`);
log(`targetType:       ${rr.targetType}`);
log(`damageType:       ${rr.damageType}`);
log(`housingSpace:     ${rr.housingSpace}`);
log(`movementSpeed:    ${rr.movementSpeed}`);
log(`attackSpeed:      ${rr.attackSpeed}s`);
log(`wallAttackSpeed:  ${rr.wallAttackSpeed}s`);
log(`range:            ${rr.range}`);
log(`barracks lvl:     ${rr.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH  WallDPS  WallDPH      HP   Research Cost       Research Time  Lab  TH');
for (const lvl of rr.levels) {
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
  const w = lvl.stats.wall!;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(w.dps).padStart(7)}  ${String(w.damagePerShot).padStart(7)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', rr.images.icon)) passed++;
else failed++;
for (const lvl of rr.levels) {
  if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
