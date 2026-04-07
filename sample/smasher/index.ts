import * as fs from 'fs';
import * as path from 'path';
import { smasher } from '../../src';

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

const sm = smasher();

log('=== smasher() ===');
log(`id:                ${sm.id}`);
log(`name:              ${sm.name}`);
log(`base:              ${sm.base}`);
log(`category:          ${sm.category}`);
log(`guardianType:      ${sm.guardianType}`);
log(`target:            ${sm.targetType}`);
log(`specialAbility:    ${sm.specialAbility}`);
log(`rageSpeedIncrease: ${sm.rageSpeedIncrease}`);
log(`rageDamageIncrease:${sm.rageDamageIncrease}%`);
log('');

log('--- Mode ---');
const m = sm.mode;
log(`range: ${m.range} | attackSpeed: ${m.attackSpeed}s | damageType: ${m.damageType}`);
log(
  `damageRadius: ${m.damageRadius} | movementSpeed: ${m.movementSpeed} | searchRadius: ${m.searchRadius} | triggerRadius: ${m.triggerRadius}`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of sm.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of sm.levels) {
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | dps: ${lvl.stats.normal.dps} | dmg/hit: ${lvl.stats.normal.damagePerShot} | cost: ${lvl.buildCost} Elixir | xp: ${lvl.xpGained}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
for (const lvl of sm.levels) {
  if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
