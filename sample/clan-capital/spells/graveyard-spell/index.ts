import { clanCapital } from '../../../../src';
import { ClanCapitalSpell } from '../../../../src/types';
import { createImageCounter, createLogger } from '../../../helper';

const { log, writeOutput } = createLogger();

const spells = clanCapital().spells().graveyardSpell();

log('=== graveyardSpell() [Clan Capital] ===');
log(`Total spell count: ${spells.count()}`);
log('');

const images = createImageCounter();

for (const s of spells.get() as ClanCapitalSpell[]) {
  log(`--- ${s.name} ---`);
  log(`id:                ${s.id}`);
  log(`housingSpace:      ${s.housingSpace}`);
  log(`durationAttacks:   ${s.durationAttacks}`);
  log(`requiredFactory:   ${s.requiredSpellFactory}`);
  log(`levels:            ${s.levels.length}`);
  log('');

  if (s.skeletonStatsGround) {
    const g = s.skeletonStatsGround;
    log(
      `Skeleton (Ground): DPS ${g.damagePerSecond}, HP ${g.hitpoints}, shield HP ${g.shieldHitpoints}, speed ${g.movementSpeed}`,
    );
  }
  if (s.skeletonStatsAir) {
    const a = s.skeletonStatsAir;
    log(`Skeleton (Air):    DPS ${a.damagePerSecond}, HP ${a.hitpoints}, speed ${a.movementSpeed}`);
  }
  log('');

  log('Lv  Skeletons  DH Req');
  for (const lvl of s.levels) {
    log(
      `${String(lvl.level).padStart(2)}  ${String(lvl.skeletonCount).padStart(9)}  ${String(lvl.districtHallRequired).padStart(6)}`,
    );
    images.check(`${s.id} level-${lvl.level} normal`, lvl.images.normal);
  }
  log('');
}

log('--- Image Validation ---');
log(images.report());

writeOutput(__dirname);
