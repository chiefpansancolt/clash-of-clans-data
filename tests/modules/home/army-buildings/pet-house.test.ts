import { home, HomeVillagePetHouse } from '@/modules/home';

describe('petHouse()', () => {
  it('returns a HomePetHouseBuilding object', () => {
    const result = home().armyBuildings().petHouse().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('pet-house');
    expect(result.name).toBe('Pet House');
  });

  it('has 12 levels', () => {
    expect(home().armyBuildings().petHouse().first()!.levels).toHaveLength(12);
  });

  it('base is home', () => {
    expect(home().armyBuildings().petHouse().first()!.base).toBe('home');
  });

  it('category is army', () => {
    expect(home().armyBuildings().petHouse().first()!.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(home().armyBuildings().petHouse().first()!.size).toBe('3x3');
  });
});

describe('petHouse() levels', () => {
  it('level 1 unlockedPet is L.A.S.S.I', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[0].unlockedPet).toBe('L.A.S.S.I');
  });

  it('level 1 hitpoints is 700', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[0].hitpoints).toBe(700);
  });

  it('level 1 buildCost is 3000000 Elixir', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[0].buildCost).toBe(3000000);
    expect(home().armyBuildings().petHouse().first()!.levels[0].buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is 1d', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[0].buildTime).toEqual({
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 293', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[0].xpGained).toBe(293);
  });

  it('level 1 townHallRequired is 14', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[0].townHallRequired).toBe(14);
  });

  it('level 2 unlockedPet is Electro Owl', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[1].unlockedPet).toBe('Electro Owl');
  });

  it('level 3 unlockedPet is Mighty Yak', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[2].unlockedPet).toBe('Mighty Yak');
  });

  it('level 4 unlockedPet is Unicorn', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[3].unlockedPet).toBe('Unicorn');
  });

  it('level 4 buildTime is 3d 12h', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[3].buildTime).toEqual({
      days: 3,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 5 unlockedPet is Frosty', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[4].unlockedPet).toBe('Frosty');
  });

  it('level 5 townHallRequired is 15', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[4].townHallRequired).toBe(15);
  });

  it('level 6 unlockedPet is Diggy', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[5].unlockedPet).toBe('Diggy');
  });

  it('level 7 unlockedPet is Poison Lizard', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[6].unlockedPet).toBe('Poison Lizard');
  });

  it('level 8 unlockedPet is Phoenix', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[7].unlockedPet).toBe('Phoenix');
  });

  it('level 9 unlockedPet is Spirit Fox', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[8].unlockedPet).toBe('Spirit Fox');
  });

  it('level 9 townHallRequired is 16', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[8].townHallRequired).toBe(16);
  });

  it('level 10 unlockedPet is Angry Jelly', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[9].unlockedPet).toBe('Angry Jelly');
  });

  it('level 10 buildTime is 7d', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[9].buildTime).toEqual({
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 11 unlockedPet is Sneezy', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[10].unlockedPet).toBe('Sneezy');
  });

  it('level 11 townHallRequired is 17', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[10].townHallRequired).toBe(17);
  });

  it('level 11 buildCost is 16500000', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[10].buildCost).toBe(16500000);
  });

  it('level 12 unlockedPet is Greedy Raven', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[11].unlockedPet).toBe('Greedy Raven');
  });

  it('level 12 hitpoints is 1400', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[11].hitpoints).toBe(1400);
  });

  it('level 12 buildCost is 25500000', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[11].buildCost).toBe(25500000);
  });

  it('level 12 buildTime is 13d 12h', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[11].buildTime).toEqual({
      days: 13,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 12 xpGained is 1080', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[11].xpGained).toBe(1080);
  });

  it('level 12 townHallRequired is 18', () => {
    expect(home().armyBuildings().petHouse().first()!.levels[11].townHallRequired).toBe(18);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().armyBuildings().petHouse().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('petHouse() availablePerTownHall', () => {
  it('TH13 has 0 pet houses', () => {
    const th13 = home()
      .armyBuildings()
      .petHouse()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 13);
    expect(th13?.count).toBe(0);
  });

  it('TH14 has 1 pet house', () => {
    const th14 = home()
      .armyBuildings()
      .petHouse()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 14);
    expect(th14?.count).toBe(1);
  });

  it('TH18 has 1 pet house', () => {
    const th18 = home()
      .armyBuildings()
      .petHouse()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('petHouse() integration with armyBuildings()', () => {
  it('petHouse() returns a HomeVillagePetHouse instance', () => {
    expect(home().armyBuildings().petHouse()).toBeInstanceOf(HomeVillagePetHouse);
  });
});
