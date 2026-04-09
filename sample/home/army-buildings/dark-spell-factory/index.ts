import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const dsf = home().armyBuildings().darkSpellFactory().first()!;

log('=== darkSpellFactory() ===');
log(`id:       ${dsf.id}`);
log(`name:     ${dsf.name}`);
log(`base:     ${dsf.base}`);
log(`category: ${dsf.category}`);
log(`size:     ${dsf.size}`);
log(`levels:   ${dsf.levels.length}`);
log('');

log('Level  HP     Unlocked Spell       Build Cost      Build Time    XP     TH');
dsf.levels.forEach((l) => {
  const bt =
    [
      l.buildTime.days ? `${l.buildTime.days}d` : '',
      l.buildTime.hours ? `${l.buildTime.hours}h` : '',
      l.buildTime.minutes ? `${l.buildTime.minutes}m` : '',
      l.buildTime.seconds ? `${l.buildTime.seconds}s` : '',
    ]
      .filter(Boolean)
      .join(' ')
      .padStart(10) || '   instant';
  const cost = l.buildCost.toLocaleString().padStart(13);
  const spell = Array.isArray(l.unlockedSpell) ? l.unlockedSpell.join(', ') : l.unlockedSpell;
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(4)}  ${spell.padEnd(20)}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
dsf.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
