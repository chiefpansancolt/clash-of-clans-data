import { builder } from '@/modules/builder';

describe('Army Camp [Builder Base]', () => {
  const armyCamp = builder().armyBuildings().armyCamp().first()!;

  it('has correct identity', () => {
    expect(armyCamp.id).toBe('army-camp');
    expect(armyCamp.name).toBe('Army Camp');
    expect(armyCamp.base).toBe('builder');
    expect(armyCamp.category).toBe('army');
  });

  it('has 6 levels', () => {
    expect(armyCamp.levels).toHaveLength(6);
  });

  it('has correct first level stats', () => {
    const lv1 = armyCamp.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(300);
    expect(lv1.buildCost).toBe(0);
    expect(lv1.builderHallRequired).toBe(1);
  });

  it('has correct last level stats', () => {
    const lv6 = armyCamp.levels[5];
    expect(lv6.level).toBe(6);
    expect(lv6.hitpoints).toBe(300);
    expect(lv6.buildCost).toBe(3000000);
    expect(lv6.buildCostResource).toBe('Builder Elixir');
    expect(lv6.xpGained).toBe(720);
    expect(lv6.builderHallRequired).toBe(7);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of armyCamp.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/army-buildings\/army-camp\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('availablePerBuilderHall counts are correct', () => {
    expect(armyCamp.availablePerBuilderHall.find((e) => e.builderHallLevel === 1)?.count).toBe(1);
    expect(armyCamp.availablePerBuilderHall.find((e) => e.builderHallLevel === 4)?.count).toBe(4);
    expect(armyCamp.availablePerBuilderHall.find((e) => e.builderHallLevel === 7)?.count).toBe(6);
  });
});
