import { builder } from '@/modules/builder';

describe('Electrofire Wizard [Builder Base]', () => {
  const troop = builder().troops().electrofireWizard().first()!;

  it('has correct identity', () => {
    expect(troop.id).toBe('electrofire-wizard');
    expect(troop.name).toBe('Electrofire Wizard');
    expect(troop.base).toBe('builder');
    expect(troop.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(troop.housingSpace).toBe(14);
    expect(troop.movementSpeed).toBe(22);
    expect(troop.range).toBe(3.5);
    expect(troop.attackSpeed).toBe(0.128);
    expect(troop.damageType).toBe('single');
    expect(troop.targetType).toBe('both');
    expect(troop.builderBarracksRequired).toBe(12);
    expect(troop.specialAbility).toBe('Change Mode');
    expect(troop.abilityCooldown).toBe(1.5);
    expect(troop.electroAttackSpeed).toBe(3.5);
    expect(troop.electroNumberOfTargets).toBe(4);
    expect(troop.electroChainDamageDecay).toBe(-0.2);
  });

  it('has 4 levels (starting at level 17)', () => {
    expect(troop.levels).toHaveLength(4);
    expect(troop.levels[0].level).toBe(17);
  });

  it('has correct first level stats (level 17)', () => {
    const lv17 = troop.levels[0];
    expect(lv17.level).toBe(17);
    expect(lv17.hitpoints).toBe(1100);
    expect(lv17.infernoInitialDps).toBe(220);
    expect(lv17.infernoDpsAfter1_5s).toBe(330);
    expect(lv17.infernoDpsAfter3_0s).toBe(440);
    expect(lv17.electroDps).toBe(200);
    expect(lv17.electroDamagePerShot).toBe(700);
    expect(lv17.unitsPerCamp).toBe(1);
    expect(lv17.researchCost).toBe(0);
    expect(lv17.starLabRequired).toBe(0);
  });

  it('has correct last level stats (level 20)', () => {
    const lv20 = troop.levels[3];
    expect(lv20.level).toBe(20);
    expect(lv20.hitpoints).toBe(1210);
    expect(lv20.infernoInitialDps).toBe(252);
    expect(lv20.infernoDpsAfter1_5s).toBe(380);
    expect(lv20.infernoDpsAfter3_0s).toBe(505);
    expect(lv20.electroDps).toBe(234);
    expect(lv20.electroDamagePerShot).toBe(819);
    expect(lv20.researchCost).toBe(5800000);
    expect(lv20.researchCostResource).toBe('Builder Elixir');
    expect(lv20.starLabRequired).toBe(10);
  });

  it('all levels have valid normal image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/troops\/electrofire-wizard\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('all levels have valid electro mode image paths', () => {
    for (const lvl of troop.levels) {
      expect(lvl.images.electroMode).toMatch(
        /^images\/builder\/troops\/electrofire-wizard\/electro-mode\/level-\d+\.png$/,
      );
    }
  });
});
