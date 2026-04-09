import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const hh = home().troops().headhunter().first()!;

log('=== headhunter() ===');
log(`id:                   ${hh.id}`);
log(`name:                 ${hh.name}`);
log(`troopType:            ${hh.troopType}`);
log(`targetType:           ${hh.targetType}`);
log(`preferredTarget:      ${hh.preferredTarget}`);
log(`damageType:           ${hh.damageType}`);
log(`housingSpace:         ${hh.housingSpace}`);
log(`movementSpeed:        ${hh.movementSpeed}`);
log(`attackSpeed:          ${hh.attackSpeed}s`);
log(`range:                ${hh.range}`);
log(`barracks lvl:         ${hh.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log(
  'Lvl   DPS    DPH  DPSHero  PoisonDPS  SpeedDec  AttRateDec    HP  Research Cost    Research Time  Lab  TH',
);
for (const lvl of hh.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(n.dpsOnHeroes).padStart(7)}  ${String(lvl.poisonMaxDps).padStart(9)}  ${String(lvl.poisonSpeedDecrease + '%').padStart(8)}  ${String(lvl.poisonAttackRateDecrease + '%').padStart(10)}  ${String(lvl.hitpoints).padStart(4)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', hh.images.icon);
for (const lvl of hh.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
