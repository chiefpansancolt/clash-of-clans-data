import { homeCraftedDefenses } from '@/modules/home/crafted-defenses';
import { crusherMortar } from '@/modules/home/crafted-defenses/crusher-mortar';

describe('crusherMortar()', () => {
  it('returns a CraftedDefense object', () => {
    const result = crusherMortar();
    expect(result).toBeDefined();
    expect(result.id).toBe('crusher-mortar');
    expect(result.name).toBe('Crusher Mortar');
  });

  it('craftingPhase is 1', () => {
    expect(crusherMortar().craftingPhase).toBe(1);
  });

  it('isCurrent is false', () => {
    expect(crusherMortar().isCurrent).toBe(false);
  });

  it('targetType is ground', () => {
    expect(crusherMortar().targetType).toBe('ground');
  });

  it('has exactly 3 modules', () => {
    expect(crusherMortar().modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    crusherMortar().modules.forEach((mod) => {
      expect(mod.upgrades).toHaveLength(10);
    });
  });

  it('Module 1 is Hitpoints (Dark Elixir)', () => {
    expect(crusherMortar().modules[0].name).toBe('Hitpoints');
    expect(crusherMortar().modules[0].upgrades[1].buildCostResource).toBe('Dark Elixir');
    expect(crusherMortar().modules[0].upgrades[0].stat).toBe(400);
    expect(crusherMortar().modules[0].upgrades[9].stat).toBe(4900);
  });

  it('Module 2 is Damage (Elixir)', () => {
    expect(crusherMortar().modules[1].name).toBe('Damage');
    expect(crusherMortar().modules[1].upgrades[1].buildCostResource).toBe('Elixir');
    expect(crusherMortar().modules[1].upgrades[0].stat).toBe(195);
    expect(crusherMortar().modules[1].upgrades[9].stat).toBe(240);
  });

  it('Module 3 is Splash Radius (Gold)', () => {
    expect(crusherMortar().modules[2].name).toBe('Splash Radius');
    expect(crusherMortar().modules[2].upgrades[1].buildCostResource).toBe('Gold');
    expect(crusherMortar().modules[2].upgrades[0].stat).toBe(0.7);
    expect(crusherMortar().modules[2].upgrades[9].stat).toBe(2.5);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(crusherMortar().images).toHaveLength(4);
    expect(crusherMortar().images[0].fromEffectiveLevel).toBe(3);
    expect(crusherMortar().images[3].toEffectiveLevel).toBe(30);
  });
});

describe('crusherMortar() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(homeCraftedDefenses().find('crusher-mortar')).toBeDefined();
  });

  it('is found by byPhase(1)', () => {
    expect(homeCraftedDefenses().byPhase(1).find('crusher-mortar')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(homeCraftedDefenses().former().find('crusher-mortar')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(homeCraftedDefenses().current().find('crusher-mortar')).toBeUndefined();
  });

  it('is found by byTargetType("ground")', () => {
    expect(homeCraftedDefenses().byTargetType('ground').find('crusher-mortar')).toBeDefined();
  });
});
