import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const s = home().spells().rageSpell().first()!;

log('=== rageSpell() ===');
log(`id:                   ${s.id}`);
log(`name:                 ${s.name}`);
log(`spellType:            ${s.spellType}`);
log(`radius:               ${s.radius} tiles`);
log(`housingSpace:         ${s.housingSpace}`);
log(`numberOfPulses:       ${s.numberOfPulses}`);
log(`timeBetweenPulses:    ${s.timeBetweenPulses}s`);
log(`boostTime:            ${s.boostTime}s`);
log(`spellFactory lvl:     ${s.spellFactoryLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl  DmgIncrease  SpeedInc  Research Cost  Research Time  Lab  TH');
for (const lvl of s.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.damageIncrease + '%').padStart(11)}  ${String(lvl.speedIncrease).padStart(8)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', s.images.icon);
log(images.report());

writeOutput(__dirname);
