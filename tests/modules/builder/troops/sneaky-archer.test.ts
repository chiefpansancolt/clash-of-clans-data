import { builder } from '@/modules/builder';

describe('Sneaky Archer [Builder Base]', () => {
  const troop = builder().troops().sneakyArcher().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('sneaky-archer');
    expect(troop.name).toBe('Sneaky Archer');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(3);
    expect(troop.movementSpeed).toBe(29);
    expect(troop.range).toBe(3.5);
    expect(troop.attackSpeed).toBe(1);
    expect(troop.damageType).toBe('single');
    expect(troop.targetType).toBe('both');
    expect(troop.builderBarracksRequired).toBe(2);
    expect(troop.specialAbility).toBe('Cloak');
  });

  it('has 20 levels', () => {
    expect(troop.levels).toHaveLength(20);
  });

  it('has correct level 1 stats', () => {
    const lv1 = troop.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(196);
    expect(lv1.dps).toBe(60);
    expect(lv1.damagePerShot).toBe(60);
    expect(lv1.unitsPerCamp).toBe(3);
    expect(lv1.cloakDurationSeconds).toBe(0);
    expect(lv1.researchCost).toBe(0);
    expect(lv1.starLabRequired).toBe(0);
  });

  it('has correct level 20 stats', () => {
    const lv20 = troop.levels[19];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(462);
    expect(lv20.dps).toBe(125);
    expect(lv20.damagePerShot).toBe(125);
    expect(lv20.unitsPerCamp).toBe(4);
    expect(lv20.cloakDurationSeconds).toBe(11);
    expect(lv20.researchCost).toBe(5300000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('units per camp increases to 4 at level 10', () => {
    expect(troop.levels[8].unitsPerCamp).toBe(3);
    expect(troop.levels[9].unitsPerCamp).toBe(4);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/sneaky-archer\/normal\/level-\d+\.png$/,
      );
    }
  });
});
