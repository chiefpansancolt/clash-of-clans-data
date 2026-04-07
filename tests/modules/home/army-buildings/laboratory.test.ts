import { home } from '@/modules/home';
import { HomeVillageLaboratory } from '@/modules/home';

describe('laboratory()', () => {
  it('returns a HomeResearchBuilding object', () => {
    const result = home().armyBuildings().laboratory().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('laboratory');
    expect(result.name).toBe('Laboratory');
  });

  it('has 16 levels', () => {
    expect(home().armyBuildings().laboratory().first()!.levels).toHaveLength(16);
  });

  it('base is home', () => {
    expect(home().armyBuildings().laboratory().first()!.base).toBe('home');
  });

  it('category is research', () => {
    expect(home().armyBuildings().laboratory().first()!.category).toBe('research');
  });

  it('size is 3x3', () => {
    expect(home().armyBuildings().laboratory().first()!.size).toBe('3x3');
  });
});

describe('laboratory() levels', () => {
  it('level 1 hitpoints is 500', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[0].hitpoints).toBe(500);
  });

  it('level 1 buildCost is 5000 Elixir', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[0].buildCost).toBe(5000);
    expect(home().armyBuildings().laboratory().first()!.levels[0].buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is 1m', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 7', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[0].xpGained).toBe(7);
  });

  it('level 1 townHallRequired is 3', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[0].townHallRequired).toBe(3);
  });

  it('level 8 buildTime is 1d 18h', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[7].buildTime).toEqual({
      days: 1,
      hours: 18,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 8 townHallRequired is 10', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[7].townHallRequired).toBe(10);
  });

  it('level 9 buildTime is 2d 18h', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[8].buildTime).toEqual({
      days: 2,
      hours: 18,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 16 hitpoints is 1500', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[15].hitpoints).toBe(1500);
  });

  it('level 16 buildCost is 27000000 Elixir', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[15].buildCost).toBe(27000000);
  });

  it('level 16 buildTime is 16d', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[15].buildTime).toEqual({
      days: 16,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 16 xpGained is 1175', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[15].xpGained).toBe(1175);
  });

  it('level 16 townHallRequired is 18', () => {
    expect(home().armyBuildings().laboratory().first()!.levels[15].townHallRequired).toBe(18);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().armyBuildings().laboratory().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('laboratory() availablePerTownHall', () => {
  it('TH2 has 0 laboratories', () => {
    const th2 = home()
      .armyBuildings()
      .laboratory()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 2);
    expect(th2?.count).toBe(0);
  });

  it('TH3 has 1 laboratory', () => {
    const th3 = home()
      .armyBuildings()
      .laboratory()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 3);
    expect(th3?.count).toBe(1);
  });

  it('TH18 has 1 laboratory', () => {
    const th18 = home()
      .armyBuildings()
      .laboratory()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('laboratory() integration with armyBuildings()', () => {
  it('laboratory() returns a HomeVillageLaboratory instance', () => {
    expect(home().armyBuildings().laboratory()).toBeInstanceOf(HomeVillageLaboratory);
  });
});
