import { home } from '@/modules/home';
import { HomeVillageDarkSpellFactory } from '@/modules/home';

describe('darkSpellFactory()', () => {
  it('returns a HomeSpellFactoryBuilding object', () => {
    const result = home().armyBuildings().darkSpellFactory().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('dark-spell-factory');
    expect(result.name).toBe('Dark Spell Factory');
  });

  it('has 7 levels', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels).toHaveLength(7);
  });

  it('base is home', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.base).toBe('home');
  });

  it('category is army', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.category).toBe('army');
  });

  it('size is 3x3', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.size).toBe('3x3');
  });
});

describe('darkSpellFactory() levels', () => {
  it('level 1 hitpoints is 600', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[0].hitpoints).toBe(600);
  });

  it('level 1 unlockedSpell is Poison Spell', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[0].unlockedSpell).toBe(
      'Poison Spell',
    );
  });

  it('level 1 spellStorageCapacity is 1', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[0].spellStorageCapacity).toBe(
      1,
    );
  });

  it('level 1 buildCost is 130000 Elixir', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[0].buildCost).toBe(130000);
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[0].buildCostResource).toBe(
      'Elixir',
    );
  });

  it('level 1 buildTime is 6h', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 6,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 146', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[0].xpGained).toBe(146);
  });

  it('level 1 townHallRequired is 8', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[0].townHallRequired).toBe(8);
  });

  it('level 3 unlockedSpell is Haste Spell', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[2].unlockedSpell).toBe(
      'Haste Spell',
    );
  });

  it('level 3 townHallRequired is 9', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[2].townHallRequired).toBe(9);
  });

  it('level 6 unlockedSpell is Overgrowth Spell', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[5].unlockedSpell).toBe(
      'Overgrowth Spell',
    );
  });

  it('level 6 townHallRequired is 12', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[5].townHallRequired).toBe(12);
  });

  it('level 7 hitpoints is 1010', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[6].hitpoints).toBe(1010);
  });

  it('level 7 unlockedSpell is Ice Block Spell', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[6].unlockedSpell).toBe(
      'Ice Block Spell',
    );
  });

  it('level 7 buildCost is 11000000 Elixir', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[6].buildCost).toBe(11000000);
  });

  it('level 7 buildTime is 7d', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[6].buildTime).toEqual({
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 7 xpGained is 777', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[6].xpGained).toBe(777);
  });

  it('level 7 townHallRequired is 14', () => {
    expect(home().armyBuildings().darkSpellFactory().first()!.levels[6].townHallRequired).toBe(14);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().armyBuildings().darkSpellFactory().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('darkSpellFactory() availablePerTownHall', () => {
  it('TH7 has 0 dark spell factories', () => {
    const th7 = home()
      .armyBuildings()
      .darkSpellFactory()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 7);
    expect(th7?.count).toBe(0);
  });

  it('TH8 has 1 dark spell factory', () => {
    const th8 = home()
      .armyBuildings()
      .darkSpellFactory()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 8);
    expect(th8?.count).toBe(1);
  });

  it('TH18 has 1 dark spell factory', () => {
    const th18 = home()
      .armyBuildings()
      .darkSpellFactory()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});

describe('darkSpellFactory() integration with armyBuildings()', () => {
  it('darkSpellFactory() returns a HomeVillageDarkSpellFactory instance', () => {
    expect(home().armyBuildings().darkSpellFactory()).toBeInstanceOf(HomeVillageDarkSpellFactory);
  });
});
