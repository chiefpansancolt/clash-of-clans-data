import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const p = home().troops().pekka().first()!;

log('=== pekka() ===');
log(`id:           ${p.id}`);
log(`name:         ${p.name}`);
log(`troopType:    ${p.troopType}`);
log(`targetType:   ${p.targetType}`);
log(`damageType:   ${p.damageType}`);
log(`housingSpace: ${p.housingSpace}`);
log(`movementSpeed:${p.movementSpeed}`);
log(`attackSpeed:  ${p.attackSpeed}s`);
log(`range:        ${p.range}`);
log(`barracks lvl: ${p.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH      HP   Research Cost       Research Time  Lab  TH');
for (const lvl of p.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(s.dps).padStart(4)}  ${String(s.damagePerShot).padStart(6)}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', p.images.icon);
for (const lvl of p.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
