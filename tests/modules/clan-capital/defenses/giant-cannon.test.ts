import { clanCapital } from '@/modules/clan-capital';

describe('giantCannon() [Clan Capital]', () => {
  const d = clanCapital().defenses().giantCannon().first()!;

  it('has correct id', () => {
    expect(d.id).toBe('giant-cannon');
  });

  it('has correct name', () => {
    expect(d.name).toBe('Giant Cannon');
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
    expect(lv1.hitpoints).toBe(3700);
    expect(lv1.stats.normal.dps).toBe(80);
    expect(lv1.stats.normal.damagePerShot).toBe(400);
    expect(lv1.buildCost).toBe(10000);
    expect(lv1.capitalHallRequired).toBe(5);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('last level has correct stats', () => {
    const lv5 = d.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(4500);
    expect(lv5.stats.normal.dps).toBe(120);
    expect(lv5.stats.normal.damagePerShot).toBe(600);
    expect(lv5.buildCost).toBe(105000);
    expect(lv5.capitalHallRequired).toBe(10);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/giant-cannon\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
  });

  it('has 5 availablePerDistrict entries', () => {
    expect(d.availablePerDistrict).toHaveLength(5);
  });

  it('modes.normal has correct range and attackSpeed', () => {
    expect(d.modes.normal.range).toBe(10);
    expect(d.modes.normal.attackSpeed).toBe(5);
    expect(d.modes.normal.damageType).toBe('splash');
  });
});
