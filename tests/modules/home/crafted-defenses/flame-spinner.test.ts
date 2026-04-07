import { homeCraftedDefenses } from '@/modules/home/crafted-defenses';
import { flameSpinner } from '@/modules/home/crafted-defenses/flame-spinner';

describe('flameSpinner()', () => {
  it('returns a CraftedDefense object', () => {
    const result = flameSpinner();
    expect(result).toBeDefined();
    expect(result.id).toBe('flame-spinner');
    expect(result.name).toBe('Flame Spinner');
  });

  it('craftingPhase is 1', () => {
    expect(flameSpinner().craftingPhase).toBe(1);
  });

  it('isCurrent is false', () => {
    expect(flameSpinner().isCurrent).toBe(false);
  });

  it('targetType is both', () => {
    expect(flameSpinner().targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(flameSpinner().modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    flameSpinner().modules.forEach((mod) => {
      expect(mod.upgrades).toHaveLength(10);
    });
  });

  it('Module 1 is Hitpoints (Gold)', () => {
    expect(flameSpinner().modules[0].name).toBe('Hitpoints');
    expect(flameSpinner().modules[0].upgrades[1].buildCostResource).toBe('Gold');
    expect(flameSpinner().modules[0].upgrades[0].stat).toBe(600);
    expect(flameSpinner().modules[0].upgrades[9].stat).toBe(6000);
  });

  it('Module 2 is Damage (Dark Elixir)', () => {
    expect(flameSpinner().modules[1].name).toBe('Damage');
    expect(flameSpinner().modules[1].upgrades[1].buildCostResource).toBe('Dark Elixir');
    expect(flameSpinner().modules[1].upgrades[0].stat).toBe(220);
    expect(flameSpinner().modules[1].upgrades[9].stat).toBe(400);
  });

  it('Module 3 is Burst Fire (Elixir)', () => {
    expect(flameSpinner().modules[2].name).toBe('Burst Fire');
    expect(flameSpinner().modules[2].upgrades[1].buildCostResource).toBe('Elixir');
    expect(flameSpinner().modules[2].upgrades[0].stat).toBe(19);
    expect(flameSpinner().modules[2].upgrades[9].stat).toBe(28);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(flameSpinner().images).toHaveLength(4);
    expect(flameSpinner().images[0].fromEffectiveLevel).toBe(3);
    expect(flameSpinner().images[3].toEffectiveLevel).toBe(30);
  });
});

describe('flameSpinner() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(homeCraftedDefenses().find('flame-spinner')).toBeDefined();
  });

  it('is found by byPhase(1)', () => {
    expect(homeCraftedDefenses().byPhase(1).find('flame-spinner')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(homeCraftedDefenses().former().find('flame-spinner')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(homeCraftedDefenses().current().find('flame-spinner')).toBeUndefined();
  });
});
