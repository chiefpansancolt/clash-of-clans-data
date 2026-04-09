import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

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

writeOutput(__dirname);
