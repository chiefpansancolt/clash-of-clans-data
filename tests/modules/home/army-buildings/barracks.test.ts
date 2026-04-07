import { home } from '@/modules/home';
import { HomeVillageBarracks } from '@/modules/home';

describe('barracks()', () => {
  it('returns a HomeBarracksBuilding object', () => {
    const result = home().armyBuildings().barracks().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('barracks');
    expect(result.name).toBe('Barracks');
  });

  it('has 19 levels', () => {
    expect(home().armyBuildings().barracks().first()!.levels).toHaveLength(19);
  });

  it('base is home', () => {
    expect(home().armyBuildings().barracks().first()!.base).toBe('home');
  });

  it('category is army', () => {
    expect(home().armyBuildings().barracks().first()!.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(home().armyBuildings().barracks().first()!.size).toBe('3x3');
  });
});

describe('barracks() levels', () => {
  it('level 1 hitpoints is 100', () => {
    expect(home().armyBuildings().barracks().first()!.levels[0].hitpoints).toBe(100);
  });

  it('level 1 unlockedUnit is Barbarian', () => {
    expect(home().armyBuildings().barracks().first()!.levels[0].unlockedUnit).toBe('Barbarian');
  });

  it('level 1 buildCost is 100 Elixir', () => {
    expect(home().armyBuildings().barracks().first()!.levels[0].buildCost).toBe(100);
    expect(home().armyBuildings().barracks().first()!.levels[0].buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is 10s', () => {
    expect(home().armyBuildings().barracks().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 10,
    });
  });

  it('level 1 xpGained is 3', () => {
    expect(home().armyBuildings().barracks().first()!.levels[0].xpGained).toBe(3);
  });

  it('level 1 townHallRequired is 1', () => {
    expect(home().armyBuildings().barracks().first()!.levels[0].townHallRequired).toBe(1);
  });

  it('level 5 unlockedUnit is Wall Breaker', () => {
    expect(home().armyBuildings().barracks().first()!.levels[4].unlockedUnit).toBe('Wall Breaker');
  });

  it('level 5 townHallRequired is 3', () => {
    expect(home().armyBuildings().barracks().first()!.levels[4].townHallRequired).toBe(3);
  });

  it('level 10 unlockedUnit is P.E.K.K.A', () => {
    expect(home().armyBuildings().barracks().first()!.levels[9].unlockedUnit).toBe('P.E.K.K.A');
  });

  it('level 10 buildTime is 1d 12h', () => {
    expect(home().armyBuildings().barracks().first()!.levels[9].buildTime).toEqual({
      days: 1,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 16 townHallRequired is 14', () => {
    expect(home().armyBuildings().barracks().first()!.levels[15].townHallRequired).toBe(14);
  });

  it('level 16 buildTime is 7d 12h', () => {
    expect(home().armyBuildings().barracks().first()!.levels[15].buildTime).toEqual({
      days: 7,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 19 hitpoints is 1520', () => {
    expect(home().armyBuildings().barracks().first()!.levels[18].hitpoints).toBe(1520);
  });

  it('level 19 unlockedUnit is Meteor Golem', () => {
    expect(home().armyBuildings().barracks().first()!.levels[18].unlockedUnit).toBe('Meteor Golem');
  });

  it('level 19 buildCost is 26000000 Elixir', () => {
    expect(home().armyBuildings().barracks().first()!.levels[18].buildCost).toBe(26000000);
  });

  it('level 19 buildTime is 14d', () => {
    expect(home().armyBuildings().barracks().first()!.levels[18].buildTime).toEqual({
      days: 14,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 19 xpGained is 1099', () => {
    expect(home().armyBuildings().barracks().first()!.levels[18].xpGained).toBe(1099);
  });

  it('level 19 townHallRequired is 17', () => {
    expect(home().armyBuildings().barracks().first()!.levels[18].townHallRequired).toBe(17);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().armyBuildings().barracks().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('barracks() availablePerTownHall', () => {
  it('TH1 has 1 barracks', () => {
    const th1 = home()
      .armyBuildings()
      .barracks()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 1);
    expect(th1?.count).toBe(1);
  });

  it('TH10 has 1 barracks', () => {
    const th10 = home()
      .armyBuildings()
      .barracks()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 10);
    expect(th10?.count).toBe(1);
  });

  it('TH18 has 1 barracks', () => {
    const th18 = home()
      .armyBuildings()
      .barracks()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('barracks() integration with armyBuildings()', () => {
  it('barracks() returns a HomeVillageBarracks instance', () => {
    expect(home().armyBuildings().barracks()).toBeInstanceOf(HomeVillageBarracks);
  });
});
