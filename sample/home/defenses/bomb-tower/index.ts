import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const bt = home().defenses().bombTower().first()!;

log('=== bombTower() ===');
log(`id:       ${bt.id}`);
log(`name:     ${bt.name}`);
log(`base:     ${bt.base}`);
log(`category: ${bt.category}`);
log(`size:     ${bt.size}`);
log(`target:   ${bt.targetType}`);
log('');

log('--- Modes ---');
log('normal:', bt.modes.normal);
log('');

log('--- Available Per Town Hall ---');
for (const a of bt.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of bt.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)} | death: ${String(lvl.deathDamage).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of bt.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;
  images.check(`${base} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
