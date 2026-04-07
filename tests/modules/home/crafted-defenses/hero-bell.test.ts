import { homeCraftedDefenses } from '@/modules/home/crafted-defenses';
import { heroBell } from '@/modules/home/crafted-defenses/hero-bell';

describe('heroBell()', () => {
  it('returns a CraftedDefense object', () => {
    const result = heroBell();
    expect(result).toBeDefined();
    expect(result.id).toBe('hero-bell');
    expect(result.name).toBe('Hero Bell');
  });

  it('craftingPhase is 2', () => {
    expect(heroBell().craftingPhase).toBe(2);
  });

  it('isCurrent is false', () => {
    expect(heroBell().isCurrent).toBe(false);
  });

  it('targetType is both', () => {
    expect(heroBell().targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(heroBell().modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    heroBell().modules.forEach((mod) => {
      expect(mod.upgrades).toHaveLength(10);
    });
  });

  it('Module 1 is Hitpoints (Elixir)', () => {
    expect(heroBell().modules[0].name).toBe('Hitpoints');
    expect(heroBell().modules[0].upgrades[1].buildCostResource).toBe('Elixir');
    expect(heroBell().modules[0].upgrades[0].stat).toBe(400);
    expect(heroBell().modules[0].upgrades[9].stat).toBe(4900);
  });

  it('Module 2 is Hero DPS Boost (Gold)', () => {
    expect(heroBell().modules[1].name).toBe('Hero DPS Boost');
    expect(heroBell().modules[1].upgrades[1].buildCostResource).toBe('Gold');
    expect(heroBell().modules[1].upgrades[0].stat).toBe(4);
    expect(heroBell().modules[1].upgrades[9].stat).toBe(17);
  });

  it('Module 3 is Hero HP Boost (Dark Elixir)', () => {
    expect(heroBell().modules[2].name).toBe('Hero HP Boost');
    expect(heroBell().modules[2].upgrades[1].buildCostResource).toBe('Dark Elixir');
    expect(heroBell().modules[2].upgrades[0].stat).toBe(8);
    expect(heroBell().modules[2].upgrades[9].stat).toBe(35);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(heroBell().images).toHaveLength(4);
    expect(heroBell().images[0].fromEffectiveLevel).toBe(3);
    expect(heroBell().images[3].toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades are free with 0 sparkyStones', () => {
    heroBell().modules.forEach((mod) => {
      expect(mod.upgrades[0].buildCost).toBe(0);
      expect(mod.upgrades[0].sparkyStones).toBe(0);
    });
  });
});

describe('heroBell() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(homeCraftedDefenses().find('hero-bell')).toBeDefined();
  });

  it('is found by byPhase(2)', () => {
    expect(homeCraftedDefenses().byPhase(2).find('hero-bell')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(homeCraftedDefenses().former().find('hero-bell')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(homeCraftedDefenses().current().find('hero-bell')).toBeUndefined();
  });

  it('is found by byTargetType("both")', () => {
    expect(homeCraftedDefenses().byTargetType('both').find('hero-bell')).toBeDefined();
  });
});
