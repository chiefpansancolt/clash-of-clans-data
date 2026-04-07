import { home } from '@/modules/home';

describe('roaster()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().roaster().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('roaster');
    expect(result.name).toBe('Roaster');
  });

  it('base is home', () => {
    expect(home().craftedDefenses().roaster().first()!.base).toBe('home');
  });

  it('category is crafted-defense', () => {
    expect(home().craftedDefenses().roaster().first()!.category).toBe('crafted-defense');
  });

  it('craftingPhase is 3', () => {
    expect(home().craftedDefenses().roaster().first()!.craftingPhase).toBe(3);
  });

  it('isCurrent is true', () => {
    expect(home().craftedDefenses().roaster().first()!.isCurrent).toBe(true);
  });

  it('targetType is both', () => {
    expect(home().craftedDefenses().roaster().first()!.targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().roaster().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .roaster()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints', () => {
    expect(home().craftedDefenses().roaster().first()!.modules[0].name).toBe('Hitpoints');
  });

  it('Module 1 level 1 stat (HP) is 960', () => {
    expect(home().craftedDefenses().roaster().first()!.modules[0].upgrades[0].stat).toBe(960);
  });

  it('Module 1 level 10 stat (HP) is 6000', () => {
    expect(home().craftedDefenses().roaster().first()!.modules[0].upgrades[9].stat).toBe(6000);
  });

  it('Module 1 level 1 is free', () => {
    expect(home().craftedDefenses().roaster().first()!.modules[0].upgrades[0].buildCost).toBe(0);
  });

  it('Module 2 is Damage', () => {
    expect(home().craftedDefenses().roaster().first()!.modules[1].name).toBe('Damage');
  });

  it('Module 2 level 1 stat (damage per shot) is 50', () => {
    expect(home().craftedDefenses().roaster().first()!.modules[1].upgrades[0].stat).toBe(50);
  });

  it('Module 3 is Burst Fire', () => {
    expect(home().craftedDefenses().roaster().first()!.modules[2].name).toBe('Burst Fire');
  });

  it('Module 3 level 1 stat (shots per burst) is 6', () => {
    expect(home().craftedDefenses().roaster().first()!.modules[2].upgrades[0].stat).toBe(6);
  });

  it('Module 3 level 10 stat is 15', () => {
    expect(home().craftedDefenses().roaster().first()!.modules[2].upgrades[9].stat).toBe(15);
  });

  it('Module 3 uses Dark Elixir', () => {
    expect(
      home().craftedDefenses().roaster().first()!.modules[2].upgrades[1].buildCostResource,
    ).toBe('Dark Elixir');
  });

  it('has 10 image entries', () => {
    expect(home().craftedDefenses().roaster().first()!.images).toHaveLength(10);
  });

  it('first image entry covers effective level 3–5', () => {
    expect(home().craftedDefenses().roaster().first()!.images[0].fromEffectiveLevel).toBe(3);
    expect(home().craftedDefenses().roaster().first()!.images[0].toEffectiveLevel).toBe(5);
    expect(home().craftedDefenses().roaster().first()!.images[0].normal).toBeTruthy();
  });

  it('last image entry covers effective level 30', () => {
    const last = home().craftedDefenses().roaster().first()!.images[
      home().craftedDefenses().roaster().first()!.images.length - 1
    ];
    expect(last.fromEffectiveLevel).toBe(30);
    expect(last.toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades have 0 sparkyStones', () => {
    home()
      .craftedDefenses()
      .roaster()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades[0].sparkyStones).toBe(0);
      });
  });

  it('level 2+ upgrades have 8 sparkyStones', () => {
    home()
      .craftedDefenses()
      .roaster()
      .first()!
      .modules.forEach((mod) => {
        for (let i = 1; i < mod.upgrades.length; i++) {
          expect(mod.upgrades[i].sparkyStones).toBe(8);
        }
      });
  });
});

describe('roaster() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(home().craftedDefenses().find('roaster')).toBeDefined();
  });

  it('is found by byPhase(3)', () => {
    expect(home().craftedDefenses().byPhase(3).find('roaster')).toBeDefined();
  });

  it('is found by current()', () => {
    expect(home().craftedDefenses().current().find('roaster')).toBeDefined();
  });

  it('is not found by former()', () => {
    expect(home().craftedDefenses().former().find('roaster')).toBeUndefined();
  });

  it('is found by byTargetType("both")', () => {
    expect(home().craftedDefenses().byTargetType('both').find('roaster')).toBeDefined();
  });

  it('is not found by byTargetType("air")', () => {
    expect(home().craftedDefenses().byTargetType('air').find('roaster')).toBeUndefined();
  });
});
