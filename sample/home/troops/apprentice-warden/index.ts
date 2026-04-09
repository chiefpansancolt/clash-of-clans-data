import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const aw = home().troops().apprenticeWarden().first()!;

log('=== apprenticeWarden() ===');
log(`id:                   ${aw.id}`);
log(`name:                 ${aw.name}`);
log(`troopType:            ${aw.troopType}`);
log(`targetType:           ${aw.targetType}`);
log(`damageType:           ${aw.damageType}`);
log(`housingSpace:         ${aw.housingSpace}`);
log(`movementSpeed:        ${aw.movementSpeed}`);
log(`attackSpeed:          ${aw.attackSpeed}s`);
log(`range:                ${aw.range}`);
log(`auraRange:            ${aw.auraRange}`);
log(`barracks lvl:         ${aw.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH  AuraHP    HP  Research Cost    Research Time  Lab  TH');
for (const lvl of aw.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(lvl.auraHpIncrease + '%').padStart(6)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', aw.images.icon);
for (const lvl of aw.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
