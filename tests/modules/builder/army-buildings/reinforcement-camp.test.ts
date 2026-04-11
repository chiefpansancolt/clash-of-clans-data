import { builder } from '@/modules/builder';

describe('Reinforcement Camp [Builder Base]', () => {
  const camp = builder().armyBuildings().reinforcementCamp().first()!;

  it('has correct identity', () => {
    expect(camp.id).toBe('reinforcement-camp');
    expect(camp.name).toBe('Reinforcement Camp');
    expect(camp.base).toBe('builder');
    expect(camp.category).toBe('army');
  });

  it('has 2 levels', () => {
    expect(camp.levels).toHaveLength(2);
  });

  it('has correct level 1 stats', () => {
    const lv1 = camp.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(300);
    expect(lv1.buildCost).toBe(0);
    expect(lv1.buildCostResource).toBe('Builder Elixir');
    expect(lv1.xpGained).toBe(0);
    expect(lv1.builderHallRequired).toBe(6);
  });

  it('has correct level 2 stats', () => {
    const lv2 = camp.levels[1];
    expect(lv2.level).toBe(2);
    expect(lv2.hitpoints).toBe(300);
    expect(lv2.buildCost).toBe(4000000);
    expect(lv2.buildCostResource).toBe('Builder Elixir');
    expect(lv2.xpGained).toBe(929);
    expect(lv2.builderHallRequired).toBe(9);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of camp.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/army-buildings\/reinforcement-camp\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is not available at BH1-5', () => {
    for (let bh = 1; bh <= 5; bh++) {
      expect(camp.availablePerBuilderHall.find((e) => e.builderHallLevel === bh)?.count).toBe(0);
    }
  });

  it('is available at BH6 with count 1', () => {
    expect(camp.availablePerBuilderHall).toContainEqual({ builderHallLevel: 6, count: 1 });
  });

  it('is available at BH9 with count 2', () => {
    expect(camp.availablePerBuilderHall).toContainEqual({ builderHallLevel: 9, count: 2 });
  });
});
