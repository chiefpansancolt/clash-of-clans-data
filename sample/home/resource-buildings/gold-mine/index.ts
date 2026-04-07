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

const gm = home().resourceBuildings().goldMine().first()!;

log('=== goldMine() ===');
log(`id:       ${gm.id}`);
log(`name:     ${gm.name}`);
log(`base:     ${gm.base}`);
log(`category: ${gm.category}`);
log(`size:     ${gm.size}`);
log(`levels:   ${gm.levels.length}`);
log('');

log('Level  HP    Capacity        Prod/hr        Build Cost      Build Time    XP    TH');
gm.levels.forEach((l) => {
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
  const prod =
    l.productionRate !== undefined
      ? l.productionRate.toLocaleString().padStart(13)
      : '          N/A';
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(4)}  ${cap}  ${prod}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Gold Mine Available per Town Hall ---');
log('TH  Count');
gm.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(3)}`);
});
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
gm.levels.forEach((l) => {
  if (checkImage(`level ${l.level}`, l.images.normal)) passed++;
  else failed++;
});
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
