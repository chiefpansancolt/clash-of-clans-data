import { builder } from '../../../src';
import { checkImage, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const leagues = builder().leagues();

log('=== builder().leagues() ===');
log(`Total: ${leagues.count()}`);
log('');
log(
  `  ${'League'.padEnd(14)} ${'Group'.padEnd(10)} ${'Tier'.padEnd(6)} ${'Trophy Range'.padEnd(16)} Image`,
);

for (const league of leagues.get()) {
  const range =
    league.trophyMax !== null ? `${league.trophyMin}–${league.trophyMax}` : `${league.trophyMin}+`;
  const tier = league.tier !== null ? String(league.tier) : '-';
  const ok = checkImage(league.id, league.image);
  log(
    `  ${league.name.padEnd(14)} ${league.group.padEnd(10)} ${tier.padEnd(6)} ${range.padEnd(16)} [${ok ? 'OK' : 'MISSING'}]`,
  );
}

log('');
log('=== builder().leagues().byGroup("Ruby") ===');
for (const l of leagues.byGroup('Ruby').get()) {
  log(`  ${l.name}: ${l.trophyMin}–${l.trophyMax} trophies`);
}

log('');
log('=== builder().leagues().atTrophies() ===');
for (const t of [0, 500, 1500, 2500, 3700, 5000, 6200, 9999]) {
  const l = leagues.atTrophies(t);
  log(`  ${String(t).padEnd(6)} trophies → ${l?.name ?? 'none'}`);
}

writeOutput(__dirname);
