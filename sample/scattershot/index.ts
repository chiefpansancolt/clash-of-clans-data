import * as fs from 'fs';
import * as path from 'path';
import { scattershot } from '../../src';

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

const ss = scattershot();

log('=== scattershot() ===');
log(`id:       ${ss.id}`);
log(`name:     ${ss.name}`);
log(`base:     ${ss.base}`);
log(`category: ${ss.category}`);
log(`size:     ${ss.size}`);
log(`target:   ${ss.targetType}`);
log('');

log('--- Mode ---');
const m = ss.modes.normal;
log(
  `normal: range ${m.minRange}-${m.range} tiles | attackSpeed ${m.attackSpeed}s | ${m.damageType} | ${m.numberOfRounds} rounds`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of ss.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of ss.levels) {
  const st = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(st.dps).padStart(4)} | dmg/shot: ${String(st.damagePerShotMin).padStart(3)}-${String(st.damagePerShot).padStart(3)} | splash: ${String(st.splashDamageMin).padStart(3)}-${String(st.splashDamageMax).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

const imageVariants: Array<keyof (typeof ss.levels)[0]['images']> = ['normal', 'depleted'];

for (const lvl of ss.levels) {
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
