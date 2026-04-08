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

const s = home().spells().skeletonSpell().first()!;

log('=== skeletonSpell() ===');
log(`id:                   ${s.id}`);
log(`name:                 ${s.name}`);
log(`spellType:            ${s.spellType}`);
log(`targetType:           ${s.targetType}`);
log(`housingSpace:         ${s.housingSpace}`);
log(`radius:               ${s.radius}`);
log(`spellFactory lvl:     ${s.spellFactoryLevelRequired} (Dark)`);
log('');

if (s.skeletonStats) {
  log('--- Skeleton Unit Stats ---');
  log(`preferredTarget:      ${s.skeletonStats.preferredTarget}`);
  log(`attackType:           ${s.skeletonStats.attackType}`);
  log(`movementSpeed:        ${s.skeletonStats.movementSpeed}`);
  log(`attackSpeed:          ${s.skeletonStats.attackSpeed}s`);
  log(`range:                ${s.skeletonStats.range} tiles`);
  log(`damagePerSecond:      ${s.skeletonStats.damagePerSecond}`);
  log(`hitpoints:            ${s.skeletonStats.hitpoints}`);
  log(`armorHitpoints:       ${s.skeletonStats.armorHitpoints}`);
  log('');
}

log('--- All Levels ---');
log('Lvl  Skeletons  Research Cost  Research Time  Lab  TH');
for (const lvl of s.levels) {
  const rt =
    [
      lvl.researchTime.days ? `${lvl.researchTime.days}d` : '',
      lvl.researchTime.hours ? `${lvl.researchTime.hours}h` : '',
      lvl.researchTime.minutes ? `${lvl.researchTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.researchCost ? lvl.researchCost.toLocaleString() : 'N/A';
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.skeletonsGenerated ?? '').padStart(9)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
if (checkImage('icon', s.images.icon)) passed++;
else failed++;
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
