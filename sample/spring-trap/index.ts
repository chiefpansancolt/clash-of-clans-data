import * as fs from 'fs';
import * as path from 'path';
import { springTrap } from '../../src';

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

const st = springTrap();

log('=== springTrap() ===');
log(`id:               ${st.id}`);
log(`name:             ${st.name}`);
log(`size:             ${st.size}`);
log(`triggerRadius:    ${st.triggerRadius} tile`);
log(`damageType:       ${st.damageType}`);
log(`targetType:       ${st.targetType}`);
log(`favoriteTarget:   ${st.favoriteTarget}`);
log(`specialAbility:   ${st.specialAbility}`);
log(`levels:           ${st.levels.length}`);
log('');
log('Level  Capacity  Damage     Cost          Build Time   XP     TH');
st.levels.forEach((l) => {
  const cost = l.buildCost.toLocaleString().padStart(12);
  const damage = String(l.damage).padStart(6);
  const capacity = String(l.springCapacity ?? '-').padStart(8);
  const bt =
    [
      l.buildTime.days ? `${l.buildTime.days}d` : '',
      l.buildTime.hours ? `${l.buildTime.hours}h` : '',
      l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ')
      .padStart(10) || '   instant';
  log(
    `  ${String(l.level).padStart(2)}  ${capacity}  ${damage} ${cost}  ${bt}  ${String(l.xpGained).padStart(5)}   ${l.townHallRequired}`,
  );
});
log('');

log('--- Available per Town Hall ---');
log('TH  Count');
st.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(2)}`);
});
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
st.levels.forEach((l) => {
  if (checkImage(`level ${l.level}`, l.images.normal)) passed++;
  else failed++;
});
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
