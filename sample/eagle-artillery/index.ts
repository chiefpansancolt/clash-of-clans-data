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

const ea = home().defenses().eagleArtillery().first()!;

log('=== eagleArtillery() ===');
log(`id:       ${ea.id}`);
log(`name:     ${ea.name}`);
log(`base:     ${ea.base}`);
log(`category: ${ea.category}`);
log(`size:     ${ea.size}`);
log(`target:   ${ea.targetType}`);
log('');

log('--- Mode ---');
const m = ea.modes.normal!;
log(
  `normal: range ${m.minRange}-${m.range} tiles | attackSpeed ${m.attackSpeed}s | ${m.shotsPerBurst} shots/burst | ${m.timeBetweenBursts}s between bursts | activation: ${m.activationHousingSpace} housing space | splash ${m.splashRadius} tiles`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of ea.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of ea.levels) {
  const st = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(st.dps).padStart(6)} | dmg/shot: ${String(st.damagePerShot).padStart(4)} | shockwave: ${String(st.shockwaveDamagePerHit).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

const imageVariants: Array<keyof (typeof ea.levels)[0]['images']> = [
  'normal',
  'headDown',
  'unloaded',
];

for (const lvl of ea.levels) {
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
