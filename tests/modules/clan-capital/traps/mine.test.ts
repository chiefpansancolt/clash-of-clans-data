import { clanCapital } from '@/modules/clan-capital';

describe('mine() [Clan Capital]', () => {
  const t = clanCapital().traps().mine().first()!;

  it('has correct id', () => {
    expect(t.id).toBe('mine');
  });

  it('has correct name', () => {
    expect(t.name).toBe('Mine');
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
    expect(t.damageType).toBe('splash');
  });

  it('has correct triggerRadius', () => {
    expect(t.triggerRadius).toBe(1.5);
  });

  it('has correct damageRadius', () => {
    expect(t.damageRadius).toBe(3);
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const lv1 = t.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.damage).toBe(120);
    expect(lv1.buildCost).toBe(1000);
    expect(lv1.buildCostResource).toBe('Capital Gold');
    expect(lv1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lv1.xpGained).toBe(0);
    expect(lv1.capitalHallRequired).toBe(1);
    expect(lv1.districtHallRequired).toBe(1);
  });

  it('level 5 has correct stats', () => {
    const lv5 = t.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.damage).toBe(200);
    expect(lv5.buildCost).toBe(15000);
    expect(lv5.capitalHallRequired).toBe(9);
    expect(lv5.districtHallRequired).toBe(5);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/traps\/mine\/normal\/level-\d+\.png$/,
      );
      expect(lvl.images.air).toMatch(/^images\/clan-capital\/traps\/mine\/air\/level-\d+\.png$/);
    }
  });

  it('has 10 availablePerCapitalHall entries', () => {
    expect(t.availablePerCapitalHall).toHaveLength(10);
  });

  it('CH1 has 2 mines, CH4 has 8', () => {
    const apt = t.availablePerCapitalHall!;
    expect(apt.find((e) => e.capitalHallLevel === 1)?.count).toBe(2);
    expect(apt.find((e) => e.capitalHallLevel === 4)?.count).toBe(8);
  });

  it('has 8 availablePerDistrict entries', () => {
    expect(t.availablePerDistrict).toHaveLength(8);
  });

  it('is available in all districts', () => {
    const districts = t.availablePerDistrict.map((e) => e.district);
    expect(districts).toContain('barbarianCamp');
    expect(districts).toContain('wizardValley');
    expect(districts).toContain('balloonLagoon');
    expect(districts).toContain('buildersWorkshop');
    expect(districts).toContain('dragonCliffs');
    expect(districts).toContain('golemQuarry');
    expect(districts).toContain('skeletonPark');
    expect(districts).toContain('goblinMines');
  });
});
