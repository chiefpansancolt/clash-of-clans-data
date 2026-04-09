import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const rr = home().troops().rootRider().first()!;

log('=== rootRider() ===');
log(`id:               ${rr.id}`);
log(`name:             ${rr.name}`);
log(`troopType:        ${rr.troopType}`);
log(`targetType:       ${rr.targetType}`);
log(`damageType:       ${rr.damageType}`);
log(`housingSpace:     ${rr.housingSpace}`);
log(`movementSpeed:    ${rr.movementSpeed}`);
log(`attackSpeed:      ${rr.attackSpeed}s`);
log(`wallAttackSpeed:  ${rr.wallAttackSpeed}s`);
log(`range:            ${rr.range}`);
log(`barracks lvl:     ${rr.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH  WallDPS  WallDPH      HP   Research Cost       Research Time  Lab  TH');
for (const lvl of rr.levels) {
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
  const w = lvl.stats.wall!;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(w.dps).padStart(7)}  ${String(w.damagePerShot).padStart(7)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', rr.images.icon);
for (const lvl of rr.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
