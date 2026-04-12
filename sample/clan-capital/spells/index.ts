import { clanCapital } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const all = clanCapital().spells();

log('=== clanCapital().spells() ===');
log(`total spells: ${all.count()}`);
log('');

log('Name                         Housing  Factory  Levels');
for (const s of all.get()) {
  log(
    `  ${s.name.padEnd(28)} ${String(s.housingSpace).padStart(7)}  ${String(s.requiredSpellFactory).padStart(7)}  ${s.levels.length}`,
  );
}

writeOutput(__dirname);
