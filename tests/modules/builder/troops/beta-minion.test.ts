import { builder } from '@/modules/builder';

describe('Beta Minion [Builder Base]', () => {
  const troop = builder().troops().betaMinion().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('beta-minion');
    expect(troop.name).toBe('Beta Minion');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(4);
    expect(troop.movementSpeed).toBe(38);
    expect(troop.range).toBe(4);
    expect(troop.attackSpeed).toBe(1);
    expect(troop.damageType).toBe('single');
    expect(troop.targetType).toBe('both');
    expect(troop.builderBarracksRequired).toBe(4);
    expect(troop.specialAbility).toBe('Power Shot');
  });

  it('has 18 levels (starting at level 3)', () => {
    expect(troop.levels).toHaveLength(18);
    expect(troop.levels[0].level).toBe(3);
  });

  it('has correct first level stats (level 3)', () => {
    const lv3 = troop.levels[0];
    expect(lv3.level).toBe(3);
    expect(lv3.hitpoints).toBe(200);
    expect(lv3.dps).toBe(60);
    expect(lv3.damagePerShot).toBe(60);
    expect(lv3.unitsPerCamp).toBe(3);
    expect(lv3.powerShotAttacks).toBe(4);
    expect(lv3.powerShotDamagePerHit).toBe(60);
    expect(lv3.researchCost).toBe(0);
    expect(lv3.starLabRequired).toBe(0);
  });

  it('has correct last level stats (level 20)', () => {
    const lv20 = troop.levels[17];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(429);
    expect(lv20.dps).toBe(126);
    expect(lv20.damagePerShot).toBe(126);
    expect(lv20.unitsPerCamp).toBe(4);
    expect(lv20.powerShotAttacks).toBe(7);
    expect(lv20.powerShotDamagePerHit).toBe(150);
    expect(lv20.researchCost).toBe(5400000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('units per camp increases to 4 at level 10', () => {
    expect(troop.levels[6].unitsPerCamp).toBe(3);
    expect(troop.levels[7].unitsPerCamp).toBe(4);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/beta-minion\/normal\/level-\d+\.png$/,
      );
    }
  });
});
