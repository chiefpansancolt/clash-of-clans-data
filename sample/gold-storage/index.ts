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

const gs = home().resourceBuildings().goldStorage().first()!;

log('=== goldStorage() ===');
log(`id:       ${gs.id}`);
log(`name:     ${gs.name}`);
log(`base:     ${gs.base}`);
log(`category: ${gs.category}`);
log(`size:     ${gs.size}`);
log(`levels:   ${gs.levels.length}`);
log('');

log('Level  HP    Capacity        Build Cost      Build Time    XP    TH');
gs.levels.forEach((l) => {
  const bt =
    [
      l.buildTime.days ? `${l.buildTime.days}d` : '',
      l.buildTime.hours ? `${l.buildTime.hours}h` : '',
      l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
      l.buildTime.seconds ? `${l.buildTime.seconds}s` : '',
    ]
      .filter(Boolean)
      .join(' ')
      .padStart(10) || '   instant';
  const cost = l.buildCost.toLocaleString().padStart(13);
  const cap = l.capacity.toLocaleString().padStart(14);
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(4)}  ${cap}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Gold Storage Available per Town Hall ---');
log('TH  Count');
gs.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(3)}`);
});
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
gs.levels.forEach((l) => {
  if (checkImage(`level ${l.level}`, l.images.normal)) passed++;
  else failed++;
});
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
