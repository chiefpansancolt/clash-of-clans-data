import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const at = home().defenses().archerTower().first()!;

log('=== archerTower() ===');
log(`id:       ${at.id}`);
log(`name:     ${at.name}`);
log(`base:     ${at.base}`);
log(`category: ${at.category}`);
log(`size:     ${at.size}`);
log(`target:   ${at.targetType}`);
log('');

log('--- Modes ---');
log('normal:', at.modes.normal);
if (at.modes.gearedUpFastAttack) log('gearedUpFastAttack:', at.modes.gearedUpFastAttack);
log('');

if (at.gearUp) {
  log('--- Gear Up Requirements ---');
  log(`cost:          ${at.gearUp.cost.toLocaleString()} ${at.gearUp.costResource}`);
  log(`time:          ${at.gearUp.time.days}d ${at.gearUp.time.hours}h`);
  log(`requires lvl:  ${at.gearUp.requiresLevel}`);
  log(
    `builder bldg:  ${at.gearUp.requiresBuilderBuilding} lv${at.gearUp.requiresBuilderBuildingLevel}`,
  );
  log('');
}

log('--- Available Per Town Hall ---');
for (const a of at.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of at.levels) {
  const fastAttack = lvl.stats.gearedUpFastAttack
    ? ` | fast dps: ${lvl.stats.gearedUpFastAttack.dps}`
    : '';
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)}${fastAttack} | xp: ${String(lvl.xpGained).padStart(3)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of at.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;

  images.check(`${base} normal`, lvl.images.normal);

  if (lvl.images.gearedUpNormal !== undefined) {
    images.check(`${base} gearedUpNormal`, lvl.images.gearedUpNormal);
  }

  if (lvl.images.gearedUpFastAttack !== undefined) {
    images.check(`${base} gearedUpFastAttack`, lvl.images.gearedUpFastAttack);
  }
}

log(images.report());

writeOutput(__dirname);
