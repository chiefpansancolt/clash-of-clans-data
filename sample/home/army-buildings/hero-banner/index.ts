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

const hb = home().armyBuildings().heroBanner().first()!;

log('=== heroBanner() ===');
log(`id:          ${hb.id}`);
log(`name:        ${hb.name}`);
log(`base:        ${hb.base}`);
log(`category:    ${hb.category}`);
log(`size:        ${hb.size}`);
log(`description: ${hb.description}`);
log('');

log('Available per Town Hall:');
hb.availablePerTownHall.forEach((e) => {
  log(`  TH${String(e.townHallLevel).padStart(2)}: ${e.count}`);
});
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
const variants = Object.entries(hb.images) as [string, string][];
for (const [variant, imgPath] of variants) {
  if (checkImage(variant, imgPath)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
