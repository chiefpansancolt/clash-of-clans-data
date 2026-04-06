import * as fs from 'fs';
import * as path from 'path';
import { superWizardTower } from '../../src';

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

const swt = superWizardTower();

log('=== superWizardTower() ===');
log(`id:          ${swt.id}`);
log(`name:        ${swt.name}`);
log(`base:        ${swt.base}`);
log(`category:    ${swt.category}`);
log(`size:        ${swt.size}`);
log(`target:      ${swt.targetType}`);
log('');

log('--- Normal Mode ---');
const mode = swt.modes.normal!;
log(`range: ${mode.range} | attackSpeed: ${mode.attackSpeed}s | damageType: ${mode.damageType} | maxChainTargets: ${mode.maxChainTargets}`);
log('');

log('--- Available Per Town Hall ---');
for (const a of swt.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of swt.levels) {
  const tag = lvl.supercharge ? ` [SC${lvl.level}]` : ``;
  log(`lv${lvl.level}${tag} | hp: ${lvl.hitpoints} | cost: ${lvl.buildCost} Gold | xp: ${lvl.xpGained} | TH${lvl.townHallRequired}`);
  log(
    `     dps: ${lvl.stats.normal.dps} | damagePerShot: ${lvl.stats.normal.damagePerShot} | chainDamage: ${lvl.stats.normal.secondaryChainDamagePerShot}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

for (const lvl of swt.levels) {
  const base = lvl.supercharge ? `SC${lvl.level}` : `lv${lvl.level}`;
  if (checkImage(`${base} normal`, lvl.images.normal)) passed++;
  else failed++;
}

log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
