import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

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

writeOutput(__dirname);
