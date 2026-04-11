import { builder } from '@/modules/builder';

describe('Elixir Collector [Builder Base]', () => {
  const elixirCollector = builder().resourceBuildings().elixirCollector().first()!;

  it('has correct identity', () => {
    expect(elixirCollector.id).toBe('elixir-collector');
    expect(elixirCollector.name).toBe('Elixir Collector');
    expect(elixirCollector.base).toBe('builder');
    expect(elixirCollector.category).toBe('resource');
  });

  it('has 10 levels', () => {
    expect(elixirCollector.levels).toHaveLength(10);
  });

  it('has correct first level stats', () => {
    const lv1 = elixirCollector.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(300);
    expect(lv1.capacity).toBe(24000);
    expect(lv1.productionRate).toBe(1000);
    expect(lv1.buildCost).toBe(1000);
    expect(lv1.buildCostResource).toBe('Builder Gold');
    expect(lv1.xpGained).toBe(24);
    expect(lv1.builderHallRequired).toBe(1);
  });

  it('has correct last level stats', () => {
    const lv10 = elixirCollector.levels[9];
    expect(lv10.level).toBe(10);
    expect(lv10.hitpoints).toBe(1150);
    expect(lv10.capacity).toBe(108000);
    expect(lv10.productionRate).toBe(4500);
    expect(lv10.buildCost).toBe(800000);
    expect(lv10.xpGained).toBe(509);
    expect(lv10.builderHallRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of elixirCollector.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/resource-buildings\/elixir-collector\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is available at BH1 with count 1', () => {
    expect(elixirCollector.availablePerBuilderHall).toContainEqual({
      builderHallLevel: 1,
      count: 1,
    });
  });

  it('is available at BH10 with count 3', () => {
    expect(elixirCollector.availablePerBuilderHall).toContainEqual({
      builderHallLevel: 10,
      count: 3,
    });
  });
});
