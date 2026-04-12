import { magicItems } from '../../../src';
import { InstantUpgradeEffect } from '../../../src/types';
import { checkImage, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const hammers = magicItems().hammers();

log('=== magicItems().hammers() ===');
log(`Total: ${hammers.count()}`);
log('');

for (const h of hammers.get()) {
  log(`--- ${h.name} ---`);
  log(`id:          ${h.id}`);
  log(`itemType:    ${h.itemType}`);
  log(`description: ${h.description}`);

  const e = h.effect as InstantUpgradeEffect;
  log(`effect:      ${e.type} | applies to: ${e.appliesTo}`);

  const ok = checkImage(h.id, h.image);
  log(`image:       ${h.image} [${ok ? 'OK' : 'MISSING'}]`);
  log('');
}

writeOutput(__dirname);
