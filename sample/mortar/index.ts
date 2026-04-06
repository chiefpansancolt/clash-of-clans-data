import * as fs from 'fs';
import * as path from 'path';
import { mortar } from '../../src';

const ROOT = path.resolve(__dirname, '../..');

const lines: string[] = [];
const log = (...args: unknown[]) => {
  const line = args.map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' ');
  lines.push(line);
  console.log(line);
};

function checkImage(label: string, imagePath: string): boolean {
  if (fs.existsSync(path.join(ROOT, imagePath))) return true;
  console.error(`  MISSING image for ${label}: ${imagePath}`);
  return false;
}

const m = mortar();

log('=== mortar() ===');
log(`id:       ${m.id}`);
log(`name:     ${m.name}`);
log(`base:     ${m.base}`);
log(`category: ${m.category}`);
log(`size:     ${m.size}`);
log(`target:   ${m.targetType}`);
log('');

log('--- Modes ---');
log('normal:', m.modes.normal);
if (m.modes.gearedUpBurst) log('gearedUpBurst:', m.modes.gearedUpBurst);
log('');

if (m.gearUp) {
  log('--- Gear Up Requirements ---');
  log(`cost:          ${m.gearUp.cost.toLocaleString()} ${m.gearUp.costResource}`);
  log(`time:          ${m.gearUp.time.days}d ${m.gearUp.time.hours}h`);
  log(`requires lvl:  ${m.gearUp.requiresLevel}`);
  log(`builder bldg:  ${m.gearUp.requiresBuilderBuilding} lv${m.gearUp.requiresBuilderBuildingLevel}`);
  log('');
}

log('--- Available Per Town Hall ---');
for (const a of m.availablePerTownHall) {
  const count = a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of m.levels) {
  const burst = lvl.stats.gearedUpBurst ? ` | burst dps: ${lvl.stats.gearedUpBurst.dps}` : '';
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)}${burst} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

for (const lvl of m.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;
  if (checkImage(`${base} normal`, lvl.images.normal)) passed++;
  else failed++;
  if (lvl.images.gearedUpNormal !== undefined) {
    if (checkImage(`${base} gearedUpNormal`, lvl.images.gearedUpNormal)) passed++;
    else failed++;
  }
  if (lvl.images.gearedUpBurst !== undefined) {
    if (checkImage(`${base} gearedUpBurst`, lvl.images.gearedUpBurst)) passed++;
    else failed++;
  }
}

log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
