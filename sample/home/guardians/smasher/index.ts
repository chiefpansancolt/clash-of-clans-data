import { home } from '../../../../src';
import type { SmasherGuardian } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const sm = home().guardians().smasher().first()! as SmasherGuardian;

log('=== smasher() ===');
log(`id:                ${sm.id}`);
log(`name:              ${sm.name}`);
log(`base:              ${sm.base}`);
log(`category:          ${sm.category}`);
log(`guardianType:      ${sm.guardianType}`);
log(`target:            ${sm.targetType}`);
log(`specialAbility:    ${sm.specialAbility}`);
log(`rageSpeedIncrease: ${sm.rageSpeedIncrease}`);
log(`rageDamageIncrease:${sm.rageDamageIncrease}%`);
log('');

log('--- Mode ---');
const m = sm.mode;
log(`range: ${m.range} | attackSpeed: ${m.attackSpeed}s | damageType: ${m.damageType}`);
log(
  `damageRadius: ${m.damageRadius} | movementSpeed: ${m.movementSpeed} | searchRadius: ${m.searchRadius} | triggerRadius: ${m.triggerRadius}`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of sm.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of sm.levels) {
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | dps: ${lvl.stats.normal.dps} | dmg/hit: ${lvl.stats.normal.damagePerShot} | cost: ${lvl.buildCost} Elixir | xp: ${lvl.xpGained}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of sm.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
