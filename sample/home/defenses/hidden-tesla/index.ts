import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ht = home().defenses().hiddenTesla().first()!;

log('=== hiddenTesla() ===');
log(`id:       ${ht.id}`);
log(`name:     ${ht.name}`);
log(`base:     ${ht.base}`);
log(`category: ${ht.category}`);
log(`size:     ${ht.size}`);
log(`target:   ${ht.targetType}`);
log('');

log('--- Modes ---');
log('normal:', ht.modes.normal);
log('');

log('--- Available Per Town Hall ---');
for (const a of ht.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of ht.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of ht.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;
  images.check(`${base} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
