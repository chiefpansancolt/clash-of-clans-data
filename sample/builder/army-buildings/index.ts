import { builder } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = builder().armyBuildings();

log('=== builder().armyBuildings() ===');
log(`total buildings: ${all.count()}`);
log('');

log('Name                         Size  Levels');
for (const b of all.get()) {
  log(`  ${b.name.padEnd(28)} ${b.size.padEnd(4)}  ${b.levels.length}`);
}

writeOutput(__dirname);
