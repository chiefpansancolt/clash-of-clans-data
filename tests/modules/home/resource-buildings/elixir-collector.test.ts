import { home } from '@/modules/home';
import { HomeVillageResourceBuildings } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('elixirCollector()', () => {
  it('returns a HomeResourceBuilding object', () => {
    const result = home().resourceBuildings().elixirCollector().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('elixir-collector');
    expect(result.name).toBe('Elixir Collector');
  });

  it('has 20 levels (17 regular + 3 supercharge)', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels).toHaveLength(20);
  });

  it('base is home', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.base).toBe('home');
  });

  it('category is resource', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.category).toBe('resource');
  });

  it('size is 3x3', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.size).toBe('3x3');
  });
});

describe('elixirCollector() levels', () => {
  it('level 1 hitpoints is 75', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[0].hitpoints).toBe(75);
  });

  it('level 1 capacity is 1000', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[0].capacity).toBe(1000);
  });

  it('level 1 productionRate is 200', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[0].productionRate).toBe(
      200,
    );
  });

  it('level 1 buildCost is 150 Gold', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[0].buildCost).toBe(150);
    expect(home().resourceBuildings().elixirCollector().first()!.levels[0].buildCostResource).toBe(
      'Gold',
    );
  });

  it('level 1 buildTime is 5s', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 5,
    });
  });

  it('level 1 xpGained is 2', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[0].xpGained).toBe(2);
  });

  it('level 1 townHallRequired is 1', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[0].townHallRequired).toBe(
      1,
    );
  });

  it('level 5 capacity is 10000', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[4].capacity).toBe(10000);
  });

  it('level 11 townHallRequired is 7', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[10].townHallRequired).toBe(
      7,
    );
  });

  it('level 17 hitpoints is 1400', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[16].hitpoints).toBe(1400);
  });

  it('level 17 capacity is 420000', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[16].capacity).toBe(420000);
  });

  it('level 17 productionRate is 7560', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[16].productionRate).toBe(
      7560,
    );
  });

  it('level 17 buildCost is 8000000 Gold', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[16].buildCost).toBe(
      8000000,
    );
    expect(home().resourceBuildings().elixirCollector().first()!.levels[16].buildCostResource).toBe(
      'Gold',
    );
  });

  it('level 17 buildTime is 4d', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[16].buildTime).toEqual({
      days: 4,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 17 townHallRequired is 16', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[16].townHallRequired).toBe(
      16,
    );
  });

  it('regular levels have no supercharge flag', () => {
    const regular = home()
      .resourceBuildings()
      .elixirCollector()
      .first()!
      .levels.filter((l) => !l.supercharge);
    expect(regular).toHaveLength(17);
  });

  it('supercharge levels 1–3 are flagged', () => {
    const sc = home()
      .resourceBuildings()
      .elixirCollector()
      .first()!
      .levels.filter((l) => l.supercharge);
    expect(sc).toHaveLength(3);
  });

  it('supercharge 1 capacity is 436500', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[17].capacity).toBe(436500);
  });

  it('supercharge 1 productionRate is 7857', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[17].productionRate).toBe(
      7857,
    );
  });

  it('supercharge 3 hitpoints is 1450', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[19].hitpoints).toBe(1450);
  });

  it('supercharge levels require TH18', () => {
    expect(home().resourceBuildings().elixirCollector().first()!.levels[17].townHallRequired).toBe(
      18,
    );
    expect(home().resourceBuildings().elixirCollector().first()!.levels[18].townHallRequired).toBe(
      18,
    );
    expect(home().resourceBuildings().elixirCollector().first()!.levels[19].townHallRequired).toBe(
      18,
    );
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().resourceBuildings().elixirCollector().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('elixirCollector() availablePerTownHall', () => {
  it('TH1 has 1 elixir collector', () => {
    const th1 = home()
      .resourceBuildings()
      .elixirCollector()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 1);
    expect(th1?.count).toBe(1);
  });

  it('TH9 has 7 elixir collectors', () => {
    const th9 = home()
      .resourceBuildings()
      .elixirCollector()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 9);
    expect(th9?.count).toBe(7);
  });
});

describe('elixirCollector() integration with resourceBuildings()', () => {
  it('is included in resourceBuildings()', () => {
    const result = home().resourceBuildings().findByName('Elixir Collector');
    expect(result).toBeDefined();
    expect(result!.id).toBe('elixir-collector');
  });

  it('resourceBuildings().byTownHall(1) includes Elixir Collector', () => {
    const names = home()
      .resourceBuildings()
      .byTownHall(1)
      .get()
      .map((b) => b.name);
    expect(names).toContain('Elixir Collector');
  });

  it('is a HomeVillageResourceBuildings instance', () => {
    expect(home().resourceBuildings().elixirCollector()).toBeInstanceOf(
      HomeVillageResourceBuildings,
    );
  });

  it('resourceBuildings() total count is now 5', () => {
    expect(home().resourceBuildings().count()).toBe(6);
  });

  testFilterImmutability(
    'resourceBuildings filter immutability',
    () => home().resourceBuildings(),
    (q) => (q as HomeVillageResourceBuildings).byTownHall(1),
  );
});
