import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../src';

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

const c = home().defenses().cannon().first()!;

log('=== cannon() ===');
log(`id:       ${c.id}`);
log(`name:     ${c.name}`);
log(`base:     ${c.base}`);
log(`category: ${c.category}`);
log(`size:     ${c.size}`);
log(`target:   ${c.targetType}`);
log('');

log('--- Modes ---');
log('normal:', c.modes.normal);
if (c.modes.gearedUpBurst) log('gearedUpBurst:', c.modes.gearedUpBurst);
log('');

if (c.gearUp) {
  log('--- Gear Up Requirements ---');
  log(`cost:          ${c.gearUp.cost.toLocaleString()} ${c.gearUp.costResource}`);
  log(`time:          ${c.gearUp.time.days}d ${c.gearUp.time.hours}h`);
  log(`requires lvl:  ${c.gearUp.requiresLevel}`);
  log(
    `builder bldg:  ${c.gearUp.requiresBuilderBuilding} lv${c.gearUp.requiresBuilderBuildingLevel}`,
  );
  log('');
}

log('--- Available Per Town Hall ---');
for (const a of c.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of c.levels) {
  const burst = lvl.stats.gearedUpBurst ? ` | burst dps: ${lvl.stats.gearedUpBurst.dps}` : '';
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)}${burst} | xp: ${String(lvl.xpGained).padStart(3)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

for (const lvl of c.levels) {
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
