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

const lh = home().troops().lavaHound().first()!;

log('=== lavaHound() ===');
log(`id:               ${lh.id}`);
log(`name:             ${lh.name}`);
log(`troopType:        ${lh.troopType}`);
log(`targetType:       ${lh.targetType}`);
log(`damageType:       ${lh.damageType}`);
log(`housingSpace:     ${lh.housingSpace}`);
log(`movementSpeed:    ${lh.movementSpeed}`);
log(`attackSpeed:      ${lh.attackSpeed}s`);
log(`range:            ${lh.range}`);
log(`barracks lvl:     ${lh.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log(
  'Lvl   DPS    DPH  DeathDmg  PupsOff  PupsDef      HP  Research Cost       Research Time  Lab  TH',
);
for (const lvl of lh.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(n.deathDamage).padStart(8)}  ${String(lvl.pupsOnOffense).padStart(7)}  ${String(lvl.pupsOnDefense).padStart(7)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

const st = lh.superTroop!;
log('--- Ice Hound ---');
log(`id:               ${st.id}`);
log(`housingSpace:     ${st.housingSpace}`);
log(`movementSpeed:    ${st.movementSpeed}`);
log(`attackSpeed:      ${st.attackSpeed}s`);
log(`range:            ${st.range}`);
log(`specialAbility:   ${st.specialAbility}`);
log(`boostCost:        ${st.boostCost} ${st.boostCostResource}`);
log(`regularLvlReq:    ${st.regularLevelRequired}`);
log('');
log('Lvl   DPS    DPH      HP  FreezeTime  PupsOff  PupsDef   TH');
for (const lvl of st.levels) {
  const n = lvl.stats.normal;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(lvl.hitpoints).padStart(6)}  ${String(lvl.freezeTime).padStart(10)}  ${String(lvl.pupsOnOffense).padStart(7)}  ${String(lvl.pupsOnDefense).padStart(7)}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', lh.images.icon)) passed++;
else failed++;
if (checkImage('super-icon', st.images.icon)) passed++;
else failed++;
const seenNormal = new Set<string>();
for (const lvl of lh.levels) {
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
