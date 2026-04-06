import * as fs from 'fs';
import * as path from 'path';
import { ricochetCannon } from '../../src';

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

const rc = ricochetCannon();

log('=== ricochetCannon() ===');
log(`id:       ${rc.id}`);
log(`name:     ${rc.name}`);
log(`base:     ${rc.base}`);
log(`category: ${rc.category}`);
log(`size:     ${rc.size}`);
log(`target:   ${rc.targetType}`);
log('');

log('--- Mode ---');
const mode = rc.modes.normal!;
log(
  `normal: range ${mode.range} tiles | attackSpeed ${mode.attackSpeed}s | ${mode.damageType} | chainRange ${mode.chainRange} tiles`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of rc.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of rc.levels) {
  const st = lvl.stats.normal;
  const tag = lvl.supercharge ? `[SC${lvl.level}]` : '     ';
  log(
    `lv${String(lvl.level).padStart(2)} ${tag} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(st.dps).padStart(3)} | dmg/shot: ${String(st.damagePerShot).padStart(6)} | chain: ${String(st.secondaryChainDamagePerShot).padStart(6)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

for (const lvl of rc.levels) {
  const base = `lv${String(lvl.level).padStart(2)}${lvl.supercharge ? '[SC]' : ''}`;
  if (checkImage(`${base} normal`, lvl.images.normal)) passed++;
  else failed++;
}

log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
