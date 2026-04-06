import * as fs from 'fs';
import * as path from 'path';
import { homeDefenses } from '../../src';

const lines: string[] = [];
const log = (...args: unknown[]) => {
  const line = args.map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' ');
  lines.push(line);
  console.log(line);
};

const all = homeDefenses();

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

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
