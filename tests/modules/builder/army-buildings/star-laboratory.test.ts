import { builder } from '@/modules/builder';

describe('Star Laboratory [Builder Base]', () => {
  const starLab = builder().armyBuildings().starLaboratory().first()!;

  it('has correct identity', () => {
    expect(starLab.id).toBe('star-laboratory');
    expect(starLab.name).toBe('Star Laboratory');
    expect(starLab.base).toBe('builder');
    expect(starLab.category).toBe('army');
  });

  it('has 10 levels', () => {
    expect(starLab.levels).toHaveLength(10);
  });

  it('has correct first level stats', () => {
    const lv1 = starLab.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(650);
    expect(lv1.buildCost).toBe(0);
    expect(lv1.builderHallRequired).toBe(1);
  });

  it('has correct last level stats', () => {
    const lv10 = starLab.levels[9];
    expect(lv10.level).toBe(10);
    expect(lv10.hitpoints).toBe(2750);
    expect(lv10.buildCost).toBe(5000000);
    expect(lv10.buildCostResource).toBe('Builder Elixir');
    expect(lv10.xpGained).toBe(929);
    expect(lv10.builderHallRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of starLab.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/army-buildings\/star-laboratory\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is available at all BH levels with count 1', () => {
    for (let bh = 1; bh <= 10; bh++) {
      expect(starLab.availablePerBuilderHall.find((e) => e.builderHallLevel === bh)?.count).toBe(1);
    }
  });
});
