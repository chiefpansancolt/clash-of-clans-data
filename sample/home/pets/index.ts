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

const all = home().pets();

log('=== homePets() ===');
log(`total pets: ${all.count()}`);
log('');

log('--- All Pets ---');
for (const p of all.get()) {
  log(
    `${p.id} | ${p.name} | ${p.levels.length} levels | target: ${p.targetType} | PH: ${p.petHouseLevelRequired}`,
  );
}
log('');

log('--- byPetHouse(1) ---');
for (const p of all.byPetHouse(1).get()) {
  log(`${p.name}`);
}
log('');

log('--- byPetHouse(5) ---');
for (const p of all.byPetHouse(5).get()) {
  log(`${p.name}`);
}
log('');

log('--- byTownHall(14) ---');
for (const p of all.byTownHall(14).get()) {
  log(`${p.name}`);
}

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
