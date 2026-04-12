import { clanCapital } from '@/modules/clan-capital';

describe('airBombs() [Clan Capital]', () => {
  const d = clanCapital().defenses().airBombs().first()!;

  it('has correct id', () => {
    expect(d.id).toBe('air-bombs');
  });

  it('has correct name', () => {
    expect(d.name).toBe('Air Bombs');
  });

  it('has correct base', () => {
    expect(d.base).toBe('clan_capital');
  });

  it('has correct category', () => {
    expect(d.category).toBe('defense');
  });

  it('has correct targetType', () => {
    expect(d.targetType).toBe('air');
  });

  it('has 5 levels', () => {
    expect(d.levels).toHaveLength(5);
  });

  it('first level has correct stats', () => {
    const lv1 = d.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(2300);
    expect(lv1.stats.normal.dps).toBe(225);
    expect(lv1.stats.normal.damagePerShot).toBe(675);
    expect(lv1.buildCost).toBe(6000);
    expect(lv1.capitalHallRequired).toBe(3);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('last level has correct stats', () => {
    const lv5 = d.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(3200);
    expect(lv5.stats.normal.dps).toBe(325);
    expect(lv5.stats.normal.damagePerShot).toBe(975);
    expect(lv5.buildCost).toBe(65000);
    expect(lv5.capitalHallRequired).toBe(10);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/air-bombs\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
  });

  it('has 8 availablePerDistrict entries', () => {
    expect(d.availablePerDistrict).toHaveLength(8);
  });

  it('modes.normal has correct range and attackSpeed', () => {
    expect(d.modes.normal.range).toBe(8.5);
    expect(d.modes.normal.attackSpeed).toBe(3);
    expect(d.modes.normal.damageType).toBe('splash');
  });
});
