import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const dr = home().troops().dragonRider().first()!;

log('=== dragonRider() ===');
log(`id:             ${dr.id}`);
log(`name:           ${dr.name}`);
log(`troopType:      ${dr.troopType}`);
log(`targetType:     ${dr.targetType}`);
log(`damageType:     ${dr.damageType}`);
log(`housingSpace:   ${dr.housingSpace}`);
log(`movementSpeed:  ${dr.movementSpeed}`);
log(`attackSpeed:    ${dr.attackSpeed}s`);
log(`range:          ${dr.range}`);
log(`barracks lvl:   ${dr.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH  DeathDmg      HP   Research Cost       Research Time  Lab  TH');
for (const lvl of dr.levels) {
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
images.check('icon', dr.images.icon);
for (const lvl of dr.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
