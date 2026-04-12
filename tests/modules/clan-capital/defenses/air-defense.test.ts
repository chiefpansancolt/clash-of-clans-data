import { clanCapital } from '@/modules/clan-capital';

describe('airDefense() [Clan Capital]', () => {
  const d = clanCapital().defenses().airDefense().first()!;

  it('has correct id', () => {
    expect(d.id).toBe('air-defense');
  });

  it('has correct name', () => {
    expect(d.name).toBe('Air Defense');
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
    expect(lv1.hitpoints).toBe(1400);
    expect(lv1.stats.normal.dps).toBe(260);
    expect(lv1.stats.normal.damagePerShot).toBe(390);
    expect(lv1.buildCost).toBe(3500);
    expect(lv1.capitalHallRequired).toBe(1);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('last level has correct stats', () => {
    const lv5 = d.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(1800);
    expect(lv5.stats.normal.dps).toBe(380);
    expect(lv5.stats.normal.damagePerShot).toBe(570);
    expect(lv5.buildCost).toBe(40000);
    expect(lv5.capitalHallRequired).toBe(9);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/air-defense\/normal\/level-\d+\.png$/,
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
    expect(d.modes.normal.range).toBe(10);
    expect(d.modes.normal.attackSpeed).toBe(1.5);
    expect(d.modes.normal.damageType).toBe('single');
  });
});
