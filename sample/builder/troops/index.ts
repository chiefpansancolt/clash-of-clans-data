import { builder } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = builder().troops();

log('=== builder().troops() ===');
log(`total troops: ${all.count()}`);
log('');

log('Name                         Housing  Target  Levels');
for (const t of all.get()) {
  log(
    `  ${t.name.padEnd(28)} ${String(t.housingSpace).padStart(7)}  ${t.targetType.padEnd(6)}  ${t.levels.length}`,
  );
}

writeOutput(__dirname);
