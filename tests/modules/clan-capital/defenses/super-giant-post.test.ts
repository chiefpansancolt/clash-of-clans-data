import { clanCapital } from '@/modules/clan-capital';

describe('superGiantPost()', () => {
  const d = clanCapital().defenses().superGiantPost().first()!;

  it('has correct identity', () => {
    expect(d.id).toBe('super-giant-post');
    expect(d.name).toBe('Super Giant Post');
    expect(d.base).toBe('clan_capital');
    expect(d.category).toBe('defense');
  });

  it('has correct targetType and size', () => {
    expect(d.targetType).toBe('ground');
    expect(d.size).toBe('3x3');
  });

  it('has correct mode constants', () => {
    expect(d.modes.normal.range).toBe(0);
    expect(d.modes.normal.attackSpeed).toBe(0);
    expect(d.modes.normal.damageType).toBe('none');
  });

  it('has correct defendingTroops', () => {
    expect(d.defendingTroops).toHaveLength(1);
    expect(d.defendingTroops![0].name).toBe('Super Giant');
    expect(d.defendingTroops![0].count).toBe(2);
  });

  it('has 5 levels', () => {
    expect(d.levels).toHaveLength(5);
  });

  it('has correct availablePerCapitalHall', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
    expect(d.availablePerCapitalHall![7].capitalHallLevel).toBe(8);
    expect(d.availablePerCapitalHall![7].count).toBe(1);
  });

  it('level 1 has correct stats', () => {
    const lvl = d.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpoints).toBe(800);
    expect(lvl.buildCost).toBe(7500);
    expect(lvl.capitalHallRequired).toBe(8);
    expect(lvl.districtHallRequired).toBe(2);
    expect(lvl.troopLevel).toBe(1);
  });

  it('level 5 has correct stats', () => {
    const lvl = d.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.hitpoints).toBe(1400);
    expect(lvl.buildCost).toBe(80000);
    expect(lvl.capitalHallRequired).toBe(10);
    expect(lvl.districtHallRequired).toBe(5);
    expect(lvl.troopLevel).toBe(5);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/super-giant-post\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has correct availablePerDistrict', () => {
    expect(d.availablePerDistrict).toHaveLength(1);
    const barbarianCamp = d.availablePerDistrict.find((e) => e.district === 'barbarianCamp')!;
    expect(barbarianCamp.countPerDistrictHall).toHaveLength(5);
    expect(barbarianCamp.countPerDistrictHall).toEqual([0, 2, 3, 3, 3]);
  });
});
