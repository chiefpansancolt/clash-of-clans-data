import * as fs from 'fs';
import * as path from 'path';
import { infernoTower } from '../../src';

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

const it = infernoTower();

log('=== infernoTower() ===');
log(`id:       ${it.id}`);
log(`name:     ${it.name}`);
log(`base:     ${it.base}`);
log(`category: ${it.category}`);
log(`size:     ${it.size}`);
log(`target:   ${it.targetType}`);
log('');

log('--- Modes ---');
log('normal (single target):', it.modes.normal);
log('multiTarget:', it.modes.multiTarget);
log('');

log('--- Available Per Town Hall ---');
for (const a of it.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of it.levels) {
  const st = lvl.stats.normal;
  const mt = lvl.stats.multiTarget;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | ST dps: ${String(st.dpsInitial).padStart(3)}→${String(st.dpsAfter1p5s).padStart(3)}→${String(st.dps).padStart(4)} | MT dps/target: ${String(mt?.dps).padStart(3)} (×${mt?.numberOfTargets}) | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

const imageVariants: Array<keyof (typeof it.levels)[0]['images']> = [
  'normal',
  'multiTarget',
  'singleTargetDepleted',
  'multiTargetDepleted',
];

for (const lvl of it.levels) {
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
