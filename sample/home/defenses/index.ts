import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = home().defenses();

log('=== homeDefenses() ===');
log(`total buildings: ${all.count()}`);
log('');

log('--- All Buildings ---');
for (const d of all.get()) {
  log(`${d.id} | ${d.name} | ${d.levels.length} levels | target: ${d.targetType}`);
}
log('');

log('--- byBuilding("cannon") ---');
for (const d of all.byBuilding('cannon').get()) {
  log(`${d.name}: ${d.levels.length} levels`);
}
log('');

log('--- byTownHall(6) ---');
for (const d of all.byTownHall(6).get()) {
  const avail = d.availablePerTownHall.find((a) => a.townHallLevel === 6);
  const count = avail
    ? avail.countAfterMerges !== undefined
      ? `${avail.count}/${avail.countAfterMerges}`
      : `${avail.count}`
    : '?';
  const maxLevel = Math.max(...d.levels.filter((l) => l.townHallRequired <= 6).map((l) => l.level));
  log(`${d.name} | count: ${count} | max level: ${maxLevel}`);
}
log('');

log('--- hasGearUp() ---');
for (const d of all.hasGearUp().get()) {
  log(`${d.name} (gear up from level ${d.gearUp?.requiresLevel})`);
}
log('');

log('--- hasSupercharge() ---');
for (const d of all.get()) {
  const scLevels = d.levels.filter((l) => l.supercharge);
  if (scLevels.length === 0) continue;
  const thReq = scLevels[0].townHallRequired;
  log(`${d.name} | ${scLevels.length} supercharge level(s) | TH${thReq}`);
}

writeOutput(__dirname);
