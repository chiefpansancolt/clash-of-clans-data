import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const rt = home().defenses().revengeTower().first()!;

log('=== revengeTower() ===');
log(`id:              ${rt.id}`);
log(`name:            ${rt.name}`);
log(`base:            ${rt.base}`);
log(`category:        ${rt.category}`);
log(`size:            ${rt.size}`);
log(`target:          ${rt.targetType}`);
log(`specialAbility:  ${rt.specialAbility}`);
log('');

log('--- Modes ---');
const s1 = rt.modes.stage1!;
const s2 = rt.modes.stage2!;
const s3 = rt.modes.stage3!;
log(`stage1: range ${s1.range} | attackSpeed ${s1.attackSpeed}s | ${s1.damageType}`);
log(
  `stage2: range ${s2.range} | attackSpeed ${s2.attackSpeed}s | ${s2.damageType} | chainRange ${s2.chainRange}`,
);
log(
  `stage3: range ${s3.range} | attackSpeed ${s3.attackSpeed}s | ${s3.damageType} | chainRange ${s3.chainRange}`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of rt.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of rt.levels) {
  log(
    `lv${lvl.level} | hp: ${lvl.hitpoints} | cost: ${lvl.buildCost} DE | xp: ${lvl.xpGained} | TH${lvl.townHallRequired}`,
  );
  log(`     stage1: dps ${lvl.stats.stage1!.dps} | dmg/shot ${lvl.stats.stage1!.damagePerShot}`);
  log(
    `     stage2: dps ${lvl.stats.stage2!.dps} | primary ${lvl.stats.stage2!.damagePerShot} | secondary ${lvl.stats.stage2!.secondaryChainDamagePerShot}`,
  );
  log(
    `     stage3: dps ${lvl.stats.stage3!.dps} | primary ${lvl.stats.stage3!.damagePerShot} | secondary ${lvl.stats.stage3!.secondaryChainDamagePerShot} | tertiary ${lvl.stats.stage3!.tertiaryChainDamagePerShot}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of rt.levels) {
  const base = `lv${lvl.level}`;
  images.check(`${base} normal`, lvl.images.normal);
  if (lvl.images.stage1) images.check(`${base} stage1`, lvl.images.stage1);
  if (lvl.images.stage2) images.check(`${base} stage2`, lvl.images.stage2);
  if (lvl.images.stage3) images.check(`${base} stage3`, lvl.images.stage3);
}

log(images.report());

writeOutput(__dirname);
