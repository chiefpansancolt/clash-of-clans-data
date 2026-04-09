import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ls = home().guardians().longshot().first()!;

log('=== longshot() ===');
log(`id:             ${ls.id}`);
log(`name:           ${ls.name}`);
log(`base:           ${ls.base}`);
log(`category:       ${ls.category}`);
log(`guardianType:   ${ls.guardianType}`);
log(`target:         ${ls.targetType}`);
log(`specialAbility: ${ls.specialAbility}`);
log('');

log('--- Mode ---');
const m = ls.mode;
log(`range: ${m.range} | attackSpeed: ${m.attackSpeed}s | damageType: ${m.damageType}`);
log(`damageRadius: ${m.damageRadius} | deathDamageRadius: ${m.deathDamageRadius}`);
log(
  `movementSpeed: ${m.movementSpeed} | patrolRadius: ${m.patrolRadius} | triggerRadius: ${m.triggerRadius}`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of ls.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of ls.levels) {
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | dps: ${lvl.stats.normal.dps} | dmg/hit: ${lvl.stats.normal.damagePerShot} | deathDmg: ${lvl.deathDamage} | cost: ${lvl.buildCost} Elixir | xp: ${lvl.xpGained}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of ls.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
