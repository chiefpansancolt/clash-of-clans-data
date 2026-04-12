import { clanCapital } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const other = clanCapital().other();

log('=== clanCapital().other() ===');
log('');

const houses = other.houses();
log(`houses(): ${houses.count()} buildings`);
log('');

log('Name                         Size  Levels');
for (const h of houses.get()) {
  log(`  ${h.name.padEnd(28)} ${h.size.padEnd(4)}  ${h.levels.length}`);
}

writeOutput(__dirname);
