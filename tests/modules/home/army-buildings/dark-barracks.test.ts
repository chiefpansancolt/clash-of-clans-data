import { home, HomeVillageDarkBarracks } from '@/modules/home';

describe('darkBarracks()', () => {
  it('returns a HomeBarracksBuilding object', () => {
    const result = home().armyBuildings().darkBarracks().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('dark-barracks');
    expect(result.name).toBe('Dark Barracks');
  });

  it('has 13 levels', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels).toHaveLength(13);
  });

  it('base is home', () => {
    expect(home().armyBuildings().darkBarracks().first()!.base).toBe('home');
  });

  it('category is army', () => {
    expect(home().armyBuildings().darkBarracks().first()!.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(home().armyBuildings().darkBarracks().first()!.size).toBe('3x3');
  });
});

describe('darkBarracks() levels', () => {
  it('level 1 hitpoints is 500', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[0].hitpoints).toBe(500);
  });

  it('level 1 unlockedUnit is Minion', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[0].unlockedUnit).toBe('Minion');
  });

  it('level 1 buildCost is 200000 Elixir', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[0].buildCost).toBe(200000);
    expect(home().armyBuildings().darkBarracks().first()!.levels[0].buildCostResource).toBe(
      'Elixir',
    );
  });

  it('level 1 buildTime is 8h', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 8,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 169', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[0].xpGained).toBe(169);
  });

  it('level 1 townHallRequired is 7', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[0].townHallRequired).toBe(7);
  });

  it('level 5 unlockedUnit is Witch', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[4].unlockedUnit).toBe('Witch');
  });

  it('level 5 buildTime is 2d 12h', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[4].buildTime).toEqual({
      days: 2,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 5 townHallRequired is 9', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[4].townHallRequired).toBe(9);
  });

  it('level 10 unlockedUnit is Apprentice Warden', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[9].unlockedUnit).toBe(
      'Apprentice Warden',
    );
  });

  it('level 10 buildTime is 7d 12h', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[9].buildTime).toEqual({
      days: 7,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 12 hitpoints is 1050', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[11].hitpoints).toBe(1050);
  });

  it('level 12 unlockedUnit is Furnace', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[11].unlockedUnit).toBe('Furnace');
  });

  it('level 12 buildCost is 20000000 Elixir', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[11].buildCost).toBe(20000000);
  });

  it('level 12 buildTime is 9d', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[11].buildTime).toEqual({
      days: 9,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 12 xpGained is 881', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[11].xpGained).toBe(881);
  });

  it('level 12 townHallRequired is 15', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[11].townHallRequired).toBe(15);
  });

  it('level 13 hitpoints is 1100', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[12].hitpoints).toBe(1100);
  });

  it('level 13 unlockedUnit is Ruin Witch', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[12].unlockedUnit).toBe('Ruin Witch');
  });

  it('level 13 buildCost is 23000000 Elixir', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[12].buildCost).toBe(23000000);
  });

  it('level 13 buildTime is 10d', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[12].buildTime).toEqual({
      days: 10,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

    it('level 13 xpGained is 929', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[12].xpGained).toBe(929);
  });

  it('level 13 townHallRequired is 16', () => {
    expect(home().armyBuildings().darkBarracks().first()!.levels[12].townHallRequired).toBe(16);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().armyBuildings().darkBarracks().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('darkBarracks() availablePerTownHall', () => {
  it('TH6 has 0 dark barracks', () => {
    const th6 = home()
      .armyBuildings()
      .darkBarracks()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 6);
    expect(th6?.count).toBe(0);
  });

  it('TH7 has 1 dark barracks', () => {
    const th7 = home()
      .armyBuildings()
      .darkBarracks()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 7);
    expect(th7?.count).toBe(1);
  });

  it('TH18 has 1 dark barracks', () => {
    const th18 = home()
      .armyBuildings()
      .darkBarracks()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('darkBarracks() integration with armyBuildings()', () => {
  it('darkBarracks() returns a HomeVillageDarkBarracks instance', () => {
    expect(home().armyBuildings().darkBarracks()).toBeInstanceOf(HomeVillageDarkBarracks);
  });
});
