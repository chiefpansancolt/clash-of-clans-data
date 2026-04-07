import { home } from '@/modules/home';

describe('bombHive()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().bombHive().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('bomb-hive');
    expect(result.name).toBe('Bomb Hive');
  });

  it('craftingPhase is 2', () => {
    expect(home().craftedDefenses().bombHive().first()!.craftingPhase).toBe(2);
  });

  it('isCurrent is false', () => {
    expect(home().craftedDefenses().bombHive().first()!.isCurrent).toBe(false);
  });

  it('targetType is both', () => {
    expect(home().craftedDefenses().bombHive().first()!.targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().bombHive().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .bombHive()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints (Gold)', () => {
    expect(home().craftedDefenses().bombHive().first()!.modules[0].name).toBe('Hitpoints');
    expect(
      home().craftedDefenses().bombHive().first()!.modules[0].upgrades[1].buildCostResource,
    ).toBe('Gold');
    expect(home().craftedDefenses().bombHive().first()!.modules[0].upgrades[0].stat).toBe(400);
    expect(home().craftedDefenses().bombHive().first()!.modules[0].upgrades[9].stat).toBe(4900);
  });

  it('Module 2 is Damage (Dark Elixir)', () => {
    expect(home().craftedDefenses().bombHive().first()!.modules[1].name).toBe('Damage');
    expect(
      home().craftedDefenses().bombHive().first()!.modules[1].upgrades[1].buildCostResource,
    ).toBe('Dark Elixir');
    expect(home().craftedDefenses().bombHive().first()!.modules[1].upgrades[0].stat).toBe(324);
    expect(home().craftedDefenses().bombHive().first()!.modules[1].upgrades[9].stat).toBe(810);
  });

  it('Module 3 is Range (Elixir)', () => {
    expect(home().craftedDefenses().bombHive().first()!.modules[2].name).toBe('Range');
    expect(
      home().craftedDefenses().bombHive().first()!.modules[2].upgrades[1].buildCostResource,
    ).toBe('Elixir');
    expect(home().craftedDefenses().bombHive().first()!.modules[2].upgrades[0].stat).toBe(11);
    expect(home().craftedDefenses().bombHive().first()!.modules[2].upgrades[9].stat).toBe(20);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(home().craftedDefenses().bombHive().first()!.images).toHaveLength(4);
    expect(home().craftedDefenses().bombHive().first()!.images[0].fromEffectiveLevel).toBe(3);
    expect(home().craftedDefenses().bombHive().first()!.images[3].toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades are free with 0 sparkyStones', () => {
    home()
      .craftedDefenses()
      .bombHive()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades[0].buildCost).toBe(0);
        expect(mod.upgrades[0].sparkyStones).toBe(0);
      });
  });
});

describe('bombHive() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(home().craftedDefenses().find('bomb-hive')).toBeDefined();
  });

  it('is found by byPhase(2)', () => {
    expect(home().craftedDefenses().byPhase(2).find('bomb-hive')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(home().craftedDefenses().former().find('bomb-hive')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(home().craftedDefenses().current().find('bomb-hive')).toBeUndefined();
  });

  it('is found by byTargetType("both")', () => {
    expect(home().craftedDefenses().byTargetType('both').find('bomb-hive')).toBeDefined();
  });
});
