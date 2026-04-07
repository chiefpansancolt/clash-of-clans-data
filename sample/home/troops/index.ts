import * as fs from 'fs';
import * as path from 'path';
import { home } from '../../../src';

const lines: string[] = [];
const log = (...args: unknown[]) => {
  const line = args
    .map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)))
    .join(' ');
  lines.push(line);
  console.log(line);
};

const all = home().troops();

log('=== home().troops() ===');
log(`total troops: ${all.count()}`);
log('');

log('--- All Troops ---');
for (const t of all.get()) {
  const superLabel = t.superTroop ? ` → ${t.superTroop.name}` : '';
  log(
    `${t.id} | ${t.name} | ${t.levels.length} levels | housing: ${t.housingSpace} | target: ${t.targetType}${superLabel}`,
  );
}
log('');

log('--- byType("regular") ---');
for (const t of all.byType('regular').get()) {
  log(`  ${t.name}`);
}
log('');

log('--- byType("dark") ---');
const dark = all.byType('dark').get();
if (dark.length === 0) log('  (none yet)');
else dark.forEach((t) => log(`  ${t.name}`));
log('');

log('--- withSuperTroop() ---');
for (const t of all.withSuperTroop().get()) {
  log(
    `  ${t.name} → ${t.superTroop!.name} (boost: ${t.superTroop!.boostCost.toLocaleString()} ${t.superTroop!.boostCostResource}, requires lv${t.superTroop!.regularLevelRequired})`,
  );
}
log('');

log('--- byTownHall(8) ---');
for (const t of all.byTownHall(8).get()) {
  const maxLevel = Math.max(...t.levels.filter((l) => l.townHallRequired <= 8).map((l) => l.level));
  log(`  ${t.name} | max level at TH8: ${maxLevel}`);
}
log('');

log('--- byTownHall(12) ---');
for (const t of all.byTownHall(12).get()) {
  const maxLevel = Math.max(
    ...t.levels.filter((l) => l.townHallRequired <= 12).map((l) => l.level),
  );
  log(`  ${t.name} | max level at TH12: ${maxLevel}`);
}

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
