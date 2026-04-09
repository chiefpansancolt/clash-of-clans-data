import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const m = home().siegeMachines().stoneSlammer().first()!;

log('=== stoneSlammer() ===');
log(`id:                   ${m.id}`);
log(`name:                 ${m.name}`);
log(`category:             ${m.category}`);
log(`housingSpace:         ${m.housingSpace}`);
log(`workshopLevelReq:     ${m.workshopLevelRequired}`);
log(`preferredTarget:      ${m.preferredTarget}`);
log(`attackType:           ${m.attackType}`);
log(`movementSpeed:        ${m.movementSpeed}`);
log(`attackSpeed:          ${m.attackSpeed}s`);
log('');

log('--- All Levels ---');
log('Lvl   DPS   DPH  DeathHB1  DeathHB2     HP  Research Cost  Research Time  Lab  TH');
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
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.damagePerSecond).padStart(5)}  ${String(lvl.damagePerHit).padStart(5)}  ${String(lvl.damageWhenDestroyedHitbox1 ?? '').padStart(8)}  ${String(lvl.damageWhenDestroyedHitbox2 ?? '').padStart(8)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
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
