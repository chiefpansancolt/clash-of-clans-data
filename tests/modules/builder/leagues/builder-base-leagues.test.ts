import { builder, BuilderBaseLeagues } from '@/modules/builder';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().leagues()', () => builder().leagues());

testFilterImmutability(
  'builder().leagues().byGroup()',
  () => builder().leagues(),
  (q) => (q as BuilderBaseLeagues).byGroup('Wood'),
);

describe('builder().leagues()', () => {
  const leagues = builder().leagues();

  it('returns 42 entries', () => {
    expect(leagues.count()).toBe(42);
  });

  it('first entry is Wood V', () => {
    const first = leagues.first()!;
    expect(first.id).toBe('wood-v');
    expect(first.trophyMin).toBe(0);
    expect(first.trophyMax).toBe(99);
    expect(first.tier).toBe(5);
  });

  it('last entry is Diamond', () => {
    const all = leagues.get();
    const last = all[all.length - 1];
    expect(last.id).toBe('diamond');
    expect(last.trophyMin).toBe(6200);
    expect(last.trophyMax).toBeNull();
    expect(last.tier).toBeNull();
  });

  it('find copper-iii has correct properties', () => {
    const league = leagues.find('copper-iii')!;
    expect(league.name).toBe('Copper III');
    expect(league.group).toBe('Copper');
    expect(league.tier).toBe(3);
    expect(league.trophyMin).toBe(1700);
    expect(league.trophyMax).toBe(1799);
  });

  it('all leagues have an image path', () => {
    for (const league of leagues.get()) {
      expect(league.image).toMatch(/^images\/builder\/leagues\//);
    }
  });

  it('all leagues have 7 battle result entries', () => {
    for (const league of leagues.get()) {
      expect(league.battleResults).toHaveLength(7);
    }
  });

  it('all leagues have a starBonus', () => {
    for (const league of leagues.get()) {
      expect(league.starBonus.starsRequired).toBeGreaterThanOrEqual(7);
      expect(league.starBonus.reward).toBeGreaterThan(0);
    }
  });

  it('Wood V starBonus is correct', () => {
    expect(leagues.find('wood-v')!.starBonus).toEqual({ starsRequired: 7, reward: 5000 });
  });

  it('Diamond starBonus is correct', () => {
    expect(leagues.find('diamond')!.starBonus).toEqual({ starsRequired: 12, reward: 560000 });
  });

  it('star bonus starsRequired increases with league tier', () => {
    expect(leagues.find('copper-v')!.starBonus.starsRequired).toBe(8);
    expect(leagues.find('brass-iii')!.starBonus.starsRequired).toBe(9);
    expect(leagues.find('steel-iii')!.starBonus.starsRequired).toBe(10);
    expect(leagues.find('platinum-iii')!.starBonus.starsRequired).toBe(11);
    expect(leagues.find('emerald-iii')!.starBonus.starsRequired).toBe(12);
  });

  it('Wood V battle results are correct', () => {
    const wv = leagues.find('wood-v')!;
    expect(wv.battleResults[0]).toEqual({ attackerGold: 1500, defenderElixir: 7500 });
    expect(wv.battleResults[3]).toEqual({ attackerGold: 7500, defenderElixir: 1500 });
    expect(wv.battleResults[6]).toEqual({ attackerGold: 7500, defenderElixir: 1500 });
  });

  it('Diamond battle results are correct', () => {
    const diamond = leagues.find('diamond')!;
    expect(diamond.battleResults[0]).toEqual({ attackerGold: 0, defenderElixir: 204000 });
    expect(diamond.battleResults[6]).toEqual({ attackerGold: 140000, defenderElixir: 64000 });
  });

  it('trophy ranges are contiguous with no gaps', () => {
    const all = leagues.get();
    for (let i = 1; i < all.length - 1; i++) {
      expect(all[i].trophyMin).toBe(all[i - 1].trophyMax! + 1);
    }
  });
});

describe('builder().leagues().byGroup()', () => {
  it('Wood group has 5 leagues', () => {
    expect(builder().leagues().byGroup('Wood').count()).toBe(5);
  });

  it('Wood group has tiers 1, 2, 3, 4, 5', () => {
    const wood = builder().leagues().byGroup('Wood').get();
    expect(wood.map((l) => l.tier).sort()).toEqual([1, 2, 3, 4, 5]);
  });

  it('Brass group has 3 leagues', () => {
    expect(builder().leagues().byGroup('Brass').count()).toBe(3);
  });

  it('Diamond group has 1 entry', () => {
    expect(builder().leagues().byGroup('Diamond').count()).toBe(1);
  });

  it('Steel group has tiers 1, 2, 3', () => {
    const steel = builder().leagues().byGroup('Steel').get();
    expect(steel.map((l) => l.tier).sort()).toEqual([1, 2, 3]);
  });
});

describe('builder().leagues().atTrophies()', () => {
  it('returns Wood V for 0 trophies', () => {
    expect(builder().leagues().atTrophies(0)?.id).toBe('wood-v');
  });

  it('returns Wood V for 99 trophies', () => {
    expect(builder().leagues().atTrophies(99)?.id).toBe('wood-v');
  });

  it('returns Wood IV for 100 trophies', () => {
    expect(builder().leagues().atTrophies(100)?.id).toBe('wood-iv');
  });

  it('returns Brass III for 2000 trophies', () => {
    expect(builder().leagues().atTrophies(2000)?.id).toBe('brass-iii');
  });

  it('returns Diamond for 6200 trophies', () => {
    expect(builder().leagues().atTrophies(6200)?.id).toBe('diamond');
  });

  it('returns Diamond for very high trophy counts', () => {
    expect(builder().leagues().atTrophies(99999)?.id).toBe('diamond');
  });

  it('returns Ruby I for 6100 trophies', () => {
    expect(builder().leagues().atTrophies(6100)?.id).toBe('ruby-i');
  });
});
