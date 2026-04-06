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
  log(`${d.name}`);
}
log('');

log('--- hasGearUp() ---');
for (const d of all.hasGearedUpBurst().get()) {
  log(`${d.name} (burst from level ${d.modes.gearedUpBurst?.availableFromLevel})`);
}

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
