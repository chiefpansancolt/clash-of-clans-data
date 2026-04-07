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

const g = home().troops().giant().first()!;

log('=== giant() ===');
log(`id:           ${g.id}`);
log(`name:         ${g.name}`);
log(`troopType:    ${g.troopType}`);
log(`targetType:   ${g.targetType}`);
log(`damageType:   ${g.damageType}`);
log(`housingSpace: ${g.housingSpace}`);
log(`movementSpeed:${g.movementSpeed}`);
log(`attackSpeed:  ${g.attackSpeed}s`);
log(`range:        ${g.range}`);
log(`barracks lvl: ${g.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl  DPS  DPH  HP     Research Cost       Research Time  Lab  TH');
for (const lvl of g.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.stats.normal.dps).padStart(3)}  ${String(lvl.stats.normal.damagePerShot).padStart(3)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Super Troop: Super Giant ---');
const st = g.superTroop!;
log(`id:           ${st.id}`);
log(`housingSpace: ${st.housingSpace}`);
log(`movementSpeed:${st.movementSpeed}`);
log(`attackSpeed:  ${st.attackSpeed}s`);
log(`range:        ${st.range}`);
log(`boostCost:    ${st.boostCost.toLocaleString()} ${st.boostCostResource}`);
log(`boostDuration:${st.boostDuration.days}d`);
log(`requires lvl: ${st.regularLevelRequired}`);
log(`specialAbility: ${st.specialAbility}`);
log('');

log('--- Super Levels ---');
for (const lvl of st.levels) {
  log(
    `  lv${lvl.level} | hp: ${lvl.hitpoints} | dps: ${lvl.stats.normal.dps} | dph: ${lvl.stats.normal.damagePerShot}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', g.images.icon)) passed++;
else failed++;
for (const lvl of g.levels) {
  if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
if (checkImage('super icon', st.images.icon)) passed++;
else failed++;
for (const lvl of st.levels) {
  if (checkImage(`super lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
