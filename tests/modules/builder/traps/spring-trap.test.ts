import { builder } from '@/modules/builder';

describe('Spring Trap [Builder Base]', () => {
  const springTrap = builder().traps().springTrap().first()!;

  it('has correct identity', () => {
    expect(springTrap.id).toBe('spring-trap');
    expect(springTrap.name).toBe('Spring Trap');
    expect(springTrap.base).toBe('builder');
    expect(springTrap.category).toBe('trap');
  });

  it('has 5 levels', () => {
    expect(springTrap.levels).toHaveLength(5);
  });

  it('has correct targetType', () => {
    expect(springTrap.targetType).toBe('ground');
  });

  it('has correct constant stats', () => {
    expect(springTrap.triggerRadius).toBe(0.7);
    expect(springTrap.springCapacity).toBe(4);
  });

  it('has correct first level stats', () => {
    const lv1 = springTrap.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.damage).toBe(100);
    expect(lv1.damageVsHeroes).toBe(50);
    expect(lv1.buildCost).toBe(10000);
    expect(lv1.xpGained).toBe(0);
    expect(lv1.builderHallRequired).toBe(3);
  });

  it('has correct last level stats', () => {
    const lv5 = springTrap.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.damage).toBe(400);
    expect(lv5.damageVsHeroes).toBe(200);
    expect(lv5.buildCost).toBe(500000);
    expect(lv5.xpGained).toBe(509);
    expect(lv5.builderHallRequired).toBe(10);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of springTrap.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/traps\/spring-trap\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is not available at BH1 or BH2', () => {
    expect(springTrap.availablePerBuilderHall.find((e) => e.builderHallLevel === 1)?.count).toBe(0);
    expect(springTrap.availablePerBuilderHall.find((e) => e.builderHallLevel === 2)?.count).toBe(0);
  });

  it('is available at BH3 with count 2', () => {
    expect(springTrap.availablePerBuilderHall).toContainEqual({ builderHallLevel: 3, count: 2 });
  });
});
