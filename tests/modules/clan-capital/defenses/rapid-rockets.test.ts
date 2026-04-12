import { clanCapital } from '@/modules/clan-capital';

describe('rapidRockets() [Clan Capital]', () => {
  const d = clanCapital().defenses().rapidRockets().first()!;

  it('has correct id', () => {
    expect(d.id).toBe('rapid-rockets');
  });

  it('has correct name', () => {
    expect(d.name).toBe('Rapid Rockets');
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
    expect(lv1.stats.normal.dps).toBe(385);
    expect(lv1.stats.normal.damagePerShot).toBe(143);
    expect(lv1.buildCost).toBe(5500);
    expect(lv1.capitalHallRequired).toBe(4);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('last level has correct stats', () => {
    const lv5 = d.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(1900);
    expect(lv5.stats.normal.dps).toBe(592);
    expect(lv5.stats.normal.damagePerShot).toBe(220);
    expect(lv5.buildCost).toBe(60000);
    expect(lv5.capitalHallRequired).toBe(10);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/rapid-rockets\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
  });

  it('has 6 availablePerDistrict entries', () => {
    expect(d.availablePerDistrict).toHaveLength(6);
  });

  it('modes.normal has correct range and burst stats', () => {
    expect(d.modes.normal.range).toBe(7);
    expect(d.modes.normal.shotsPerBurst).toBe(5);
    expect(d.modes.normal.timeBetweenBursts).toBe(0.55);
    expect(d.modes.normal.damageType).toBe('single');
  });
});
