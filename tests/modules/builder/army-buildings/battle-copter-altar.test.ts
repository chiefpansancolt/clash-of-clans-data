import { builder } from '@/modules/builder';

describe('Battle Copter Altar [Builder Base]', () => {
  const altar = builder().armyBuildings().battleCopterAltar().first()!;

  it('has correct identity', () => {
    expect(altar.id).toBe('battle-copter-altar');
    expect(altar.name).toBe('Battle Copter Altar');
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
    expect(lv1.buildCost).toBe(2500000);
    expect(lv1.buildCostResource).toBe('Builder Elixir');
    expect(lv1.xpGained).toBe(0);
    expect(lv1.builderHallRequired).toBe(8);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of altar.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/army-buildings\/battle-copter-altar\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is not available at BH1-7', () => {
    for (let bh = 1; bh <= 7; bh++) {
      expect(altar.availablePerBuilderHall.find((e) => e.builderHallLevel === bh)?.count).toBe(0);
    }
  });

  it('is available at BH8-10 with count 1', () => {
    for (let bh = 8; bh <= 10; bh++) {
      expect(altar.availablePerBuilderHall).toContainEqual({ builderHallLevel: bh, count: 1 });
    }
  });
});
