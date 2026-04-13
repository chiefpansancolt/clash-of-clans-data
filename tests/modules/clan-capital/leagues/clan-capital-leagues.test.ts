import { clanCapital, ClanCapitalLeagues } from '@/modules/clan-capital';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('clanCapital().leagues()', () => clanCapital().leagues());

testFilterImmutability(
  'clanCapital().leagues().byGroup()',
  () => clanCapital().leagues(),
  (q) => (q as ClanCapitalLeagues).byGroup('Gold'),
);

describe('clanCapital().leagues()', () => {
  const leagues = clanCapital().leagues();

  it('returns 23 entries', () => {
    expect(leagues.count()).toBe(23);
  });

  it('first entry is Unranked', () => {
    const first = leagues.first()!;
    expect(first.id).toBe('unranked');
    expect(first.trophyMin).toBe(0);
    expect(first.trophyMax).toBe(199);
    expect(first.clanXpEarned).toBe(0);
    expect(first.tier).toBeNull();
  });

  it('last entry is Legend', () => {
    const all = leagues.get();
    const last = all[all.length - 1];
    expect(last.id).toBe('legend');
    expect(last.trophyMin).toBe(5000);
    expect(last.trophyMax).toBeNull();
    expect(last.clanXpEarned).toBe(800);
    expect(last.tier).toBeNull();
  });

  it('find gold-ii has correct properties', () => {
    const league = leagues.find('gold-ii')!;
    expect(league.name).toBe('Gold II');
    expect(league.group).toBe('Gold');
    expect(league.tier).toBe(2);
    expect(league.trophyMin).toBe(1600);
    expect(league.trophyMax).toBe(1799);
    expect(league.clanXpEarned).toBe(200);
  });

  it('all leagues have an image path', () => {
    for (const league of leagues.get()) {
      expect(league.image).toMatch(/^images\/clan-capital\/leagues\//);
    }
  });

  it('XP increases monotonically from Bronze to Legend', () => {
    const ranked = leagues.get().filter((l) => l.id !== 'unranked');
    for (let i = 1; i < ranked.length; i++) {
      expect(ranked[i].clanXpEarned).toBeGreaterThanOrEqual(ranked[i - 1].clanXpEarned);
    }
  });
});

describe('clanCapital().leagues().byGroup()', () => {
  it('Bronze group has 3 leagues', () => {
    expect(clanCapital().leagues().byGroup('Bronze').count()).toBe(3);
  });

  it('Titan group has 3 leagues with tiers 1, 2, 3', () => {
    const titans = clanCapital().leagues().byGroup('Titan').get();
    expect(titans).toHaveLength(3);
    expect(titans.map((l) => l.tier).sort()).toEqual([1, 2, 3]);
  });

  it('Legend group has 1 entry', () => {
    expect(clanCapital().leagues().byGroup('Legend').count()).toBe(1);
  });

  it('Unranked group has 1 entry', () => {
    expect(clanCapital().leagues().byGroup('Unranked').count()).toBe(1);
  });
});

describe('clanCapital().leagues().atTrophies()', () => {
  it('returns Unranked for 0 trophies', () => {
    expect(clanCapital().leagues().atTrophies(0)?.id).toBe('unranked');
  });

  it('returns Bronze III for 200 trophies', () => {
    expect(clanCapital().leagues().atTrophies(200)?.id).toBe('bronze-iii');
  });

  it('returns Bronze III for 399 trophies', () => {
    expect(clanCapital().leagues().atTrophies(399)?.id).toBe('bronze-iii');
  });

  it('returns Legend for 5000 trophies', () => {
    expect(clanCapital().leagues().atTrophies(5000)?.id).toBe('legend');
  });

  it('returns Legend for very high trophy counts', () => {
    expect(clanCapital().leagues().atTrophies(99999)?.id).toBe('legend');
  });

  it('returns Gold I for 1800 trophies', () => {
    expect(clanCapital().leagues().atTrophies(1800)?.id).toBe('gold-i');
  });
});
