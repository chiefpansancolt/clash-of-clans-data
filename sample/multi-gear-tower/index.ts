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

const mgt = home().defenses().multiGearTower().first()!;

log('=== multiGearTower() ===');
log(`id:       ${mgt.id}`);
log(`name:     ${mgt.name}`);
log(`base:     ${mgt.base}`);
log(`category: ${mgt.category}`);
log(`size:     ${mgt.size}`);
log(`target:   ${mgt.targetType}`);
log('');

log('--- Modes ---');
const lr = mgt.modes.normal!;
log(`long range: range ${lr.range} tiles | attackSpeed ${lr.attackSpeed}s | ${lr.damageType}`);
const fa = mgt.modes.fastAttack!;
log(
  `fast attack: range ${fa.range} tiles | attackSpeed ${fa.attackSpeed}s | ${fa.shotsPerBurst} shots | timeBetweenBursts ${fa.timeBetweenBursts}s`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of mgt.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of mgt.levels) {
  const sn = lvl.stats.normal;
  const sf = lvl.stats.fastAttack!;
  const tag = lvl.supercharge ? `[SC${lvl.level}]` : '     ';
  log(
    `lv${String(lvl.level).padStart(2)} ${tag} | hp: ${String(lvl.hitpoints).padStart(5)} | lr dps: ${String(sn.dps).padStart(3)} | fa dps: ${String(sf.dps).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

for (const lvl of mgt.levels) {
  const base = `lv${String(lvl.level).padStart(2)}${lvl.supercharge ? '[SC]' : ''}`;
  if (checkImage(`${base} normal`, lvl.images.normal)) passed++;
  else failed++;
  if (lvl.images.fastAttack) {
    if (checkImage(`${base} fastAttack`, lvl.images.fastAttack)) passed++;
    else failed++;
  }
}

log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
