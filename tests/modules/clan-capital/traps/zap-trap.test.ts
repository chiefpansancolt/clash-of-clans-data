import { clanCapital } from '@/modules/clan-capital';

describe('zapTrap() [Clan Capital]', () => {
  const t = clanCapital().traps().zapTrap().first()!;

  it('has correct id', () => {
    expect(t.id).toBe('zap-trap');
  });

  it('has correct name', () => {
    expect(t.name).toBe('Zap Trap');
  });

  it('has correct base', () => {
    expect(t.base).toBe('clan_capital');
  });

  it('has correct category', () => {
    expect(t.category).toBe('trap');
  });

  it('has correct size', () => {
    expect(t.size).toBe('1x1');
  });

  it('has correct targetType', () => {
    expect(t.targetType).toBe('both');
  });

  it('has correct damageType', () => {
    expect(t.damageType).toBe('single');
  });

  it('has correct triggerRadius', () => {
    expect(t.triggerRadius).toBe(5);
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const lv1 = t.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.damage).toBe(1000);
    expect(lv1.buildCost).toBe(2500);
    expect(lv1.buildCostResource).toBe('Capital Gold');
    expect(lv1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lv1.xpGained).toBe(0);
    expect(lv1.capitalHallRequired).toBe(5);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('level 5 has correct stats', () => {
    const lv5 = t.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.damage).toBe(2000);
    expect(lv5.buildCost).toBe(30000);
    expect(lv5.capitalHallRequired).toBe(10);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have valid normal image paths', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/traps\/zap-trap\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('no level has an air image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.air).toBeUndefined();
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(t.availablePerCapitalHall).toHaveLength(10);
  });

  it('CH1-4 have 0 zap traps, CH5 has 1, CH10 has 5', () => {
    const apt = t.availablePerCapitalHall!;
    expect(apt.find((e) => e.capitalHallLevel === 1)?.count).toBe(0);
    expect(apt.find((e) => e.capitalHallLevel === 4)?.count).toBe(0);
    expect(apt.find((e) => e.capitalHallLevel === 5)?.count).toBe(1);
    expect(apt.find((e) => e.capitalHallLevel === 10)?.count).toBe(5);
  });

  it('has 5 availablePerDistrict entries', () => {
    expect(t.availablePerDistrict).toHaveLength(5);
  });

  it('is not available in Barbarian Camp or Wizard Valley', () => {
    const districts = t.availablePerDistrict.map((e) => e.district);
    expect(districts).not.toContain('barbarianCamp');
    expect(districts).not.toContain('wizardValley');
    expect(districts).not.toContain('balloonLagoon');
  });

  it('is available in Builder Workshop, Dragon Cliffs, and Golem Quarry', () => {
    const districts = t.availablePerDistrict.map((e) => e.district);
    expect(districts).toContain('buildersWorkshop');
    expect(districts).toContain('dragonCliffs');
    expect(districts).toContain('golemQuarry');
  });
});
