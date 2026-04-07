import { home } from '@/modules/home';

describe('flameSpinner()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().flameSpinner().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('flame-spinner');
    expect(result.name).toBe('Flame Spinner');
  });

  it('craftingPhase is 1', () => {
    expect(home().craftedDefenses().flameSpinner().first()!.craftingPhase).toBe(1);
  });

  it('isCurrent is false', () => {
    expect(home().craftedDefenses().flameSpinner().first()!.isCurrent).toBe(false);
  });

  it('targetType is both', () => {
    expect(home().craftedDefenses().flameSpinner().first()!.targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().flameSpinner().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .flameSpinner()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints (Gold)', () => {
    expect(home().craftedDefenses().flameSpinner().first()!.modules[0].name).toBe('Hitpoints');
    expect(
      home().craftedDefenses().flameSpinner().first()!.modules[0].upgrades[1].buildCostResource,
    ).toBe('Gold');
    expect(home().craftedDefenses().flameSpinner().first()!.modules[0].upgrades[0].stat).toBe(600);
    expect(home().craftedDefenses().flameSpinner().first()!.modules[0].upgrades[9].stat).toBe(6000);
  });

  it('Module 2 is Damage (Dark Elixir)', () => {
    expect(home().craftedDefenses().flameSpinner().first()!.modules[1].name).toBe('Damage');
    expect(
      home().craftedDefenses().flameSpinner().first()!.modules[1].upgrades[1].buildCostResource,
    ).toBe('Dark Elixir');
    expect(home().craftedDefenses().flameSpinner().first()!.modules[1].upgrades[0].stat).toBe(220);
    expect(home().craftedDefenses().flameSpinner().first()!.modules[1].upgrades[9].stat).toBe(400);
  });

  it('Module 3 is Burst Fire (Elixir)', () => {
    expect(home().craftedDefenses().flameSpinner().first()!.modules[2].name).toBe('Burst Fire');
    expect(
      home().craftedDefenses().flameSpinner().first()!.modules[2].upgrades[1].buildCostResource,
    ).toBe('Elixir');
    expect(home().craftedDefenses().flameSpinner().first()!.modules[2].upgrades[0].stat).toBe(19);
    expect(home().craftedDefenses().flameSpinner().first()!.modules[2].upgrades[9].stat).toBe(28);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(home().craftedDefenses().flameSpinner().first()!.images).toHaveLength(4);
    expect(home().craftedDefenses().flameSpinner().first()!.images[0].fromEffectiveLevel).toBe(3);
    expect(home().craftedDefenses().flameSpinner().first()!.images[3].toEffectiveLevel).toBe(30);
  });
});

describe('flameSpinner() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(home().craftedDefenses().find('flame-spinner')).toBeDefined();
  });

  it('is found by byPhase(1)', () => {
    expect(home().craftedDefenses().byPhase(1).find('flame-spinner')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(home().craftedDefenses().former().find('flame-spinner')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(home().craftedDefenses().current().find('flame-spinner')).toBeUndefined();
  });
});
