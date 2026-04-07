import { homeCraftedDefenses } from '@/modules/home/crafted-defenses';
import { lavaLauncher } from '@/modules/home/crafted-defenses/lava-launcher';

describe('lavaLauncher()', () => {
  it('returns a CraftedDefense object', () => {
    const result = lavaLauncher();
    expect(result).toBeDefined();
    expect(result.id).toBe('lava-launcher');
    expect(result.name).toBe('Lava Launcher');
  });

  it('base is home', () => {
    expect(lavaLauncher().base).toBe('home');
  });

  it('category is crafted-defense', () => {
    expect(lavaLauncher().category).toBe('crafted-defense');
  });

  it('craftingPhase is 3', () => {
    expect(lavaLauncher().craftingPhase).toBe(3);
  });

  it('isCurrent is true', () => {
    expect(lavaLauncher().isCurrent).toBe(true);
  });

  it('targetType is ground', () => {
    expect(lavaLauncher().targetType).toBe('ground');
  });

  it('has exactly 3 modules', () => {
    expect(lavaLauncher().modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    lavaLauncher().modules.forEach((mod) => {
      expect(mod.upgrades).toHaveLength(10);
    });
  });

  it('Module 1 is Hitpoints', () => {
    expect(lavaLauncher().modules[0].name).toBe('Hitpoints');
  });

  it('Module 1 uses Dark Elixir', () => {
    expect(lavaLauncher().modules[0].upgrades[1].buildCostResource).toBe('Dark Elixir');
  });

  it('Module 1 level 1 stat (HP) is 1200', () => {
    expect(lavaLauncher().modules[0].upgrades[0].stat).toBe(1200);
  });

  it('Module 1 level 10 stat (HP) is 5200', () => {
    expect(lavaLauncher().modules[0].upgrades[9].stat).toBe(5200);
  });

  it('Module 2 is Damage', () => {
    expect(lavaLauncher().modules[1].name).toBe('Damage');
  });

  it('Module 2 uses Dark Elixir', () => {
    expect(lavaLauncher().modules[1].upgrades[1].buildCostResource).toBe('Dark Elixir');
  });

  it('Module 2 level 1 stat (DPS) is 80', () => {
    expect(lavaLauncher().modules[1].upgrades[0].stat).toBe(80);
  });

  it('Module 2 level 10 stat (DPS) is 121', () => {
    expect(lavaLauncher().modules[1].upgrades[9].stat).toBe(121);
  });

  it('Module 3 is Range', () => {
    expect(lavaLauncher().modules[2].name).toBe('Range');
  });

  it('Module 3 uses Elixir', () => {
    expect(lavaLauncher().modules[2].upgrades[1].buildCostResource).toBe('Elixir');
  });

  it('has 7 image entries', () => {
    expect(lavaLauncher().images).toHaveLength(7);
  });

  it('first image entry covers effective level 3–6', () => {
    expect(lavaLauncher().images[0].fromEffectiveLevel).toBe(3);
    expect(lavaLauncher().images[0].toEffectiveLevel).toBe(6);
    expect(lavaLauncher().images[0].normal).toBeTruthy();
  });

  it('last image entry covers effective level 27–30', () => {
    const last = lavaLauncher().images[lavaLauncher().images.length - 1];
    expect(last.fromEffectiveLevel).toBe(27);
    expect(last.toEffectiveLevel).toBe(30);
  });

  it('Module 3 level 1 stat (max range) is 11', () => {
    expect(lavaLauncher().modules[2].upgrades[0].stat).toBe(11);
  });

  it('Module 3 level 10 stat (max range) is 20', () => {
    expect(lavaLauncher().modules[2].upgrades[9].stat).toBe(20);
  });

  it('level 1 upgrades have 0 sparkyStones', () => {
    lavaLauncher().modules.forEach((mod) => {
      expect(mod.upgrades[0].sparkyStones).toBe(0);
    });
  });

  it('level 2+ upgrades have 8 sparkyStones', () => {
    lavaLauncher().modules.forEach((mod) => {
      for (let i = 1; i < mod.upgrades.length; i++) {
        expect(mod.upgrades[i].sparkyStones).toBe(8);
      }
    });
  });
});

describe('lavaLauncher() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(homeCraftedDefenses().find('lava-launcher')).toBeDefined();
  });

  it('is found by byPhase(3)', () => {
    expect(homeCraftedDefenses().byPhase(3).find('lava-launcher')).toBeDefined();
  });

  it('is found by current()', () => {
    expect(homeCraftedDefenses().current().find('lava-launcher')).toBeDefined();
  });

  it('is not found by former()', () => {
    expect(homeCraftedDefenses().former().find('lava-launcher')).toBeUndefined();
  });

  it('is found by byTargetType("ground")', () => {
    expect(homeCraftedDefenses().byTargetType('ground').find('lava-launcher')).toBeDefined();
  });

  it('is not found by byTargetType("air")', () => {
    expect(homeCraftedDefenses().byTargetType('air').find('lava-launcher')).toBeUndefined();
  });
});
