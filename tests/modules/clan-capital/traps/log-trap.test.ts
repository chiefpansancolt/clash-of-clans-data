import { clanCapital } from '@/modules/clan-capital';

describe('logTrap() [Clan Capital]', () => {
  const t = clanCapital().traps().logTrap().first()!;

  it('has correct id', () => {
    expect(t.id).toBe('log-trap');
  });

  it('has correct name', () => {
    expect(t.name).toBe('Log Trap');
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
    expect(t.targetType).toBe('ground');
  });

  it('has correct damageType', () => {
    expect(t.damageType).toBe('splash');
  });

  it('has correct triggerRadius', () => {
    expect(t.triggerRadius).toBe(9);
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const lv1 = t.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.damage).toBe(400);
    expect(lv1.buildCost).toBe(1500);
    expect(lv1.buildCostResource).toBe('Capital Gold');
    expect(lv1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lv1.xpGained).toBe(0);
    expect(lv1.capitalHallRequired).toBe(4);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('level 5 has correct stats', () => {
    const lv5 = t.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.damage).toBe(600);
    expect(lv5.buildCost).toBe(20000);
    expect(lv5.capitalHallRequired).toBe(10);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have valid normal image paths', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/traps\/log-trap\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('no level has an air image (ground-only trap)', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.air).toBeUndefined();
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(t.availablePerCapitalHall).toHaveLength(10);
  });

  it('CH1-3 have 0 log traps, CH4 has 1, CH10 has 4', () => {
    const apt = t.availablePerCapitalHall!;
    expect(apt.find((e) => e.capitalHallLevel === 1)?.count).toBe(0);
    expect(apt.find((e) => e.capitalHallLevel === 3)?.count).toBe(0);
    expect(apt.find((e) => e.capitalHallLevel === 4)?.count).toBe(1);
    expect(apt.find((e) => e.capitalHallLevel === 10)?.count).toBe(4);
  });

  it('has 7 availablePerDistrict entries', () => {
    expect(t.availablePerDistrict).toHaveLength(7);
  });

  it('is not available in Barbarian Camp', () => {
    const districts = t.availablePerDistrict.map((e) => e.district);
    expect(districts).not.toContain('barbarianCamp');
  });

  it('is available in Builder Workshop, Dragon Cliffs, and Golem Quarry', () => {
    const districts = t.availablePerDistrict.map((e) => e.district);
    expect(districts).toContain('buildersWorkshop');
    expect(districts).toContain('dragonCliffs');
    expect(districts).toContain('golemQuarry');
  });
});
