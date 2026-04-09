import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const st = home().traps().skeletonTrap().first()!;

log('=== skeletonTrap() ===');
log(`id:             ${st.id}`);
log(`name:           ${st.name}`);
log(`size:           ${st.size}`);
log(`triggerRadius:  ${st.triggerRadius} tiles`);
log(`damageType:     ${st.damageType}`);
log(`targetType:     ${st.targetType} (configurable)`);
log(`specialAbility: ${st.specialAbility}`);
log(`levels:         ${st.levels.length}`);
log('');
log('Level  Spawned  SkelLvl  Cost          Build Time   XP     TH');
st.levels.forEach((l) => {
  const cost = l.buildCost.toLocaleString().padStart(12);
  const bt =
    [
      l.buildTime.days ? `${l.buildTime.days}d` : '',
      l.buildTime.hours ? `${l.buildTime.hours}h` : '',
      l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ')
      .padStart(10) || '   instant';
  log(
    `  ${String(l.level).padStart(2)}      ${String(l.spawnedUnits).padStart(2)}        ${String(l.skeletonLevel).padStart(2)} ${cost}  ${bt}  ${String(l.xpGained).padStart(5)}   ${l.townHallRequired}`,
  );
});
log('');

log('--- Available per Town Hall ---');
log('TH  Count');
st.availablePerTownHall.forEach((e) => {
  log(`  ${String(e.townHallLevel).padStart(2)}   ${String(e.count).padStart(2)}`);
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
st.levels.forEach((l) => {
  images.check(`level ${l.level} (normal)`, l.images.normal);
  if (l.images.air) {
    images.check(`level ${l.level} (air)`, l.images.air);
  }
});
log(images.report());

writeOutput(__dirname);
