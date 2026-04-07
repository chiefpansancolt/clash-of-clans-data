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

const bh = home().otherBuildings().bobsHut().first()!;

log('=== bobsHut() ===');
log(`id:       ${bh.id}`);
log(`name:     ${bh.name}`);
log(`base:     ${bh.base}`);
log(`category: ${bh.category}`);
log(`size:     ${bh.size}`);
log(`levels:   ${bh.levels.length}`);
log('');

log('Level  HP');
for (const l of bh.levels) {
  log(`  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(3)}`);
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
for (const l of bh.levels) {
  if (checkImage(`level ${l.level}`, l.images.normal)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
