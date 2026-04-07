import { homeCraftedDefenses } from '@/modules/home/crafted-defenses';
import { roaster } from '@/modules/home/crafted-defenses/roaster';

describe('roaster()', () => {
  it('returns a CraftedDefense object', () => {
    const result = roaster();
    expect(result).toBeDefined();
    expect(result.id).toBe('roaster');
    expect(result.name).toBe('Roaster');
  });

  it('base is home', () => {
    expect(roaster().base).toBe('home');
  });

  it('category is crafted-defense', () => {
    expect(roaster().category).toBe('crafted-defense');
  });

  it('craftingPhase is 3', () => {
    expect(roaster().craftingPhase).toBe(3);
  });

  it('isCurrent is true', () => {
    expect(roaster().isCurrent).toBe(true);
  });

  it('targetType is both', () => {
    expect(roaster().targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(roaster().modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    roaster().modules.forEach((mod) => {
      expect(mod.upgrades).toHaveLength(10);
    });
  });

  it('Module 1 is Hitpoints', () => {
    expect(roaster().modules[0].name).toBe('Hitpoints');
  });

  it('Module 1 level 1 stat (HP) is 960', () => {
    expect(roaster().modules[0].upgrades[0].stat).toBe(960);
  });

  it('Module 1 level 10 stat (HP) is 6000', () => {
    expect(roaster().modules[0].upgrades[9].stat).toBe(6000);
  });

  it('Module 1 level 1 is free', () => {
    expect(roaster().modules[0].upgrades[0].buildCost).toBe(0);
  });

  it('Module 2 is Damage', () => {
    expect(roaster().modules[1].name).toBe('Damage');
  });

  it('Module 2 level 1 stat (damage per shot) is 50', () => {
    expect(roaster().modules[1].upgrades[0].stat).toBe(50);
  });

  it('Module 3 is Burst Fire', () => {
    expect(roaster().modules[2].name).toBe('Burst Fire');
  });

  it('Module 3 level 1 stat (shots per burst) is 6', () => {
    expect(roaster().modules[2].upgrades[0].stat).toBe(6);
  });

  it('Module 3 level 10 stat is 15', () => {
    expect(roaster().modules[2].upgrades[9].stat).toBe(15);
  });

  it('Module 3 uses Dark Elixir', () => {
    expect(roaster().modules[2].upgrades[1].buildCostResource).toBe('Dark Elixir');
  });

  it('has 10 image entries', () => {
    expect(roaster().images).toHaveLength(10);
  });

  it('first image entry covers effective level 3–5', () => {
    expect(roaster().images[0].fromEffectiveLevel).toBe(3);
    expect(roaster().images[0].toEffectiveLevel).toBe(5);
    expect(roaster().images[0].normal).toBeTruthy();
  });

  it('last image entry covers effective level 30', () => {
    const last = roaster().images[roaster().images.length - 1];
    expect(last.fromEffectiveLevel).toBe(30);
    expect(last.toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades have 0 sparkyStones', () => {
    roaster().modules.forEach((mod) => {
      expect(mod.upgrades[0].sparkyStones).toBe(0);
    });
  });

  it('level 2+ upgrades have 8 sparkyStones', () => {
    roaster().modules.forEach((mod) => {
      for (let i = 1; i < mod.upgrades.length; i++) {
        expect(mod.upgrades[i].sparkyStones).toBe(8);
      }
    });
  });
});

describe('roaster() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(homeCraftedDefenses().find('roaster')).toBeDefined();
  });

  it('is found by byPhase(3)', () => {
    expect(homeCraftedDefenses().byPhase(3).find('roaster')).toBeDefined();
  });

  it('is found by current()', () => {
    expect(homeCraftedDefenses().current().find('roaster')).toBeDefined();
  });

  it('is not found by former()', () => {
    expect(homeCraftedDefenses().former().find('roaster')).toBeUndefined();
  });

  it('is found by byTargetType("both")', () => {
    expect(homeCraftedDefenses().byTargetType('both').find('roaster')).toBeDefined();
  });

  it('is not found by byTargetType("air")', () => {
    expect(homeCraftedDefenses().byTargetType('air').find('roaster')).toBeUndefined();
  });
});
