import { home } from '@/modules/home';
import { HomeVillageResourceBuildings } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('darkElixirDrill()', () => {
  it('returns a HomeResourceBuilding object', () => {
    const result = home().resourceBuildings().darkElixirDrill().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('dark-elixir-drill');
    expect(result.name).toBe('Dark Elixir Drill');
  });

  it('has 14 levels (11 regular + 3 supercharge)', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels).toHaveLength(14);
  });

  it('base is home', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.base).toBe('home');
  });

  it('category is resource', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.category).toBe('resource');
  });

  it('size is 3x3', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.size).toBe('3x3');
  });
});

describe('darkElixirDrill() levels', () => {
  it('level 1 hitpoints is 800', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[0].hitpoints).toBe(800);
  });

  it('level 1 capacity is 160', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[0].capacity).toBe(160);
  });

  it('level 1 productionRate is 20', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[0].productionRate).toBe(20);
  });

  it('level 1 buildCost is 180000 Elixir', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[0].buildCost).toBe(180000);
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[0].buildCostResource).toBe(
      'Elixir',
    );
  });

  it('level 1 buildTime is 4h', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 4,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 120', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[0].xpGained).toBe(120);
  });

  it('level 1 townHallRequired is 7', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[0].townHallRequired).toBe(
      7,
    );
  });

  it('level 4 townHallRequired is 9', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[3].townHallRequired).toBe(
      9,
    );
  });

  it('level 7 capacity is 2400', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[6].capacity).toBe(2400);
  });

  it('level 7 productionRate is 120', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[6].productionRate).toBe(
      120,
    );
  });

  it('level 7 townHallRequired is 10', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[6].townHallRequired).toBe(
      10,
    );
  });

  it('level 11 hitpoints is 1600', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[10].hitpoints).toBe(1600);
  });

  it('level 11 capacity is 4600', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[10].capacity).toBe(4600);
  });

  it('level 11 productionRate is 200', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[10].productionRate).toBe(
      200,
    );
  });

  it('level 11 buildCost is 12000000 Elixir', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[10].buildCost).toBe(
      12000000,
    );
  });

  it('level 11 buildTime is 6d', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[10].buildTime).toEqual({
      days: 6,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 11 townHallRequired is 16', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[10].townHallRequired).toBe(
      16,
    );
  });

  it('regular levels have no supercharge flag', () => {
    const regular = home()
      .resourceBuildings()
      .darkElixirDrill()
      .first()!
      .levels.filter((l) => !l.supercharge);
    expect(regular).toHaveLength(11);
  });

  it('supercharge levels 1–3 are flagged', () => {
    const sc = home()
      .resourceBuildings()
      .darkElixirDrill()
      .first()!
      .levels.filter((l) => l.supercharge);
    expect(sc).toHaveLength(3);
  });

  it('supercharge 1 capacity is 4807', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[11].capacity).toBe(4807);
  });

  it('supercharge 1 productionRate is 209', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[11].productionRate).toBe(
      209,
    );
  });

  it('supercharge 2 capacity is 5014', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[12].capacity).toBe(5014);
  });

  it('supercharge 3 hitpoints is 1650', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[13].hitpoints).toBe(1650);
  });

  it('supercharge levels require TH18', () => {
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[11].townHallRequired).toBe(
      18,
    );
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[12].townHallRequired).toBe(
      18,
    );
    expect(home().resourceBuildings().darkElixirDrill().first()!.levels[13].townHallRequired).toBe(
      18,
    );
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().resourceBuildings().darkElixirDrill().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('darkElixirDrill() availablePerTownHall', () => {
  it('TH1 has 0 dark elixir drills', () => {
    const th1 = home()
      .resourceBuildings()
      .darkElixirDrill()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 1);
    expect(th1?.count).toBe(0);
  });

  it('TH7 has 1 dark elixir drill', () => {
    const th7 = home()
      .resourceBuildings()
      .darkElixirDrill()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 7);
    expect(th7?.count).toBe(1);
  });

  it('TH8 has 2 dark elixir drills', () => {
    const th8 = home()
      .resourceBuildings()
      .darkElixirDrill()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 8);
    expect(th8?.count).toBe(2);
  });

  it('TH9 has 3 dark elixir drills', () => {
    const th9 = home()
      .resourceBuildings()
      .darkElixirDrill()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 9);
    expect(th9?.count).toBe(3);
  });

  it('TH18 has 3 dark elixir drills', () => {
    const th18 = home()
      .resourceBuildings()
      .darkElixirDrill()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(3);
  });
});

describe('darkElixirDrill() integration with resourceBuildings()', () => {
  it('is included in resourceBuildings()', () => {
    const result = home().resourceBuildings().findByName('Dark Elixir Drill');
    expect(result).toBeDefined();
    expect(result!.id).toBe('dark-elixir-drill');
  });

  it('resourceBuildings().byTownHall(7) includes Dark Elixir Drill', () => {
    const names = home()
      .resourceBuildings()
      .byTownHall(7)
      .get()
      .map((b) => b.name);
    expect(names).toContain('Dark Elixir Drill');
  });

  it('resourceBuildings().byTownHall(1) does not include Dark Elixir Drill', () => {
    const names = home()
      .resourceBuildings()
      .byTownHall(1)
      .get()
      .map((b) => b.name);
    expect(names).not.toContain('Dark Elixir Drill');
  });

  it('is a HomeVillageResourceBuildings instance', () => {
    expect(home().resourceBuildings().darkElixirDrill()).toBeInstanceOf(
      HomeVillageResourceBuildings,
    );
  });

  it('resourceBuildings() total count is 5', () => {
    expect(home().resourceBuildings().count()).toBe(5);
  });

  testFilterImmutability(
    'resourceBuildings filter immutability',
    () => home().resourceBuildings(),
    (q) => (q as HomeVillageResourceBuildings).byTownHall(7),
  );
});
