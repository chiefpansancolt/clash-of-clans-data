import { home } from '@/modules/home';

describe('heroBell()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().heroBell().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('hero-bell');
    expect(result.name).toBe('Hero Bell');
  });

  it('craftingPhase is 2', () => {
    expect(home().craftedDefenses().heroBell().first()!.craftingPhase).toBe(2);
  });

  it('isCurrent is false', () => {
    expect(home().craftedDefenses().heroBell().first()!.isCurrent).toBe(false);
  });

  it('targetType is both', () => {
    expect(home().craftedDefenses().heroBell().first()!.targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().heroBell().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .heroBell()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints (Elixir)', () => {
    expect(home().craftedDefenses().heroBell().first()!.modules[0].name).toBe('Hitpoints');
    expect(
      home().craftedDefenses().heroBell().first()!.modules[0].upgrades[1].buildCostResource,
    ).toBe('Elixir');
    expect(home().craftedDefenses().heroBell().first()!.modules[0].upgrades[0].stat).toBe(400);
    expect(home().craftedDefenses().heroBell().first()!.modules[0].upgrades[9].stat).toBe(4900);
  });

  it('Module 2 is Hero DPS Boost (Gold)', () => {
    expect(home().craftedDefenses().heroBell().first()!.modules[1].name).toBe('Hero DPS Boost');
    expect(
      home().craftedDefenses().heroBell().first()!.modules[1].upgrades[1].buildCostResource,
    ).toBe('Gold');
    expect(home().craftedDefenses().heroBell().first()!.modules[1].upgrades[0].stat).toBe(4);
    expect(home().craftedDefenses().heroBell().first()!.modules[1].upgrades[9].stat).toBe(17);
  });

  it('Module 3 is Hero HP Boost (Dark Elixir)', () => {
    expect(home().craftedDefenses().heroBell().first()!.modules[2].name).toBe('Hero HP Boost');
    expect(
      home().craftedDefenses().heroBell().first()!.modules[2].upgrades[1].buildCostResource,
    ).toBe('Dark Elixir');
    expect(home().craftedDefenses().heroBell().first()!.modules[2].upgrades[0].stat).toBe(8);
    expect(home().craftedDefenses().heroBell().first()!.modules[2].upgrades[9].stat).toBe(35);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(home().craftedDefenses().heroBell().first()!.images).toHaveLength(4);
    expect(home().craftedDefenses().heroBell().first()!.images[0].fromEffectiveLevel).toBe(3);
    expect(home().craftedDefenses().heroBell().first()!.images[3].toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades are free with 0 sparkyStones', () => {
    home()
      .craftedDefenses()
      .heroBell()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades[0].buildCost).toBe(0);
        expect(mod.upgrades[0].sparkyStones).toBe(0);
      });
  });
});

describe('heroBell() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(home().craftedDefenses().find('hero-bell')).toBeDefined();
  });

  it('is found by byPhase(2)', () => {
    expect(home().craftedDefenses().byPhase(2).find('hero-bell')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(home().craftedDefenses().former().find('hero-bell')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(home().craftedDefenses().current().find('hero-bell')).toBeUndefined();
  });

  it('is found by byTargetType("both")', () => {
    expect(home().craftedDefenses().byTargetType('both').find('hero-bell')).toBeDefined();
  });
});
