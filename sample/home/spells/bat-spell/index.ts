import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const s = home().spells().batSpell().first()!;

log('=== batSpell() ===');
log(`id:                   ${s.id}`);
log(`name:                 ${s.name}`);
log(`spellType:            ${s.spellType}`);
log(`targetType:           ${s.targetType}`);
log(`housingSpace:         ${s.housingSpace}`);
log(`radius:               ${s.radius}`);
log(`spellFactory lvl:     ${s.spellFactoryLevelRequired} (Dark)`);
log('');

if (s.batStats) {
  log('--- Bat Unit Stats ---');
  log(`preferredTarget:      ${s.batStats.preferredTarget}`);
  log(`attackType:           ${s.batStats.attackType}`);
  log(`movementSpeed:        ${s.batStats.movementSpeed}`);
  log(`attackSpeed:          ${s.batStats.attackSpeed}s`);
  log(`range:                ${s.batStats.range} tiles`);
  log(`damagePerSecond:      ${s.batStats.damagePerSecond}`);
  log(`damageVsResources:    x${s.batStats.damageVsResources}`);
  log(`hitpoints:            ${s.batStats.hitpoints}`);
  log('');
}

log('--- All Levels ---');
log('Lvl  Bats  Research Cost  Research Time  Lab  TH');
for (const lvl of s.levels) {
  const rt =
    [
      lvl.researchTime.days ? `${lvl.researchTime.days}d` : '',
      lvl.researchTime.hours ? `${lvl.researchTime.hours}h` : '',
      lvl.researchTime.minutes ? `${lvl.researchTime.minutes}m` : '',
    ]
      .filter(Boolean)
      .join(' ') || 'N/A';
  const cost = lvl.researchCost ? lvl.researchCost.toLocaleString() : 'N/A';
  log(
    `  ${String(lvl.level).padStart(2)}  ${String(lvl.batsGenerated ?? '').padStart(4)}  ${cost.padStart(13)}  ${rt.padStart(13)}   ${lvl.laboratoryRequired}   ${lvl.townHallRequired}`,
  );
}
log('');

log('--- Image Validation ---');
const images = createImageCounter();
images.check('icon', s.images.icon);
log(images.report());

writeOutput(__dirname);
