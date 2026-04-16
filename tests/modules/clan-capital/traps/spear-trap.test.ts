import { clanCapital } from '@/modules/clan-capital';

describe('spearTrap() [Clan Capital]', () => {
  const t = clanCapital().traps().spearTrap().first()!;

  it('has correct id', () => {
    expect(t.id).toBe('spear-trap');
  });

  it('has correct name', () => {
    expect(t.name).toBe('Spear Trap');
  });

  it('has correct base', () => {
    expect(t.base).toBe('clan_capital');
  });

  it('has correct category', () => {
    expect(t.category).toBe('trap');
  });

  it('has correct size', () => {
    expect(t.size).toBe('2x2');
  });

  it('has correct targetType', () => {
    expect(t.targetType).toBe('both');
  });

  it('has correct damageType', () => {
    expect(t.damageType).toBe('single');
  });

  it('has correct triggerRadius', () => {
    expect(t.triggerRadius).toBe(10);
  });

  it('has 4 levels', () => {
    expect(t.levels).toHaveLength(4);
  });

  it('level 1 has correct stats', () => {
    const lv1 = t.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.damage).toBe(120);
    expect(lv1.projectileCount).toBe(4);
    expect(lv1.buildCost).toBe(3000);
    expect(lv1.buildCostResource).toBe('Capital Gold');
    expect(lv1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lv1.xpGained).toBe(0);
    expect(lv1.capitalHallRequired).toBe(10);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('level 4 has correct stats', () => {
    const lv4 = t.levels[3];
    expect(lv4.level).toBe(4);
    expect(lv4.damage).toBe(180);
    expect(lv4.projectileCount).toBe(7);
    expect(lv4.buildCost).toBe(20000);
    expect(lv4.capitalHallRequired).toBe(10);
    expect(lv4.districtHallRequired).toBe(4);
  });

  it('all levels have valid normal image paths', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/traps\/spear-trap\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('no level has an air image', () => {
    expect(t.levels.every((lvl) => lvl.images.air === undefined)).toBe(true);
  });

  it('has no availablePerCapitalHall (Goblin Mines only)', () => {
    expect(t.availablePerCapitalHall).toBeUndefined();
  });

  it('has 1 availablePerDistrict entry (Goblin Mines only)', () => {
    expect(t.availablePerDistrict).toHaveLength(1);
    expect(t.availablePerDistrict[0].district).toBe('goblinMines');
  });

  it('Goblin Mines DH1 has 3, DH4 has 6', () => {
    const gm = t.availablePerDistrict[0];
    expect(gm.countPerDistrictHall[0]).toBe(3);
    expect(gm.countPerDistrictHall[3]).toBe(6);
  });
});
