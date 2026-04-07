import { home } from '@/modules/home';
import { HomeVillageResourceBuildings } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('darkElixirStorage()', () => {
  it('returns a HomeResourceBuilding object', () => {
    const result = home().resourceBuildings().darkElixirStorage().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('dark-elixir-storage');
    expect(result.name).toBe('Dark Elixir Storage');
  });

  it('has 13 levels', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels).toHaveLength(13);
  });

  it('base is home', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.base).toBe('home');
  });

  it('category is resource', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.category).toBe('resource');
  });

  it('size is 3x3', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.size).toBe('3x3');
  });
});

describe('darkElixirStorage() levels', () => {
  it('level 1 hitpoints is 2000', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[0].hitpoints).toBe(2000);
  });

  it('level 1 capacity is 10000', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[0].capacity).toBe(10000);
  });

  it('level 1 has no productionRate', () => {
    expect(
      home().resourceBuildings().darkElixirStorage().first()!.levels[0].productionRate,
    ).toBeUndefined();
  });

  it('level 1 buildCost is 250000 Elixir', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[0].buildCost).toBe(
      250000,
    );
    expect(
      home().resourceBuildings().darkElixirStorage().first()!.levels[0].buildCostResource,
    ).toBe('Elixir');
  });

  it('level 1 buildTime is 8h', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 8,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 169', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[0].xpGained).toBe(169);
  });

  it('level 1 townHallRequired is 7', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[0].townHallRequired).toBe(
      7,
    );
  });

  it('level 3 townHallRequired is 8', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[2].townHallRequired).toBe(
      8,
    );
  });

  it('level 5 buildTime is 1d 16h', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[4].buildTime).toEqual({
      days: 1,
      hours: 16,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 7 townHallRequired is 12', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[6].townHallRequired).toBe(
      12,
    );
  });

  it('level 13 hitpoints is 4800', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[12].hitpoints).toBe(4800);
  });

  it('level 13 capacity is 450000', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[12].capacity).toBe(
      450000,
    );
  });

  it('level 13 buildCost is 25000000 Elixir', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[12].buildCost).toBe(
      25000000,
    );
  });

  it('level 13 buildTime is 13d', () => {
    expect(home().resourceBuildings().darkElixirStorage().first()!.levels[12].buildTime).toEqual({
      days: 13,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 13 townHallRequired is 18', () => {
    expect(
      home().resourceBuildings().darkElixirStorage().first()!.levels[12].townHallRequired,
    ).toBe(18);
  });

  it('no levels have supercharge flag', () => {
    const sc = home()
      .resourceBuildings()
      .darkElixirStorage()
      .first()!
      .levels.filter((l) => l.supercharge);
    expect(sc).toHaveLength(0);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().resourceBuildings().darkElixirStorage().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('darkElixirStorage() availablePerTownHall', () => {
  it('TH6 has 0 dark elixir storages', () => {
    const th6 = home()
      .resourceBuildings()
      .darkElixirStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 6);
    expect(th6?.count).toBe(0);
  });

  it('TH7 has 1 dark elixir storage', () => {
    const th7 = home()
      .resourceBuildings()
      .darkElixirStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 7);
    expect(th7?.count).toBe(1);
  });

  it('TH18 has 1 dark elixir storage', () => {
    const th18 = home()
      .resourceBuildings()
      .darkElixirStorage()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('darkElixirStorage() integration with resourceBuildings()', () => {
  it('is included in resourceBuildings()', () => {
    const result = home().resourceBuildings().findByName('Dark Elixir Storage');
    expect(result).toBeDefined();
    expect(result!.id).toBe('dark-elixir-storage');
  });

  it('resourceBuildings().byTownHall(7) includes Dark Elixir Storage', () => {
    const names = home()
      .resourceBuildings()
      .byTownHall(7)
      .get()
      .map((b) => b.name);
    expect(names).toContain('Dark Elixir Storage');
  });

  it('resourceBuildings().byTownHall(1) does not include Dark Elixir Storage', () => {
    const names = home()
      .resourceBuildings()
      .byTownHall(1)
      .get()
      .map((b) => b.name);
    expect(names).not.toContain('Dark Elixir Storage');
  });

  it('is a HomeVillageResourceBuildings instance', () => {
    expect(home().resourceBuildings().darkElixirStorage()).toBeInstanceOf(
      HomeVillageResourceBuildings,
    );
  });

  it('resourceBuildings() total count is 6', () => {
    expect(home().resourceBuildings().count()).toBe(6);
  });

  testFilterImmutability(
    'resourceBuildings filter immutability',
    () => home().resourceBuildings(),
    (q) => (q as HomeVillageResourceBuildings).byTownHall(7),
  );
});
