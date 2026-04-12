import { clanCapital } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = clanCapital().defenses();

log('=== clanCapital().defenses() ===');
log(`total buildings: ${all.count()}`);
log('');

log('Name                         Target  Levels');
for (const d of all.get()) {
  log(
    `  ${d.name.padEnd(28)} ${d.targetType.padEnd(6)}  ${d.levels.length}`,
  );
}

writeOutput(__dirname);
