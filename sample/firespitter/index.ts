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

const fs_ = home().defenses().firespitter().first()!;

log('=== firespitter() ===');
log(`id:       ${fs_.id}`);
log(`name:     ${fs_.name}`);
log(`base:     ${fs_.base}`);
log(`category: ${fs_.category}`);
log(`size:     ${fs_.size}`);
log(`target:   ${fs_.targetType}`);
log('');

log('--- Mode ---');
const mode = fs_.modes.normal!;
log(
  `normal: range ${mode.range} tiles | attackSpeed ${mode.attackSpeed}s | ${mode.damageType} | ${mode.shotsPerBurst} shots | timeBetweenBursts ${mode.timeBetweenBursts}s`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of fs_.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of fs_.levels) {
  const st = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)}      | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(st.dps).padStart(3)} | dmg/shot: ${String(st.damagePerShot).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

for (const lvl of fs_.levels) {
  if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}

log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
