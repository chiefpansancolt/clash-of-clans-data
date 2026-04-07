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

const ws = home().armyBuildings().workshop().first()!;

log('=== workshop() ===');
log(`id:       ${ws.id}`);
log(`name:     ${ws.name}`);
log(`base:     ${ws.base}`);
log(`category: ${ws.category}`);
log(`size:     ${ws.size}`);
log(`levels:   ${ws.levels.length}`);
log('');

log('Level  HP     Capacity  Build Cost       Build Time    XP    TH  Unlocked Siege Machine');
ws.levels.forEach((l) => {
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
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(5)}  ${String(l.siegeMachineCapacity).padStart(8)}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}  ${l.unlockedSiegeMachine}`,
  );
});
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
ws.levels.forEach((l) => {
  if (checkImage(`level ${l.level}`, l.images.normal)) passed++;
  else failed++;
});
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
