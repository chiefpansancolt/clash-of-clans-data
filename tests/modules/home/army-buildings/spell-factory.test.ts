import { home } from '@/modules/home';
import { HomeVillageSpellFactory } from '@/modules/home';

describe('spellFactory()', () => {
  it('returns a HomeSpellFactoryBuilding object', () => {
    const result = home().armyBuildings().spellFactory().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('spell-factory');
    expect(result.name).toBe('Spell Factory');
  });

  it('has 9 levels', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels).toHaveLength(9);
  });

  it('base is home', () => {
    expect(home().armyBuildings().spellFactory().first()!.base).toBe('home');
  });

  it('category is army', () => {
    expect(home().armyBuildings().spellFactory().first()!.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(home().armyBuildings().spellFactory().first()!.size).toBe('3x3');
  });
});

describe('spellFactory() levels', () => {
  it('level 1 hitpoints is 425', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[0].hitpoints).toBe(425);
  });

  it('level 1 unlockedSpell is Lightning Spell', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[0].unlockedSpell).toBe(
      'Lightning Spell',
    );
  });

  it('level 1 spellStorageCapacity is 2', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[0].spellStorageCapacity).toBe(2);
  });

  it('level 1 buildCost is 150000 Elixir', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[0].buildCost).toBe(150000);
    expect(home().armyBuildings().spellFactory().first()!.levels[0].buildCostResource).toBe(
      'Elixir',
    );
  });

  it('level 1 buildTime is 6h', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 6,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 146', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[0].xpGained).toBe(146);
  });

  it('level 1 townHallRequired is 5', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[0].townHallRequired).toBe(5);
  });

  it('level 4 unlockedSpell is an array with Jump Spell and Freeze Spell', () => {
    const unlocked = home().armyBuildings().spellFactory().first()!.levels[3].unlockedSpell;
    expect(Array.isArray(unlocked)).toBe(true);
    expect(unlocked).toContain('Jump Spell');
    expect(unlocked).toContain('Freeze Spell');
  });

  it('level 4 spellStorageCapacity is 8', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[3].spellStorageCapacity).toBe(8);
  });

  it('level 4 townHallRequired is 9', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[3].townHallRequired).toBe(9);
  });

  it('level 5 spellStorageCapacity is 10', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[4].spellStorageCapacity).toBe(10);
  });

  it('level 9 hitpoints is 1150', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[8].hitpoints).toBe(1150);
  });

  it('level 9 unlockedSpell is Totem Spell', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[8].unlockedSpell).toBe(
      'Totem Spell',
    );
  });

  it('level 9 buildCost is 24000000 Elixir', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[8].buildCost).toBe(24000000);
  });

  it('level 9 buildTime is 13d', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[8].buildTime).toEqual({
      days: 13,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 9 xpGained is 1059', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[8].xpGained).toBe(1059);
  });

  it('level 9 townHallRequired is 16', () => {
    expect(home().armyBuildings().spellFactory().first()!.levels[8].townHallRequired).toBe(16);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().armyBuildings().spellFactory().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('spellFactory() availablePerTownHall', () => {
  it('TH4 has 0 spell factories', () => {
    const th4 = home()
      .armyBuildings()
      .spellFactory()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 4);
    expect(th4?.count).toBe(0);
  });

  it('TH5 has 1 spell factory', () => {
    const th5 = home()
      .armyBuildings()
      .spellFactory()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 5);
    expect(th5?.count).toBe(1);
  });

  it('TH18 has 1 spell factory', () => {
    const th18 = home()
      .armyBuildings()
      .spellFactory()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('spellFactory() integration with armyBuildings()', () => {
  it('spellFactory() returns a HomeVillageSpellFactory instance', () => {
    expect(home().armyBuildings().spellFactory()).toBeInstanceOf(HomeVillageSpellFactory);
  });
});
