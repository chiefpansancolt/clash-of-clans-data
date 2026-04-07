import { homeCraftedDefenses } from '@/modules/home/crafted-defenses';
import { lightBeam } from '@/modules/home/crafted-defenses/light-beam';

describe('lightBeam()', () => {
  it('returns a CraftedDefense object', () => {
    const result = lightBeam();
    expect(result).toBeDefined();
    expect(result.id).toBe('light-beam');
    expect(result.name).toBe('Light Beam');
  });

  it('craftingPhase is 2', () => {
    expect(lightBeam().craftingPhase).toBe(2);
  });

  it('isCurrent is false', () => {
    expect(lightBeam().isCurrent).toBe(false);
  });

  it('targetType is both', () => {
    expect(lightBeam().targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(lightBeam().modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    lightBeam().modules.forEach((mod) => {
      expect(mod.upgrades).toHaveLength(10);
    });
  });

  it('Module 1 is Hitpoints (Dark Elixir)', () => {
    expect(lightBeam().modules[0].name).toBe('Hitpoints');
    expect(lightBeam().modules[0].upgrades[1].buildCostResource).toBe('Dark Elixir');
    expect(lightBeam().modules[0].upgrades[0].stat).toBe(600);
    expect(lightBeam().modules[0].upgrades[9].stat).toBe(6000);
  });

  it('Module 2 is Damage (Elixir)', () => {
    expect(lightBeam().modules[1].name).toBe('Damage');
    expect(lightBeam().modules[1].upgrades[1].buildCostResource).toBe('Elixir');
    expect(lightBeam().modules[1].upgrades[0].stat).toBe(132);
    expect(lightBeam().modules[1].upgrades[9].stat).toBe(240);
  });

  it('Module 3 is Attack Cooldown (Gold)', () => {
    expect(lightBeam().modules[2].name).toBe('Attack Cooldown');
    expect(lightBeam().modules[2].upgrades[1].buildCostResource).toBe('Gold');
    expect(lightBeam().modules[2].upgrades[0].stat).toBe(1.9);
    expect(lightBeam().modules[2].upgrades[9].stat).toBe(1.0);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(lightBeam().images).toHaveLength(4);
    expect(lightBeam().images[0].fromEffectiveLevel).toBe(3);
    expect(lightBeam().images[3].toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades are free with 0 sparkyStones', () => {
    lightBeam().modules.forEach((mod) => {
      expect(mod.upgrades[0].buildCost).toBe(0);
      expect(mod.upgrades[0].sparkyStones).toBe(0);
    });
  });
});

describe('lightBeam() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(homeCraftedDefenses().find('light-beam')).toBeDefined();
  });

  it('is found by byPhase(2)', () => {
    expect(homeCraftedDefenses().byPhase(2).find('light-beam')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(homeCraftedDefenses().former().find('light-beam')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(homeCraftedDefenses().current().find('light-beam')).toBeUndefined();
  });

  it('is found by byTargetType("both")', () => {
    expect(homeCraftedDefenses().byTargetType('both').find('light-beam')).toBeDefined();
  });
});
