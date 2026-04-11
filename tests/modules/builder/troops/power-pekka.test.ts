import { builder } from '@/modules/builder';

describe('Power P.E.K.K.A [Builder Base]', () => {
  const troop = builder().troops().powerPekka().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('power-pekka');
    expect(troop.name).toBe('Power P.E.K.K.A');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(22);
    expect(troop.movementSpeed).toBe(16);
    expect(troop.range).toBe(0.8);
    expect(troop.attackSpeed).toBe(1.8);
    expect(troop.damageType).toBe('single');
    expect(troop.targetType).toBe('ground');
    expect(troop.builderBarracksRequired).toBe(10);
    expect(troop.specialAbility).toBe('Overcharge');
  });

  it('has 8 levels (starting at level 13)', () => {
    expect(troop.levels).toHaveLength(8);
    expect(troop.levels[0].level).toBe(13);
  });

  it('has correct first level stats (level 13)', () => {
    const lv13 = troop.levels[0];
    expect(lv13.level).toBe(13);
    expect(lv13.hitpoints).toBe(3900);
    expect(lv13.dps).toBe(420);
    expect(lv13.damagePerShot).toBe(756);
    expect(lv13.overchargeDamage).toBe(920);
    expect(lv13.unitsPerCamp).toBe(1);
    expect(lv13.researchCost).toBe(0);
    expect(lv13.starLabRequired).toBe(0);
  });

  it('has correct last level stats (level 20)', () => {
    const lv20 = troop.levels[7];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(5191);
    expect(lv20.dps).toBe(560);
    expect(lv20.damagePerShot).toBe(1008);
    expect(lv20.overchargeDamage).toBe(1500);
    expect(lv20.researchCost).toBe(5800000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/power-pekka\/normal\/level-\d+\.png$/,
      );
    }
  });
});
