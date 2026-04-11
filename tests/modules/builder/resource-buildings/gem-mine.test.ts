import { builder } from '@/modules/builder';

describe('Gem Mine [Builder Base]', () => {
  const gemMine = builder().resourceBuildings().gemMine().first()!;

  it('has correct identity', () => {
    expect(gemMine.id).toBe('gem-mine');
    expect(gemMine.name).toBe('Gem Mine');
    expect(gemMine.base).toBe('builder');
    expect(gemMine.category).toBe('resource');
  });

  it('has 10 levels', () => {
    expect(gemMine.levels).toHaveLength(10);
  });

  it('has correct first level stats', () => {
    const lv1 = gemMine.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(300);
    expect(lv1.capacity).toBe(10);
    expect(lv1.productionRate).toBe(2.16);
    expect(lv1.buildCost).toBe(120000);
    expect(lv1.buildCostResource).toBe('Builder Elixir');
    expect(lv1.xpGained).toBe(60);
    expect(lv1.builderHallRequired).toBe(3);
  });

  it('has correct last level stats', () => {
    const lv10 = gemMine.levels[9];
    expect(lv10.level).toBe(10);
    expect(lv10.hitpoints).toBe(1150);
    expect(lv10.capacity).toBe(19);
    expect(lv10.productionRate).toBe(5.04);
    expect(lv10.buildCost).toBe(5500000);
    expect(lv10.xpGained).toBe(831);
    expect(lv10.builderHallRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of gemMine.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/resource-buildings\/gem-mine\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is not available at BH1 or BH2', () => {
    expect(gemMine.availablePerBuilderHall.find((e) => e.builderHallLevel === 1)?.count).toBe(0);
    expect(gemMine.availablePerBuilderHall.find((e) => e.builderHallLevel === 2)?.count).toBe(0);
  });

  it('is available at BH10 with count 1', () => {
    expect(gemMine.availablePerBuilderHall).toContainEqual({ builderHallLevel: 10, count: 1 });
  });
});
