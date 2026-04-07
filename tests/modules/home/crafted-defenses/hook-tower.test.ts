import { home } from '@/modules/home';

describe('hookTower()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().hookTower().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('hook-tower');
    expect(result.name).toBe('Hook Tower');
  });

  it('craftingPhase is 1', () => {
    expect(home().craftedDefenses().hookTower().first()!.craftingPhase).toBe(1);
  });

  it('isCurrent is false', () => {
    expect(home().craftedDefenses().hookTower().first()!.isCurrent).toBe(false);
  });

  it('targetType is both', () => {
    expect(home().craftedDefenses().hookTower().first()!.targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().hookTower().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .hookTower()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints (Elixir)', () => {
    expect(home().craftedDefenses().hookTower().first()!.modules[0].name).toBe('Hitpoints');
    expect(
      home().craftedDefenses().hookTower().first()!.modules[0].upgrades[1].buildCostResource,
    ).toBe('Elixir');
    expect(home().craftedDefenses().hookTower().first()!.modules[0].upgrades[0].stat).toBe(500);
    expect(home().craftedDefenses().hookTower().first()!.modules[0].upgrades[9].stat).toBe(5000);
  });

  it('Module 2 is Attack Cooldown (Gold)', () => {
    expect(home().craftedDefenses().hookTower().first()!.modules[1].name).toBe('Attack Cooldown');
    expect(
      home().craftedDefenses().hookTower().first()!.modules[1].upgrades[1].buildCostResource,
    ).toBe('Gold');
    expect(home().craftedDefenses().hookTower().first()!.modules[1].upgrades[0].stat).toBe(7.1);
    expect(home().craftedDefenses().hookTower().first()!.modules[1].upgrades[9].stat).toBe(5.3);
  });

  it('Module 3 is Stun Time (Dark Elixir)', () => {
    expect(home().craftedDefenses().hookTower().first()!.modules[2].name).toBe('Stun Time');
    expect(
      home().craftedDefenses().hookTower().first()!.modules[2].upgrades[1].buildCostResource,
    ).toBe('Dark Elixir');
    expect(home().craftedDefenses().hookTower().first()!.modules[2].upgrades[0].stat).toBe(2.7);
    expect(home().craftedDefenses().hookTower().first()!.modules[2].upgrades[9].stat).toBe(3.6);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(home().craftedDefenses().hookTower().first()!.images).toHaveLength(4);
    expect(home().craftedDefenses().hookTower().first()!.images[0].fromEffectiveLevel).toBe(3);
    expect(home().craftedDefenses().hookTower().first()!.images[3].toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades are free with 0 sparkyStones', () => {
    home()
      .craftedDefenses()
      .hookTower()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades[0].buildCost).toBe(0);
        expect(mod.upgrades[0].sparkyStones).toBe(0);
      });
  });
});

describe('hookTower() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(home().craftedDefenses().find('hook-tower')).toBeDefined();
  });

  it('is found by byPhase(1)', () => {
    expect(home().craftedDefenses().byPhase(1).find('hook-tower')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(home().craftedDefenses().former().find('hook-tower')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(home().craftedDefenses().current().find('hook-tower')).toBeUndefined();
  });

  it('is found by byTargetType("both")', () => {
    expect(home().craftedDefenses().byTargetType('both').find('hook-tower')).toBeDefined();
  });
});
