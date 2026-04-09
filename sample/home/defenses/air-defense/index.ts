import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ad = home().defenses().airDefense().first()!;

log('=== airDefense() ===');
log(`id:       ${ad.id}`);
log(`name:     ${ad.name}`);
log(`base:     ${ad.base}`);
log(`category: ${ad.category}`);
log(`size:     ${ad.size}`);
log(`target:   ${ad.targetType}`);
log('');

log('--- Modes ---');
log('normal:', ad.modes.normal);
log('');

log('--- Available Per Town Hall ---');
for (const a of ad.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of ad.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of ad.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;
  images.check(`${base} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
