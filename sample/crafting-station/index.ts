import * as fs from 'fs';
import * as path from 'path';
import { craftingStation, homeCraftedDefenses } from '../../src';

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

const cs = craftingStation();

log('=== craftingStation() ===');
log(`id:       ${cs.id}`);
log(`name:     ${cs.name}`);
log(`base:     ${cs.base}`);
log(`category: ${cs.category}`);
log(`size:     ${cs.size}`);
log(`TH18:     ${cs.availablePerTownHall[0]?.count ?? 0}`);
log(`HP (unselected): ${cs.levels[0].hitpoints}`);
log(`Build cost: ${cs.levels[0].buildCost} (free)`);
log('');

log('=== homeCraftedDefenses() ===');
log(`Total crafted defenses registered: ${homeCraftedDefenses().count()}`);
log(`Current phase: ${homeCraftedDefenses().current().count()}`);
log(`Former phases: ${homeCraftedDefenses().former().count()}`);
log('');
log('Phase 1 (former): Hook Tower, Flame Spinner, Crusher Mortar');
log('Phase 2 (former): Hero Bell, Bomb Hive, Light Beam');
log('Phase 3 (current): Roaster, Air Bombs, Lava Launcher');
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('level-1 normal', cs.levels[0].images.normal)) passed++;
else failed++;
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
