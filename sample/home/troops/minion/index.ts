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

const m = home().troops().minion().first()!;

log('=== minion() ===');
log(`id:               ${m.id}`);
log(`name:             ${m.name}`);
log(`troopType:        ${m.troopType}`);
log(`targetType:       ${m.targetType}`);
log(`damageType:       ${m.damageType}`);
log(`housingSpace:     ${m.housingSpace}`);
log(`movementSpeed:    ${m.movementSpeed}`);
log(`attackSpeed:      ${m.attackSpeed}s`);
log(`range:            ${m.range}`);
log(`barracks lvl:     ${m.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH      HP   Research Cost       Research Time  Lab  TH');
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
  const n = lvl.stats.normal;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

const st = m.superTroop!;
log('--- Super Minion ---');
log(`id:               ${st.id}`);
log(`housingSpace:     ${st.housingSpace}`);
log(`movementSpeed:    ${st.movementSpeed}`);
log(`attackSpeed:      ${st.attackSpeed}s`);
log(`range:            ${st.range}`);
log(`specialAbility:   ${st.specialAbility}`);
log(`boostCost:        ${st.boostCost} ${st.boostCostResource}`);
log(`regularLvlReq:    ${st.regularLevelRequired}`);
log('');
log('Lvl   DPS    DPH      HP   TH');
for (const lvl of st.levels) {
  const n = lvl.stats.normal;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(lvl.hitpoints).padStart(6)}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', m.images.icon)) passed++;
else failed++;
if (checkImage('super-icon', st.images.icon)) passed++;
else failed++;
const seenNormal = new Set<string>();
for (const lvl of m.levels) {
  if (!seenNormal.has(lvl.images.normal)) {
    seenNormal.add(lvl.images.normal);
    if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
    else failed++;
  }
}
const seenSuper = new Set<string>();
for (const lvl of st.levels) {
  if (!seenSuper.has(lvl.images.normal)) {
    seenSuper.add(lvl.images.normal);
    if (checkImage(`super lv${lvl.level}`, lvl.images.normal)) passed++;
    else failed++;
  }
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
