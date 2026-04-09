import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const m = home().siegeMachines().siegeBarracks().first()!;

log('=== siegeBarracks() ===');
log(`id:                   ${m.id}`);
log(`name:                 ${m.name}`);
log(`category:             ${m.category}`);
log(`housingSpace:         ${m.housingSpace}`);
log(`workshopLevelReq:     ${m.workshopLevelRequired}`);
log(`movementSpeed:        ${m.movementSpeed}`);
log(`lifetime:             ${m.lifetime}s`);
log('');

log('--- All Levels ---');
log('Lvl  P.E.K.K.As  Wizards     HP  Research Cost  Research Time  Lab  TH');
for (const lvl of m.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.pekkasSpawned ?? '').padStart(9)}  ${String(lvl.wizardsSpawned ?? '').padStart(7)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', m.images.icon);
for (const lvl of m.levels) {
  images.check(`level-${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
