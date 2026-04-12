import { home } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const walls = home().walls();

log('=== home().walls() ===');
log(`Total: ${walls.count()}`);
log('');

for (const w of walls.get()) {
  log(`--- ${w.name} ---`);
  log(`id:     ${w.id}`);
  log(`size:   ${w.size}`);
  log(`levels: ${w.levels.length}`);
}

writeOutput(__dirname);
