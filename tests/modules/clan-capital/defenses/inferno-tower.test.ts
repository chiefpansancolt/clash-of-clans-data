import { clanCapital } from '@/modules/clan-capital';

describe('infernoTower()', () => {
  const d = clanCapital().defenses().infernoTower().first()!;

  it('has correct identity', () => {
    expect(d.id).toBe('inferno-tower');
    expect(d.name).toBe('Inferno Tower');
    expect(d.base).toBe('clan_capital');
    expect(d.category).toBe('defense');
  });

  it('has correct targetType and size', () => {
    expect(d.targetType).toBe('both');
    expect(d.size).toBe('3x3');
  });

  it('has correct mode constants', () => {
    expect(d.modes.normal.range).toBe(9);
    expect(d.modes.normal.attackSpeed).toBe(0.128);
    expect(d.modes.normal.damageType).toBe('single');
  });

  it('has 5 levels', () => {
    expect(d.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const lvl = d.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpoints).toBe(3600);
    expect(lvl.buildCost).toBe(15000);
    expect(lvl.capitalHallRequired).toBe(6);
    expect(lvl.districtHallRequired).toBe(1);
    expect(lvl.stats.normal.dps).toBe(200);
    expect(lvl.stats.normal.dpsAfter2p5s).toBe(500);
    expect(lvl.stats.normal.dpsAfter7p5s).toBe(2000);
  });

  it('level 5 has correct stats', () => {
    const lvl = d.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.hitpoints).toBe(5200);
    expect(lvl.buildCost).toBe(155000);
    expect(lvl.capitalHallRequired).toBe(10);
    expect(lvl.districtHallRequired).toBe(5);
    expect(lvl.stats.normal.dps).toBe(320);
    expect(lvl.stats.normal.dpsAfter2p5s).toBe(800);
    expect(lvl.stats.normal.dpsAfter7p5s).toBe(3200);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/inferno-tower\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has correct availablePerCapitalHall', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
    expect(d.availablePerCapitalHall![4].count).toBe(0);
    expect(d.availablePerCapitalHall![5].count).toBe(1);
    expect(d.availablePerCapitalHall![8].count).toBe(2);
  });

  it('has correct availablePerDistrict', () => {
    const dragonCliffs = d.availablePerDistrict.find((e) => e.district === 'dragonCliffs')!;
    expect(dragonCliffs.countPerDistrictHall).toEqual([1, 2, 2, 2, 2]);

    const goblinMines = d.availablePerDistrict.find((e) => e.district === 'goblinMines')!;
    expect(goblinMines.countPerDistrictHall).toHaveLength(4);
    expect(goblinMines.countPerDistrictHall).toEqual([0, 0, 1, 1]);
  });
});
