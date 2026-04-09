import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const d = home().troops().druid().first()!;

log('=== druid() ===');
log(`id:                   ${d.id}`);
log(`name:                 ${d.name}`);
log(`troopType:            ${d.troopType}`);
log(`targetType:           ${d.targetType}`);
log(`damageType:           ${d.damageType}`);
log(`housingSpace:         ${d.housingSpace}`);
log(`movementSpeed:        ${d.movementSpeed}`);
log(`attackSpeed:          ${d.attackSpeed}s`);
log(`range:                ${d.range}`);
log(`numberOfTargets:      ${d.numberOfTargets}`);
log(`evolveTime:           ${d.evolveTime}s`);
log(`specialAbility:       ${d.specialAbility}`);
log(`barracks lvl:         ${d.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl    HPS    HPH  HeroHPS    HP  Research Cost    Research Time  Lab  TH');
for (const lvl of d.levels) {
  const rt =
    [
      lvl.researchTime.days ? `${lvl.researchTime.days}d` : '',
      lvl.researchTime.hours ? `${lvl.researchTime.hours}h` : '',
      lvl.researchTime.minutes ? `${lvl.researchTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.researchCost ? lvl.researchCost.toLocaleString() : 'N/A';
  const n = lvl.stats.normal;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(n.healingPerSecond).padStart(4)}  ${String(n.healingPerPulse).padStart(4)}  ${String(n.healingPerSecondOnHeroes).padStart(7)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', d.images.icon);
const uniquePaths = [...new Set(d.levels.map((l) => l.images.normal))];
for (const imgPath of uniquePaths) {
  const label = imgPath.split('/').pop()!;
  images.check(label, imgPath);
}
log(images.report());

writeOutput(__dirname);
