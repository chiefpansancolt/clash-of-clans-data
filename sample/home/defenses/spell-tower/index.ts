import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const st = home().defenses().spellTower().first()!;

log('=== spellTower() ===');
log(`id:       ${st.id}`);
log(`name:     ${st.name}`);
log(`base:     ${st.base}`);
log(`category: ${st.category}`);
log(`size:     ${st.size}`);
log(`target:   ${st.targetType}`);
log('');

log('--- Spell Modes ---');
const rage = st.modes.rage!;
log(
  `rage:          range ${rage.range} | radius ${rage.spellRadius} | duration ${rage.spellDuration}s | +${rage.damageIncrease}% dmg | recharge ${rage.rechargeTime}s`,
);
const poison = st.modes.poison!;
log(
  `poison:        range ${poison.range} | radius ${poison.spellRadius} | duration ${poison.spellDuration}s | max ${poison.maxDps} dps | -${poison.speedDecrease}% spd | -${poison.attackRateDecrease}% atk | recharge ${poison.rechargeTime}s`,
);
const invis = st.modes.invisibility!;
log(
  `invisibility:  range ${invis.range} | radius ${invis.spellRadius} | duration ${invis.spellDuration}s | recharge ${invis.rechargeTime}s`,
);
const eq = st.modes.earthquake!;
log(
  `earthquake:    range ${eq.range} | radius ${eq.spellRadius} | ${eq.troopDamagePercent}% troop dmg | recharge ${eq.rechargeTime}s`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of st.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of st.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | unlocks: ${lvl.unlocksSpell} | xp: ${String(lvl.xpGained).padStart(4)} | th${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

const imageVariants: Array<keyof (typeof st.levels)[0]['images']> = [
  'normal',
  'poison',
  'invisibility',
  'earthquake',
];

for (const lvl of st.levels) {
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
