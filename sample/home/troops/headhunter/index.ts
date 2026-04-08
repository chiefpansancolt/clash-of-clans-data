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

const hh = home().troops().headhunter().first()!;

log('=== headhunter() ===');
log(`id:                   ${hh.id}`);
log(`name:                 ${hh.name}`);
log(`troopType:            ${hh.troopType}`);
log(`targetType:           ${hh.targetType}`);
log(`preferredTarget:      ${hh.preferredTarget}`);
log(`damageType:           ${hh.damageType}`);
log(`housingSpace:         ${hh.housingSpace}`);
log(`movementSpeed:        ${hh.movementSpeed}`);
log(`attackSpeed:          ${hh.attackSpeed}s`);
log(`range:                ${hh.range}`);
log(`barracks lvl:         ${hh.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log(
  'Lvl   DPS    DPH  DPSHero  PoisonDPS  SpeedDec  AttRateDec    HP  Research Cost    Research Time  Lab  TH',
);
for (const lvl of hh.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(n.dpsOnHeroes).padStart(7)}  ${String(lvl.poisonMaxDps).padStart(9)}  ${String(lvl.poisonSpeedDecrease + '%').padStart(8)}  ${String(lvl.poisonAttackRateDecrease + '%').padStart(10)}  ${String(lvl.hitpoints).padStart(4)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', hh.images.icon)) passed++;
else failed++;
for (const lvl of hh.levels) {
  if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
