import { home } from '../../../../src';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const sf = home().armyBuildings().spellFactory().first()!;

log('=== spellFactory() ===');
log(`id:       ${sf.id}`);
log(`name:     ${sf.name}`);
log(`base:     ${sf.base}`);
log(`category: ${sf.category}`);
log(`size:     ${sf.size}`);
log(`levels:   ${sf.levels.length}`);
log('');

log('Level  HP     Unlocked Spell(s)          Capacity  Build Cost      Build Time    XP     TH');
sf.levels.forEach((l) => {
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
  const spells = Array.isArray(l.unlockedSpell) ? l.unlockedSpell.join(', ') : l.unlockedSpell;
  log(
    `  ${String(l.level).padStart(2)}   ${String(l.hitpoints).padStart(4)}  ${spells.padEnd(26)}  ${String(l.spellStorageCapacity).padStart(8)}  ${cost}  ${bt}  ${String(l.xpGained).padStart(4)}  ${l.townHallRequired}`,
  );
});
log('');

log('--- Image Validation ---');
const images = createImageCounter();
sf.levels.forEach((l) => {
  images.check(`level ${l.level}`, l.images.normal);
});
log(images.report());

writeOutput(__dirname);
