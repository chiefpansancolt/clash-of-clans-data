import { clanCapital } from '@/modules/clan-capital';

describe('multiCannon() [Clan Capital]', () => {
  const d = clanCapital().defenses().multiCannon().first()!;

  it('has correct id', () => {
    expect(d.id).toBe('multi-cannon');
  });

  it('has correct name', () => {
    expect(d.name).toBe('Multi Cannon');
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
    expect(lv1.hitpoints).toBe(1800);
    expect(lv1.stats.normal.dps).toBe(238);
    expect(lv1.stats.normal.damagePerShot).toBe(80);
    expect(lv1.buildCost).toBe(4000);
    expect(lv1.capitalHallRequired).toBe(2);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('last level has correct stats', () => {
    const lv5 = d.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(2800);
    expect(lv5.stats.normal.dps).toBe(357);
    expect(lv5.stats.normal.damagePerShot).toBe(120);
    expect(lv5.buildCost).toBe(45000);
    expect(lv5.capitalHallRequired).toBe(9);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/multi-cannon\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
  });

  it('is not available at CH1', () => {
    expect(d.availablePerCapitalHall![0].count).toBe(0);
  });

  it('has 7 availablePerDistrict entries (no Dragon Cliffs)', () => {
    expect(d.availablePerDistrict).toHaveLength(7);
  });

  it('is not available in Dragon Cliffs', () => {
    expect(d.availablePerDistrict.find((e) => e.district === 'dragonCliffs')).toBeUndefined();
  });

  it('modes.normal has correct range, shotsPerBurst and timeBetweenBursts', () => {
    expect(d.modes.normal.range).toBe(6);
    expect(d.modes.normal.shotsPerBurst).toBe(8);
    expect(d.modes.normal.timeBetweenBursts).toBe(1.6);
    expect(d.modes.normal.damageType).toBe('single');
  });
});
