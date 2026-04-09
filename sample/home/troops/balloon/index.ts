import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const b = home().troops().balloon().first()!;

log('=== balloon() ===');
log(`id:           ${b.id}`);
log(`name:         ${b.name}`);
log(`troopType:    ${b.troopType}`);
log(`targetType:   ${b.targetType}`);
log(`damageType:   ${b.damageType}`);
log(`housingSpace: ${b.housingSpace}`);
log(`movementSpeed:${b.movementSpeed}`);
log(`attackSpeed:  ${b.attackSpeed}s`);
log(`range:        ${b.range}`);
log(`barracks lvl: ${b.barrackLevelRequired}`);
log('');

log('--- All Levels ---');
log('Lvl  DPS  DPH   Death Dmg  HP     Research Cost       Research Time  Lab  TH');
for (const lvl of b.levels) {
  const rt =
    [
      lvl.researchTime.days ? `${lvl.researchTime.days}d` : '',
      lvl.researchTime.hours ? `${lvl.researchTime.hours}h` : '',
      lvl.researchTime.minutes ? `${lvl.researchTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.researchCost ? lvl.researchCost.toLocaleString() : 'N/A';
  const death = String(lvl.stats.normal.deathDamage ?? 0).padStart(9);
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.stats.normal.dps).padStart(3)}  ${String(lvl.stats.normal.damagePerShot).padStart(4)}  ${death}  ${String(lvl.hitpoints).padStart(5)}  ${cost.padStart(16)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Super Troop: Rocket Balloon ---');
const st = b.superTroop!;
log(`id:           ${st.id}`);
log(`housingSpace: ${st.housingSpace}`);
log(`movementSpeed:${st.movementSpeed}`);
log(`attackSpeed:  ${st.attackSpeed}s`);
log(`range:        ${st.range}`);
log(`boostCost:    ${st.boostCost.toLocaleString()} ${st.boostCostResource}`);
log(`boostDuration:${st.boostDuration.days}d`);
log(`requires lvl: ${st.regularLevelRequired}`);
log(`specialAbility: ${st.specialAbility}`);
log('');

log('--- Super Levels ---');
for (const lvl of st.levels) {
  log(
    `  lv${lvl.level} | hp: ${lvl.hitpoints} | dps: ${lvl.stats.normal.dps} | dph: ${lvl.stats.normal.damagePerShot} | death dmg: ${lvl.stats.normal.deathDamage}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', b.images.icon);
for (const lvl of b.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}
images.check('super icon', st.images.icon);
for (const lvl of st.levels) {
  images.check(`super lv${lvl.level} normal`, lvl.images.normal);
}
log(images.report());

writeOutput(__dirname);
