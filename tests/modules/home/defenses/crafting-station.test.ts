import { HomeDefenseQuery, homeDefenses } from '@/modules/home/defenses';
import { craftingStation } from '@/modules/home/defenses/crafting-station';
import { testFilterImmutability } from '../../../helpers';

describe('craftingStation()', () => {
  it('returns a HomeDefense object', () => {
    const result = craftingStation();
    expect(result).toBeDefined();
    expect(result.id).toBe('crafting-station');
    expect(result.name).toBe('Crafting Station');
  });

  it('has 1 level', () => {
    expect(craftingStation().levels).toHaveLength(1);
  });

  it('size is 3x3', () => {
    expect(craftingStation().size).toBe('3x3');
  });

  it('base is home', () => {
    expect(craftingStation().base).toBe('home');
  });

  it('category is defense', () => {
    expect(craftingStation().category).toBe('defense');
  });

  it('has no gear-up', () => {
    expect(craftingStation().gearUp).toBeUndefined();
  });

  it('has no normal attack mode', () => {
    expect(craftingStation().modes.normal).toBeUndefined();
  });
});

describe('craftingStation() level 1', () => {
  it('hitpoints is 1000 (unselected state)', () => {
    expect(craftingStation().levels[0].hitpoints).toBe(1000);
  });

  it('buildCost is 0 (free)', () => {
    expect(craftingStation().levels[0].buildCost).toBe(0);
  });

  it('buildTime is instant', () => {
    expect(craftingStation().levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('townHallRequired is 18', () => {
    expect(craftingStation().levels[0].townHallRequired).toBe(18);
  });

  it('has a normal image', () => {
    expect(craftingStation().levels[0].images.normal).toBeTruthy();
  });
});

describe('craftingStation() availablePerTownHall', () => {
  it('only available at TH18 with count 1', () => {
    expect(craftingStation().availablePerTownHall).toHaveLength(1);
    const th18 = craftingStation().availablePerTownHall[0];
    expect(th18.townHallLevel).toBe(18);
    expect(th18.count).toBe(1);
  });
});

describe('craftingStation() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = homeDefenses().findByName('Crafting Station');
    expect(result).toBeDefined();
    expect(result!.id).toBe('crafting-station');
  });

  it('homeDefenses().byTownHall(17) excludes Crafting Station', () => {
    const names = homeDefenses()
      .byTownHall(17)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Crafting Station');
  });

  it('homeDefenses().byTownHall(18) includes Crafting Station', () => {
    const names = homeDefenses()
      .byTownHall(18)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Crafting Station');
  });

  it('homeDefenses().hasGearUp() excludes Crafting Station', () => {
    const names = homeDefenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Crafting Station');
  });

  it('homeDefenses().byDamageType("single") excludes Crafting Station', () => {
    const names = homeDefenses()
      .byDamageType('single')
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Crafting Station');
  });

  it('is a HomeDefenseQuery instance', () => {
    expect(homeDefenses().byBuilding('Crafting Station')).toBeInstanceOf(HomeDefenseQuery);
  });

  testFilterImmutability(
    'homeDefenses filter immutability',
    () => homeDefenses(),
    (q) => (q as HomeDefenseQuery).byBuilding('Crafting Station'),
  );
});
