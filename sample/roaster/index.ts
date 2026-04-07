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

const r = home().craftedDefenses().roaster().first()!;

log('=== roaster() ===');
log(`id:            ${r.id}`);
log(`name:          ${r.name}`);
log(`base:          ${r.base}`);
log(`category:      ${r.category}`);
log(`size:          ${r.size}`);
log(`craftingPhase: ${r.craftingPhase}`);
log(`isCurrent:     ${r.isCurrent}`);
log(`targetType:    ${r.targetType}`);
log('');

r.modules.forEach((mod, i) => {
  log(`Module ${i + 1}: ${mod.name} (${mod.controls})`);
  log(`  L1  stat: ${mod.upgrades[0].stat}  cost: free`);
  log(
    `  L10 stat: ${mod.upgrades[9].stat}  cost: ${mod.upgrades[9].buildCost.toLocaleString()} ${mod.upgrades[9].buildCostResource}`,
  );
});
log('');

log('=== home().craftedDefenses() context ===');
log(`Phase 3 count: ${home().craftedDefenses().byPhase(3).count()}`);
log(`current() count: ${home().craftedDefenses().current().count()}`);
log('');

log('--- Image Validation ---');
let passed = 0;
let failed = 0;
r.images.forEach((img) => {
  if (checkImage(`eff-level ${img.fromEffectiveLevel}-${img.toEffectiveLevel}`, img.normal))
    passed++;
  else failed++;
});
log(`Images: ${passed} OK, ${failed} missing`);

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
