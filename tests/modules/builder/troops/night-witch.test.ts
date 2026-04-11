import { builder } from '@/modules/builder';

describe('Night Witch [Builder Base]', () => {
  const troop = builder().troops().nightWitch().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('night-witch');
    expect(troop.name).toBe('Night Witch');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(14);
    expect(troop.movementSpeed).toBe(12);
    expect(troop.range).toBe(4);
    expect(troop.attackSpeed).toBe(0.7);
    expect(troop.damageType).toBe('splash');
    expect(troop.targetType).toBe('both');
    expect(troop.builderBarracksRequired).toBe(8);
    expect(troop.specialAbility).toBe('Bat Swarm');
  });

  it('has 12 levels (starting at level 9)', () => {
    expect(troop.levels).toHaveLength(12);
    expect(troop.levels[0].level).toBe(9);
  });

  it('has correct first level stats (level 9)', () => {
    const lv9 = troop.levels[0];
    expect(lv9.level).toBe(9);
    expect(lv9.hitpoints).toBe(750);
    expect(lv9.dps).toBe(176);
    expect(lv9.damagePerShot).toBe(123.2);
    expect(lv9.unitsPerCamp).toBe(1);
    expect(lv9.batSummonCooldown).toBe(6.0);
    expect(lv9.batsPerSummon).toBe(3);
    expect(lv9.batsMax).toBe(4);
    expect(lv9.batSwarmCount).toBe(7);
    expect(lv9.researchCost).toBe(0);
    expect(lv9.starLabRequired).toBe(0);
  });

  it('has correct last level stats (level 20)', () => {
    const lv20 = troop.levels[11];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(1220);
    expect(lv20.dps).toBe(278);
    expect(lv20.damagePerShot).toBe(194.6);
    expect(lv20.batSummonCooldown).toBe(4.8);
    expect(lv20.batsPerSummon).toBe(4);
    expect(lv20.batsMax).toBe(5);
    expect(lv20.batSwarmCount).toBe(11);
    expect(lv20.researchCost).toBe(5600000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/night-witch\/normal\/level-\d+\.png$/,
      );
    }
  });
});
