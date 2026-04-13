import { achievements } from '../../src';
import { createLogger } from '../helper';

const { log, writeOutput } = createLogger();

const all = achievements();

log('=== achievements() ===');
log(`Total: ${all.count()}`);
log(`  Home Village:  ${all.byBase('home').count()}`);
log(`  Builder Base:  ${all.byBase('builder').count()}`);
log(`  Clan Capital:  ${all.byBase('clan-capital').count()}`);
log('');

for (const base of ['home', 'builder', 'clan-capital'] as const) {
  log(`--- ${base} ---`);
  for (const a of all.byBase(base).get()) {
    const tierSummary = a.tiers
      .map((t) => `${t.requirement.toLocaleString()} (${t.gemsRewarded}💎)`)
      .join(' / ');
    log(`  ${a.name}`);
    log(`    Data: ${a.dataInvolved}`);
    log(`    Tiers: ${tierSummary}`);
  }
  log('');
}

writeOutput(__dirname);
