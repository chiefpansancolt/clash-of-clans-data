import { builder } from '@/modules/builder';

describe('Raged Barbarian [Builder Base]', () => {
  const troop = builder().troops().ragedBarbarian().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('raged-barbarian');
    expect(troop.name).toBe('Raged Barbarian');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(4);
    expect(troop.movementSpeed).toBe(19);
    expect(troop.range).toBe(0.4);
    expect(troop.attackSpeed).toBe(0.8);
    expect(troop.damageType).toBe('single');
    expect(troop.targetType).toBe('ground');
    expect(troop.builderBarracksRequired).toBe(1);
    expect(troop.specialAbility).toBe('Rage');
    expect(troop.rageSpeedIncrease).toBe(16);
    expect(troop.rageDamageIncrease).toBe(70);
  });

  it('has 20 levels', () => {
    expect(troop.levels).toHaveLength(20);
  });

  it('has correct level 1 stats', () => {
    const lv1 = troop.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(500);
    expect(lv1.dps).toBe(45);
    expect(lv1.damagePerShot).toBe(36);
    expect(lv1.unitsPerCamp).toBe(3);
    expect(lv1.rageDurationSeconds).toBe(0);
    expect(lv1.researchCost).toBe(0);
    expect(lv1.starLabRequired).toBe(0);
  });

  it('has correct level 20 stats', () => {
    const lv20 = troop.levels[19];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(1179);
    expect(lv20.dps).toBe(136);
    expect(lv20.damagePerShot).toBe(108.8);
    expect(lv20.unitsPerCamp).toBe(4);
    expect(lv20.rageDurationSeconds).toBe(22);
    expect(lv20.researchCost).toBe(5200000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('units per camp increases to 4 at level 6', () => {
    expect(troop.levels[4].unitsPerCamp).toBe(3);
    expect(troop.levels[5].unitsPerCamp).toBe(4);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/raged-barbarian\/normal\/level-\d+\.png$/,
      );
    }
  });
});
