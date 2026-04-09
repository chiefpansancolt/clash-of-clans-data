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

const p = home().pets().greedyRaven().first()!;

log('=== greedyRaven() ===');
log(`id:               ${p.id}`);
log(`name:             ${p.name}`);
log(`category:         ${p.category}`);
log(`targetType:       ${p.targetType}`);
log(`preferredTarget:  ${p.preferredTarget}`);
log(`attackType:       ${p.attackType}`);
log(`movementSpeed:    ${p.movementSpeed}`);
log(`attackSpeed:      ${p.attackSpeed}s`);
log(`range:            ${p.range} tiles`);
log(`petHouseLevelReq: ${p.petHouseLevelRequired}`);
log(`specialAbility:   ${p.specialAbility}`);
log('');

log('--- All Levels ---');
log('Lvl  DPS    DPH  ResourceDPS      HP  Upgrade Cost  Upgrade Time  PH  TH');
for (const lvl of p.levels) {
  const ut =
    [
      lvl.upgradeTime.days ? `${lvl.upgradeTime.days}d` : '',
      lvl.upgradeTime.hours ? `${lvl.upgradeTime.hours}h` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.upgradeCost ? lvl.upgradeCost.toLocaleString() : 'N/A';
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.damagePerSecond).padStart(3)}  ${String(lvl.damagePerHit).padStart(5)}  ${String(lvl.dpsOnResourceBuildings).padStart(11)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(12)}  ${ut.padStart(12)}   ${lvl.petHouseLevelRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', p.images.icon)) passed++;
else failed++;
if (checkImage('normal', p.images.normal)) passed++;
else failed++;
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
