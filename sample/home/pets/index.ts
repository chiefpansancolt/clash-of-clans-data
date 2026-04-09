import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

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

writeOutput(__dirname);
