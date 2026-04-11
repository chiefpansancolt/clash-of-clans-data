import { builder } from '@/modules/builder';

describe('Cannon Cart [Builder Base]', () => {
  const troop = builder().troops().cannonCart().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('cannon-cart');
    expect(troop.name).toBe('Cannon Cart');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(16);
    expect(troop.movementSpeed).toBe(19);
    expect(troop.range).toBe(4.5);
    expect(troop.attackSpeed).toBe(1.2);
    expect(troop.damageType).toBe('single');
    expect(troop.targetType).toBe('ground');
    expect(troop.builderBarracksRequired).toBe(7);
    expect(troop.specialAbility).toBe('Change Mode');
  });

  it('has correct mortar mode root stats', () => {
    expect(troop.mortarMovementSpeed).toBe(0);
    expect(troop.mortarRange).toBe(8.5);
    expect(troop.mortarAttackSpeed).toBe(2.5);
    expect(troop.mortarDamageType).toBe('splash');
  });

  it('has 14 levels (starting at level 7)', () => {
    expect(troop.levels).toHaveLength(14);
    expect(troop.levels[0].level).toBe(7);
  });

  it('has correct first level stats (level 7)', () => {
    const lv7 = troop.levels[0];
    expect(lv7.level).toBe(7);
    expect(lv7.hitpoints).toBe(666);
    expect(lv7.dps).toBe(115);
    expect(lv7.damagePerShot).toBe(138);
    expect(lv7.mortarDps).toBe(60);
    expect(lv7.mortarDamagePerShot).toBe(150);
    expect(lv7.unitsPerCamp).toBe(1);
    expect(lv7.researchCost).toBe(0);
    expect(lv7.starLabRequired).toBe(0);
  });

  it('has correct last level stats (level 20)', () => {
    const lv20 = troop.levels[13];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(1179);
    expect(lv20.dps).toBe(240);
    expect(lv20.damagePerShot).toBe(288);
    expect(lv20.mortarDps).toBe(144);
    expect(lv20.mortarDamagePerShot).toBe(360);
    expect(lv20.researchCost).toBe(5700000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('all levels have valid cannon and mortar image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/cannon-cart\/cannon\/level-\d+\.png$/,
      );
      expect(lvl.images.mortarMode).toMatch(
        /^images\/builder\/troops\/cannon-cart\/mortar\/level-\d+\.png$/,
      );
    }
  });
});
