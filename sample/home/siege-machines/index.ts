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

const all = home().siegeMachines();

log('=== homeSiegeMachines() ===');
log(`total siege machines: ${all.count()}`);
log('');

log('--- All Siege Machines ---');
for (const m of all.get()) {
  log(
    `${m.id} | ${m.name} | ${m.levels.length} levels | housing: ${m.housingSpace} | workshop: ${m.workshopLevelRequired}`,
  );
}
log('');

log('--- byWorkshop(1) ---');
for (const m of all.byWorkshop(1).get()) {
  log(`${m.name}`);
}
log('');

log('--- byWorkshop(3) ---');
for (const m of all.byWorkshop(3).get()) {
  log(`${m.name}`);
}
log('');

log('--- byTownHall(12) ---');
for (const m of all.byTownHall(12).get()) {
  log(`${m.name}`);
}

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
