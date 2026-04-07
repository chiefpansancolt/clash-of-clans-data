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

const bs = home().armyBuildings().blacksmith().first()!;

log('=== blacksmith() ===');
log(`id:       ${bs.id}`);
log(`name:     ${bs.name}`);
log(`base:     ${bs.base}`);
log(`category: ${bs.category}`);
log(`size:     ${bs.size}`);
log(`levels:   ${bs.levels.length}`);
log('');

log('Level  HP    Shiny     Glowy  Starry  Com  Epic  Build Cost       Build Time    XP    TH');
bs.levels.forEach((l) => {
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
  const equip = Array.isArray(l.equipmentUnlocked)
    ? l.equipmentUnlocked.join(', ')
    : (l.equipmentUnlocked ?? '-');
  log(
    `  ${String(l.level).padStart(2)}  ${String(l.hitpoints).padStart(4)}  ${String(l.oreCapacity.shinyOre).padStart(6)}  ${String(l.oreCapacity.glowyOre).padStart(5)}  ${String(l.oreCapacity.starryOre).padStart(6)}  ${String(l.maxEquipmentLevel.common).padStart(3)}  ${String(l.maxEquipmentLevel.epic).padStart(4)}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}  ${equip}`,
  );
});
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
bs.levels.forEach((l) => {
  if (checkImage(`level ${l.level}`, l.images.normal)) passed++;
  else failed++;
});
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
