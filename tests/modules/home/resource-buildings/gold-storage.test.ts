import { home } from '@/modules/home';
import { HomeVillageResourceBuildings } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('goldStorage()', () => {
  it('returns a HomeResourceBuilding object', () => {
    const result = home().resourceBuildings().goldStorage().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('gold-storage');
    expect(result.name).toBe('Gold Storage');
  });

  it('has 19 levels', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels).toHaveLength(19);
  });

  it('base is home', () => {
    expect(home().resourceBuildings().goldStorage().first()!.base).toBe('home');
  });

  it('category is resource', () => {
    expect(home().resourceBuildings().goldStorage().first()!.category).toBe('resource');
  });

  it('size is 3x3', () => {
    expect(home().resourceBuildings().goldStorage().first()!.size).toBe('3x3');
  });
});

describe('goldStorage() levels', () => {
  it('level 1 hitpoints is 150', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[0].hitpoints).toBe(150);
  });

  it('level 1 capacity is 1500', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[0].capacity).toBe(1500);
  });

  it('level 1 has no productionRate', () => {
    expect(
      home().resourceBuildings().goldStorage().first()!.levels[0].productionRate,
    ).toBeUndefined();
  });

  it('level 1 buildCost is 300 Elixir', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[0].buildCost).toBe(300);
    expect(home().resourceBuildings().goldStorage().first()!.levels[0].buildCostResource).toBe(
      'Elixir',
    );
  });

  it('level 1 buildTime is 10s', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 10,
    });
  });

  it('level 1 xpGained is 3', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[0].xpGained).toBe(3);
  });

  it('level 1 townHallRequired is 1', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[0].townHallRequired).toBe(1);
  });

  it('level 7 capacity is 100000', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[6].capacity).toBe(100000);
  });

  it('level 7 townHallRequired is 4', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[6].townHallRequired).toBe(4);
  });

  it('level 12 townHallRequired is 11', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[11].townHallRequired).toBe(11);
  });

  it('level 12 buildTime is 12h', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[11].buildTime).toEqual({
      days: 0,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 19 hitpoints is 4300', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[18].hitpoints).toBe(4300);
  });

  it('level 19 capacity is 6500000', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[18].capacity).toBe(6500000);
  });

  it('level 19 buildCost is 18000000 Elixir', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[18].buildCost).toBe(18000000);
  });

  it('level 19 buildTime is 12d 12h', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[18].buildTime).toEqual({
      days: 12,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 19 townHallRequired is 18', () => {
    expect(home().resourceBuildings().goldStorage().first()!.levels[18].townHallRequired).toBe(18);
  });

  it('no levels have supercharge flag', () => {
    const sc = home()
      .resourceBuildings()
      .goldStorage()
      .first()!
      .levels.filter((l) => l.supercharge);
    expect(sc).toHaveLength(0);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().resourceBuildings().goldStorage().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('goldStorage() availablePerTownHall', () => {
  it('TH1 has 1 gold storage', () => {
    const th1 = home()
      .resourceBuildings()
      .goldStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 1);
    expect(th1?.count).toBe(1);
  });

  it('TH3 has 2 gold storages', () => {
    const th3 = home()
      .resourceBuildings()
      .goldStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 3);
    expect(th3?.count).toBe(2);
  });

  it('TH8 has 3 gold storages', () => {
    const th8 = home()
      .resourceBuildings()
      .goldStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 8);
    expect(th8?.count).toBe(3);
  });

  it('TH9 has 4 gold storages', () => {
    const th9 = home()
      .resourceBuildings()
      .goldStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 9);
    expect(th9?.count).toBe(4);
  });

  it('TH18 has 4 gold storages', () => {
    const th18 = home()
      .resourceBuildings()
      .goldStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(4);
  });
});

describe('goldStorage() integration with resourceBuildings()', () => {
  it('is included in resourceBuildings()', () => {
    const result = home().resourceBuildings().findByName('Gold Storage');
    expect(result).toBeDefined();
    expect(result!.id).toBe('gold-storage');
  });

  it('resourceBuildings().byTownHall(1) includes Gold Storage', () => {
    const names = home()
      .resourceBuildings()
      .byTownHall(1)
      .get()
      .map((b) => b.name);
    expect(names).toContain('Gold Storage');
  });

  it('is a HomeVillageResourceBuildings instance', () => {
    expect(home().resourceBuildings().goldStorage()).toBeInstanceOf(HomeVillageResourceBuildings);
  });

  it('resourceBuildings() total count is 5', () => {
    expect(home().resourceBuildings().count()).toBe(5);
  });

  testFilterImmutability(
    'resourceBuildings filter immutability',
    () => home().resourceBuildings(),
    (q) => (q as HomeVillageResourceBuildings).byTownHall(1),
  );
});
