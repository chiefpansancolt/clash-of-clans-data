import { clanCapital } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = clanCapital().traps();

log('=== clanCapital().traps() ===');
log(`total traps: ${all.count()}`);
log('');

log('Name                         Target  DmgType  Levels');
for (const t of all.get()) {
  log(
    `  ${t.name.padEnd(28)} ${t.targetType.padEnd(6)}  ${t.damageType.padEnd(7)}  ${t.levels.length}`,
  );
}

writeOutput(__dirname);
