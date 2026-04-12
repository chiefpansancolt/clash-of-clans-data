import { seasonPass } from '../../src';
import { checkImage, createLogger } from '../helper';

const { log, writeOutput } = createLogger();

const challenges = seasonPass().challenges();

log('=== seasonPass().challenges() ===');
log(`Total: ${challenges.count()}`);
log('');

for (const c of challenges.get()) {
  log(`--- ${c.name} ---`);
  log(`id:    ${c.id}`);
  if (c.notes.length > 0) {
    log(`notes:`);
    for (const note of c.notes) {
      log(`  - ${note}`);
    }
  }
  const ok = checkImage(c.id, c.image);
  log(`image: ${c.image} [${ok ? 'OK' : 'MISSING'}]`);
  log('');
}

writeOutput(__dirname);
