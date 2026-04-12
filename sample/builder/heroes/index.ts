import { builder } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = builder().heroes();

log('=== builder().heroes() ===');
log(`total heroes: ${all.count()}`);
log('');

log('Name                         Levels');
for (const h of all.get()) {
  log(`  ${h.name.padEnd(28)} ${h.levels.length}`);
}

writeOutput(__dirname);
