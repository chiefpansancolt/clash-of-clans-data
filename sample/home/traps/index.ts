import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = home().traps();

log('=== home().traps() ===');
log(`total traps: ${all.count()}`);
log('');

log('--- All Traps ---');
for (const t of all.get()) {
  log(`${t.id} | ${t.name} | ${t.levels.length} levels | target: ${t.targetType}`);
}
log('');

log('--- byTownHall(6) ---');
for (const t of all.byTownHall(6).get()) {
  const avail = t.availablePerTownHall.find((a) => a.townHallLevel === 6);
  const count = avail ? `${avail.count}` : '?';
  const maxLevel = Math.max(...t.levels.filter((l) => l.townHallRequired <= 6).map((l) => l.level));
  log(`${t.name} | count: ${count} | max level: ${maxLevel}`);
}
log('');

log('--- byTownHall(12) ---');
for (const t of all.byTownHall(12).get()) {
  const avail = t.availablePerTownHall.find((a) => a.townHallLevel === 12);
  const count = avail ? `${avail.count}` : '?';
  const maxLevel = Math.max(
    ...t.levels.filter((l) => l.townHallRequired <= 12).map((l) => l.level),
  );
  log(`${t.name} | count: ${count} | max level: ${maxLevel}`);
}

writeOutput(__dirname);
