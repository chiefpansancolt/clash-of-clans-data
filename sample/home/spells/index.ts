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

const all = home().spells();

log('=== homeSpells() ===');
log(`total spells: ${all.count()}`);
log('');

log('--- All Spells ---');
for (const s of all.get()) {
  log(
    `${s.id} | ${s.name} | ${s.levels.length} levels | type: ${s.spellType} | housing: ${s.housingSpace}`,
  );
}
log('');

log('--- byType("regular") ---');
for (const s of all.byType('regular').get()) {
  log(`${s.name}`);
}
log('');

log('--- byType("dark") ---');
for (const s of all.byType('dark').get()) {
  log(`${s.name}`);
}
log('');

log('--- byTownHall(9) ---');
for (const s of all.byTownHall(9).get()) {
  log(`${s.name}`);
}

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
