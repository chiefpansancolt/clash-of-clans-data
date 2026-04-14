import { rankedBattles } from '@/modules/ranked-battles';

describe('rankedBattles().leagues()', () => {
  // ── Shape ──────────────────────────────────────────────────────────────────

  it('returns all 35 leagues', () => {
    expect(rankedBattles().leagues().count()).toBe(35);
  });

  it('every league has id, name, leagueGroup, and image', () => {
    for (const league of rankedBattles().leagues().get()) {
      expect(league).toHaveProperty('id');
      expect(league).toHaveProperty('name');
      expect(league).toHaveProperty('leagueGroup');
      expect(league).toHaveProperty('image');
    }
  });

  // ── byGroup ────────────────────────────────────────────────────────────────

  it('byGroup("Dragon") returns 3 leagues', () => {
    expect(rankedBattles().leagues().byGroup('Dragon').count()).toBe(3);
  });

  it('byGroup("Legend") returns 1 league', () => {
    expect(rankedBattles().leagues().byGroup('Legend').count()).toBe(1);
  });

  it('byGroup("Unranked") returns 1 league', () => {
    expect(rankedBattles().leagues().byGroup('Unranked').count()).toBe(1);
  });

  it('byGroup returns leagues all belonging to that group', () => {
    const leagues = rankedBattles().leagues().byGroup('Skeleton').get();
    for (const league of leagues) {
      expect(league.leagueGroup).toBe('Skeleton');
    }
  });

  it('byGroup with unknown group returns empty array', () => {
    expect(
      rankedBattles()
        .leagues()
        .byGroup('Goblin' as never)
        .count(),
    ).toBe(0);
  });

  // ── byName ─────────────────────────────────────────────────────────────────

  it('byName("Dragon") returns all 3 Dragon leagues', () => {
    const result = rankedBattles().leagues().byName('Dragon');
    expect(result.count()).toBe(3);
    for (const league of result.get()) {
      expect(league.name).toMatch(/Dragon/);
    }
  });

  it('byName("Dragon 30") returns only Dragon 30', () => {
    const result = rankedBattles().leagues().byName('Dragon 30');
    expect(result.count()).toBe(1);
    expect(result.first()!.name).toBe('Dragon 30');
  });

  it('byName is case-insensitive', () => {
    expect(rankedBattles().leagues().byName('dragon').count()).toBe(3);
    expect(rankedBattles().leagues().byName('DRAGON').count()).toBe(3);
    expect(rankedBattles().leagues().byName('DrAgOn 29').count()).toBe(1);
  });

  it('byName("Legend") returns 1 league', () => {
    const result = rankedBattles().leagues().byName('Legend');
    expect(result.count()).toBe(1);
    expect(result.first()!.id).toBe('legend');
  });

  it('byName with no match returns empty', () => {
    expect(rankedBattles().leagues().byName('Goblin').count()).toBe(0);
  });

  it('byName("skeleton") returns all Skeleton leagues', () => {
    const result = rankedBattles().leagues().byName('skeleton');
    expect(result.count()).toBeGreaterThan(0);
    for (const league of result.get()) {
      expect(league.name.toLowerCase()).toContain('skeleton');
    }
  });

  // ── withDifficultyModifier ─────────────────────────────────────────────────

  it('withDifficultyModifier returns 3 leagues', () => {
    expect(rankedBattles().leagues().withDifficultyModifier().count()).toBe(3);
  });

  it('withDifficultyModifier leagues are Electro 32, Electro 33, Legend', () => {
    const ids = rankedBattles()
      .leagues()
      .withDifficultyModifier()
      .get()
      .map((l) => l.id);
    expect(ids).toContain('electro-32');
    expect(ids).toContain('electro-33');
    expect(ids).toContain('legend');
  });

  // ── Chaining ───────────────────────────────────────────────────────────────

  it('byGroup and byName can be chained', () => {
    const result = rankedBattles().leagues().byGroup('Dragon').byName('30');
    expect(result.count()).toBe(1);
    expect(result.first()!.name).toBe('Dragon 30');
  });
});

describe('rankedBattles().leagueFloor()', () => {
  it('returns an array of floor entries', () => {
    expect(rankedBattles().leagueFloor()).toBeInstanceOf(Array);
    expect(rankedBattles().leagueFloor().length).toBeGreaterThan(0);
  });

  it('every entry has townHallLevel and leagueId', () => {
    for (const entry of rankedBattles().leagueFloor()) {
      expect(entry).toHaveProperty('townHallLevel');
      expect(entry).toHaveProperty('leagueId');
    }
  });

  it('covers TH7 through TH18', () => {
    const levels = rankedBattles()
      .leagueFloor()
      .map((e) => e.townHallLevel);
    for (let th = 7; th <= 18; th++) {
      expect(levels).toContain(th);
    }
  });
});

describe('rankedBattles().floorForTownHall()', () => {
  it('returns undefined for TH levels below 7', () => {
    expect(rankedBattles().floorForTownHall(6)).toBeUndefined();
    expect(rankedBattles().floorForTownHall(1)).toBeUndefined();
  });

  it('returns an entry for TH7', () => {
    const entry = rankedBattles().floorForTownHall(7);
    expect(entry).toBeDefined();
    expect(entry!.townHallLevel).toBe(7);
  });

  it('returns an entry for TH18', () => {
    const entry = rankedBattles().floorForTownHall(18);
    expect(entry).toBeDefined();
    expect(entry!.townHallLevel).toBe(18);
  });

  it('returns undefined for a nonexistent TH level', () => {
    expect(rankedBattles().floorForTownHall(99)).toBeUndefined();
  });
});

describe('rankedBattles().difficultyModifiers()', () => {
  it('returns exactly 3 modifiers', () => {
    expect(rankedBattles().difficultyModifiers()).toHaveLength(3);
  });

  it('each modifier has a leagueId', () => {
    for (const mod of rankedBattles().difficultyModifiers()) {
      expect(mod).toHaveProperty('leagueId');
    }
  });

  it('modifier league IDs match leagues with difficulty modifiers', () => {
    const modIds = new Set(
      rankedBattles()
        .difficultyModifiers()
        .map((m) => m.leagueId),
    );
    const leagueIds = new Set(
      rankedBattles()
        .leagues()
        .withDifficultyModifier()
        .get()
        .map((l) => l.id),
    );
    for (const id of modIds) {
      expect(leagueIds.has(id)).toBe(true);
    }
  });
});

describe('rankedBattles().loot()', () => {
  it('returns an empty array for TH6 (no data)', () => {
    expect(rankedBattles().loot(6)).toEqual([]);
  });

  it('returns loot entries for TH7', () => {
    expect(rankedBattles().loot(7).length).toBeGreaterThan(0);
  });

  it('returns loot entries for TH18', () => {
    expect(rankedBattles().loot(18).length).toBeGreaterThan(0);
  });

  it('returns an empty array for an unknown TH level', () => {
    expect(rankedBattles().loot(99)).toEqual([]);
  });

  it('each loot entry has a leagueId', () => {
    for (const entry of rankedBattles().loot(10)) {
      expect(entry).toHaveProperty('leagueId');
    }
  });
});

describe('rankedBattles().lowerThBonuses()', () => {
  it('returns an array', () => {
    expect(rankedBattles().lowerThBonuses()).toBeInstanceOf(Array);
  });

  it('covers TH2 through TH6', () => {
    const levels = rankedBattles()
      .lowerThBonuses()
      .map((e) => e.townHallLevel);
    for (let th = 2; th <= 6; th++) {
      expect(levels).toContain(th);
    }
  });

  it('each entry has townHallLevel', () => {
    for (const entry of rankedBattles().lowerThBonuses()) {
      expect(entry).toHaveProperty('townHallLevel');
    }
  });
});
