import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const mg = home().troops().meteorGolem().first()!;

log('=== meteorGolem() ===');
log(`id:               ${mg.id}`);
log(`name:             ${mg.name}`);
log(`troopType:        ${mg.troopType}`);
log(`targetType:       ${mg.targetType}`);
log(`damageType:       ${mg.damageType}`);
log(`housingSpace:     ${mg.housingSpace}`);
log(`movementSpeed:    ${mg.movementSpeed}`);
log(`attackSpeed:      ${mg.attackSpeed}s`);
log(`range:            ${mg.range}`);
log(`barracks lvl:     ${mg.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH      HP   Research Cost       Research Time  Lab  TH');
for (const lvl of mg.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', mg.images.icon);
for (const lvl of mg.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
