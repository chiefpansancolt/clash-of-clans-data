import { clanCapital } from '@/modules/clan-capital';

describe('goblinThrower()', () => {
  const d = clanCapital().defenses().goblinThrower().first()!;

  it('has correct identity', () => {
    expect(d.id).toBe('goblin-thrower');
    expect(d.name).toBe('Goblin Thrower');
    expect(d.base).toBe('clan_capital');
    expect(d.category).toBe('defense');
  });

  it('has correct targetType and size', () => {
    expect(d.targetType).toBe('ground');
    expect(d.size).toBe('3x3');
  });

  it('has correct mode constants', () => {
    expect(d.modes.normal.range).toBe(9);
    expect(d.modes.normal.attackSpeed).toBe(4);
    expect(d.modes.normal.damageType).toBe('splash');
    expect(d.modes.normal.numberOfRounds).toBe(5);
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
    expect(lvl.hitpoints).toBe(3100);
    expect(lvl.buildCost).toBe(16000);
    expect(lvl.capitalHallRequired).toBeUndefined();
    expect(lvl.districtHallRequired).toBe(1);
    expect(lvl.troopLevel).toBe(1);
    expect(lvl.stats.normal.dps).toBe(18);
    expect(lvl.stats.normal.damagePerShot).toBe(72);
  });

  it('level 4 has correct stats', () => {
    const lvl = d.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.hitpoints).toBe(4000);
    expect(lvl.buildCost).toBe(99000);
    expect(lvl.districtHallRequired).toBe(4);
    expect(lvl.troopLevel).toBe(4);
    expect(lvl.stats.normal.dps).toBe(25);
    expect(lvl.stats.normal.damagePerShot).toBe(100);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/goblin-thrower\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has correct availablePerDistrict', () => {
    expect(d.availablePerDistrict).toHaveLength(1);
    const goblinMines = d.availablePerDistrict.find((e) => e.district === 'goblinMines')!;
    expect(goblinMines.countPerDistrictHall).toHaveLength(4);
    expect(goblinMines.countPerDistrictHall).toEqual([3, 3, 4, 4]);
  });
});
