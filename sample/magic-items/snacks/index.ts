import { magicItems } from '../../../src';
import { ClanCastleEffect, CombatBoostEffect, TimeReductionEffect } from '../../../src/types';
import { checkImage, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const snacks = magicItems().snacks();

log('=== magicItems().snacks() ===');
log(`Total: ${snacks.count()}`);
log('');

for (const s of snacks.get()) {
  log(`--- ${s.name} ---`);
  log(`id:          ${s.id}`);
  log(`itemType:    ${s.itemType}`);
  log(`description: ${s.description}`);

  const e = s.effect;
  if (e.type === 'time-reduction') {
    const te = e as TimeReductionEffect;
    log(
      `effect:      ${te.type} | ${te.multiplier}x speed | ${te.durationHours}h | applies to: ${te.appliesTo}`,
    );
  } else if (e.type === 'combat-boost') {
    const ce = e as CombatBoostEffect;
    log(
      `effect:      ${ce.type} | boost to: ${ce.boostTo} | ${ce.battles} battles | applies to: ${ce.appliesTo.join(', ')}`,
    );
  } else if (e.type === 'clan-castle') {
    const cc = e as ClanCastleEffect;
    log(`effect:      ${cc.type} | ${cc.durationHours}h | applies to: ${cc.appliesTo}`);
  }

  const ok = checkImage(s.id, s.image);
  log(`image:       ${s.image} [${ok ? 'OK' : 'MISSING'}]`);
  log('');
}

writeOutput(__dirname);
