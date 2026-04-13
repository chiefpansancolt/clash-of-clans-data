import { magicItems } from '../../../src';
import {
  ClockTowerBoostEffect,
  ResourceCollectorBoostEffect,
  SuperTroopEffect,
  TimeReductionEffect,
  UnitLevelBoostEffect,
} from '../../../src/types';
import { checkImage, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const potions = magicItems().potions();

log('=== magicItems().potions() ===');
log(`Total: ${potions.count()}`);
log('');

for (const p of potions.get()) {
  log(`--- ${p.name} ---`);
  log(`id:          ${p.id}`);
  log(`itemType:    ${p.itemType}`);
  log(`description: ${p.description}`);

  const e = p.effect;
  if (e.type === 'time-reduction') {
    const te = e as TimeReductionEffect;
    log(
      `effect:      ${te.type} | ${te.multiplier}x speed | ${te.durationHours}h | applies to: ${te.appliesTo}`,
    );
  } else if (e.type === 'unit-level-boost') {
    const ub = e as UnitLevelBoostEffect;
    log(
      `effect:      ${ub.type} | boost to: ${ub.boostTo} | ${ub.durationHours}h | applies to: ${ub.appliesTo.join(', ')}`,
    );
  } else if (e.type === 'resource-collector-boost') {
    const rb = e as ResourceCollectorBoostEffect;
    log(`effect:      ${rb.type} | ${rb.multiplier}x speed | ${rb.durationDays}d`);
  } else if (e.type === 'clock-tower-boost') {
    const ct = e as ClockTowerBoostEffect;
    log(`effect:      ${ct.type} | ${ct.durationMinutes}m`);
  } else if (e.type === 'super-troop') {
    const st = e as SuperTroopEffect;
    log(`effect:      ${st.type} | ${st.durationDays}d`);
  }

  const ok = checkImage(p.id, p.image);
  log(`image:       ${p.image} [${ok ? 'OK' : 'MISSING'}]`);
  log('');
}

writeOutput(__dirname);
