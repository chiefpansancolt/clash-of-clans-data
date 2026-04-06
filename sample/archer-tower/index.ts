import * as fs from 'fs';
import * as path from 'path';
import { archerTower } from '../../src';

const ROOT = path.resolve(__dirname, '../..');

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

const at = archerTower();

log('=== archerTower() ===');
log(`id:       ${at.id}`);
log(`name:     ${at.name}`);
log(`base:     ${at.base}`);
log(`category: ${at.category}`);
log(`size:     ${at.size}`);
log(`target:   ${at.targetType}`);
log('');

log('--- Modes ---');
log('normal:', at.modes.normal);
if (at.modes.gearedUpFastAttack) log('gearedUpFastAttack:', at.modes.gearedUpFastAttack);
log('');

if (at.gearUp) {
  log('--- Gear Up Requirements ---');
  log(`cost:          ${at.gearUp.cost.toLocaleString()} ${at.gearUp.costResource}`);
  log(`time:          ${at.gearUp.time.days}d ${at.gearUp.time.hours}h`);
  log(`requires lvl:  ${at.gearUp.requiresLevel}`);
  log(
    `builder bldg:  ${at.gearUp.requiresBuilderBuilding} lv${at.gearUp.requiresBuilderBuildingLevel}`,
  );
  log('');
}

log('--- Available Per Town Hall ---');
for (const a of at.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of at.levels) {
  const fastAttack = lvl.stats.gearedUpFastAttack
    ? ` | fast dps: ${lvl.stats.gearedUpFastAttack.dps}`
    : '';
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)}${fastAttack} | xp: ${String(lvl.xpGained).padStart(3)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

for (const lvl of at.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;

  if (checkImage(`${base} normal`, lvl.images.normal)) passed++;
  else failed++;

  if (lvl.images.gearedUpNormal !== undefined) {
    if (checkImage(`${base} gearedUpNormal`, lvl.images.gearedUpNormal)) passed++;
    else failed++;
  }

  if (lvl.images.gearedUpFastAttack !== undefined) {
    if (checkImage(`${base} gearedUpFastAttack`, lvl.images.gearedUpFastAttack)) passed++;
    else failed++;
  }
}

log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
