import { clanCapital } from '@/modules/clan-capital';

describe('bombTower() [Clan Capital]', () => {
  const d = clanCapital().defenses().bombTower().first()!;

  it('has correct id', () => {
    expect(d.id).toBe('bomb-tower');
  });

  it('has correct name', () => {
    expect(d.name).toBe('Bomb Tower');
  });

  it('has correct base', () => {
    expect(d.base).toBe('clan_capital');
  });

  it('has correct category', () => {
    expect(d.category).toBe('defense');
  });

  it('has correct targetType', () => {
    expect(d.targetType).toBe('ground');
  });

  it('has 5 levels', () => {
    expect(d.levels).toHaveLength(5);
  });

  it('first level has correct stats', () => {
    const lv1 = d.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(2000);
    expect(lv1.stats.normal.dps).toBe(65);
    expect(lv1.stats.normal.damagePerShot).toBe(71.5);
    expect(lv1.deathDamage).toBe(300);
    expect(lv1.buildCost).toBe(4500);
    expect(lv1.capitalHallRequired).toBe(2);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('last level has correct stats', () => {
    const lv5 = d.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(3000);
    expect(lv5.stats.normal.dps).toBe(105);
    expect(lv5.stats.normal.damagePerShot).toBe(115.5);
    expect(lv5.deathDamage).toBe(500);
    expect(lv5.buildCost).toBe(50000);
    expect(lv5.capitalHallRequired).toBe(9);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/bomb-tower\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
  });

  it('is not available at CH1', () => {
    expect(d.availablePerCapitalHall![0].count).toBe(0);
  });

  it('has 5 availablePerDistrict entries', () => {
    expect(d.availablePerDistrict).toHaveLength(5);
  });

  it('is not available in Wizard Valley, Builder Workshop or Golem Quarry', () => {
    const districts = d.availablePerDistrict.map((e) => e.district);
    expect(districts).not.toContain('wizardValley');
    expect(districts).not.toContain('buildersWorkshop');
    expect(districts).not.toContain('golemQuarry');
  });

  it('modes.normal has correct range, attackSpeed and damageType', () => {
    expect(d.modes.normal.range).toBe(5);
    expect(d.modes.normal.attackSpeed).toBe(1.1);
    expect(d.modes.normal.damageType).toBe('splash');
  });
});
