import { builder } from '@/modules/builder';

describe('B.O.B Control [Builder Base]', () => {
  const bobControl = builder().resourceBuildings().bobControl().first()!;

  it('has correct identity', () => {
    expect(bobControl.id).toBe('bob-control');
    expect(bobControl.name).toBe('B.O.B Control');
    expect(bobControl.base).toBe('builder');
    expect(bobControl.category).toBe('resource');
  });

  it('has 5 levels', () => {
    expect(bobControl.levels).toHaveLength(5);
  });

  it('has correct first level stats', () => {
    const lv1 = bobControl.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(250);
    expect(lv1.buildCost).toBe(100000);
    expect(lv1.buildCostResource).toBe('Builder Gold');
    expect(lv1.xpGained).toBe(0);
    expect(lv1.builderHallRequired).toBe(9);
  });

  it('has correct last level stats', () => {
    const lv5 = bobControl.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(250);
    expect(lv5.buildCost).toBe(0);
    expect(lv5.builderHallRequired).toBe(9);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of bobControl.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/resource-buildings\/bob-control\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is not available at BH1-8', () => {
    for (let bh = 1; bh <= 8; bh++) {
      expect(bobControl.availablePerBuilderHall.find((e) => e.builderHallLevel === bh)?.count).toBe(
        0,
      );
    }
  });

  it('is available at BH9 with count 1', () => {
    expect(bobControl.availablePerBuilderHall).toContainEqual({ builderHallLevel: 9, count: 1 });
  });
});
