import { builder } from '@/modules/builder';

describe('Gold Storage [Builder Base]', () => {
  const goldStorage = builder().resourceBuildings().goldStorage().first()!;

  it('has correct identity', () => {
    expect(goldStorage.id).toBe('gold-storage');
    expect(goldStorage.name).toBe('Gold Storage');
    expect(goldStorage.base).toBe('builder');
    expect(goldStorage.category).toBe('resource');
  });

  it('has 10 levels', () => {
    expect(goldStorage.levels).toHaveLength(10);
  });

  it('has correct first level stats', () => {
    const lv1 = goldStorage.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(650);
    expect(lv1.capacity).toBe(70000);
    expect(lv1.buildCost).toBe(20000);
    expect(lv1.buildCostResource).toBe('Builder Elixir');
    expect(lv1.xpGained).toBe(42);
    expect(lv1.builderHallRequired).toBe(3);
  });

  it('has correct last level stats', () => {
    const lv10 = goldStorage.levels[9];
    expect(lv10.level).toBe(10);
    expect(lv10.hitpoints).toBe(2750);
    expect(lv10.capacity).toBe(2500000);
    expect(lv10.buildCost).toBe(3200000);
    expect(lv10.xpGained).toBe(657);
    expect(lv10.builderHallRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of goldStorage.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/resource-buildings\/gold-storage\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is not available at BH1 or BH2', () => {
    expect(goldStorage.availablePerBuilderHall.find((e) => e.builderHallLevel === 1)?.count).toBe(
      0,
    );
    expect(goldStorage.availablePerBuilderHall.find((e) => e.builderHallLevel === 2)?.count).toBe(
      0,
    );
  });

  it('is available at BH10 with count 2', () => {
    expect(goldStorage.availablePerBuilderHall).toContainEqual({ builderHallLevel: 10, count: 2 });
  });
});
