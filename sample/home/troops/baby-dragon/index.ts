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

const bd = home().troops().babyDragon().first()!;

log('=== babyDragon() ===');
log(`id:             ${bd.id}`);
log(`name:           ${bd.name}`);
log(`troopType:      ${bd.troopType}`);
log(`targetType:     ${bd.targetType}`);
log(`damageType:     ${bd.damageType}`);
log(`housingSpace:   ${bd.housingSpace}`);
log(`movementSpeed:  ${bd.movementSpeed}`);
log(`attackSpeed:    ${bd.attackSpeed}s`);
log(`range:          ${bd.range}`);
log(`barracks lvl:   ${bd.barrackLevelRequired}`);
log(`specialAbility: ${bd.specialAbility}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS   EnrDPS    DPH  EnrDPH      HP   Research Cost       Research Time  Lab  TH');
for (const lvl of bd.levels) {
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
  const e = lvl.stats.enraged!;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(s.dps).padStart(4)}   ${String(e.dps).padStart(5)}  ${String(s.damagePerShot).padStart(5)}  ${String(e.damagePerShot).padStart(6)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

const st = bd.superTroop!;
log('--- Super Troop: Inferno Dragon ---');
log(`id:             ${st.id}`);
log(`housingSpace:   ${st.housingSpace}`);
log(`movementSpeed:  ${st.movementSpeed}`);
log(`attackSpeed:    ${st.attackSpeed}s`);
log(`range:          ${st.range}`);
log(`boostCost:      ${st.boostCost} ${st.boostCostResource}`);
log(`regularLvlReq:  ${st.regularLevelRequired}`);
log(`specialAbility: ${st.specialAbility}`);
log('');
log('Lvl   S1 DPS   S2 DPS   S3 DPS      HP   TH');
for (const lvl of st.levels) {
  log(
    `  ${String(lvl.level).padStart(2)}   ${String(lvl.stats.normal.dps).padStart(5)}   ${String(lvl.stats.stage2!.dps).padStart(6)}   ${String(lvl.stats.stage3!.dps).padStart(6)}  ${String(lvl.hitpoints).padStart(6)}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', bd.images.icon)) passed++;
else failed++;
if (checkImage('super-icon', st.images.icon)) passed++;
else failed++;
const seenImages = new Set<string>();
for (const lvl of bd.levels) {
  if (!seenImages.has(lvl.images.normal)) {
    seenImages.add(lvl.images.normal);
    if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
    else failed++;
  }
}
const seenSuperImages = new Set<string>();
for (const lvl of st.levels) {
  if (!seenSuperImages.has(lvl.images.normal)) {
    seenSuperImages.add(lvl.images.normal);
    if (checkImage(`super lv${lvl.level}`, lvl.images.normal)) passed++;
    else failed++;
  }
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
