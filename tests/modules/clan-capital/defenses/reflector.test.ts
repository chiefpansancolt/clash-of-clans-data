import { clanCapital } from '@/modules/clan-capital';

describe('reflector()', () => {
  const d = clanCapital().defenses().reflector().first()!;

  it('has correct identity', () => {
    expect(d.id).toBe('reflector');
    expect(d.name).toBe('Reflector');
    expect(d.base).toBe('clan_capital');
    expect(d.category).toBe('defense');
  });

  it('has correct targetType and size', () => {
    expect(d.targetType).toBe('both');
    expect(d.size).toBe('2x2');
  });

  it('has correct mode constants', () => {
    expect(d.modes.normal.range).toBe(10);
    expect(d.modes.normal.attackSpeed).toBe(0.575);
    expect(d.modes.normal.damageType).toBe('single');
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
    expect(lvl.hitpoints).toBe(3300);
    expect(lvl.buildCost).toBe(7500);
    expect(lvl.capitalHallRequired).toBeUndefined();
    expect(lvl.districtHallRequired).toBe(1);
    expect(lvl.stats.normal.dps).toBe(260);
    expect(lvl.stats.normal.damagePerShot).toBe(149.5);
  });

  it('level 4 has correct stats', () => {
    const lvl = d.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.hitpoints).toBe(4200);
    expect(lvl.buildCost).toBe(48000);
    expect(lvl.districtHallRequired).toBe(4);
    expect(lvl.stats.normal.dps).toBe(350);
    expect(lvl.stats.normal.damagePerShot).toBe(201.25);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/reflector\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has correct availablePerDistrict', () => {
    const skeletonPark = d.availablePerDistrict.find((e) => e.district === 'skeletonPark')!;
    expect(skeletonPark.countPerDistrictHall).toHaveLength(4);
    expect(skeletonPark.countPerDistrictHall).toEqual([2, 3, 5, 6]);

    const goblinMines = d.availablePerDistrict.find((e) => e.district === 'goblinMines')!;
    expect(goblinMines.countPerDistrictHall).toHaveLength(4);
    expect(goblinMines.countPerDistrictHall).toEqual([0, 1, 2, 4]);
  });
});
