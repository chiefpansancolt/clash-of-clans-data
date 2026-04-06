import * as fs from 'fs';
import * as path from 'path';
import { buildersHut } from '../../src';

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

const bh = buildersHut();

log('=== buildersHut() ===');
log(`id:       ${bh.id}`);
log(`name:     ${bh.name}`);
log(`base:     ${bh.base}`);
log(`category: ${bh.category}`);
log(`size:     ${bh.size}`);
log(`target:   ${bh.targetType}`);
log('');

log('--- Normal Mode (turret) ---');
const m = bh.modes.normal!;
log(`range ${m.range} tiles | attackSpeed ${m.attackSpeed}s | ${m.damageType}`);
log('');

log('--- Builder Mode ---');
const bm = bh.modes.builder!;
log(`range ${bm.range} tiles | repairSpeed ${bm.repairSpeed}s | movementSpeed ${bm.movementSpeed}`);
log('');

log('--- Available Per Town Hall ---');
for (const a of bh.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of bh.levels) {
  const st = lvl.stats.normal;
  const bst = lvl.stats.builder;
  if (bst) {
    log(
      `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(st.dps).padStart(3)} | repair/s: ${String(bst.repairPerSecond).padStart(2)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
    );
  } else {
    log(
      `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: N/A | repair/s: N/A | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
    );
  }
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

const imageVariants: Array<keyof (typeof bh.levels)[0]['images']> = ['normal', 'active'];

for (const lvl of bh.levels) {
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
