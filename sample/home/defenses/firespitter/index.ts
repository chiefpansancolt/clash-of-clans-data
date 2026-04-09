import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const fs_ = home().defenses().firespitter().first()!;

log('=== firespitter() ===');
log(`id:       ${fs_.id}`);
log(`name:     ${fs_.name}`);
log(`base:     ${fs_.base}`);
log(`category: ${fs_.category}`);
log(`size:     ${fs_.size}`);
log(`target:   ${fs_.targetType}`);
log('');

log('--- Mode ---');
const mode = fs_.modes.normal!;
log(
  `normal: range ${mode.range} tiles | attackSpeed ${mode.attackSpeed}s | ${mode.damageType} | ${mode.shotsPerBurst} shots | timeBetweenBursts ${mode.timeBetweenBursts}s`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of fs_.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of fs_.levels) {
  const st = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)}      | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(st.dps).padStart(3)} | dmg/shot: ${String(st.damagePerShot).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of fs_.levels) {
  images.check(`lv${lvl.level} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
