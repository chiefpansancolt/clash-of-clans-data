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

const w = home().walls().wall().first()!;

log('=== wall() ===');
log(`id:       ${w.id}`);
log(`name:     ${w.name}`);
log(`size:     ${w.size}`);
log(`levels:   ${w.levels.length}`);
log('');
log('Level  HP        Gold       Elixir     Rings  TH');
w.levels.forEach((l) => {
  const goldCost = l.buildCost.toLocaleString().padStart(10);
  const acceptsElixir = l.buildCostResource === 'Gold or Elixir';
  const elixirCol = acceptsElixir ? l.buildCost.toLocaleString().padStart(10) : '       N/A';
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(6)}   ${goldCost} ${elixirCol}  ${String(l.wallRings).padStart(5)}   ${l.townHallRequired}`,
  );
});
log('');

log('--- Walls Available per Town Hall ---');
log('TH  Count');
w.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(3)}`);
});
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
w.levels.forEach((l) => {
  if (checkImage(`level ${l.level}`, l.images.normal)) passed++;
  else failed++;
});
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
