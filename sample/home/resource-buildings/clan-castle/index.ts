import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const cc = home().resourceBuildings().clanCastle().first()!;

log('=== clanCastle() ===');
log(`id:            ${cc.id}`);
log(`name:          ${cc.name}`);
log(`base:          ${cc.base}`);
log(`category:      ${cc.category}`);
log(`size:          ${cc.size}`);
log(`triggerRadius: ${cc.triggerRadius}`);
log(`levels:        ${cc.levels.length}`);
log('');

log('Level  HP    Troops  Spells  Siege  Lab Cap  Build Cost      Build Time    XP    TH');
cc.levels.forEach((l) => {
  const bt =
    [
      l.buildTime.days ? `${l.buildTime.days}d` : '',
      l.buildTime.hours ? `${l.buildTime.hours}h` : '',
      l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
      l.buildTime.seconds ? `${l.buildTime.seconds}s` : '',
    ]
      .filter(Boolean)
      .join(' ')
      .padStart(10) || '   instant';
  const cost = l.buildCost.toLocaleString().padStart(13);
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(4)}  ${String(l.troopCapacity).padStart(6)}  ${String(l.spellCapacity).padStart(6)}  ${String(l.siegeMachineCapacity).padStart(5)}  ${String(l.labLevelCap).padStart(7)}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Clan Castle Available per Town Hall ---');
log('TH  Count');
cc.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(3)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
cc.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
