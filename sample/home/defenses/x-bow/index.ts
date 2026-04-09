import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const xb = home().defenses().xBow().first()!;

log('=== xBow() ===');
log(`id:       ${xb.id}`);
log(`name:     ${xb.name}`);
log(`base:     ${xb.base}`);
log(`category: ${xb.category}`);
log(`size:     ${xb.size}`);
log(`target:   ${xb.targetType}`);
log('');

log('--- Modes ---');
log('normal (ground):', xb.modes.normal);
log('airAndGround:', xb.modes.airAndGround);
log('');

log('--- Available Per Town Hall ---');
for (const a of xb.availablePerTownHall) {
  const count =
    a.countAfterMerges !== undefined ? `${a.count}/${a.countAfterMerges}` : `${a.count}`;
  log(`  TH${a.townHallLevel}: ${count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of xb.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | dps: ${String(lvl.stats.normal.dps).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired} | cost: ${lvl.buildCost.toLocaleString()}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

const imageVariants: Array<keyof (typeof xb.levels)[0]['images']> = [
  'normal',
  'airAndGround',
  'groundDepleted',
  'airAndGroundDepleted',
];

for (const lvl of xb.levels) {
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
