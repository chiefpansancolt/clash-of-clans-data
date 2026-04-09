import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ed = home().troops().electroDragon().first()!;

log('=== electroDragon() ===');
log(`id:             ${ed.id}`);
log(`name:           ${ed.name}`);
log(`troopType:      ${ed.troopType}`);
log(`targetType:     ${ed.targetType}`);
log(`damageType:     ${ed.damageType}`);
log(`housingSpace:   ${ed.housingSpace}`);
log(`movementSpeed:  ${ed.movementSpeed}`);
log(`attackSpeed:    ${ed.attackSpeed}s`);
log(`range:          ${ed.range}`);
log(`barracks lvl:   ${ed.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH  DeathDmg(x6)      HP   Research Cost       Research Time  Lab  TH');
for (const lvl of ed.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(s.dps).padStart(4)}  ${String(s.damagePerShot).padStart(5)}  ${String(s.deathDamage).padStart(8)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', ed.images.icon);
const seenImages = new Set<string>();
for (const lvl of ed.levels) {
  if (!seenImages.has(lvl.images.normal)) {
    seenImages.add(lvl.images.normal);
    images.check(`lv${lvl.level} normal`, lvl.images.normal);
  }
}
log(images.report());

writeOutput(__dirname);
