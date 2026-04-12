import { clanCapital } from '../../../../src';
import { ClanCapitalSpell } from '../../../../src/types';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const spells = clanCapital().spells().rageSpell();

log('=== rageSpell() [Clan Capital] ===');
log(`Total spell count: ${spells.count()}`);
log('');

const images = createImageCounter();

for (const s of spells.get() as ClanCapitalSpell[]) {
  log(`--- ${s.name} ---`);
  log(`id:                ${s.id}`);
  log(`radius:            ${s.radius} tiles`);
  log(`housingSpace:      ${s.housingSpace}`);
  log(`durationAttacks:   ${s.durationAttacks}`);
  log(`requiredFactory:   ${s.requiredSpellFactory}`);
  log(`levels:            ${s.levels.length}`);
  log('');

  log('Lv  Dmg%  Speed  DH Req');
  for (const lvl of s.levels) {
    log(
      `${String(lvl.level).padStart(2)}  ${String(lvl.damageIncrease + '%').padStart(4)}  ${String(lvl.speedIncrease).padStart(5)}  ${String(lvl.districtHallRequired).padStart(6)}`,
    );
    images.check(`${s.id} level-${lvl.level} normal`, lvl.images.normal);
  }
  log('');
}

log('--- Image Validation ---');
log(images.report());

writeOutput(__dirname);
