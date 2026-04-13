import { clan } from '../../../src';
import { createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const war = clan().war();

log('=== clan().war().maxWarBaseLoot() ===');
for (const e of war.maxWarBaseLoot()) {
  log(`TH${e.townHallLevel}: ${e.goldAndElixir.toLocaleString()} Gold/Elixir, ${e.darkElixir} Dark Elixir`);
}

log('');
log('=== clan().war().maxWarBaseOre() ===');
for (const e of war.maxWarBaseOre()) {
  log(`TH${e.townHallLevel}: ${e.shinyOre} Shiny, ${e.glowyOre} Glowy, ${e.starryOre ?? '-'} Starry`);
}

log('');
log('=== clan().war().warBonus() — Victory at TH18 per tier ===');
for (const tier of war.warBonus()) {
  const th18 = tier.byTownHall.find((t) => t.townHallLevel === 18)!;
  log(`${tier.label}: ${th18.victory.goldAndElixir.toLocaleString()} G/E + ${th18.victory.darkElixir} DE`);
}

log('');
log('=== clan().war().bonusTierForClanLevel() ===');
for (const lvl of [1, 3, 5, 7, 9, 12, 20]) {
  const tier = war.bonusTierForClanLevel(lvl);
  log(`Clan level ${lvl} → ${tier?.label ?? 'none'}`);
}

writeOutput(__dirname);
