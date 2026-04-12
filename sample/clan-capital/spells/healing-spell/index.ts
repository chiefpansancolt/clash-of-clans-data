import { clanCapital } from '../../../../src';
import { ClanCapitalSpell } from '../../../../src/types';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const spells = clanCapital().spells().healingSpell();

log('=== healingSpell() [Clan Capital] ===');
log(`Total spell count: ${spells.count()}`);
log('');

const images = createImageCounter();

for (const s of spells.get() as ClanCapitalSpell[]) {
  log(`--- ${s.name} ---`);
  log(`id:                  ${s.id}`);
  log(`radius:              ${s.radius} tiles`);
  log(`housingSpace:        ${s.housingSpace}`);
  log(`durationAttacks:     ${s.durationAttacks}`);
  log(`timeBetweenPulses:   ${s.timeBetweenPulses}s`);
  log(`requiredFactory:     ${s.requiredSpellFactory}`);
  log(`levels:              ${s.levels.length}`);
  log('');

  log('Lv  HP/s   HP/pulse  DH Req');
  for (const lvl of s.levels) {
    log(
      `${String(lvl.level).padStart(2)}  ${String(lvl.healingPerSecond).padStart(5)}  ${String(lvl.healingPerPulse).padStart(8)}  ${String(lvl.districtHallRequired).padStart(6)}`,
    );
    images.check(`${s.id} level-${lvl.level} normal`, lvl.images.normal);
  }
  log('');
}

log('--- Image Validation ---');
log(images.report());

writeOutput(__dirname);
