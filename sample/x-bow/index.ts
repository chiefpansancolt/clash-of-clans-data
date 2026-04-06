import * as fs from 'fs';
import * as path from 'path';
import { xBow } from '../../src';

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

const xb = xBow();

log('=== xBow() ===');
log(`id:       ${xb.id}`);
log(`name:     ${xb.name}`);
log(`base:     ${xb.base}`);
log(`category: ${xb.category}`);
log(`size:     ${xb.size}`);
log(`target:   ${xb.targetType}`);
log('');

log('--- Modes ---');
log('normal (ground):', xb.modes.normal);
log('airAndGround:', xb.modes.airAndGround);
log('');

log('--- Available Per Town Hall ---');
for (const a of xb.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of xb.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

const imageVariants: Array<keyof (typeof xb.levels)[0]['images']> = [
  'normal',
  'airAndGround',
  'groundDepleted',
  'airAndGroundDepleted',
];

for (const lvl of xb.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;
  for (const variant of imageVariants) {
    const imgPath = lvl.images[variant];
    if (imgPath) {
      if (checkImage(`${base} ${variant}`, imgPath)) passed++;
      else failed++;
    }
  }
}

log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
