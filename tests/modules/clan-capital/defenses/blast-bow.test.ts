import { clanCapital } from '@/modules/clan-capital';

describe('blastBow()', () => {
  const d = clanCapital().defenses().blastBow().first()!;

  it('has correct identity', () => {
    expect(d.id).toBe('blast-bow');
    expect(d.name).toBe('Blast Bow');
    expect(d.base).toBe('clan_capital');
    expect(d.category).toBe('defense');
  });

  it('has correct targetType and size', () => {
    expect(d.targetType).toBe('both');
    expect(d.size).toBe('4x4');
  });

  it('has correct mode constants', () => {
    expect(d.modes.normal.range).toBe(14);
    expect(d.modes.normal.minRange).toBe(3.5);
    expect(d.modes.normal.attackSpeed).toBe(4);
    expect(d.modes.normal.damageType).toBe('splash');
  });

  it('has 5 levels', () => {
    expect(d.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const lvl = d.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpoints).toBe(4800);
    expect(lvl.buildCost).toBe(20000);
    expect(lvl.capitalHallRequired).toBe(6);
    expect(lvl.districtHallRequired).toBe(1);
    expect(lvl.stats.normal.dps).toBe(170);
    expect(lvl.stats.normal.damagePerShot).toBe(680);
  });

  it('level 5 has correct stats', () => {
    const lvl = d.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.hitpoints).toBe(7200);
    expect(lvl.buildCost).toBe(205000);
    expect(lvl.capitalHallRequired).toBe(10);
    expect(lvl.districtHallRequired).toBe(5);
    expect(lvl.stats.normal.dps).toBe(230);
    expect(lvl.stats.normal.damagePerShot).toBe(920);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/blast-bow\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has correct availablePerCapitalHall', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
    expect(d.availablePerCapitalHall![4].count).toBe(0);
    expect(d.availablePerCapitalHall![5].count).toBe(1);
    expect(d.availablePerCapitalHall![9].count).toBe(2);
  });

  it('has correct availablePerDistrict', () => {
    const golemQuarry = d.availablePerDistrict.find((e) => e.district === 'golemQuarry')!;
    expect(golemQuarry.countPerDistrictHall).toEqual([1, 1, 2, 2, 3]);

    const goblinMines = d.availablePerDistrict.find((e) => e.district === 'goblinMines')!;
    expect(goblinMines.countPerDistrictHall).toHaveLength(4);
    expect(goblinMines.countPerDistrictHall).toEqual([0, 0, 0, 1]);
  });
});
