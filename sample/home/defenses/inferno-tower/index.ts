import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const it = home().defenses().infernoTower().first()!;

log('=== infernoTower() ===');
log(`id:       ${it.id}`);
log(`name:     ${it.name}`);
log(`base:     ${it.base}`);
log(`category: ${it.category}`);
log(`size:     ${it.size}`);
log(`target:   ${it.targetType}`);
log('');

log('--- Modes ---');
log('normal (single target):', it.modes.normal);
log('multiTarget:', it.modes.multiTarget);
log('');

log('--- Available Per Town Hall ---');
for (const a of it.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of it.levels) {
  const st = lvl.stats.normal;
  const mt = lvl.stats.multiTarget;
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | ST dps: ${String(st.dpsInitial).padStart(3)}→${String(st.dpsAfter1p5s).padStart(3)}→${String(st.dps).padStart(4)} | MT dps/target: ${String(mt?.dps).padStart(3)} (×${mt?.numberOfTargets}) | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

const imageVariants: Array<keyof (typeof it.levels)[0]['images']> = [
  'normal',
  'multiTarget',
  'singleTargetDepleted',
  'multiTargetDepleted',
];

for (const lvl of it.levels) {
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
