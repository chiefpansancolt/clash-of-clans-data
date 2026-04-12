import { clanCapital } from '@/modules/clan-capital';

describe('rocketArtillery()', () => {
  const d = clanCapital().defenses().rocketArtillery().first()!;

  it('has correct identity', () => {
    expect(d.id).toBe('rocket-artillery');
    expect(d.name).toBe('Rocket Artillery');
    expect(d.base).toBe('clan_capital');
    expect(d.category).toBe('defense');
  });

  it('has correct targetType and size', () => {
    expect(d.targetType).toBe('both');
    expect(d.size).toBe('3x3');
  });

  it('has correct mode constants', () => {
    expect(d.modes.normal.range).toBe(12);
    expect(d.modes.normal.minRange).toBe(3);
    expect(d.modes.normal.attackSpeed).toBe(4);
    expect(d.modes.normal.damageType).toBe('splash');
  });

  it('has 5 levels', () => {
    expect(d.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const lvl = d.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpoints).toBe(2400);
    expect(lvl.buildCost).toBe(12500);
    expect(lvl.capitalHallRequired).toBe(5);
    expect(lvl.districtHallRequired).toBe(1);
    expect(lvl.stats.normal.dps).toBe(140);
    expect(lvl.stats.normal.damagePerShot).toBe(560);
  });

  it('level 5 has correct stats', () => {
    const lvl = d.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.hitpoints).toBe(4000);
    expect(lvl.buildCost).toBe(130000);
    expect(lvl.capitalHallRequired).toBe(10);
    expect(lvl.districtHallRequired).toBe(5);
    expect(lvl.stats.normal.dps).toBe(220);
    expect(lvl.stats.normal.damagePerShot).toBe(880);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/rocket-artillery\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has correct availablePerCapitalHall', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
    expect(d.availablePerCapitalHall![4].count).toBe(1);
    expect(d.availablePerCapitalHall![7].count).toBe(2);
  });

  it('has correct availablePerDistrict', () => {
    const barbarianCamp = d.availablePerDistrict.find((e) => e.district === 'barbarianCamp')!;
    expect(barbarianCamp.countPerDistrictHall).toEqual([0, 0, 1, 1, 2]);

    const skeletonPark = d.availablePerDistrict.find((e) => e.district === 'skeletonPark')!;
    expect(skeletonPark.countPerDistrictHall).toHaveLength(4);
    expect(skeletonPark.countPerDistrictHall).toEqual([0, 0, 1, 2]);
  });
});
