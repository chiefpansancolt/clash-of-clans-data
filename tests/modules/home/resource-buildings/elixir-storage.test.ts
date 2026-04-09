import { home } from '@/modules/home';

describe('elixirStorage()', () => {
  it('returns a HomeResourceBuilding object', () => {
    const result = home().resourceBuildings().elixirStorage().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('elixir-storage');
    expect(result.name).toBe('Elixir Storage');
  });

  it('has 19 levels', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels).toHaveLength(19);
  });

  it('base is home', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.base).toBe('home');
  });

  it('category is resource', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.category).toBe('resource');
  });

  it('size is 3x3', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.size).toBe('3x3');
  });
});

describe('elixirStorage() levels', () => {
  it('level 1 hitpoints is 150', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[0].hitpoints).toBe(150);
  });

  it('level 1 capacity is 1500', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[0].capacity).toBe(1500);
  });

  it('level 1 has no productionRate', () => {
    expect(
      home().resourceBuildings().elixirStorage().first()!.levels[0].productionRate,
    ).toBeUndefined();
  });

  it('level 1 buildCost is 300 Gold', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[0].buildCost).toBe(300);
    expect(home().resourceBuildings().elixirStorage().first()!.levels[0].buildCostResource).toBe(
      'Gold',
    );
  });

  it('level 1 buildTime is 10s', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 10,
    });
  });

  it('level 1 xpGained is 3', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[0].xpGained).toBe(3);
  });

  it('level 1 townHallRequired is 1', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[0].townHallRequired).toBe(1);
  });

  it('level 7 capacity is 100000', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[6].capacity).toBe(100000);
  });

  it('level 7 townHallRequired is 4', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[6].townHallRequired).toBe(4);
  });

  it('level 12 townHallRequired is 11', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[11].townHallRequired).toBe(
      11,
    );
  });

  it('level 19 hitpoints is 4300', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[18].hitpoints).toBe(4300);
  });

  it('level 19 capacity is 6500000', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[18].capacity).toBe(6500000);
  });

  it('level 19 buildCost is 18000000 Gold', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[18].buildCost).toBe(18000000);
    expect(home().resourceBuildings().elixirStorage().first()!.levels[18].buildCostResource).toBe(
      'Gold',
    );
  });

  it('level 19 buildTime is 12d 12h', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[18].buildTime).toEqual({
      days: 12,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 19 townHallRequired is 18', () => {
    expect(home().resourceBuildings().elixirStorage().first()!.levels[18].townHallRequired).toBe(
      18,
    );
  });

  it('no levels have supercharge flag', () => {
    const sc = home()
      .resourceBuildings()
      .elixirStorage()
      .first()!
      .levels.filter((l) => l.supercharge);
    expect(sc).toHaveLength(0);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().resourceBuildings().elixirStorage().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('elixirStorage() availablePerTownHall', () => {
  it('TH1 has 1 elixir storage', () => {
    const th1 = home()
      .resourceBuildings()
      .elixirStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 1);
    expect(th1?.count).toBe(1);
  });

  it('TH3 has 2 elixir storages', () => {
    const th3 = home()
      .resourceBuildings()
      .elixirStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 3);
    expect(th3?.count).toBe(2);
  });

  it('TH8 has 3 elixir storages', () => {
    const th8 = home()
      .resourceBuildings()
      .elixirStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 8);
    expect(th8?.count).toBe(3);
  });

  it('TH9 has 4 elixir storages', () => {
    const th9 = home()
      .resourceBuildings()
      .elixirStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 9);
    expect(th9?.count).toBe(4);
  });

  it('TH18 has 4 elixir storages', () => {
    const th18 = home()
      .resourceBuildings()
      .elixirStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(4);
  });
});
