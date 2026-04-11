import { builder } from '@/modules/builder';

describe('Battle Machine Altar [Builder Base]', () => {
  const altar = builder().armyBuildings().battleMachineAltar().first()!;

  it('has correct identity', () => {
    expect(altar.id).toBe('battle-machine-altar');
    expect(altar.name).toBe('Battle Machine Altar');
    expect(altar.base).toBe('builder');
    expect(altar.category).toBe('army');
  });

  it('has 1 level', () => {
    expect(altar.levels).toHaveLength(1);
  });

  it('has correct level stats', () => {
    const lv1 = altar.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(250);
    expect(lv1.buildCost).toBe(900000);
    expect(lv1.buildCostResource).toBe('Builder Elixir');
    expect(lv1.xpGained).toBe(207);
    expect(lv1.builderHallRequired).toBe(5);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of altar.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/army-buildings\/battle-machine-altar\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is not available at BH1-4', () => {
    for (let bh = 1; bh <= 4; bh++) {
      expect(altar.availablePerBuilderHall.find((e) => e.builderHallLevel === bh)?.count).toBe(0);
    }
  });

  it('is available at BH5-10 with count 1', () => {
    expect(altar.availablePerBuilderHall).toContainEqual({ builderHallLevel: 5, count: 1 });
    expect(altar.availablePerBuilderHall).toContainEqual({ builderHallLevel: 10, count: 1 });
  });
});
