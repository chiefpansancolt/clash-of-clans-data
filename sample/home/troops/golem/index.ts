import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const g = home().troops().golem().first()!;

log('=== golem() ===');
log(`id:               ${g.id}`);
log(`name:             ${g.name}`);
log(`troopType:        ${g.troopType}`);
log(`targetType:       ${g.targetType}`);
log(`damageType:       ${g.damageType}`);
log(`housingSpace:     ${g.housingSpace}`);
log(`movementSpeed:    ${g.movementSpeed}`);
log(`attackSpeed:      ${g.attackSpeed}s`);
log(`range:            ${g.range}`);
log(`barracks lvl:     ${g.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH   DeathDmg  Golemites      HP   Research Cost       Research Time  Lab  TH');
for (const lvl of g.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(n.deathDamage).padStart(8)}  ${String(lvl.golemitesSpawned).padStart(9)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', g.images.icon);
const seen = new Set<string>();
for (const lvl of g.levels) {
  if (!seen.has(lvl.images.normal)) {
    seen.add(lvl.images.normal);
    images.check(`lv${lvl.level} normal`, lvl.images.normal);
  }
}
log(images.report());

writeOutput(__dirname);
