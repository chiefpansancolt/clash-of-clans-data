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

const as = home().defenses().airSweeper().first()!;

log('=== airSweeper() ===');
log(`id:       ${as.id}`);
log(`name:     ${as.name}`);
log(`base:     ${as.base}`);
log(`category: ${as.category}`);
log(`size:     ${as.size}`);
log(`target:   ${as.targetType}`);
log('');

log('--- Modes ---');
log('normal:', as.modes.normal);
log('');

log('--- Available Per Town Hall ---');
for (const a of as.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of as.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | push: ${lvl.stats.normal.pushStrength} tiles | xp: ${String(lvl.xpGained).padStart(3)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

for (const lvl of as.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;
  if (checkImage(`${base} normal`, lvl.images.normal)) passed++;
  else failed++;
}

log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
