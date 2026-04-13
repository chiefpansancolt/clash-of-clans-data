import { clan } from '@/clan';

describe('clan().war().maxWarBaseLoot()', () => {
  const loot = clan().war().maxWarBaseLoot();

  it('returns 16 entries (TH3–18)', () => {
    expect(loot).toHaveLength(16);
  });

  it('TH3 has 6250 gold/elixir and 0 dark elixir', () => {
    const th3 = loot.find((e) => e.townHallLevel === 3)!;
    expect(th3.goldAndElixir).toBe(6250);
    expect(th3.darkElixir).toBe(0);
  });

  it('TH18 has 180000 gold/elixir and 1150 dark elixir', () => {
    const th18 = loot.find((e) => e.townHallLevel === 18)!;
    expect(th18.goldAndElixir).toBe(180000);
    expect(th18.darkElixir).toBe(1150);
  });
});

describe('clan().war().warBonus()', () => {
  const bonus = clan().war().warBonus();

  it('returns 5 tiers', () => {
    expect(bonus).toHaveLength(5);
  });

  it('first tier covers clan levels 1–2', () => {
    expect(bonus[0].minClanLevel).toBe(1);
    expect(bonus[0].maxClanLevel).toBe(2);
  });

  it('last tier is 9+ with no maxClanLevel', () => {
    const top = bonus[bonus.length - 1];
    expect(top.minClanLevel).toBe(9);
    expect(top.maxClanLevel).toBeUndefined();
  });

  it('each tier has 16 town hall entries', () => {
    for (const tier of bonus) {
      expect(tier.byTownHall).toHaveLength(16);
    }
  });

  it('TH7 victory includes dark elixir', () => {
    const tier = bonus[0];
    const th7 = tier.byTownHall.find((t) => t.townHallLevel === 7)!;
    expect(th7.victory.darkElixir).toBeGreaterThan(0);
  });
});

describe('clan().war().bonusTierForClanLevel()', () => {
  const war = clan().war();

  it('clan level 1 returns tier 1-2', () => {
    expect(war.bonusTierForClanLevel(1)?.clanLevelRange).toBe('1-2');
  });

  it('clan level 5 returns tier 5-6', () => {
    expect(war.bonusTierForClanLevel(5)?.clanLevelRange).toBe('5-6');
  });

  it('clan level 10 returns tier 9+', () => {
    expect(war.bonusTierForClanLevel(10)?.clanLevelRange).toBe('9+');
  });

  it('clan level 0 returns undefined', () => {
    expect(war.bonusTierForClanLevel(0)).toBeUndefined();
  });
});

describe('clan().war().maxWarBaseOre()', () => {
  const ore = clan().war().maxWarBaseOre();

  it('returns 9 entries', () => {
    expect(ore).toHaveLength(9);
  });

  it('TH8 has no starry ore', () => {
    const th8 = ore.find((e) => e.townHallLevel === 8)!;
    expect(th8.starryOre).toBeNull();
    expect(th8.shinyOre).toBe(380);
  });

  it('TH10 has starry ore', () => {
    const th10 = ore.find((e) => e.townHallLevel === 10)!;
    expect(th10.starryOre).toBe(3);
  });

  it('top tier is grouped as "16-18"', () => {
    const top = ore.find((e) => e.townHallLevel === '16-18')!;
    expect(top.shinyOre).toBe(1110);
    expect(top.glowyOre).toBe(39);
    expect(top.starryOre).toBe(6);
  });
});
