import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

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

writeOutput(__dirname);
