import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const swt = home().defenses().superWizardTower().first()!;

log('=== superWizardTower() ===');
log(`id:          ${swt.id}`);
log(`name:        ${swt.name}`);
log(`base:        ${swt.base}`);
log(`category:    ${swt.category}`);
log(`size:        ${swt.size}`);
log(`target:      ${swt.targetType}`);
log('');

log('--- Normal Mode ---');
const mode = swt.modes.normal!;
log(
  `range: ${mode.range} | attackSpeed: ${mode.attackSpeed}s | damageType: ${mode.damageType} | maxChainTargets: ${mode.maxChainTargets}`,
);
log('');

log('--- Available Per Town Hall ---');
for (const a of swt.availablePerTownHall) {
  log(`  TH${a.townHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of swt.levels) {
  const tag = lvl.supercharge ? ` [SC${lvl.level}]` : ``;
  log(
    `lv${lvl.level}${tag} | hp: ${lvl.hitpoints} | cost: ${lvl.buildCost} Gold | xp: ${lvl.xpGained} | TH${lvl.townHallRequired}`,
  );
  log(
    `     dps: ${lvl.stats.normal.dps} | damagePerShot: ${lvl.stats.normal.damagePerShot} | chainDamage: ${lvl.stats.normal.secondaryChainDamagePerShot}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of swt.levels) {
  const base = lvl.supercharge ? `SC${lvl.level}` : `lv${lvl.level}`;
  images.check(`${base} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
