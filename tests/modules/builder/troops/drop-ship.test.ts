import { builder } from '@/modules/builder';

describe('Drop Ship [Builder Base]', () => {
  const troop = builder().troops().dropShip().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('drop-ship');
    expect(troop.name).toBe('Drop Ship');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(20);
    expect(troop.movementSpeed).toBe(12);
    expect(troop.range).toBe(0.5);
    expect(troop.damageType).toBe('splash');
    expect(troop.targetType).toBe('ground');
    expect(troop.builderBarracksRequired).toBe(9);
    expect(troop.preferredTarget).toBe('Defenses');
    expect(troop.specialAbility).toBe('Skeleton Bomb');
    expect(troop.skeletonsSummoned).toBe(3);
    expect(troop.skeletonsMax).toBe(9);
    expect(troop.skeletonSummonCooldown).toBe(3.5);
    expect(troop.attackSpeed).toBeUndefined();
  });

  it('has 10 levels (starting at level 11)', () => {
    expect(troop.levels).toHaveLength(10);
    expect(troop.levels[0].level).toBe(11);
  });

  it('has correct first level stats (level 11)', () => {
    const lv11 = troop.levels[0];
    expect(lv11.level).toBe(11);
    expect(lv11.hitpoints).toBe(3400);
    expect(lv11.deathDamage).toBe(300);
    expect(lv11.skeletonBombDamage).toBe(600);
    expect(lv11.skeletonBombSkeletons).toBe(5);
    expect(lv11.unitsPerCamp).toBe(1);
    expect(lv11.researchCost).toBe(0);
    expect(lv11.starLabRequired).toBe(0);
    expect(lv11.dps).toBeUndefined();
    expect(lv11.damagePerShot).toBeUndefined();
  });

  it('has correct last level stats (level 20)', () => {
    const lv20 = troop.levels[9];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(4978);
    expect(lv20.deathDamage).toBe(500);
    expect(lv20.skeletonBombDamage).toBe(900);
    expect(lv20.skeletonBombSkeletons).toBe(8);
    expect(lv20.researchCost).toBe(5700000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/drop-ship\/normal\/level-\d+\.png$/,
      );
    }
  });
});
