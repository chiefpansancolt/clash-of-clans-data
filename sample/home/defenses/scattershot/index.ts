import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const ss = home().defenses().scattershot().first()!;

log('=== scattershot() ===');
log(`id:       ${ss.id}`);
log(`name:     ${ss.name}`);
log(`base:     ${ss.base}`);
log(`category: ${ss.category}`);
log(`size:     ${ss.size}`);
log(`target:   ${ss.targetType}`);
log('');

log('--- Mode ---');
const m = ss.modes.normal!;
log(
  `normal: range ${m.minRange}-${m.range} tiles | attackSpeed ${m.attackSpeed}s | ${m.damageType} | ${m.numberOfRounds} rounds`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of ss.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of ss.levels) {
  const st = lvl.stats.normal;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(st.dps).padStart(4)} | dmg/shot: ${String(st.damagePerShotMin).padStart(3)}-${String(st.damagePerShot).padStart(3)} | splash: ${String(st.splashDamageMin).padStart(3)}-${String(st.splashDamageMax).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

const imageVariants: Array<keyof (typeof ss.levels)[0]['images']> = ['normal', 'depleted'];

for (const lvl of ss.levels) {
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
