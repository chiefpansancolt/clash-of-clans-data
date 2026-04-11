import { builder } from '@/modules/builder';

describe('Wall [Builder Base]', () => {
  const wall = builder().walls().wall().first()!;

  it('has correct identity', () => {
    expect(wall.id).toBe('wall');
    expect(wall.name).toBe('Wall');
    expect(wall.base).toBe('builder');
    expect(wall.category).toBe('wall');
  });

  it('has 10 levels', () => {
    expect(wall.levels).toHaveLength(10);
  });

  it('has correct first level stats', () => {
    const lv1 = wall.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(900);
    expect(lv1.buildCost).toBe(0);
    expect(lv1.buildCostResource).toBe('Builder Gold');
    expect(lv1.wallRings).toBe(0);
    expect(lv1.builderHallRequired).toBe(1);
  });

  it('has correct last level stats', () => {
    const lv10 = wall.levels[9];
    expect(lv10.level).toBe(10);
    expect(lv10.hitpoints).toBe(3350);
    expect(lv10.buildCost).toBe(1000000);
    expect(lv10.buildCostResource).toBe('Builder Gold or Builder Elixir');
    expect(lv10.wallRings).toBe(2);
    expect(lv10.builderHallRequired).toBe(10);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of wall.levels) {
      expect(lvl.images.normal).toMatch(/^images\/builder\/walls\/wall\/normal\/level-\d+\.png$/);
    }
  });

  it('has correct availablePerBuilderHall data', () => {
    expect(wall.availablePerBuilderHall).toHaveLength(10);
    expect(wall.availablePerBuilderHall[0]).toEqual({ builderHallLevel: 1, count: 10 });
    expect(wall.availablePerBuilderHall[9]).toEqual({ builderHallLevel: 10, count: 180 });
  });
});
