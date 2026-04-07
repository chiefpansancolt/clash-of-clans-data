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

const hh = home().armyBuildings().heroHall().first()!;

log('=== heroHall() ===');
log(`id:       ${hh.id}`);
log(`name:     ${hh.name}`);
log(`base:     ${hh.base}`);
log(`category: ${hh.category}`);
log(`size:     ${hh.size}`);
log(`levels:   ${hh.levels.length}`);
log('');

log('Level  HP     Slots  Unlocked Hero       Build Cost       Build Time    XP      TH');
hh.levels.forEach((l) => {
  const bt = [
    l.buildTime.days ? `${l.buildTime.days}d` : '',
    l.buildTime.hours ? `${l.buildTime.hours}h` : '',
    l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
    l.buildTime.seconds ? `${l.buildTime.seconds}s` : '',
  ]
    .filter(Boolean)
    .join(' ')
    .padStart(10);
  const cost = l.buildCost.toLocaleString().padStart(14);
  const hero = (l.unlockedHero ?? '-').padEnd(20);
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(5)}  ${String(l.heroSlots).padStart(5)}  ${hero}  ${cost}  ${bt}  ${String(l.xpGained).padStart(5)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
hh.levels.forEach((l) => {
  if (checkImage(`level ${l.level} normal`, l.images.normal)) passed++;
  else failed++;
  if (checkImage(`level ${l.level} active`, l.images.active)) passed++;
  else failed++;
});
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
