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

const d = home().troops().dragon().first()!;

log('=== dragon() ===');
log(`id:           ${d.id}`);
log(`name:         ${d.name}`);
log(`troopType:    ${d.troopType}`);
log(`targetType:   ${d.targetType}`);
log(`damageType:   ${d.damageType}`);
log(`housingSpace: ${d.housingSpace}`);
log(`movementSpeed:${d.movementSpeed}`);
log(`attackSpeed:  ${d.attackSpeed}s`);
log(`range:        ${d.range}`);
log(`barracks lvl: ${d.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH      HP   Research Cost       Research Time  Lab  TH');
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
  const s = lvl.stats.normal;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(s.dps).padStart(4)}  ${String(s.damagePerShot).padStart(6)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

const st = d.superTroop!;
log('--- Super Dragon ---');
log(`id:              ${st.id}`);
log(`name:            ${st.name}`);
log(`housingSpace:    ${st.housingSpace}`);
log(`movementSpeed:   ${st.movementSpeed}`);
log(`attackSpeed:     ${st.attackSpeed}s`);
log(`shotsPerBurst:   ${st.shotsPerBurst}`);
log(`timeBetweenBursts: ${st.timeBetweenBursts}s`);
log(`range:           ${st.range}`);
log(`boostCost:       ${st.boostCost} ${st.boostCostResource}`);
log(`regularLvlReq:   ${st.regularLevelRequired}`);
log(`specialAbility:  ${st.specialAbility}`);
log('');

log('--- Super Dragon Levels ---');
log('Lvl   DPS    DPH      HP   TH');
for (const lvl of st.levels) {
  const s = lvl.stats.normal;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(s.dps).padStart(4)}  ${String(s.damagePerShot).padStart(6)}  ${String(lvl.hitpoints).padStart(5)}   ${lvl.townHallRequired ?? '?'}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', d.images.icon)) passed++;
else failed++;
if (checkImage('super-icon', st.images.icon)) passed++;
else failed++;
for (const lvl of d.levels) {
  if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
// Super dragon levels all share one sprite — check unique paths
const superPaths = new Set(st.levels.map((l) => l.images.normal));
for (const p of superPaths) {
  if (checkImage('super normal', p)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
