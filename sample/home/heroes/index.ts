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

const all = home().heroes();

log('=== homeHeroes() ===');
log(`total heroes: ${all.count()}`);
log('');

log('--- All Heroes ---');
for (const h of all.get()) {
  log(
    `${h.id} | ${h.name} | ${h.levels.length} levels | attack: ${h.attackType} | ability: ${h.specialAbility}`,
  );
}
log('');

log('--- byHeroHall(1) ---');
for (const h of all.byHeroHall(1).get()) {
  log(`${h.name}`);
}
log('');

log('--- byHeroHall(2) ---');
for (const h of all.byHeroHall(2).get()) {
  log(`${h.name}`);
}

const outputPath = path.join(__dirname, 'output.txt');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8');
console.log(`\nOutput written to: ${outputPath}`);
