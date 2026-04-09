import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const st = home().traps().springTrap().first()!;

log('=== springTrap() ===');
log(`id:               ${st.id}`);
log(`name:             ${st.name}`);
log(`size:             ${st.size}`);
log(`triggerRadius:    ${st.triggerRadius} tile`);
log(`damageType:       ${st.damageType}`);
log(`targetType:       ${st.targetType}`);
log(`favoriteTarget:   ${st.favoriteTarget}`);
log(`specialAbility:   ${st.specialAbility}`);
log(`levels:           ${st.levels.length}`);
log('');
log('Level  Capacity  Damage     Cost          Build Time   XP     TH');
st.levels.forEach((l) => {
  const cost = l.buildCost.toLocaleString().padStart(12);
  const damage = String(l.damage).padStart(6);
  const capacity = String(l.springCapacity ?? '-').padStart(8);
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
    `  ${String(l.level).padStart(2)}  ${capacity}  ${damage} ${cost}  ${bt}  ${String(l.xpGained).padStart(5)}   ${l.townHallRequired}`,
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
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
