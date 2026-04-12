import { builder } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = builder().traps();

log('=== builder().traps() ===');
log(`total traps: ${all.count()}`);
log('');

log('Name                         Target  Levels');
for (const t of all.get()) {
  log(
    `  ${t.name.padEnd(28)} ${t.targetType.padEnd(6)}  ${t.levels.length}`,
  );
}

writeOutput(__dirname);
