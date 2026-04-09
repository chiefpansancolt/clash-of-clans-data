import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const et = home().troops().electroTitan().first()!;

log('=== electroTitan() ===');
log(`id:               ${et.id}`);
log(`name:             ${et.name}`);
log(`troopType:        ${et.troopType}`);
log(`targetType:       ${et.targetType}`);
log(`damageType:       ${et.damageType}`);
log(`housingSpace:     ${et.housingSpace}`);
log(`movementSpeed:    ${et.movementSpeed}`);
log(`attackSpeed:      ${et.attackSpeed}s`);
log(`range:            ${et.range}`);
log(`auraAttackSpeed:  ${et.auraAttackSpeed}s`);
log(`auraRange:        ${et.auraRange}`);
log(`barracks lvl:     ${et.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log(
  'Lvl  DPS(main)  DPH(main)  DPS(aura)  DPH(aura)      HP   Research Cost       Research Time  Lab  TH',
);
for (const lvl of et.levels) {
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
  const a = lvl.stats.aura!;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(8)}  ${String(n.damagePerShot).padStart(9)}  ${String(a.dps).padStart(9)}  ${String(a.damagePerShot).padStart(9)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', et.images.icon);
for (const lvl of et.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
