import { clanCapital } from '@/modules/clan-capital';

describe('superWizardTower() [Clan Capital]', () => {
  const d = clanCapital().defenses().superWizardTower().first()!;

  it('has correct id', () => {
    expect(d.id).toBe('super-wizard-tower');
  });

  it('has correct name', () => {
    expect(d.name).toBe('Super Wizard Tower');
  });

  it('has correct base', () => {
    expect(d.base).toBe('clan_capital');
  });

  it('has correct category', () => {
    expect(d.category).toBe('defense');
  });

  it('has correct targetType', () => {
    expect(d.targetType).toBe('both');
  });

  it('has 5 levels', () => {
    expect(d.levels).toHaveLength(5);
  });

  it('first level has correct stats', () => {
    const lv1 = d.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(1800);
    expect(lv1.stats.normal.dps).toBe(60);
    expect(lv1.stats.normal.damagePerShot).toBe(120);
    expect(lv1.stats.normal.secondaryChainDamagePerShot).toBe(48);
    expect(lv1.buildCost).toBe(6500);
    expect(lv1.capitalHallRequired).toBe(3);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('last level has correct stats', () => {
    const lv5 = d.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(3000);
    expect(lv5.stats.normal.dps).toBe(100);
    expect(lv5.stats.normal.damagePerShot).toBe(200);
    expect(lv5.stats.normal.secondaryChainDamagePerShot).toBe(80);
    expect(lv5.buildCost).toBe(70000);
    expect(lv5.capitalHallRequired).toBe(10);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/super-wizard-tower\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
  });

  it('is not available at CH1 or CH2', () => {
    expect(d.availablePerCapitalHall![0].count).toBe(0);
    expect(d.availablePerCapitalHall![1].count).toBe(0);
  });

  it('has 5 availablePerDistrict entries', () => {
    expect(d.availablePerDistrict).toHaveLength(5);
  });

  it('is not available in Barbarian Camp, Balloon Lagoon or Golem Quarry', () => {
    const districts = d.availablePerDistrict.map((e) => e.district);
    expect(districts).not.toContain('barbarianCamp');
    expect(districts).not.toContain('balloonLagoon');
    expect(districts).not.toContain('golemQuarry');
  });

  it('modes.normal has correct range, attackSpeed, damageType and maxChainTargets', () => {
    expect(d.modes.normal.range).toBe(5.5);
    expect(d.modes.normal.attackSpeed).toBe(2);
    expect(d.modes.normal.damageType).toBe('chain');
    expect(d.modes.normal.maxChainTargets).toBe(9);
  });
});
