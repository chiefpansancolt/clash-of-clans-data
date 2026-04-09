import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const m = home().siegeMachines().logLauncher().first()!;

log('=== logLauncher() ===');
log(`id:                   ${m.id}`);
log(`name:                 ${m.name}`);
log(`category:             ${m.category}`);
log(`housingSpace:         ${m.housingSpace}`);
log(`workshopLevelReq:     ${m.workshopLevelRequired}`);
log(`preferredTarget:      ${m.preferredTarget}`);
log(`attackType:           ${m.attackType}`);
log(`movementSpeed:        ${m.movementSpeed}`);
log(`attackSpeed:          ${m.attackSpeed}s`);
log(`hpDecayPerSecond:     ${m.hpDecayPerSecond}`);
log('');

log('--- All Levels ---');
log('Lvl  DPS  DPH  vs Walls  Pt-Blank  Lifetime   HP  Research Cost  Research Time  Lab  TH');
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
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.damagePerSecond).padStart(3)}  ${String(lvl.damagePerHit).padStart(3)}  ${String(lvl.damageVsWalls).padStart(8)}  ${String(lvl.pointBlankDamage).padStart(8)}  ${String(lvl.lifetime).padStart(7)}s  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
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
