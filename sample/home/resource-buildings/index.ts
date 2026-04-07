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

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
