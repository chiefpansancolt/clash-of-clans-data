import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = home().resourceBuildings();
const cc = home().resourceBuildings().clanCastle().first()!;

log('=== home().resourceBuildings() ===');
log(`total buildings: ${all.count()}`);
log('');

log('--- All Resource Buildings ---');
for (const b of all.get()) {
  log(`${b.id} | ${b.name} | ${b.levels.length} levels`);
}
log('');

log('--- Clan Castle ---');
log(`${cc.id} | ${cc.name} | ${cc.levels.length} levels | triggerRadius: ${cc.triggerRadius}`);
log('');

log('--- byTownHall(6) ---');
for (const b of all.byTownHall(6).get()) {
  const avail = b.availablePerTownHall.find((a) => a.townHallLevel === 6);
  const count = avail ? `${avail.count}` : '?';
  const maxLevel = Math.max(...b.levels.filter((l) => l.townHallRequired <= 6).map((l) => l.level));
  log(`${b.name} | count: ${count} | max level: ${maxLevel}`);
}
log('');

log('--- byTownHall(12) ---');
for (const b of all.byTownHall(12).get()) {
  const avail = b.availablePerTownHall.find((a) => a.townHallLevel === 12);
  const count = avail ? `${avail.count}` : '?';
  const maxLevel = Math.max(
    ...b.levels.filter((l) => l.townHallRequired <= 12).map((l) => l.level),
  );
  log(`${b.name} | count: ${count} | max level: ${maxLevel}`);
}

writeOutput(__dirname);
