import { home, HomeVillageArmyBuildings } from '@/modules/home';

describe('armyCamp()', () => {
  it('returns an HomeArmyBuilding object', () => {
    const result = home().armyBuildings().armyCamp().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('army-camp');
    expect(result.name).toBe('Army Camp');
  });

  it('has 13 levels', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels).toHaveLength(13);
  });

  it('base is home', () => {
    expect(home().armyBuildings().armyCamp().first()!.base).toBe('home');
  });

  it('category is army', () => {
    expect(home().armyBuildings().armyCamp().first()!.category).toBe('army');
  });

  it('size is 4x4', () => {
    expect(home().armyBuildings().armyCamp().first()!.size).toBe('4x4');
  });
});

describe('armyCamp() levels', () => {
  it('level 1 hitpoints is 100', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[0].hitpoints).toBe(100);
  });

  it('level 1 housingSpace is 20', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[0].housingSpace).toBe(20);
  });

  it('level 1 buildCost is 200 Elixir', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[0].buildCost).toBe(200);
    expect(home().armyBuildings().armyCamp().first()!.levels[0].buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is 1m', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 7', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[0].xpGained).toBe(7);
  });

  it('level 1 townHallRequired is 1', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[0].townHallRequired).toBe(1);
  });

  it('level 7 housingSpace is 55', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[6].housingSpace).toBe(55);
  });

  it('level 7 buildTime is 2d', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[6].buildTime).toEqual({
      days: 2,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 7 townHallRequired is 9', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[6].townHallRequired).toBe(9);
  });

  it('level 9 buildTime is 3d 12h', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[8].buildTime).toEqual({
      days: 3,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 12 townHallRequired is 15', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[11].townHallRequired).toBe(15);
  });

  it('level 13 hitpoints is 900', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[12].hitpoints).toBe(900);
  });

  it('level 13 housingSpace is 85', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[12].housingSpace).toBe(85);
  });

  it('level 13 buildCost is 17000000 Elixir', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[12].buildCost).toBe(17000000);
  });

  it('level 13 buildTime is 10d', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[12].buildTime).toEqual({
      days: 10,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 13 xpGained is 929', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[12].xpGained).toBe(929);
  });

  it('level 13 townHallRequired is 17', () => {
    expect(home().armyBuildings().armyCamp().first()!.levels[12].townHallRequired).toBe(17);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().armyBuildings().armyCamp().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('armyCamp() availablePerTownHall', () => {
  it('TH1 has 1 army camp', () => {
    const th1 = home()
      .armyBuildings()
      .armyCamp()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 1);
    expect(th1?.count).toBe(1);
  });

  it('TH3 has 2 army camps', () => {
    const th3 = home()
      .armyBuildings()
      .armyCamp()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 3);
    expect(th3?.count).toBe(2);
  });

  it('TH7 has 4 army camps', () => {
    const th7 = home()
      .armyBuildings()
      .armyCamp()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 7);
    expect(th7?.count).toBe(4);
  });

  it('TH18 has 4 army camps', () => {
    const th18 = home()
      .armyBuildings()
      .armyCamp()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(4);
  });
});

describe('armyCamp() integration with armyBuildings()', () => {
  it('armyCamp() returns a HomeVillageArmyBuildings instance', () => {
    expect(home().armyBuildings().armyCamp()).toBeInstanceOf(HomeVillageArmyBuildings);
  });
});
