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

const ls = home().guardians().longshot().first()!;

log('=== longshot() ===');
log(`id:             ${ls.id}`);
log(`name:           ${ls.name}`);
log(`base:           ${ls.base}`);
log(`category:       ${ls.category}`);
log(`guardianType:   ${ls.guardianType}`);
log(`target:         ${ls.targetType}`);
log(`specialAbility: ${ls.specialAbility}`);
log('');

log('--- Mode ---');
const m = ls.mode;
log(`range: ${m.range} | attackSpeed: ${m.attackSpeed}s | damageType: ${m.damageType}`);
log(`damageRadius: ${m.damageRadius} | deathDamageRadius: ${m.deathDamageRadius}`);
log(
  `movementSpeed: ${m.movementSpeed} | patrolRadius: ${m.patrolRadius} | triggerRadius: ${m.triggerRadius}`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of ls.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of ls.levels) {
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | dps: ${lvl.stats.normal.dps} | dmg/hit: ${lvl.stats.normal.damagePerShot} | deathDmg: ${lvl.deathDamage} | cost: ${lvl.buildCost} Elixir | xp: ${lvl.xpGained}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
for (const lvl of ls.levels) {
  if (checkImage(`lv${lvl.level} normal`, lvl.images.normal)) passed++;
  else failed++;
}
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
