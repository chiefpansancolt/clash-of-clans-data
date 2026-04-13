import { magicItems } from '../../../src';
import { ObstacleMoveEffect, StarBonusResetEffect, WallUpgradeEffect } from '../../../src/types';
import { checkImage, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const utilities = magicItems().utilities();

log('=== magicItems().utilities() ===');
log(`Total: ${utilities.count()}`);
log('');

for (const u of utilities.get()) {
  log(`--- ${u.name} ---`);
  log(`id:          ${u.id}`);
  log(`itemType:    ${u.itemType}`);
  log(`description: ${u.description}`);

  const e = u.effect;
  if (e.type === 'obstacle-move') {
    const om = e as ObstacleMoveEffect;
    log(`effect:      ${om.type} | targets: ${om.targets}`);
  } else if (e.type === 'star-bonus-reset') {
    const sb = e as StarBonusResetEffect;
    log(`effect:      ${sb.type} | applies to: ${sb.appliesTo}`);
  } else if (e.type === 'wall-upgrade') {
    const wu = e as WallUpgradeEffect;
    log(
      `effect:      ${wu.type} | home village: ${wu.homeVillageGoldEquivalent.toLocaleString()} gold | builder base: ${wu.builderBaseGoldEquivalent.toLocaleString()} gold`,
    );
  }

  const ok = checkImage(u.id, u.image);
  log(`image:       ${u.image} [${ok ? 'OK' : 'MISSING'}]`);
  log('');
}

writeOutput(__dirname);
