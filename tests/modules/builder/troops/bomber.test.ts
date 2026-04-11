import { builder } from '@/modules/builder';

describe('Bomber [Builder Base]', () => {
  const troop = builder().troops().bomber().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('bomber');
    expect(troop.name).toBe('Bomber');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(12);
    expect(troop.movementSpeed).toBe(19);
    expect(troop.range).toBe(3.5);
    expect(troop.attackSpeed).toBe(2);
    expect(troop.damageType).toBe('splash');
    expect(troop.targetType).toBe('ground');
    expect(troop.builderBarracksRequired).toBe(5);
    expect(troop.preferredTarget).toBe('Walls');
    expect(troop.wallDamageMultiplier).toBe(15);
    expect(troop.explodingRange).toBe(1.6);
    expect(troop.specialAbility).toBe('Bouncing Bomb');
  });

  it('has 16 levels (starting at level 5)', () => {
    expect(troop.levels).toHaveLength(16);
    expect(troop.levels[0].level).toBe(5);
  });

  it('has correct first level stats (level 5)', () => {
    const lv5 = troop.levels[0];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(605);
    expect(lv5.dps).toBe(80);
    expect(lv5.damagePerShot).toBe(160);
    expect(lv5.damageVsWalls).toBe(2400);
    expect(lv5.unitsPerCamp).toBe(1);
    expect(lv5.bouncingBombDamage).toBe(80);
    expect(lv5.bouncingBombDamageVsWalls).toBe(1200);
    expect(lv5.researchCost).toBe(0);
    expect(lv5.starLabRequired).toBe(0);
  });

  it('has correct last level stats (level 20)', () => {
    const lv20 = troop.levels[15];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(1179);
    expect(lv20.dps).toBe(150);
    expect(lv20.damagePerShot).toBe(300);
    expect(lv20.damageVsWalls).toBe(4500);
    expect(lv20.unitsPerCamp).toBe(1);
    expect(lv20.bouncingBombDamage).toBe(240);
    expect(lv20.bouncingBombDamageVsWalls).toBe(3600);
    expect(lv20.researchCost).toBe(5300000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/bomber\/normal\/level-\d+\.png$/,
      );
    }
  });
});
