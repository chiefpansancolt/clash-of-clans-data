import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const m = home().defenses().monolith().first()!;

log('=== monolith() ===');
log(`id:       ${m.id}`);
log(`name:     ${m.name}`);
log(`base:     ${m.base}`);
log(`category: ${m.category}`);
log(`size:     ${m.size}`);
log(`target:   ${m.targetType}`);
log('');

log('--- Mode ---');
const mode = m.modes.normal!;
log(`normal: range ${mode.range} tiles | attackSpeed ${mode.attackSpeed}s | ${mode.damageType}`);
log('');

log('--- Available Per Town Hall ---');
for (const a of m.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of m.levels) {
  const st = lvl.stats.normal;
  const tag = lvl.supercharge ? `[SC${lvl.level}]` : '     ';
  log(
    `lv${String(lvl.level).padStart(2)}${tag} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(st.dps).padStart(3)} | dmg/shot: ${String(st.damagePerShot).padStart(5)} | bonus: ${String(st.bonusDamagePercent).padStart(2)}% | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of m.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;
  images.check(`${base} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
