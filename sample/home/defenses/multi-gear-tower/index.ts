import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const mgt = home().defenses().multiGearTower().first()!;

log('=== multiGearTower() ===');
log(`id:       ${mgt.id}`);
log(`name:     ${mgt.name}`);
log(`base:     ${mgt.base}`);
log(`category: ${mgt.category}`);
log(`size:     ${mgt.size}`);
log(`target:   ${mgt.targetType}`);
log('');

log('--- Modes ---');
const lr = mgt.modes.normal!;
log(`long range: range ${lr.range} tiles | attackSpeed ${lr.attackSpeed}s | ${lr.damageType}`);
const fa = mgt.modes.fastAttack!;
log(
  `fast attack: range ${fa.range} tiles | attackSpeed ${fa.attackSpeed}s | ${fa.shotsPerBurst} shots | timeBetweenBursts ${fa.timeBetweenBursts}s`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of mgt.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of mgt.levels) {
  const sn = lvl.stats.normal;
  const sf = lvl.stats.fastAttack!;
  const tag = lvl.supercharge ? `[SC${lvl.level}]` : '     ';
  log(
    `lv${String(lvl.level).padStart(2)} ${tag} | hp: ${String(lvl.hitpoints).padStart(5)} | lr dps: ${String(sn.dps).padStart(3)} | fa dps: ${String(sf.dps).padStart(3)} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of mgt.levels) {
  const base = `lv${String(lvl.level).padStart(2)}${lvl.supercharge ? '[SC]' : ''}`;
  images.check(`${base} normal`, lvl.images.normal);
  if (lvl.images.fastAttack) {
    images.check(`${base} fastAttack`, lvl.images.fastAttack);
  }
}

log(images.report());

writeOutput(__dirname);
