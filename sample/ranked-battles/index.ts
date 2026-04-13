import { rankedBattles } from '../../src';
import { checkImage, createLogger } from '../helper';

const { log, writeOutput } = createLogger();

const rb = rankedBattles();

// ── Leagues ───────────────────────────────────────────────────────────────────

log('=== rankedBattles().leagues() ===');
log(`Total: ${rb.leagues().count()}`);
log('');
log(`  ${'League'.padEnd(22)} ${'Group'.padEnd(12)} ${'Atk/Wk'.padEnd(8)} ${'Promoted'.padEnd(10)} ${'Demoted'.padEnd(10)} Image`);

for (const league of rb.leagues().get()) {
  const atk = league.attacksPerWeek != null ? String(league.attacksPerWeek) : 'N/A';
  const prom = league.percentPromoted != null ? `${league.percentPromoted}%` : 'N/A';
  const dem = league.percentDemoted != null ? `${league.percentDemoted}%` : 'N/A';
  const ok = checkImage(league.id, league.image);
  log(
    `  ${league.name.padEnd(22)} ${league.leagueGroup.padEnd(12)} ${atk.padEnd(8)} ${prom.padEnd(10)} ${dem.padEnd(10)} [${ok ? 'OK' : 'MISSING'}]`,
  );
}

// ── League Floor ──────────────────────────────────────────────────────────────

log('');
log('=== rankedBattles().leagueFloor() ===');
log(`  ${'TH'.padEnd(6)} League Floor`);
for (const entry of rb.leagueFloor()) {
  log(`  TH${String(entry.townHallLevel).padEnd(4)} ${entry.leagueId}`);
}

// ── Difficulty Modifiers ──────────────────────────────────────────────────────

log('');
log('=== rankedBattles().difficultyModifiers() ===');
log(`  ${'League'.padEnd(14)} ${'Modifier'.padEnd(10)} ${'Def DPS'.padEnd(10)} ${'Hero Bonus'.padEnd(12)} Atk Penalty`);
for (const mod of rb.difficultyModifiers()) {
  const pen = mod.attackingHeroDpsHpPenalty != null ? `-${mod.attackingHeroDpsHpPenalty}%` : 'N/A';
  log(
    `  ${mod.leagueId.padEnd(14)} ${mod.modifier.padEnd(10)} +${String(mod.defenseDpsBonus).padEnd(9)}% +${String(mod.defendingHeroDpsHpBonus).padEnd(11)}% ${pen}`,
  );
}

// ── Loot Tables ───────────────────────────────────────────────────────────────

log('');
log('=== rankedBattles().loot() — sample TH18 ===');
log(`  ${'League'.padEnd(16)} ${'Floor?'.padEnd(8)} ${'Max Loot G/E'.padEnd(14)} ${'League Bonus G/E'.padEnd(18)} ${'Star Bonus G/E'.padEnd(16)} Shiny / Glowy / Starry`);
for (const entry of rb.loot(18)) {
  const floor = entry.underfloor ? 'below' : 'at/above';
  const lootGE = entry.maxAvailableLoot.goldAndElixir != null
    ? entry.maxAvailableLoot.goldAndElixir.toLocaleString()
    : 'N/A';
  const bonusGE = entry.maxLeagueBonus.goldAndElixir != null
    ? entry.maxLeagueBonus.goldAndElixir.toLocaleString()
    : 'N/A';
  const starGE = entry.starBonus.goldAndElixir != null
    ? entry.starBonus.goldAndElixir.toLocaleString()
    : 'N/A';
  const shiny = entry.starBonus.shinyOre ?? 'N/A';
  const glowy = entry.starBonus.glowyOre ?? 'N/A';
  const starry = entry.starBonus.starryOre ?? 'N/A';
  log(
    `  ${entry.leagueId.padEnd(16)} ${floor.padEnd(8)} ${lootGE.padEnd(14)} ${bonusGE.padEnd(18)} ${starGE.padEnd(16)} ${shiny} / ${glowy} / ${starry}`,
  );
}

writeOutput(__dirname);
