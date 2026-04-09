import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const y = home().troops().yeti().first()!;

log('=== yeti() ===');
log(`id:             ${y.id}`);
log(`name:           ${y.name}`);
log(`troopType:      ${y.troopType}`);
log(`targetType:     ${y.targetType}`);
log(`damageType:     ${y.damageType}`);
log(`housingSpace:   ${y.housingSpace}`);
log(`movementSpeed:  ${y.movementSpeed}`);
log(`attackSpeed:    ${y.attackSpeed}s`);
log(`range:          ${y.range}`);
log(`barracks lvl:   ${y.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl   DPS    DPH      HP   Research Cost       Research Time  Lab  TH');
for (const lvl of y.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(s.dps).padStart(4)}  ${String(s.damagePerShot).padStart(5)}  ${String(lvl.hitpoints).padStart(6)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

const st = y.superTroop!;
log('=== superTroop (Super Yeti) ===');
log(`id:             ${st.id}`);
log(`name:           ${st.name}`);
log(`housingSpace:   ${st.housingSpace}`);
log(`movementSpeed:  ${st.movementSpeed}`);
log(`attackSpeed:    ${st.attackSpeed}s`);
log(`range:          ${st.range}`);
log(`boostCost:      ${st.boostCost.toLocaleString()} ${st.boostCostResource}`);
log(`boostDuration:  ${st.boostDuration.days}d`);
log(`regularLvlReq:  ${st.regularLevelRequired}`);
log(`specialAbility: ${st.specialAbility}`);
log('');

log('--- Super Levels ---');
log('Lvl   DPS    DPH      HP   TH');
for (const lvl of st.levels) {
  const s = lvl.stats.normal;
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(s.dps).padStart(4)}  ${String(s.damagePerShot).padStart(5)}  ${String(lvl.hitpoints).padStart(6)}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', y.images.icon);
images.check('super-icon', st.images.icon);
const seenImages = new Set<string>();
for (const lvl of y.levels) {
  if (!seenImages.has(lvl.images.normal)) {
    seenImages.add(lvl.images.normal);
    images.check(`lv${lvl.level} normal`, lvl.images.normal);
  }
}
const seenSuperImages = new Set<string>();
for (const lvl of st.levels) {
  if (!seenSuperImages.has(lvl.images.normal)) {
    seenSuperImages.add(lvl.images.normal);
    images.check(`super lv${lvl.level}`, lvl.images.normal);
  }
}
log(images.report());

writeOutput(__dirname);
