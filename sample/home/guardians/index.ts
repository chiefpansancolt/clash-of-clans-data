import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const guardians = home().guardians();

log('=== home().guardians() ===');
log(`Total: ${guardians.count()}`);
log('');

for (const g of guardians.get()) {
  log(`--- ${g.name} ---`);
  log(`id:            ${g.id}`);
  log(`guardianType:  ${g.guardianType}`);
  log(`targetType:    ${g.targetType}`);
  log(`levels:        ${g.levels.length}`);
}

writeOutput(__dirname);
