import { builder } from '@/modules/builder';

describe('Hog Glider [Builder Base]', () => {
  const troop = builder().troops().hogGlider().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('hog-glider');
    expect(troop.name).toBe('Hog Glider');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(10);
    expect(troop.movementSpeed).toBe(24);
    expect(troop.range).toBe(0.25);
    expect(troop.damageType).toBe('single');
    expect(troop.targetType).toBe('ground');
    expect(troop.builderBarracksRequired).toBe(11);
    expect(troop.preferredTarget).toBe('Defenses');
    expect(troop.specialAbility).toBe('Stunning Glide');
    expect(troop.attackSpeed).toBeUndefined();
  });

  it('has 6 levels (starting at level 15)', () => {
    expect(troop.levels).toHaveLength(6);
    expect(troop.levels[0].level).toBe(15);
  });

  it('has correct first level stats (level 15)', () => {
    const lv15 = troop.levels[0];
    expect(lv15.level).toBe(15);
    expect(lv15.hitpoints).toBe(600);
    expect(lv15.damagePerShot).toBe(180);
    expect(lv15.stunDuration).toBe(5.0);
    expect(lv15.unitsPerCamp).toBe(2);
    expect(lv15.researchCost).toBe(0);
    expect(lv15.starLabRequired).toBe(0);
    expect(lv15.dps).toBeUndefined();
  });

  it('has correct last level stats (level 20)', () => {
    const lv20 = troop.levels[5];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(700);
    expect(lv20.damagePerShot).toBe(260);
    expect(lv20.stunDuration).toBe(6.0);
    expect(lv20.researchCost).toBe(5800000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/hog-glider\/normal\/level-\d+\.png$/,
      );
    }
  });
});
