import { home, HomeVillageHeroHall } from '@/modules/home';

describe('heroHall()', () => {
  it('returns a HomeHeroHallBuilding object', () => {
    const result = home().armyBuildings().heroHall().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('hero-hall');
    expect(result.name).toBe('Hero Hall');
  });

  it('has 12 levels', () => {
    expect(home().armyBuildings().heroHall().first()!.levels).toHaveLength(12);
  });

  it('base is home', () => {
    expect(home().armyBuildings().heroHall().first()!.base).toBe('home');
  });

  it('category is army', () => {
    expect(home().armyBuildings().heroHall().first()!.category).toBe('army');
  });

  it('size is 4x4', () => {
    expect(home().armyBuildings().heroHall().first()!.size).toBe('4x4');
  });
});

describe('heroHall() levels', () => {
  it('level 1 unlocks Barbarian King', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[0].unlockedHero).toBe(
      'Barbarian King',
    );
  });

  it('level 1 heroSlots is 1', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[0].heroSlots).toBe(1);
  });

  it('level 1 hitpoints is 2000', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[0].hitpoints).toBe(2000);
  });

  it('level 1 buildCost is 800000 Elixir', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[0].buildCost).toBe(800000);
    expect(home().armyBuildings().heroHall().first()!.levels[0].buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is 1d', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[0].buildTime).toEqual({
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 293', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[0].xpGained).toBe(293);
  });

  it('level 1 townHallRequired is 7', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[0].townHallRequired).toBe(7);
  });

  it('level 1 heroLevelCaps barbarianKing is 10', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[0].heroLevelCaps.barbarianKing).toBe(
      10,
    );
  });

  it('level 3 unlocks Minion Prince', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[2].unlockedHero).toBe('Minion Prince');
  });

  it('level 3 heroSlots is 2', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[2].heroSlots).toBe(2);
  });

  it('level 4 unlockedHero is null', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[3].unlockedHero).toBeNull();
  });

  it('level 5 unlocks Grand Warden', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[4].unlockedHero).toBe('Grand Warden');
  });

  it('level 5 heroSlots is 3', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[4].heroSlots).toBe(3);
  });

  it('level 5 buildTime is 4d 12h', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[4].buildTime).toEqual({
      days: 4,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 7 unlocks Royal Champion', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[6].unlockedHero).toBe(
      'Royal Champion',
    );
  });

  it('level 7 heroSlots is 4', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[6].heroSlots).toBe(4);
  });

  it('level 9 unlocks Dragon Duke', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[8].unlockedHero).toBe('Dragon Duke');
  });

  it('level 9 heroLevelCaps dragonDuke is 10', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[8].heroLevelCaps.dragonDuke).toBe(10);
  });

  it('level 12 hitpoints is 6000', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[11].hitpoints).toBe(6000);
  });

  it('level 12 buildCost is 26000000', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[11].buildCost).toBe(26000000);
  });

  it('level 12 buildTime is 13d 12h', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[11].buildTime).toEqual({
      days: 13,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 12 xpGained is 1080', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[11].xpGained).toBe(1080);
  });

  it('level 12 townHallRequired is 18', () => {
    expect(home().armyBuildings().heroHall().first()!.levels[11].townHallRequired).toBe(18);
  });

  it('level 12 heroLevelCaps has all heroes', () => {
    const caps = home().armyBuildings().heroHall().first()!.levels[11].heroLevelCaps;
    expect(caps.barbarianKing).toBe(105);
    expect(caps.archerQueen).toBe(105);
    expect(caps.minionPrince).toBe(95);
    expect(caps.grandWarden).toBe(80);
    expect(caps.royalChampion).toBe(55);
    expect(caps.dragonDuke).toBe(25);
  });

  it('all levels have normal and active images', () => {
    for (const lvl of home().armyBuildings().heroHall().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
      expect(lvl.images.active).toBeTruthy();
    }
  });
});

describe('heroHall() availablePerTownHall', () => {
  it('TH6 has 0 hero halls', () => {
    const th6 = home()
      .armyBuildings()
      .heroHall()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 6);
    expect(th6?.count).toBe(0);
  });

  it('TH7 has 1 hero hall', () => {
    const th7 = home()
      .armyBuildings()
      .heroHall()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 7);
    expect(th7?.count).toBe(1);
  });

  it('TH18 has 1 hero hall', () => {
    const th18 = home()
      .armyBuildings()
      .heroHall()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('heroHall() integration with armyBuildings()', () => {
  it('heroHall() returns a HomeVillageHeroHall instance', () => {
    expect(home().armyBuildings().heroHall()).toBeInstanceOf(HomeVillageHeroHall);
  });
});
