import { home } from '@/modules/home';

describe('lightBeam()', () => {
  it('returns a CraftedDefense object', () => {
    const result = home().craftedDefenses().lightBeam().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('light-beam');
    expect(result.name).toBe('Light Beam');
  });

  it('craftingPhase is 2', () => {
    expect(home().craftedDefenses().lightBeam().first()!.craftingPhase).toBe(2);
  });

  it('isCurrent is false', () => {
    expect(home().craftedDefenses().lightBeam().first()!.isCurrent).toBe(false);
  });

  it('targetType is both', () => {
    expect(home().craftedDefenses().lightBeam().first()!.targetType).toBe('both');
  });

  it('has exactly 3 modules', () => {
    expect(home().craftedDefenses().lightBeam().first()!.modules).toHaveLength(3);
  });

  it('each module has 10 upgrades', () => {
    home()
      .craftedDefenses()
      .lightBeam()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades).toHaveLength(10);
      });
  });

  it('Module 1 is Hitpoints (Dark Elixir)', () => {
    expect(home().craftedDefenses().lightBeam().first()!.modules[0].name).toBe('Hitpoints');
    expect(
      home().craftedDefenses().lightBeam().first()!.modules[0].upgrades[1].buildCostResource,
    ).toBe('Dark Elixir');
    expect(home().craftedDefenses().lightBeam().first()!.modules[0].upgrades[0].stat).toBe(600);
    expect(home().craftedDefenses().lightBeam().first()!.modules[0].upgrades[9].stat).toBe(6000);
  });

  it('Module 2 is Damage (Elixir)', () => {
    expect(home().craftedDefenses().lightBeam().first()!.modules[1].name).toBe('Damage');
    expect(
      home().craftedDefenses().lightBeam().first()!.modules[1].upgrades[1].buildCostResource,
    ).toBe('Elixir');
    expect(home().craftedDefenses().lightBeam().first()!.modules[1].upgrades[0].stat).toBe(132);
    expect(home().craftedDefenses().lightBeam().first()!.modules[1].upgrades[9].stat).toBe(240);
  });

  it('Module 3 is Attack Cooldown (Gold)', () => {
    expect(home().craftedDefenses().lightBeam().first()!.modules[2].name).toBe('Attack Cooldown');
    expect(
      home().craftedDefenses().lightBeam().first()!.modules[2].upgrades[1].buildCostResource,
    ).toBe('Gold');
    expect(home().craftedDefenses().lightBeam().first()!.modules[2].upgrades[0].stat).toBe(1.9);
    expect(home().craftedDefenses().lightBeam().first()!.modules[2].upgrades[9].stat).toBe(1.0);
  });

  it('has 4 image entries covering effective levels 3–30', () => {
    expect(home().craftedDefenses().lightBeam().first()!.images).toHaveLength(4);
    expect(home().craftedDefenses().lightBeam().first()!.images[0].fromEffectiveLevel).toBe(3);
    expect(home().craftedDefenses().lightBeam().first()!.images[3].toEffectiveLevel).toBe(30);
  });

  it('level 1 upgrades are free with 0 sparkyStones', () => {
    home()
      .craftedDefenses()
      .lightBeam()
      .first()!
      .modules.forEach((mod) => {
        expect(mod.upgrades[0].buildCost).toBe(0);
        expect(mod.upgrades[0].sparkyStones).toBe(0);
      });
  });
});

describe('lightBeam() integration with homeCraftedDefenses()', () => {
  it('is included in homeCraftedDefenses()', () => {
    expect(home().craftedDefenses().find('light-beam')).toBeDefined();
  });

  it('is found by byPhase(2)', () => {
    expect(home().craftedDefenses().byPhase(2).find('light-beam')).toBeDefined();
  });

  it('is found by former()', () => {
    expect(home().craftedDefenses().former().find('light-beam')).toBeDefined();
  });

  it('is not found by current()', () => {
    expect(home().craftedDefenses().current().find('light-beam')).toBeUndefined();
  });

  it('is found by byTargetType("both")', () => {
    expect(home().craftedDefenses().byTargetType('both').find('light-beam')).toBeDefined();
  });
});
