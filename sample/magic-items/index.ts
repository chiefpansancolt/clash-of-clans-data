import { magicItems } from '../../src';
import { createLogger } from '../helper';

const { log, writeOutput } = createLogger();

const mi = magicItems();

log('=== magicItems() ===');
log('');
log(`Category    Count`);
log(`  snacks    ${mi.snacks().count()}`);
log(`  potions   ${mi.potions().count()}`);
log(`  books     ${mi.books().count()}`);
log(`  hammers   ${mi.hammers().count()}`);
log(`  utilities ${mi.utilities().count()}`);

writeOutput(__dirname);
