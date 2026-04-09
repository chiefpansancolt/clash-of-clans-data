import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const c = home().defenses().cannon().first()!;

log('=== cannon() ===');
log(`id:       ${c.id}`);
log(`name:     ${c.name}`);
log(`base:     ${c.base}`);
log(`category: ${c.category}`);
log(`size:     ${c.size}`);
log(`target:   ${c.targetType}`);
log('');

log('--- Modes ---');
log('normal:', c.modes.normal);
if (c.modes.gearedUpBurst) log('gearedUpBurst:', c.modes.gearedUpBurst);
log('');

if (c.gearUp) {
  log('--- Gear Up Requirements ---');
  log(`cost:          ${c.gearUp.cost.toLocaleString()} ${c.gearUp.costResource}`);
  log(`time:          ${c.gearUp.time.days}d ${c.gearUp.time.hours}h`);
  log(`requires lvl:  ${c.gearUp.requiresLevel}`);
  log(
    `builder bldg:  ${c.gearUp.requiresBuilderBuilding} lv${c.gearUp.requiresBuilderBuildingLevel}`,
  );
  log('');
}

log('--- Available Per Town Hall ---');
for (const a of c.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of c.levels) {
  const burst = lvl.stats.gearedUpBurst ? ` | burst dps: ${lvl.stats.gearedUpBurst.dps}` : '';
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)}${burst} | xp: ${String(lvl.xpGained).padStart(3)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of c.levels) {
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
