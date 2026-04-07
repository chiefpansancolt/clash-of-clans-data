import { home } from '@/modules/home';
import { HomeVillageWorkshop } from '@/modules/home';

describe('workshop()', () => {
  it('returns a HomeWorkshopBuilding object', () => {
    const result = home().armyBuildings().workshop().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('workshop');
    expect(result.name).toBe('Workshop');
  });

  it('has 8 levels', () => {
    expect(home().armyBuildings().workshop().first()!.levels).toHaveLength(8);
  });

  it('base is home', () => {
    expect(home().armyBuildings().workshop().first()!.base).toBe('home');
  });

  it('category is army', () => {
    expect(home().armyBuildings().workshop().first()!.category).toBe('army');
  });

  it('size is 4x4', () => {
    expect(home().armyBuildings().workshop().first()!.size).toBe('4x4');
  });
});

describe('workshop() levels', () => {
  it('level 1 unlockedSiegeMachine is Wall Wrecker', () => {
    expect(home().armyBuildings().workshop().first()!.levels[0].unlockedSiegeMachine).toBe(
      'Wall Wrecker',
    );
  });

  it('level 1 siegeMachineCapacity is 1', () => {
    expect(home().armyBuildings().workshop().first()!.levels[0].siegeMachineCapacity).toBe(1);
  });

  it('level 1 hitpoints is 1000', () => {
    expect(home().armyBuildings().workshop().first()!.levels[0].hitpoints).toBe(1000);
  });

  it('level 1 buildCost is 2400000 Elixir', () => {
    expect(home().armyBuildings().workshop().first()!.levels[0].buildCost).toBe(2400000);
    expect(home().armyBuildings().workshop().first()!.levels[0].buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is 2d', () => {
    expect(home().armyBuildings().workshop().first()!.levels[0].buildTime).toEqual({
      days: 2,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 415', () => {
    expect(home().armyBuildings().workshop().first()!.levels[0].xpGained).toBe(415);
  });

  it('level 1 townHallRequired is 12', () => {
    expect(home().armyBuildings().workshop().first()!.levels[0].townHallRequired).toBe(12);
  });

  it('level 2 unlockedSiegeMachine is Battle Blimp', () => {
    expect(home().armyBuildings().workshop().first()!.levels[1].unlockedSiegeMachine).toBe(
      'Battle Blimp',
    );
  });

  it('level 2 siegeMachineCapacity is 2', () => {
    expect(home().armyBuildings().workshop().first()!.levels[1].siegeMachineCapacity).toBe(2);
  });

  it('level 3 unlockedSiegeMachine is Stone Slammer', () => {
    expect(home().armyBuildings().workshop().first()!.levels[2].unlockedSiegeMachine).toBe(
      'Stone Slammer',
    );
  });

  it('level 3 siegeMachineCapacity is 3', () => {
    expect(home().armyBuildings().workshop().first()!.levels[2].siegeMachineCapacity).toBe(3);
  });

  it('level 3 buildTime is 3d 12h', () => {
    expect(home().armyBuildings().workshop().first()!.levels[2].buildTime).toEqual({
      days: 3,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 4 unlockedSiegeMachine is Siege Barracks', () => {
    expect(home().armyBuildings().workshop().first()!.levels[3].unlockedSiegeMachine).toBe(
      'Siege Barracks',
    );
  });

  it('level 4 townHallRequired is 13', () => {
    expect(home().armyBuildings().workshop().first()!.levels[3].townHallRequired).toBe(13);
  });

  it('level 5 unlockedSiegeMachine is Log Launcher', () => {
    expect(home().armyBuildings().workshop().first()!.levels[4].unlockedSiegeMachine).toBe(
      'Log Launcher',
    );
  });

  it('level 6 unlockedSiegeMachine is Flame Flinger', () => {
    expect(home().armyBuildings().workshop().first()!.levels[5].unlockedSiegeMachine).toBe(
      'Flame Flinger',
    );
  });

  it('level 6 townHallRequired is 14', () => {
    expect(home().armyBuildings().workshop().first()!.levels[5].townHallRequired).toBe(14);
  });

  it('level 7 unlockedSiegeMachine is Battle Drill', () => {
    expect(home().armyBuildings().workshop().first()!.levels[6].unlockedSiegeMachine).toBe(
      'Battle Drill',
    );
  });

  it('level 7 townHallRequired is 15', () => {
    expect(home().armyBuildings().workshop().first()!.levels[6].townHallRequired).toBe(15);
  });

  it('level 8 unlockedSiegeMachine is Troop Launcher', () => {
    expect(home().armyBuildings().workshop().first()!.levels[7].unlockedSiegeMachine).toBe(
      'Troop Launcher',
    );
  });

  it('level 8 hitpoints is 1700', () => {
    expect(home().armyBuildings().workshop().first()!.levels[7].hitpoints).toBe(1700);
  });

  it('level 8 buildCost is 13000000', () => {
    expect(home().armyBuildings().workshop().first()!.levels[7].buildCost).toBe(13000000);
  });

  it('level 8 buildTime is 7d', () => {
    expect(home().armyBuildings().workshop().first()!.levels[7].buildTime).toEqual({
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 8 xpGained is 777', () => {
    expect(home().armyBuildings().workshop().first()!.levels[7].xpGained).toBe(777);
  });

  it('level 8 townHallRequired is 16', () => {
    expect(home().armyBuildings().workshop().first()!.levels[7].townHallRequired).toBe(16);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().armyBuildings().workshop().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('workshop() availablePerTownHall', () => {
  it('TH11 has 0 workshops', () => {
    const th11 = home()
      .armyBuildings()
      .workshop()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 11);
    expect(th11?.count).toBe(0);
  });

  it('TH12 has 1 workshop', () => {
    const th12 = home()
      .armyBuildings()
      .workshop()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 12);
    expect(th12?.count).toBe(1);
  });

  it('TH18 has 1 workshop', () => {
    const th18 = home()
      .armyBuildings()
      .workshop()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('workshop() integration with armyBuildings()', () => {
  it('workshop() returns a HomeVillageWorkshop instance', () => {
    expect(home().armyBuildings().workshop()).toBeInstanceOf(HomeVillageWorkshop);
  });
});
