import { builder } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = builder().troops();

log('=== builder().troops() ===');
log(`total troops: ${all.count()}`);
log('');

log('Name                         Housing  Target  MaxLvl');
for (const t of all.get()) {
  const maxLevel = t.levels[t.levels.length - 1].level;
  log(
    `  ${t.name.padEnd(28)} ${String(t.housingSpace).padStart(7)}  ${t.targetType.padEnd(6)}  ${maxLevel}`,
  );
}

writeOutput(__dirname);
