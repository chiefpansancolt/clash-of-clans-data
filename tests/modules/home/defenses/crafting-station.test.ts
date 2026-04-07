import { home } from '@/modules/home';
import { HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('craftingStation()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().craftingStation().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('crafting-station');
    expect(result.name).toBe('Crafting Station');
  });

  it('has 1 level', () => {
    expect(home().defenses().craftingStation().first()!.levels).toHaveLength(1);
  });

  it('size is 3x3', () => {
    expect(home().defenses().craftingStation().first()!.size).toBe('3x3');
  });

  it('base is home', () => {
    expect(home().defenses().craftingStation().first()!.base).toBe('home');
  });

  it('category is defense', () => {
    expect(home().defenses().craftingStation().first()!.category).toBe('defense');
  });

  it('has no gear-up', () => {
    expect(home().defenses().craftingStation().first()!.gearUp).toBeUndefined();
  });

  it('has no normal attack mode', () => {
    expect(home().defenses().craftingStation().first()!.modes.normal).toBeUndefined();
  });
});

describe('craftingStation() level 1', () => {
  it('hitpoints is 1000 (unselected state)', () => {
    expect(home().defenses().craftingStation().first()!.levels[0].hitpoints).toBe(1000);
  });

  it('buildCost is 0 (free)', () => {
    expect(home().defenses().craftingStation().first()!.levels[0].buildCost).toBe(0);
  });

  it('buildTime is instant', () => {
    expect(home().defenses().craftingStation().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('townHallRequired is 18', () => {
    expect(home().defenses().craftingStation().first()!.levels[0].townHallRequired).toBe(18);
  });

  it('has a normal image', () => {
    expect(home().defenses().craftingStation().first()!.levels[0].images.normal).toBeTruthy();
  });
});

describe('craftingStation() availablePerTownHall', () => {
  it('only available at TH18 with count 1', () => {
    expect(home().defenses().craftingStation().first()!.availablePerTownHall).toHaveLength(1);
    const th18 = home().defenses().craftingStation().first()!.availablePerTownHall[0];
    expect(th18.townHallLevel).toBe(18);
    expect(th18.count).toBe(1);
  });
});

describe('craftingStation() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = home().defenses().findByName('Crafting Station');
    expect(result).toBeDefined();
    expect(result!.id).toBe('crafting-station');
  });

  it('homeDefenses().byTownHall(17) excludes Crafting Station', () => {
    const names = home()
      .defenses()
      .byTownHall(17)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Crafting Station');
  });

  it('homeDefenses().byTownHall(18) includes Crafting Station', () => {
    const names = home()
      .defenses()
      .byTownHall(18)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Crafting Station');
  });

  it('homeDefenses().hasGearUp() excludes Crafting Station', () => {
    const names = home()
      .defenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Crafting Station');
  });

  it('homeDefenses().byDamageType("single") excludes Crafting Station', () => {
    const names = home()
      .defenses()
      .byDamageType('single')
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Crafting Station');
  });

  it('is a HomeVillageDefenses instance', () => {
    expect(home().defenses().byBuilding('Crafting Station')).toBeInstanceOf(HomeVillageDefenses);
  });

  testFilterImmutability(
    'homeDefenses filter immutability',
    () => home().defenses(),
    (q) => (q as HomeVillageDefenses).byBuilding('Crafting Station'),
  );
});
