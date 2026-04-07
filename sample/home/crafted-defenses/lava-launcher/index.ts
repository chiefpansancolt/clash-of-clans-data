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

const ll = home().craftedDefenses().lavaLauncher().first()!;

log('=== lavaLauncher() ===');
log(`id:            ${ll.id}`);
log(`name:          ${ll.name}`);
log(`base:          ${ll.base}`);
log(`category:      ${ll.category}`);
log(`size:          ${ll.size}`);
log(`craftingPhase: ${ll.craftingPhase}`);
log(`isCurrent:     ${ll.isCurrent}`);
log(`targetType:    ${ll.targetType}`);
log('');

ll.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
ll.images.forEach((img) => {
  if (checkImage(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal))
    passed++;
  else failed++;
});
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
