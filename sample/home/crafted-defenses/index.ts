import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const cd = home().craftedDefenses();

log('=== home().craftedDefenses() ===');
log(`Total: ${cd.count()}`);
log('');

log('Name                         Phase  Current  Modules');
for (const d of cd.get()) {
  log(
    `  ${d.name.padEnd(28)} ${String(d.craftingPhase).padStart(5)}  ${String(d.isCurrent).padStart(7)}  ${d.modules.length}`,
  );
}

writeOutput(__dirname);
