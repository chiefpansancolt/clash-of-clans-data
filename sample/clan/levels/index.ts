import { clan } from '../../../src';
import { checkImage, createLogger } from '../../helper';

const { log, writeOutput } = createLogger();

const levels = clan().levels();
const labels = clan().labels();

log('=== clan().levels() ===');
log(`Total: ${levels.count()}`);
log('');

for (const l of levels.get()) {
  const ok = checkImage(String(l.level), l.image);
  log(`Level ${l.level} [${l.badge.toUpperCase()}] — XP: ${l.xpRequired ?? 'N/A'} (cumulative: ${l.cumulativeXp ?? 'N/A'}) — image [${ok ? 'OK' : 'MISSING'}]`);
  log(`  Donations: ${l.perks.donationLimit.troops}T / ${l.perks.donationLimit.spells}S / ${l.perks.donationLimit.siegeMachines}SM | +${l.perks.donationUpgradeLevels} lvl | Treasury +${l.perks.treasuryExtraStorage}% | War Bonus +${l.perks.warBonusExtraLoot}%`);
}

log('');
log('=== clan().labels() ===');
log(`Total: ${labels.count()}`);
log('');

for (const label of labels.get()) {
  const ok = checkImage(label.id, label.image);
  log(`${label.name} (${label.id}) — image [${ok ? 'OK' : 'MISSING'}]`);
}

writeOutput(__dirname);
