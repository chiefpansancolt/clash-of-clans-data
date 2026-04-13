import { clanCapital } from '../../../src';
import { checkImage, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const leagues = clanCapital().leagues();

log('=== clanCapital().leagues() ===');
log(`Total: ${leagues.count()}`);
log('');
log(
  `  ${'League'.padEnd(18)} ${'Group'.padEnd(12)} ${'Tier'.padEnd(6)} ${'Trophy Range'.padEnd(16)} ${'Clan XP'.padEnd(10)} Image`,
);

for (const league of leagues.get()) {
  const range =
    league.trophyMax !== null
      ? `${league.trophyMin}–${league.trophyMax}`
      : `${league.trophyMin}+`;
  const tier = league.tier !== null ? String(league.tier) : '-';
  const ok = checkImage(league.id, league.image);
  log(
    `  ${league.name.padEnd(18)} ${league.group.padEnd(12)} ${tier.padEnd(6)} ${range.padEnd(16)} ${String(league.clanXpEarned).padEnd(10)} [${ok ? 'OK' : 'MISSING'}]`,
  );
}

log('');
log('=== clanCapital().leagues().byGroup("Champion") ===');
for (const l of leagues.byGroup('Champion').get()) {
  log(`  ${l.name}: ${l.trophyMin}–${l.trophyMax} trophies, ${l.clanXpEarned} clan XP`);
}

log('');
log('=== clanCapital().leagues().atTrophies() ===');
for (const t of [0, 500, 1500, 2500, 3700, 5000]) {
  const l = leagues.atTrophies(t);
  log(`  ${String(t).padEnd(6)} trophies → ${l?.name ?? 'none'}`);
}

writeOutput(__dirname);
