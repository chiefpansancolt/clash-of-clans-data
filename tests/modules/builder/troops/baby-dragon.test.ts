import { builder } from '@/modules/builder';

describe('Baby Dragon [Builder Base]', () => {
  const troop = builder().troops().babyDragon().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('baby-dragon');
    expect(troop.name).toBe('Baby Dragon');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(20);
    expect(troop.movementSpeed).toBe(24);
    expect(troop.range).toBe(2.5);
    expect(troop.attackSpeed).toBe(1);
    expect(troop.damageType).toBe('splash');
    expect(troop.targetType).toBe('both');
    expect(troop.builderBarracksRequired).toBe(6);
    expect(troop.specialAbility).toBe('Fiery Tantrum');
    expect(troop.passiveAbility).toBe('Tantrum');
  });

  it('has 16 levels (starting at level 5)', () => {
    expect(troop.levels).toHaveLength(16);
    expect(troop.levels[0].level).toBe(5);
  });

  it('has correct first level stats (level 5)', () => {
    const lv5 = troop.levels[0];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(1331);
    expect(lv5.dps).toBe(62);
    expect(lv5.damagePerShot).toBe(62);
    expect(lv5.unitsPerCamp).toBe(1);
    expect(lv5.tantrumDamageBonus).toBe(60);
    expect(lv5.fierySneezeDamageMin).toBe(80);
    expect(lv5.fierySneezeDamageMax).toBe(100);
    expect(lv5.researchCost).toBe(0);
    expect(lv5.starLabRequired).toBe(0);
  });

  it('has correct last level stats (level 20)', () => {
    const lv20 = troop.levels[15];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(2358);
    expect(lv20.dps).toBe(120);
    expect(lv20.damagePerShot).toBe(120);
    expect(lv20.unitsPerCamp).toBe(1);
    expect(lv20.tantrumDamageBonus).toBe(100);
    expect(lv20.fierySneezeDamageMin).toBe(440);
    expect(lv20.fierySneezeDamageMax).toBe(550);
    expect(lv20.researchCost).toBe(5500000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/baby-dragon\/normal\/level-\d+\.png$/,
      );
    }
  });
});
