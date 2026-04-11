import { builder } from '../../../../src';
import { createImageCounter, createLogger, formatBuildTime } from '../../../helper';

const { log, writeOutput } = createLogger();

const outpost = builder().defenses().ottosOutpost().first()!;

log('=== ottosOutpost() [Builder Base] ===');
log(`id:              ${outpost.id}`);
log(`name:            ${outpost.name}`);
log(`base:            ${outpost.base}`);
log(`category:        ${outpost.category}`);
log(`size:            ${outpost.size}`);
log(`target:          ${outpost.targetType}`);
log(`specialAbility:  ${outpost.specialAbility}`);
log('');

log('--- Mode ---');
log('normal:', outpost.modes.normal);
log('');

log('--- Available Per Builder Hall ---');
for (const a of outpost.availablePerBuilderHall) {
  log(`  BH${a.builderHallLevel}: ${a.count}`);
}
log('');

log('--- All Levels ---');
for (const lvl of outpost.levels) {
  log(
    `lv${String(lvl.level).padStart(2)} | hp: ${String(lvl.hitpoints).padStart(5)} | zappies: ${lvl.spawnCount} | bh${lvl.builderHallRequired} | cost: ${lvl.buildCost.toLocaleString()} | time: ${formatBuildTime(lvl.buildTime)} | xp: ${String(lvl.xpGained).padStart(4)}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();

for (const lvl of outpost.levels) {
  images.check(`lv${String(lvl.level).padStart(2)} normal`, lvl.images.normal);
}

log(images.report());

writeOutput(__dirname);
