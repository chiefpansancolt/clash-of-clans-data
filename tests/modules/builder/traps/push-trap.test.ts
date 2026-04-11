import { builder } from '@/modules/builder';

describe('Push Trap [Builder Base]', () => {
  const pushTrap = builder().traps().pushTrap().first()!;

  it('has correct identity', () => {
    expect(pushTrap.id).toBe('push-trap');
    expect(pushTrap.name).toBe('Push Trap');
    expect(pushTrap.base).toBe('builder');
    expect(pushTrap.category).toBe('trap');
  });

  it('has 10 levels', () => {
    expect(pushTrap.levels).toHaveLength(10);
  });

  it('has correct targetType', () => {
    expect(pushTrap.targetType).toBe('ground');
  });

  it('has correct constant stats', () => {
    expect(pushTrap.triggerRadius).toBe(1);
    expect(pushTrap.aoeRadius).toBe(3.5);
    expect(pushTrap.pushDistance).toBe(6);
  });

  it('has correct first level stats', () => {
    const lv1 = pushTrap.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.springCapacity).toBe(8);
    expect(lv1.buildCost).toBe(1000);
    expect(lv1.xpGained).toBe(0);
    expect(lv1.builderHallRequired).toBe(2);
  });

  it('has correct last level stats', () => {
    const lv10 = pushTrap.levels[9];
    expect(lv10.level).toBe(10);
    expect(lv10.springCapacity).toBe(26);
    expect(lv10.buildCost).toBe(500000);
    expect(lv10.xpGained).toBe(415);
    expect(lv10.builderHallRequired).toBe(10);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of pushTrap.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/traps\/push-trap\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is not available at BH1', () => {
    const bh1 = pushTrap.availablePerBuilderHall.find((e) => e.builderHallLevel === 1);
    expect(bh1?.count).toBe(0);
  });

  it('is available at BH2 with count 1', () => {
    expect(pushTrap.availablePerBuilderHall).toContainEqual({ builderHallLevel: 2, count: 1 });
  });
});
