import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const mat = home().defenses().multiArcherTower().first()!;

log('=== multiArcherTower() ===');
log(`id:       ${mat.id}`);
log(`name:     ${mat.name}`);
log(`base:     ${mat.base}`);
log(`category: ${mat.category}`);
log(`size:     ${mat.size}`);
log(`target:   ${mat.targetType}`);
log('');

log('--- Mode ---');
const mode = mat.modes.normal!;
log(
  `normal: range ${mode.range} tiles | attackSpeed ${mode.attackSpeed}s | ${mode.damageType} | ${mode.numberOfTargets} targets`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of mat.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of mat.levels) {
  const st = lvl.stats.normal;
  const tag = lvl.supercharge ? `[SC${lvl.level}]` : '     ';
  log(
    `lv${String(lvl.level).padStart(2)} ${tag} | hp: ${String(lvl.hitpoints).padStart(5)} | dps/archer: ${String(st.dps).padStart(3)} | dmg/shot: ${String(st.damagePerShot).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of mat.levels) {
  const base = `lv${String(lvl.level).padStart(2)}${lvl.supercharge ? '[SC]' : ''}`;
  images.check(`${base} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
