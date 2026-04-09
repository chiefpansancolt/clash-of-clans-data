import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const as = home().defenses().airSweeper().first()!;

log('=== airSweeper() ===');
log(`id:       ${as.id}`);
log(`name:     ${as.name}`);
log(`base:     ${as.base}`);
log(`category: ${as.category}`);
log(`size:     ${as.size}`);
log(`target:   ${as.targetType}`);
log('');

log('--- Modes ---');
log('normal:', as.modes.normal);
log('');

log('--- Available Per Town Hall ---');
for (const a of as.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of as.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | push: ${lvl.stats.normal.pushStrength} tiles | xp: ${String(lvl.xpGained).padStart(3)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of as.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;
  images.check(`${base} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
