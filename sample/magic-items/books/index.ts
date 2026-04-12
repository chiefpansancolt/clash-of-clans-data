import { magicItems } from '../../../src';
import { InstantCompleteEffect } from '../../../src/types';
import { checkImage, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const books = magicItems().books();

log('=== magicItems().books() ===');
log(`Total: ${books.count()}`);
log('');

for (const b of books.get()) {
  log(`--- ${b.name} ---`);
  log(`id:          ${b.id}`);
  log(`itemType:    ${b.itemType}`);
  log(`description: ${b.description}`);

  const e = b.effect as InstantCompleteEffect;
  log(`effect:      ${e.type} | applies to: ${e.appliesTo}`);

  const ok = checkImage(b.id, b.image);
  log(`image:       ${b.image} [${ok ? 'OK' : 'MISSING'}]`);
  log('');
}

writeOutput(__dirname);
