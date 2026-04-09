import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const f = home().troops().furnace().first()!;

log('=== furnace() ===');
log(`id:                   ${f.id}`);
log(`name:                 ${f.name}`);
log(`troopType:            ${f.troopType}`);
log(`targetType:           ${f.targetType}`);
log(`damageType:           ${f.damageType}`);
log(`housingSpace:         ${f.housingSpace}`);
log(`movementSpeed:        ${f.movementSpeed} (cannot move)`);
log(`lifetime:             ${f.lifetime}s`);
log(`barracks lvl:         ${f.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl  Firemites     HP  Research Cost    Research Time  Lab  TH');
for (const lvl of f.levels) {
  const rt =
    [
      lvl.researchTime.days ? `${lvl.researchTime.days}d` : '',
      lvl.researchTime.hours ? `${lvl.researchTime.hours}h` : '',
      lvl.researchTime.minutes ? `${lvl.researchTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.researchCost ? lvl.researchCost.toLocaleString() : 'N/A';
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.firemitesSpawned).padStart(9)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', f.images.icon);
for (const lvl of f.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
