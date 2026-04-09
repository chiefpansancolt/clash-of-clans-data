import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const w = home().troops().wizard().first()!;

log('=== wizard() ===');
log(`id:           ${w.id}`);
log(`name:         ${w.name}`);
log(`troopType:    ${w.troopType}`);
log(`targetType:   ${w.targetType}`);
log(`damageType:   ${w.damageType}`);
log(`housingSpace: ${w.housingSpace}`);
log(`movementSpeed:${w.movementSpeed}`);
log(`attackSpeed:  ${w.attackSpeed}s`);
log(`range:        ${w.range}`);
log(`barracks lvl: ${w.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl  DPS   DPH     HP   Research Cost       Research Time   Lab  TH');
for (const lvl of w.levels) {
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
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.stats.normal.dps).padStart(3)}  ${String(lvl.stats.normal.damagePerShot).padStart(6)}  ${String(lvl.hitpoints).padStart(3)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Super Troop: Super Wizard ---');
const st = w.superTroop!;
log(`id:             ${st.id}`);
log(`housingSpace:   ${st.housingSpace}`);
log(`movementSpeed:  ${st.movementSpeed}`);
log(`attackSpeed:    ${st.attackSpeed}s`);
log(`range:          ${st.range}`);
log(`boostCost:      ${st.boostCost.toLocaleString()} ${st.boostCostResource}`);
log(`boostDuration:  ${st.boostDuration.days}d`);
log(`requires lvl:   ${st.regularLevelRequired}`);
log(`specialAbility: ${st.specialAbility}`);
log('');

log('--- Super Levels ---');
for (const lvl of st.levels) {
  log(
    `  lv${lvl.level} | hp: ${lvl.hitpoints} | dps: ${lvl.stats.normal.dps} | dph: ${lvl.stats.normal.damagePerShot} | chain dph: ${lvl.stats.normal.chainDamagePerShot}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', w.images.icon);
for (const lvl of w.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
images.check('super icon', st.images.icon);
for (const lvl of st.levels) {
  images.check(`super lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
