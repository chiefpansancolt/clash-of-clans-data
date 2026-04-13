import { rankedBattles } from '@/ranked-battles';

describe('rankedBattles().leagues()', () => {
  const leagues = rankedBattles().leagues();

  it('returns 35 entries (Unranked + 33 numbered + Legend)', () => {
    expect(leagues.count()).toBe(35);
  });

  it('first entry is Unranked', () => {
    const first = leagues.first()!;
    expect(first.id).toBe('unranked');
    expect(first.name).toBe('Unranked');
    expect(first.attacksPerWeek).toBeNull();
  });

  it('last entry is Legend', () => {
    const all = leagues.get();
    const last = all[all.length - 1];
    expect(last.id).toBe('legend');
    expect(last.name).toBe('Legend');
    expect(last.percentPromoted).toBeNull();
  });

  it('find skeleton-1 has correct stats', () => {
    const sk1 = leagues.find('skeleton-1')!;
    expect(sk1.leagueGroup).toBe('Skeleton');
    expect(sk1.leagueNumber).toBe(1);
    expect(sk1.attacksPerWeek).toBe(6);
    expect(sk1.percentPromoted).toBe(50);
    expect(sk1.percentDemoted).toBeNull();
  });

  it('legend has no attacks/promotion/demotion', () => {
    const legend = leagues.find('legend')!;
    expect(legend.attacksPerWeek).toBeNull();
    expect(legend.percentPromoted).toBeNull();
    expect(legend.percentDemoted).toBeNull();
  });

  it('all leagues have an image path', () => {
    for (const league of leagues.get()) {
      expect(league.image).toMatch(/^images\/ranked-battles\/leagues\//);
    }
  });
});

describe('rankedBattles().leagues().byGroup()', () => {
  it('Skeleton group has 3 leagues (1–3)', () => {
    expect(rankedBattles().leagues().byGroup('Skeleton').count()).toBe(3);
  });

  it('PEKKA group has 3 leagues (22–24)', () => {
    const pekka = rankedBattles().leagues().byGroup('PEKKA').get();
    expect(pekka).toHaveLength(3);
    expect(pekka[0].leagueNumber).toBe(22);
    expect(pekka[2].leagueNumber).toBe(24);
  });

  it('Electro group has 3 leagues (31–33)', () => {
    const electro = rankedBattles().leagues().byGroup('Electro').get();
    expect(electro).toHaveLength(3);
    expect(electro[0].id).toBe('electro-31');
    expect(electro[2].id).toBe('electro-33');
  });

  it('Legend group has 1 entry', () => {
    expect(rankedBattles().leagues().byGroup('Legend').count()).toBe(1);
  });
});

describe('rankedBattles().leagues().withDifficultyModifier()', () => {
  it('returns exactly 3 leagues', () => {
    expect(rankedBattles().leagues().withDifficultyModifier().count()).toBe(3);
  });

  it('includes Electro 32, 33, and Legend', () => {
    const ids = rankedBattles()
      .leagues()
      .withDifficultyModifier()
      .get()
      .map((l) => l.id);
    expect(ids).toContain('electro-32');
    expect(ids).toContain('electro-33');
    expect(ids).toContain('legend');
  });
});

describe('rankedBattles().leagueFloor()', () => {
  const floor = rankedBattles().leagueFloor();

  it('returns 12 entries (TH7–18)', () => {
    expect(floor).toHaveLength(12);
  });

  it('TH7 floor is Skeleton 1', () => {
    const th7 = floor.find((e) => e.townHallLevel === 7)!;
    expect(th7.leagueId).toBe('skeleton-1');
  });

  it('TH12 floor is Archer 8', () => {
    const th12 = floor.find((e) => e.townHallLevel === 12)!;
    expect(th12.leagueId).toBe('archer-8');
  });

  it('TH17 and TH18 both floor at Titan 25', () => {
    const th17 = floor.find((e) => e.townHallLevel === 17)!;
    const th18 = floor.find((e) => e.townHallLevel === 18)!;
    expect(th17.leagueId).toBe('titan-25');
    expect(th18.leagueId).toBe('titan-25');
  });
});

describe('rankedBattles().floorForTownHall()', () => {
  it('returns correct floor for TH13', () => {
    expect(rankedBattles().floorForTownHall(13)?.leagueId).toBe('wizard-11');
  });

  it('returns undefined for TH6 (too low)', () => {
    expect(rankedBattles().floorForTownHall(6)).toBeUndefined();
  });
});

describe('rankedBattles().difficultyModifiers()', () => {
  const mods = rankedBattles().difficultyModifiers();

  it('returns 3 modifiers', () => {
    expect(mods).toHaveLength(3);
  });

  it('Electro 32 has Expert modifier with +5% bonuses', () => {
    const expert = mods.find((m) => m.leagueId === 'electro-32')!;
    expect(expert.modifier).toBe('Expert');
    expect(expert.defenseDpsBonus).toBe(5);
    expect(expert.defendingHeroDpsHpBonus).toBe(5);
    expect(expert.attackingHeroDpsHpPenalty).toBeNull();
  });

  it('Legend has +15% bonuses and -5% penalty', () => {
    const legend = mods.find((m) => m.leagueId === 'legend')!;
    expect(legend.modifier).toBe('Legend');
    expect(legend.defenseDpsBonus).toBe(15);
    expect(legend.attackingHeroDpsHpPenalty).toBe(5);
  });
});

describe('rankedBattles().loot()', () => {
  it('TH14 returns 35 entries', () => {
    expect(rankedBattles().loot(14)).toHaveLength(35);
  });

  it('TH13 returns 35 entries', () => {
    expect(rankedBattles().loot(13)).toHaveLength(35);
  });

  it('TH8 returns 34 entries (Skeleton 1 not available in source)', () => {
    expect(rankedBattles().loot(8)).toHaveLength(34);
  });

  it('TH7 returns 35 entries', () => {
    expect(rankedBattles().loot(7)).toHaveLength(35);
  });

  it('unknown TH returns empty array', () => {
    expect(rankedBattles().loot(6)).toHaveLength(0);
  });

  it('TH18 Unranked entry has null maxAvailableLoot and valid star bonus', () => {
    const entries = rankedBattles().loot(18);
    const unranked = entries.find((e) => e.leagueId === 'unranked')!;
    expect(unranked).toBeDefined();
    expect(unranked.maxAvailableLoot.goldAndElixir).toBeNull();
    expect(unranked.maxAvailableLoot.darkElixir).toBeNull();
    expect(unranked.starBonus.goldAndElixir).toBeGreaterThan(0);
  });

  it('TH18 Legend entry has highest loot values', () => {
    const entries = rankedBattles().loot(18);
    const legend = entries.find((e) => e.leagueId === 'legend')!;
    expect(legend).toBeDefined();
    expect(legend.maxAvailableLoot.goldAndElixir).toBeGreaterThan(1_000_000);
    expect(legend.starBonus.starryOre).toBeGreaterThan(0);
    expect(legend.underfloor).toBe(false);
  });

  it('TH14 underfloor entries are marked correctly', () => {
    const entries = rankedBattles().loot(14);
    const underfloor = entries.filter((e) => e.underfloor);
    const atFloor = entries.find((e) => e.leagueId === 'valkyrie-14')!;
    expect(underfloor.length).toBeGreaterThan(0);
    expect(atFloor.underfloor).toBe(false);
  });

  it('TH16 Golem 21 is at-floor (not underfloor)', () => {
    const entries = rankedBattles().loot(16);
    const golem21 = entries.find((e) => e.leagueId === 'golem-21')!;
    expect(golem21.underfloor).toBe(false);
  });

  it('TH7 has no underfloor entries (Skeleton 1 is the floor)', () => {
    const entries = rankedBattles().loot(7);
    expect(entries.filter((e) => e.underfloor)).toHaveLength(0);
  });

  it('TH7 Skeleton 1 is at-floor with valid loot', () => {
    const entries = rankedBattles().loot(7);
    const sk1 = entries.find((e) => e.leagueId === 'skeleton-1')!;
    expect(sk1).toBeDefined();
    expect(sk1.underfloor).toBe(false);
    expect(sk1.maxAvailableLoot.goldAndElixir).toBeGreaterThan(0);
    expect(sk1.maxAvailableLoot.darkElixir).toBeGreaterThan(0);
  });
});

describe('rankedBattles().lowerThBonuses()', () => {
  const bonuses = rankedBattles().lowerThBonuses();

  it('returns 5 entries (TH2–6)', () => {
    expect(bonuses).toHaveLength(5);
  });

  it('first entry is TH2', () => {
    expect(bonuses[0].townHallLevel).toBe(2);
    expect(bonuses[0].maxLeagueBonus).toBe(300);
    expect(bonuses[0].starBonus).toBe(30000);
  });

  it('last entry is TH6', () => {
    const last = bonuses[bonuses.length - 1];
    expect(last.townHallLevel).toBe(6);
    expect(last.maxLeagueBonus).toBe(700);
    expect(last.starBonus).toBe(150000);
  });

  it('TH6 has higher star bonus than TH2', () => {
    const th2 = bonuses.find((b) => b.townHallLevel === 2)!;
    const th6 = bonuses.find((b) => b.townHallLevel === 6)!;
    expect(th6.starBonus).toBeGreaterThan(th2.starBonus);
  });
});
