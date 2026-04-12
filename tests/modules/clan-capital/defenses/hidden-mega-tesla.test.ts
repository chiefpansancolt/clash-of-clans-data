import { clanCapital } from '@/modules/clan-capital';

describe('hiddenMegaTesla() [Clan Capital]', () => {
  const d = clanCapital().defenses().hiddenMegaTesla().first()!;

  it('has correct id', () => {
    expect(d.id).toBe('hidden-mega-tesla');
  });

  it('has correct name', () => {
    expect(d.name).toBe('Hidden Mega Tesla');
  });

  it('has correct base', () => {
    expect(d.base).toBe('clan_capital');
  });

  it('has correct category', () => {
    expect(d.category).toBe('defense');
  });

  it('has correct targetType', () => {
    expect(d.targetType).toBe('both');
  });

  it('has 5 levels', () => {
    expect(d.levels).toHaveLength(5);
  });

  it('first level has correct stats', () => {
    const lv1 = d.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(1800);
    expect(lv1.stats.normal.dps).toBe(150);
    expect(lv1.stats.normal.damagePerShot).toBe(600);
    expect(lv1.stats.normal.secondaryChainDamagePerShot).toBe(480);
    expect(lv1.buildCost).toBe(7000);
    expect(lv1.capitalHallRequired).toBe(4);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('last level has correct stats', () => {
    const lv5 = d.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(2600);
    expect(lv5.stats.normal.dps).toBe(250);
    expect(lv5.stats.normal.damagePerShot).toBe(1000);
    expect(lv5.stats.normal.secondaryChainDamagePerShot).toBe(800);
    expect(lv5.buildCost).toBe(75000);
    expect(lv5.capitalHallRequired).toBe(10);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of d.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/defenses\/hidden-mega-tesla\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(d.availablePerCapitalHall).toHaveLength(10);
  });

  it('has 7 availablePerDistrict entries', () => {
    expect(d.availablePerDistrict).toHaveLength(7);
  });

  it('modes.normal has correct range and damage type', () => {
    expect(d.modes.normal.range).toBe(6);
    expect(d.modes.normal.triggerRange).toBe(6);
    expect(d.modes.normal.attackSpeed).toBe(4);
    expect(d.modes.normal.damageType).toBe('chain');
  });
});
