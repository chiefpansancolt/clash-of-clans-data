import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const bh = home().defenses().buildersHut().first()!;

log('=== buildersHut() ===');
log(`id:       ${bh.id}`);
log(`name:     ${bh.name}`);
log(`base:     ${bh.base}`);
log(`category: ${bh.category}`);
log(`size:     ${bh.size}`);
log(`target:   ${bh.targetType}`);
log('');

log('--- Normal Mode (turret) ---');
const m = bh.modes.normal!;
log(`range ${m.range} tiles | attackSpeed ${m.attackSpeed}s | ${m.damageType}`);
log('');

log('--- Builder Mode ---');
const bm = bh.modes.builder!;
log(`range ${bm.range} tiles | repairSpeed ${bm.repairSpeed}s | movementSpeed ${bm.movementSpeed}`);
log('');

log('--- Available Per Town Hall ---');
for (const a of bh.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of bh.levels) {
  const st = lvl.stats.normal;
  const bst = lvl.stats.builder;
  if (bst) {
    log(
      `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(st.dps).padStart(3)} | repair/s: ${String(bst.repairPerSecond).padStart(2)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
    );
  } else {
    log(
      `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: N/A | repair/s: N/A | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
    );
  }
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

const imageVariants: Array<keyof (typeof bh.levels)[0]['images']> = ['normal', 'active'];

for (const lvl of bh.levels) {
  const base = `lv${String(lvl.level).padStart(2)}`;
  for (const variant of imageVariants) {
    const imgPath = lvl.images[variant];
    if (imgPath) {
      images.check(`${base} ${variant}`, imgPath);
    }
  }
}

log(images.report());

writeOutput(__dirname);
