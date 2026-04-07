import { homeCraftedDefenses } from '@/modules/home/crafted-defenses';
import { bombHive } from '@/modules/home/crafted-defenses/bomb-hive';

describe('bombHive()', () => {
  it('returns a CraftedDefense object', () => {
    const result = bombHive();
    expect(result).toBeDefined();
    expect(result.id).toBe('bomb-hive');
    expect(result.name).toBe('Bomb Hive');
  });

  it('craftingPhase is 2', () => {
    expect(bombHive().craftingPhase).toBe(2);
  });

  it('isCurrent is false', () => {
    expect(bombHive().isCurrent).toBe(false);
  });

  it('targetType is both', () => {
    expect(bombHive().targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(bombHive().modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    bombHive().modules.forEach((mod) => {
      expect(mod.upgrades).toHaveLength(10);
    });
  });

  it('Module 1 is Hitpoints (Gold)', () => {
    expect(bombHive().modules[0].name).toBe('Hitpoints');
    expect(bombHive().modules[0].upgrades[1].buildCostResource).toBe('Gold');
    expect(bombHive().modules[0].upgrades[0].stat).toBe(400);
    expect(bombHive().modules[0].upgrades[9].stat).toBe(4900);
  });

  it('Module 2 is Damage (Dark Elixir)', () => {
    expect(bombHive().modules[1].name).toBe('Damage');
    expect(bombHive().modules[1].upgrades[1].buildCostResource).toBe('Dark Elixir');
    expect(bombHive().modules[1].upgrades[0].stat).toBe(324);
    expect(bombHive().modules[1].upgrades[9].stat).toBe(810);
  });

  it('Module 3 is Range (Elixir)', () => {
    expect(bombHive().modules[2].name).toBe('Range');
    expect(bombHive().modules[2].upgrades[1].buildCostResource).toBe('Elixir');
    expect(bombHive().modules[2].upgrades[0].stat).toBe(11);
    expect(bombHive().modules[2].upgrades[9].stat).toBe(20);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(bombHive().images).toHaveLength(4);
    expect(bombHive().images[0].fromEffectiveLevel).toBe(3);
    expect(bombHive().images[3].toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades are free with 0 sparkyStones', () => {
    bombHive().modules.forEach((mod) => {
      expect(mod.upgrades[0].buildCost).toBe(0);
      expect(mod.upgrades[0].sparkyStones).toBe(0);
    });
  });
});

describe('bombHive() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(homeCraftedDefenses().find('bomb-hive')).toBeDefined();
  });

  it('is found by byPhase(2)', () => {
    expect(homeCraftedDefenses().byPhase(2).find('bomb-hive')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(homeCraftedDefenses().former().find('bomb-hive')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(homeCraftedDefenses().current().find('bomb-hive')).toBeUndefined();
  });

  it('is found by byTargetType("both")', () => {
    expect(homeCraftedDefenses().byTargetType('both').find('bomb-hive')).toBeDefined();
  });
});
