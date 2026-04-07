import { home } from '@/modules/home';
import { HomeVillageBlacksmith } from '@/modules/home';

describe('blacksmith()', () => {
  it('returns a HomeBlacksmithBuilding object', () => {
    const result = home().armyBuildings().blacksmith().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('blacksmith');
    expect(result.name).toBe('Blacksmith');
  });

  it('has 9 levels', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels).toHaveLength(9);
  });

  it('base is home', () => {
    expect(home().armyBuildings().blacksmith().first()!.base).toBe('home');
  });

  it('category is army', () => {
    expect(home().armyBuildings().blacksmith().first()!.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(home().armyBuildings().blacksmith().first()!.size).toBe('3x3');
  });
});

describe('blacksmith() levels', () => {
  it('level 1 equipmentUnlocked is Earthquake Boots', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].equipmentUnlocked).toBe(
      'Earthquake Boots',
    );
  });

  it('level 1 oreCapacity shinyOre is 10000', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].oreCapacity.shinyOre).toBe(10000);
  });

  it('level 1 oreCapacity glowyOre is 1000', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].oreCapacity.glowyOre).toBe(1000);
  });

  it('level 1 oreCapacity starryOre is 200', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].oreCapacity.starryOre).toBe(200);
  });

  it('level 1 maxEquipmentLevel common is 9', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].maxEquipmentLevel.common).toBe(9);
  });

  it('level 1 maxEquipmentLevel epic is 12', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].maxEquipmentLevel.epic).toBe(12);
  });

  it('level 1 hitpoints is 700', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].hitpoints).toBe(700);
  });

  it('level 1 buildCost is 600000 Elixir', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].buildCost).toBe(600000);
    expect(home().armyBuildings().blacksmith().first()!.levels[0].buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is 12h', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 207', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].xpGained).toBe(207);
  });

  it('level 1 townHallRequired is 8', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[0].townHallRequired).toBe(8);
  });

  it('level 3 equipmentUnlocked is array [Vampstache, Metal Pants]', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[2].equipmentUnlocked).toEqual([
      'Vampstache',
      'Metal Pants',
    ]);
  });

  it('level 3 maxEquipmentLevel common is 12', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[2].maxEquipmentLevel.common).toBe(
      12,
    );
  });

  it('level 5 equipmentUnlocked is array [Healer Puppet, Noble Iron]', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[4].equipmentUnlocked).toEqual([
      'Healer Puppet',
      'Noble Iron',
    ]);
  });

  it('level 5 maxEquipmentLevel common is 15', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[4].maxEquipmentLevel.common).toBe(
      15,
    );
  });

  it('level 6 buildTime is 4d 12h', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[5].buildTime).toEqual({
      days: 4,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 7 maxEquipmentLevel common is 18', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[6].maxEquipmentLevel.common).toBe(
      18,
    );
  });

  it('level 8 maxEquipmentLevel epic is 24', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[7].maxEquipmentLevel.epic).toBe(24);
  });

  it('level 9 hitpoints is 1500', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[8].hitpoints).toBe(1500);
  });

  it('level 9 buildCost is 11000000', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[8].buildCost).toBe(11000000);
  });

  it('level 9 oreCapacity shinyOre is 50000', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[8].oreCapacity.shinyOre).toBe(50000);
  });

  it('level 9 maxEquipmentLevel epic is 27', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[8].maxEquipmentLevel.epic).toBe(27);
  });

  it('level 9 townHallRequired is 16', () => {
    expect(home().armyBuildings().blacksmith().first()!.levels[8].townHallRequired).toBe(16);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().armyBuildings().blacksmith().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('levels 1 and 2 share the same image', () => {
    const levels = home().armyBuildings().blacksmith().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('levels 7 and 8 share the same image', () => {
    const levels = home().armyBuildings().blacksmith().first()!.levels;
    expect(levels[6].images.normal).toBe(levels[7].images.normal);
  });
});

describe('blacksmith() availablePerTownHall', () => {
  it('TH7 has 0 blacksmiths', () => {
    const th7 = home()
      .armyBuildings()
      .blacksmith()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 7);
    expect(th7?.count).toBe(0);
  });

  it('TH8 has 1 blacksmith', () => {
    const th8 = home()
      .armyBuildings()
      .blacksmith()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 8);
    expect(th8?.count).toBe(1);
  });

  it('TH18 has 1 blacksmith', () => {
    const th18 = home()
      .armyBuildings()
      .blacksmith()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('blacksmith() integration with armyBuildings()', () => {
  it('blacksmith() returns a HomeVillageBlacksmith instance', () => {
    expect(home().armyBuildings().blacksmith()).toBeInstanceOf(HomeVillageBlacksmith);
  });
});
