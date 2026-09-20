import { home } from '../../../../src';
import type { LoggerGuardian } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const logger = home().guardians().logger().first()! as LoggerGuardian;

log('=== logger() ===');
log(`id:               ${logger.id}`);
log(`name:             ${logger.name}`);
log(`base:              ${logger.base}`);
log(`category:          ${logger.category}`);
log(`guardianType:      ${logger.guardianType}`);
log(`target:            ${logger.targetType}`);
log(`specialAbility:    ${logger.specialAbility}`);
log('');

log('--- Mode ---');
const m = logger.mode;
log(`range: ${m.range} | attackSpeed: ${m.attackSpeed}s | damageType: ${m.damageType}`);
log(
  `movementSpeed: ${m.movementSpeed} | searchRadius: ${m.searchRadius} | triggerRadius: ${m.triggerRadius} | pushbackRange: ${m.pushbackRange}`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of logger.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of logger.levels) {
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | dps: ${lvl.stats.normal.dps} | dmg/hit: ${lvl.stats.normal.damagePerShot} | cost: ${lvl.buildCost} Elixir | xp: ${lvl.xpGained}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
for (const lvl of logger.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}

log(images.report());
writeOutput(__dirname);
