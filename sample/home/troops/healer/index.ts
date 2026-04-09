import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const h = home().troops().healer().first()!;

log('=== healer() ===');
log(`id:           ${h.id}`);
log(`name:         ${h.name}`);
log(`troopType:    ${h.troopType}`);
log(`targetType:   ${h.targetType}`);
log(`damageType:   ${h.damageType}`);
log(`housingSpace: ${h.housingSpace}`);
log(`movementSpeed:${h.movementSpeed}`);
log(`healSpeed:    ${h.attackSpeed}s`);
log(`range:        ${h.range}`);
log(`barracks lvl: ${h.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   HPS  HPP   HPS(Hero)  HPP(Hero)     HP   Research Cost       Research Time  Lab  TH');
for (const lvl of h.levels) {
  const rt =
    [
      lvl.researchTime.days ? `${lvl.researchTime.days}d` : '',
      lvl.researchTime.hours ? `${lvl.researchTime.hours}h` : '',
      lvl.researchTime.minutes ? `${lvl.researchTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.researchCost ? lvl.researchCost.toLocaleString() : 'N/A';
  const s = lvl.stats.normal;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(s.healingPerSecond).padStart(3)}  ${String(s.healingPerPulse).padStart(4)}  ${String(s.healingPerSecondOnHeroes).padStart(9)}  ${String(s.healingPerPulseOnHeroes).padStart(9)}  ${String(lvl.hitpoints).padStart(4)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', h.images.icon);
for (const lvl of h.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
