import { home } from '@/modules/home';

describe('crusherMortar()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().crusherMortar().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('crusher-mortar');
    expect(result.name).toBe('Crusher Mortar');
  });

  it('craftingPhase is 1', () => {
    expect(home().craftedDefenses().crusherMortar().first()!.craftingPhase).toBe(1);
  });

  it('isCurrent is false', () => {
    expect(home().craftedDefenses().crusherMortar().first()!.isCurrent).toBe(false);
  });

  it('targetType is ground', () => {
    expect(home().craftedDefenses().crusherMortar().first()!.targetType).toBe('ground');
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().crusherMortar().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .crusherMortar()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints (Dark Elixir)', () => {
    expect(home().craftedDefenses().crusherMortar().first()!.modules[0].name).toBe('Hitpoints');
    expect(
      home().craftedDefenses().crusherMortar().first()!.modules[0].upgrades[1].buildCostResource,
    ).toBe('Dark Elixir');
    expect(home().craftedDefenses().crusherMortar().first()!.modules[0].upgrades[0].stat).toBe(400);
    expect(home().craftedDefenses().crusherMortar().first()!.modules[0].upgrades[9].stat).toBe(
      4900,
    );
  });

  it('Module 2 is Damage (Elixir)', () => {
    expect(home().craftedDefenses().crusherMortar().first()!.modules[1].name).toBe('Damage');
    expect(
      home().craftedDefenses().crusherMortar().first()!.modules[1].upgrades[1].buildCostResource,
    ).toBe('Elixir');
    expect(home().craftedDefenses().crusherMortar().first()!.modules[1].upgrades[0].stat).toBe(195);
    expect(home().craftedDefenses().crusherMortar().first()!.modules[1].upgrades[9].stat).toBe(240);
  });

  it('Module 3 is Splash Radius (Gold)', () => {
    expect(home().craftedDefenses().crusherMortar().first()!.modules[2].name).toBe('Splash Radius');
    expect(
      home().craftedDefenses().crusherMortar().first()!.modules[2].upgrades[1].buildCostResource,
    ).toBe('Gold');
    expect(home().craftedDefenses().crusherMortar().first()!.modules[2].upgrades[0].stat).toBe(0.7);
    expect(home().craftedDefenses().crusherMortar().first()!.modules[2].upgrades[9].stat).toBe(2.5);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(home().craftedDefenses().crusherMortar().first()!.images).toHaveLength(4);
    expect(home().craftedDefenses().crusherMortar().first()!.images[0].fromEffectiveLevel).toBe(3);
    expect(home().craftedDefenses().crusherMortar().first()!.images[3].toEffectiveLevel).toBe(30);
  });
});

describe('crusherMortar() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(home().craftedDefenses().find('crusher-mortar')).toBeDefined();
  });

  it('is found by byPhase(1)', () => {
    expect(home().craftedDefenses().byPhase(1).find('crusher-mortar')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(home().craftedDefenses().former().find('crusher-mortar')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(home().craftedDefenses().current().find('crusher-mortar')).toBeUndefined();
  });

  it('is found by byTargetType("ground")', () => {
    expect(home().craftedDefenses().byTargetType('ground').find('crusher-mortar')).toBeDefined();
  });
});
