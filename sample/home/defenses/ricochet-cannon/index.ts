import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const rc = home().defenses().ricochetCannon().first()!;

log('=== ricochetCannon() ===');
log(`id:       ${rc.id}`);
log(`name:     ${rc.name}`);
log(`base:     ${rc.base}`);
log(`category: ${rc.category}`);
log(`size:     ${rc.size}`);
log(`target:   ${rc.targetType}`);
log('');

log('--- Mode ---');
const mode = rc.modes.normal!;
log(
  `normal: range ${mode.range} tiles | attackSpeed ${mode.attackSpeed}s | ${mode.damageType} | chainRange ${mode.chainRange} tiles`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of rc.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of rc.levels) {
  const st = lvl.stats.normal;
  const tag = lvl.supercharge ? `[SC${lvl.level}]` : '     ';
  log(
    `lv${String(lvl.level).padStart(2)} ${tag} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(st.dps).padStart(3)} | dmg/shot: ${String(st.damagePerShot).padStart(6)} | chain: ${String(st.secondaryChainDamagePerShot).padStart(6)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of rc.levels) {
  const base = `lv${String(lvl.level).padStart(2)}${lvl.supercharge ? '[SC]' : ''}`;
  images.check(`${base} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
