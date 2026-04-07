import { homeCraftedDefenses } from '@/modules/home/crafted-defenses';
import { hookTower } from '@/modules/home/crafted-defenses/hook-tower';

describe('hookTower()', () => {
  it('returns a CraftedDefense object', () => {
    const result = hookTower();
    expect(result).toBeDefined();
    expect(result.id).toBe('hook-tower');
    expect(result.name).toBe('Hook Tower');
  });

  it('craftingPhase is 1', () => {
    expect(hookTower().craftingPhase).toBe(1);
  });

  it('isCurrent is false', () => {
    expect(hookTower().isCurrent).toBe(false);
  });

  it('targetType is both', () => {
    expect(hookTower().targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(hookTower().modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    hookTower().modules.forEach((mod) => {
      expect(mod.upgrades).toHaveLength(10);
    });
  });

  it('Module 1 is Hitpoints (Elixir)', () => {
    expect(hookTower().modules[0].name).toBe('Hitpoints');
    expect(hookTower().modules[0].upgrades[1].buildCostResource).toBe('Elixir');
    expect(hookTower().modules[0].upgrades[0].stat).toBe(500);
    expect(hookTower().modules[0].upgrades[9].stat).toBe(5000);
  });

  it('Module 2 is Attack Cooldown (Gold)', () => {
    expect(hookTower().modules[1].name).toBe('Attack Cooldown');
    expect(hookTower().modules[1].upgrades[1].buildCostResource).toBe('Gold');
    expect(hookTower().modules[1].upgrades[0].stat).toBe(7.1);
    expect(hookTower().modules[1].upgrades[9].stat).toBe(5.3);
  });

  it('Module 3 is Stun Time (Dark Elixir)', () => {
    expect(hookTower().modules[2].name).toBe('Stun Time');
    expect(hookTower().modules[2].upgrades[1].buildCostResource).toBe('Dark Elixir');
    expect(hookTower().modules[2].upgrades[0].stat).toBe(2.7);
    expect(hookTower().modules[2].upgrades[9].stat).toBe(3.6);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(hookTower().images).toHaveLength(4);
    expect(hookTower().images[0].fromEffectiveLevel).toBe(3);
    expect(hookTower().images[3].toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades are free with 0 sparkyStones', () => {
    hookTower().modules.forEach((mod) => {
      expect(mod.upgrades[0].buildCost).toBe(0);
      expect(mod.upgrades[0].sparkyStones).toBe(0);
    });
  });
});

describe('hookTower() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(homeCraftedDefenses().find('hook-tower')).toBeDefined();
  });

  it('is found by byPhase(1)', () => {
    expect(homeCraftedDefenses().byPhase(1).find('hook-tower')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(homeCraftedDefenses().former().find('hook-tower')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(homeCraftedDefenses().current().find('hook-tower')).toBeUndefined();
  });

  it('is found by byTargetType("both")', () => {
    expect(homeCraftedDefenses().byTargetType('both').find('hook-tower')).toBeDefined();
  });
});
