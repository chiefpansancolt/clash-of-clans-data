import { builder } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const other = builder().otherBuildings();

log('=== builder().otherBuildings() ===');
log(`total buildings: ${other.count()}`);
log('');

log('Name                         Size  Levels');
for (const b of other.get()) {
  log(`  ${b.name.padEnd(28)} ${b.size.padEnd(4)}  ${b.levels.length}`);
}

writeOutput(__dirname);
