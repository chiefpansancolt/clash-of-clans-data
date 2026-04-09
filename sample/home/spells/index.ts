import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

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

writeOutput(__dirname);
