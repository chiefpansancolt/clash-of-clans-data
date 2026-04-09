import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const m = home().defenses().mortar().first()!;

log('=== mortar() ===');
log(`id:       ${m.id}`);
log(`name:     ${m.name}`);
log(`base:     ${m.base}`);
log(`category: ${m.category}`);
log(`size:     ${m.size}`);
log(`target:   ${m.targetType}`);
log('');

log('--- Modes ---');
log('normal:', m.modes.normal);
if (m.modes.gearedUpBurst) log('gearedUpBurst:', m.modes.gearedUpBurst);
log('');

if (m.gearUp) {
  log('--- Gear Up Requirements ---');
  log(`cost:          ${m.gearUp.cost.toLocaleString()} ${m.gearUp.costResource}`);
  log(`time:          ${m.gearUp.time.days}d ${m.gearUp.time.hours}h`);
  log(`requires lvl:  ${m.gearUp.requiresLevel}`);
  log(
    `builder bldg:  ${m.gearUp.requiresBuilderBuilding} lv${m.gearUp.requiresBuilderBuildingLevel}`,
  );
  log('');
}

log('--- Available Per Town Hall ---');
for (const a of m.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of m.levels) {
  const burst = lvl.stats.gearedUpBurst ? ` | burst dps: ${lvl.stats.gearedUpBurst.dps}` : '';
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)}${burst} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of m.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;
  images.check(`${base} normal`, lvl.images.normal);
  if (lvl.images.gearedUpNormal !== undefined) {
    images.check(`${base} gearedUpNormal`, lvl.images.gearedUpNormal);
  }
  if (lvl.images.gearedUpBurst !== undefined) {
    images.check(`${base} gearedUpBurst`, lvl.images.gearedUpBurst);
  }
}

log(images.report());

writeOutput(__dirname);
