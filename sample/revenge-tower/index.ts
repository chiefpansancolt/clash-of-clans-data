import * as fs from 'fs';
import * as path from 'path';
import { revengeTower } from '../../src';

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

const rt = revengeTower();

log('=== revengeTower() ===');
log(`id:              ${rt.id}`);
log(`name:            ${rt.name}`);
log(`base:            ${rt.base}`);
log(`category:        ${rt.category}`);
log(`size:            ${rt.size}`);
log(`target:          ${rt.targetType}`);
log(`specialAbility:  ${rt.specialAbility}`);
log('');

log('--- Modes ---');
const s1 = rt.modes.stage1!;
const s2 = rt.modes.stage2!;
const s3 = rt.modes.stage3!;
log(`stage1: range ${s1.range} | attackSpeed ${s1.attackSpeed}s | ${s1.damageType}`);
log(
  `stage2: range ${s2.range} | attackSpeed ${s2.attackSpeed}s | ${s2.damageType} | chainRange ${s2.chainRange}`,
);
log(
  `stage3: range ${s3.range} | attackSpeed ${s3.attackSpeed}s | ${s3.damageType} | chainRange ${s3.chainRange}`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of rt.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of rt.levels) {
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | cost: ${lvl.buildCost} DE | xp: ${lvl.xpGained} | TH${lvl.townHallRequired}`,
  );
  log(`     stage1: dps ${lvl.stats.stage1!.dps} | dmg/shot ${lvl.stats.stage1!.damagePerShot}`);
  log(
    `     stage2: dps ${lvl.stats.stage2!.dps} | primary ${lvl.stats.stage2!.damagePerShot} | secondary ${lvl.stats.stage2!.secondaryChainDamagePerShot}`,
  );
  log(
    `     stage3: dps ${lvl.stats.stage3!.dps} | primary ${lvl.stats.stage3!.damagePerShot} | secondary ${lvl.stats.stage3!.secondaryChainDamagePerShot} | tertiary ${lvl.stats.stage3!.tertiaryChainDamagePerShot}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;

for (const lvl of rt.levels) {
  const base = `lv${lvl.level}`;
  if (checkImage(`${base} normal`, lvl.images.normal)) passed++;
  else failed++;
  if (lvl.images.stage1 && checkImage(`${base} stage1`, lvl.images.stage1)) passed++;
  else if (lvl.images.stage1) failed++;
  if (lvl.images.stage2 && checkImage(`${base} stage2`, lvl.images.stage2)) passed++;
  else if (lvl.images.stage2) failed++;
  if (lvl.images.stage3 && checkImage(`${base} stage3`, lvl.images.stage3)) passed++;
  else if (lvl.images.stage3) failed++;
}

log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
