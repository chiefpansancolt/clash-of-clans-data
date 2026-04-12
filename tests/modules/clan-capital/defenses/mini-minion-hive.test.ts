import { clanCapital } from '@/modules/clan-capital';

describe('miniMinionHive()', () => {
  const d = clanCapital().defenses().miniMinionHive().first()!;

  it('has correct identity', () => {
    expect(d.id).toBe('mini-minion-hive');
    expect(d.name).toBe('Mini-Minion Hive');
    expect(d.base).toBe('clan_capital');
    expect(d.category).toBe('defense');
  });

  it('has correct targetType and size', () => {
    expect(d.targetType).toBe('both');
    expect(d.size).toBe('3x3');
  });

  it('has correct mode constants', () => {
    expect(d.modes.normal.range).toBe(14);
    expect(d.modes.normal.attackSpeed).toBe(1.5);
    expect(d.modes.normal.damageType).toBe('single');
    expect(d.modes.normal.shotsPerBurst).toBe(12);
    expect(d.modes.normal.timeBetweenBursts).toBe(1.5);
  });

  it('has 4 levels', () => {
    expect(d.levels).toHaveLength(4);
  });

  it('has no availablePerCapitalHall', () => {
    expect(d.availablePerCapitalHall).toBeUndefined();
  });

  it('level 1 has correct stats', () => {
    const lvl = d.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpoints).toBe(4400);
    expect(lvl.buildCost).toBe(17500);
    expect(lvl.capitalHallRequired).toBeUndefined();
    expect(lvl.districtHallRequired).toBe(1);
    expect(lvl.stats.normal.dps).toBe(223);
    expect(lvl.stats.normal.damagePerShot).toBe(75);
  });

  it('level 4 has correct stats', () => {
    const lvl = d.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.hitpoints).toBe(5600);
    expect(lvl.buildCost).toBe(113000);
    expect(lvl.districtHallRequired).toBe(4);
    expect(lvl.stats.normal.dps).toBe(357);
    expect(lvl.stats.normal.damagePerShot).toBe(120);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/mini-minion-hive\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has correct availablePerDistrict', () => {
    const skeletonPark = d.availablePerDistrict.find((e) => e.district === 'skeletonPark')!;
    expect(skeletonPark.countPerDistrictHall).toHaveLength(4);
    expect(skeletonPark.countPerDistrictHall).toEqual([1, 2, 2, 2]);

    const goblinMines = d.availablePerDistrict.find((e) => e.district === 'goblinMines')!;
    expect(goblinMines.countPerDistrictHall).toHaveLength(4);
    expect(goblinMines.countPerDistrictHall).toEqual([0, 0, 1, 1]);
  });
});
