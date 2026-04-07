import { home } from '@/modules/home';

describe('airBombs()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().airBombs().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('air-bombs');
    expect(result.name).toBe('Air Bombs');
  });

  it('base is home', () => {
    expect(home().craftedDefenses().airBombs().first()!.base).toBe('home');
  });

  it('category is crafted-defense', () => {
    expect(home().craftedDefenses().airBombs().first()!.category).toBe('crafted-defense');
  });

  it('craftingPhase is 3', () => {
    expect(home().craftedDefenses().airBombs().first()!.craftingPhase).toBe(3);
  });

  it('isCurrent is true', () => {
    expect(home().craftedDefenses().airBombs().first()!.isCurrent).toBe(true);
  });

  it('targetType is air', () => {
    expect(home().craftedDefenses().airBombs().first()!.targetType).toBe('air');
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().airBombs().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .airBombs()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints', () => {
    expect(home().craftedDefenses().airBombs().first()!.modules[0].name).toBe('Hitpoints');
  });

  it('Module 1 uses Dark Elixir', () => {
    expect(
      home().craftedDefenses().airBombs().first()!.modules[0].upgrades[1].buildCostResource,
    ).toBe('Dark Elixir');
  });

  it('Module 1 level 1 stat (HP) is 600', () => {
    expect(home().craftedDefenses().airBombs().first()!.modules[0].upgrades[0].stat).toBe(600);
  });

  it('Module 1 level 10 stat (HP) is 6000', () => {
    expect(home().craftedDefenses().airBombs().first()!.modules[0].upgrades[9].stat).toBe(6000);
  });

  it('Module 2 is Damage', () => {
    expect(home().craftedDefenses().airBombs().first()!.modules[1].name).toBe('Damage');
  });

  it('Module 2 level 1 stat (damage per shot) is 620', () => {
    expect(home().craftedDefenses().airBombs().first()!.modules[1].upgrades[0].stat).toBe(620);
  });

  it('Module 3 is Attack Cooldown', () => {
    expect(home().craftedDefenses().airBombs().first()!.modules[2].name).toBe('Attack Cooldown');
  });

  it('Module 3 level 1 stat (cooldown) is 3.8', () => {
    expect(home().craftedDefenses().airBombs().first()!.modules[2].upgrades[0].stat).toBe(3.8);
  });

  it('Module 3 level 10 stat (cooldown) is 2.0', () => {
    expect(home().craftedDefenses().airBombs().first()!.modules[2].upgrades[9].stat).toBe(2.0);
  });

  it('has 10 image entries', () => {
    expect(home().craftedDefenses().airBombs().first()!.images).toHaveLength(10);
  });

  it('first image entry covers effective level 3–5', () => {
    expect(home().craftedDefenses().airBombs().first()!.images[0].fromEffectiveLevel).toBe(3);
    expect(home().craftedDefenses().airBombs().first()!.images[0].toEffectiveLevel).toBe(5);
    expect(home().craftedDefenses().airBombs().first()!.images[0].normal).toBeTruthy();
  });

  it('last image entry covers effective level 30', () => {
    const last = home().craftedDefenses().airBombs().first()!.images[
      home().craftedDefenses().airBombs().first()!.images.length - 1
    ];
    expect(last.fromEffectiveLevel).toBe(30);
    expect(last.toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades have 0 sparkyStones', () => {
    home()
      .craftedDefenses()
      .airBombs()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades[0].sparkyStones).toBe(0);
      });
  });

  it('level 2+ upgrades have 8 sparkyStones', () => {
    home()
      .craftedDefenses()
      .airBombs()
      .first()!
      .modules.forEach((mod) => {
        for (let i = 1; i < mod.upgrades.length; i++) {
          expect(mod.upgrades[i].sparkyStones).toBe(8);
        }
      });
  });
});

describe('airBombs() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(home().craftedDefenses().find('air-bombs')).toBeDefined();
  });

  it('is found by byPhase(3)', () => {
    expect(home().craftedDefenses().byPhase(3).find('air-bombs')).toBeDefined();
  });

  it('is found by current()', () => {
    expect(home().craftedDefenses().current().find('air-bombs')).toBeDefined();
  });

  it('is not found by former()', () => {
    expect(home().craftedDefenses().former().find('air-bombs')).toBeUndefined();
  });

  it('is found by byTargetType("air")', () => {
    expect(home().craftedDefenses().byTargetType('air').find('air-bombs')).toBeDefined();
  });

  it('is not found by byTargetType("ground")', () => {
    expect(home().craftedDefenses().byTargetType('ground').find('air-bombs')).toBeUndefined();
  });
});
