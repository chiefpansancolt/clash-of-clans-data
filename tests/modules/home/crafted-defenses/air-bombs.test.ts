import { homeCraftedDefenses } from '@/modules/home/crafted-defenses';
import { airBombs } from '@/modules/home/crafted-defenses/air-bombs';

describe('airBombs()', () => {
  it('returns a CraftedDefense object', () => {
    const result = airBombs();
    expect(result).toBeDefined();
    expect(result.id).toBe('air-bombs');
    expect(result.name).toBe('Air Bombs');
  });

  it('base is home', () => {
    expect(airBombs().base).toBe('home');
  });

  it('category is crafted-defense', () => {
    expect(airBombs().category).toBe('crafted-defense');
  });

  it('craftingPhase is 3', () => {
    expect(airBombs().craftingPhase).toBe(3);
  });

  it('isCurrent is true', () => {
    expect(airBombs().isCurrent).toBe(true);
  });

  it('targetType is air', () => {
    expect(airBombs().targetType).toBe('air');
  });

  it('has exactly 3 modules', () => {
    expect(airBombs().modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    airBombs().modules.forEach((mod) => {
      expect(mod.upgrades).toHaveLength(10);
    });
  });

  it('Module 1 is Hitpoints', () => {
    expect(airBombs().modules[0].name).toBe('Hitpoints');
  });

  it('Module 1 uses Dark Elixir', () => {
    expect(airBombs().modules[0].upgrades[1].buildCostResource).toBe('Dark Elixir');
  });

  it('Module 1 level 1 stat (HP) is 600', () => {
    expect(airBombs().modules[0].upgrades[0].stat).toBe(600);
  });

  it('Module 1 level 10 stat (HP) is 6000', () => {
    expect(airBombs().modules[0].upgrades[9].stat).toBe(6000);
  });

  it('Module 2 is Damage', () => {
    expect(airBombs().modules[1].name).toBe('Damage');
  });

  it('Module 2 level 1 stat (damage per shot) is 620', () => {
    expect(airBombs().modules[1].upgrades[0].stat).toBe(620);
  });

  it('Module 3 is Attack Cooldown', () => {
    expect(airBombs().modules[2].name).toBe('Attack Cooldown');
  });

  it('Module 3 level 1 stat (cooldown) is 3.8', () => {
    expect(airBombs().modules[2].upgrades[0].stat).toBe(3.8);
  });

  it('Module 3 level 10 stat (cooldown) is 2.0', () => {
    expect(airBombs().modules[2].upgrades[9].stat).toBe(2.0);
  });

  it('has 10 image entries', () => {
    expect(airBombs().images).toHaveLength(10);
  });

  it('first image entry covers effective level 3–5', () => {
    expect(airBombs().images[0].fromEffectiveLevel).toBe(3);
    expect(airBombs().images[0].toEffectiveLevel).toBe(5);
    expect(airBombs().images[0].normal).toBeTruthy();
  });

  it('last image entry covers effective level 30', () => {
    const last = airBombs().images[airBombs().images.length - 1];
    expect(last.fromEffectiveLevel).toBe(30);
    expect(last.toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades have 0 sparkyStones', () => {
    airBombs().modules.forEach((mod) => {
      expect(mod.upgrades[0].sparkyStones).toBe(0);
    });
  });

  it('level 2+ upgrades have 8 sparkyStones', () => {
    airBombs().modules.forEach((mod) => {
      for (let i = 1; i < mod.upgrades.length; i++) {
        expect(mod.upgrades[i].sparkyStones).toBe(8);
      }
    });
  });
});

describe('airBombs() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(homeCraftedDefenses().find('air-bombs')).toBeDefined();
  });

  it('is found by byPhase(3)', () => {
    expect(homeCraftedDefenses().byPhase(3).find('air-bombs')).toBeDefined();
  });

  it('is found by current()', () => {
    expect(homeCraftedDefenses().current().find('air-bombs')).toBeDefined();
  });

  it('is not found by former()', () => {
    expect(homeCraftedDefenses().former().find('air-bombs')).toBeUndefined();
  });

  it('is found by byTargetType("air")', () => {
    expect(homeCraftedDefenses().byTargetType('air').find('air-bombs')).toBeDefined();
  });

  it('is not found by byTargetType("ground")', () => {
    expect(homeCraftedDefenses().byTargetType('ground').find('air-bombs')).toBeUndefined();
  });
});
