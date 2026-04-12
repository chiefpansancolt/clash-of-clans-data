import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const other = home().otherBuildings();

log('=== home().otherBuildings() ===');
log(`Total buildings: ${other.count()}`);
log('');

for (const b of other.get()) {
  log(`  ${b.name.padEnd(20)} levels: ${b.levels.length}`);
}
log('');

const helpers = other.helpers();
log(`helpers(): ${helpers.count()} helper units`);
for (const h of helpers.get()) {
  log(`  ${h.name}`);
}

writeOutput(__dirname);
