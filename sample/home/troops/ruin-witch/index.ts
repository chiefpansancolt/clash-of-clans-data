import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const rw = home().troops().ruinWitch().first()!;

log('=== ruinWitch() ===');
log(`id:                         ${rw.id}`);
log(`name:                       ${rw.name}`);
log(`troopType:                  ${rw.troopType}`);
log(`targetType:                 ${rw.targetType}`);
log(`damageType:                 ${rw.damageType}`);
log(`housingSpace:               ${rw.housingSpace}`);
log(`movementSpeed:              ${rw.movementSpeed}`);
log(`attackSpeed:                ${rw.attackSpeed}s`);
log(`range:                      ${rw.range}`);
log(`preferredTarget:            ${rw.preferredTarget}`);
log(`specialAbility:             ${rw.specialAbility}`);
log(`barracks lvl:               ${rw.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log(
  'Lvl   DPS   DPH     HP  Knights  KnightLvl   Research Cost       Research Time  Lab  TH',
);

for (const lvl of rw.levels) {
  const rt =
    [
      lvl.researchTime.days ? `${lvl.researchTime.days}d` : '',
      lvl.researchTime.hours ? `${lvl.researchTime.hours}h` : '',
      lvl.researchTime.minutes ? `${lvl.researchTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';

  const cost = lvl.researchCost
    ? lvl.researchCost.toLocaleString()
    : 'N/A';

  const n = lvl.stats.normal;

  log(
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(4)}  ${String(lvl.hitpoints).padStart(6)}  ${String(lvl.maximumRuinKnightsSummoned).padStart(7)}  ${String(lvl.ruinKnightLevel).padStart(9)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}

log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', rw.images.icon);

for (const lvl of rw.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);