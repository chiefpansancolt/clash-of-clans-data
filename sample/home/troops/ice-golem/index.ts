import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ig = home().troops().iceGolem().first()!;

log('=== iceGolem() ===');
log(`id:                   ${ig.id}`);
log(`name:                 ${ig.name}`);
log(`troopType:            ${ig.troopType}`);
log(`targetType:           ${ig.targetType}`);
log(`preferredTarget:      ${ig.preferredTarget}`);
log(`damageType:           ${ig.damageType}`);
log(`housingSpace:         ${ig.housingSpace}`);
log(`movementSpeed:        ${ig.movementSpeed}`);
log(`attackSpeed:          ${ig.attackSpeed}s`);
log(`range:                ${ig.range}`);
log(`freezeRadiusOffense:  ${ig.freezeRadiusOnOffense} tiles`);
log(`freezeRadiusDefense:  ${ig.freezeRadiusOnDefense} tiles`);
log(`barracks lvl:         ${ig.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH      HP  FrzOff  FrzDef  Research Cost       Research Time  Lab  TH');
for (const lvl of ig.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(n.dps).padStart(4)}  ${String(n.damagePerShot).padStart(5)}  ${String(lvl.hitpoints).padStart(6)}  ${String(lvl.deathFreezeTimeOnOffense).padStart(6)}  ${String(lvl.deathFreezeTimeOnDefense).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', ig.images.icon);
const seenNormal = new Set<string>();
for (const lvl of ig.levels) {
  if (!seenNormal.has(lvl.images.normal)) {
    seenNormal.add(lvl.images.normal);
    images.check(`lv${lvl.level} normal`, lvl.images.normal);
  }
}
log(images.report());

writeOutput(__dirname);
