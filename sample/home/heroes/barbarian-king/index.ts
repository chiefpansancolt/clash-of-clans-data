import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../../../src';

const ROOT = path.resolve(__dirname, '../../../..');

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

const h = home().heroes().barbarianKing().first()!;

log('=== barbarianKing() ===');
log(`id:               ${h.id}`);
log(`name:             ${h.name}`);
log(`category:         ${h.category}`);
log(`base:             ${h.base}`);
log(`preferredTarget:  ${h.preferredTarget}`);
log(`attackType:       ${h.attackType}`);
log(`movementSpeed:    ${h.movementSpeed}`);
log(`attackSpeed:      ${h.attackSpeed}s`);
log(`range:            ${h.range} tile(s)`);
log(`searchRadius:     ${h.searchRadius} tiles`);
log(`specialAbility:   ${h.specialAbility}`);
log('');

log('--- All Levels ---');
log('Lvl  DPS   DPH    HP   Recovery  Upgrade Cost  Upgrade Time  HH');
for (const lvl of h.levels) {
  const ut =
    [
      lvl.upgradeTime.days ? `${lvl.upgradeTime.days}d` : '',
      lvl.upgradeTime.hours ? `${lvl.upgradeTime.hours}h` : '',
      lvl.upgradeTime.minutes ? `${lvl.upgradeTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.upgradeCost ? lvl.upgradeCost.toLocaleString() : 'N/A';
  log(
    `  ${String(lvl.level).padStart(3)}  ${String(lvl.damagePerSecond).padStart(4)}  ${String(lvl.damagePerHit).padStart(5)}  ${String(lvl.hitpoints).padStart(6)}  ${String(lvl.healthRecovery).padStart(8)}  ${cost.padStart(12)}  ${ut.padStart(12)}   ${lvl.heroHallLevelRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', h.images.icon)) passed++;
else failed++;
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
