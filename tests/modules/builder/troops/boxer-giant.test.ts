import { builder } from '@/modules/builder';

describe('Boxer Giant [Builder Base]', () => {
  const troop = builder().troops().boxerGiant().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('boxer-giant');
    expect(troop.name).toBe('Boxer Giant');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(18);
    expect(troop.movementSpeed).toBe(14);
    expect(troop.range).toBe(1);
    expect(troop.attackSpeed).toBe(2);
    expect(troop.damageType).toBe('single');
    expect(troop.targetType).toBe('ground');
    expect(troop.builderBarracksRequired).toBe(3);
    expect(troop.preferredTarget).toBe('Defenses');
    expect(troop.specialAbility).toBe('Boxer Block');
    expect(troop.passiveAbility).toBe('Power Punch');
  });

  it('has 18 levels (starting at level 3)', () => {
    expect(troop.levels).toHaveLength(18);
    expect(troop.levels[0].level).toBe(3);
  });

  it('has correct first level stats (level 3)', () => {
    const lv3 = troop.levels[0];
    expect(lv3.level).toBe(3);
    expect(lv3.hitpoints).toBe(2530);
    expect(lv3.dps).toBe(65);
    expect(lv3.damagePerShot).toBe(130);
    expect(lv3.unitsPerCamp).toBe(1);
    expect(lv3.boxerBlockDurationSeconds).toBe(0);
    expect(lv3.powerPunchDamage).toBe(550);
    expect(lv3.researchCost).toBe(0);
    expect(lv3.starLabRequired).toBe(0);
  });

  it('has correct last level stats (level 20)', () => {
    const lv20 = troop.levels[17];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(5423);
    expect(lv20.dps).toBe(129);
    expect(lv20.damagePerShot).toBe(258);
    expect(lv20.unitsPerCamp).toBe(1);
    expect(lv20.boxerBlockDurationSeconds).toBe(8);
    expect(lv20.powerPunchDamage).toBe(1400);
    expect(lv20.researchCost).toBe(5400000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/boxer-giant\/normal\/level-\d+\.png$/,
      );
    }
  });
});
