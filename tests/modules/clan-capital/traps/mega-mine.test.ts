import { clanCapital } from '@/modules/clan-capital';

describe('megaMine() [Clan Capital]', () => {
  const t = clanCapital().traps().megaMine().first()!;

  it('has correct id', () => {
    expect(t.id).toBe('mega-mine');
  });

  it('has correct name', () => {
    expect(t.name).toBe('Mega Mine');
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
    expect(t.damageType).toBe('splash');
  });

  it('has correct triggerRadius', () => {
    expect(t.triggerRadius).toBe(2);
  });

  it('has correct damageRadius', () => {
    expect(t.damageRadius).toBe(4);
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const lv1 = t.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.damage).toBe(400);
    expect(lv1.buildCost).toBe(2000);
    expect(lv1.buildCostResource).toBe('Capital Gold');
    expect(lv1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lv1.xpGained).toBe(0);
    expect(lv1.capitalHallRequired).toBe(2);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('level 5 has correct stats', () => {
    const lv5 = t.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.damage).toBe(600);
    expect(lv5.buildCost).toBe(25000);
    expect(lv5.capitalHallRequired).toBe(9);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/traps\/mega-mine\/normal\/level-\d+\.png$/,
      );
      expect(lvl.images.air).toMatch(
        /^images\/clan-capital\/traps\/mega-mine\/air\/level-\d+\.png$/,
      );
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(t.availablePerCapitalHall).toHaveLength(10);
  });

  it('CH1 has 0 mega mines, CH2 has 4, CH10 has 12', () => {
    const apt = t.availablePerCapitalHall!;
    expect(apt.find((e) => e.capitalHallLevel === 1)?.count).toBe(0);
    expect(apt.find((e) => e.capitalHallLevel === 2)?.count).toBe(4);
    expect(apt.find((e) => e.capitalHallLevel === 10)?.count).toBe(12);
  });

  it('has 6 availablePerDistrict entries', () => {
    expect(t.availablePerDistrict).toHaveLength(6);
  });

  it('is not available in Dragon Cliffs or Golem Quarry', () => {
    const districts = t.availablePerDistrict.map((e) => e.district);
    expect(districts).not.toContain('dragonCliffs');
    expect(districts).not.toContain('golemQuarry');
  });
});
