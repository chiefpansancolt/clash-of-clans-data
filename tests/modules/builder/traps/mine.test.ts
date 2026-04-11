import { builder } from '@/modules/builder';

describe('Mine [Builder Base]', () => {
  const mine = builder().traps().mine().first()!;

  it('has correct identity', () => {
    expect(mine.id).toBe('mine');
    expect(mine.name).toBe('Mine');
    expect(mine.base).toBe('builder');
    expect(mine.category).toBe('trap');
  });

  it('has 10 levels', () => {
    expect(mine.levels).toHaveLength(10);
  });

  it('has correct targetType', () => {
    expect(mine.targetType).toBe('both');
  });

  it('has correct constant stats', () => {
    expect(mine.triggerRadius).toBe(4);
    expect(mine.damageRadius).toBe(5);
  });

  it('has correct first level stats', () => {
    const lv1 = mine.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.damage).toBe(80);
    expect(lv1.buildCost).toBe(5000);
    expect(lv1.xpGained).toBe(0);
    expect(lv1.builderHallRequired).toBe(3);
  });

  it('has correct last level stats', () => {
    const lv10 = mine.levels[9];
    expect(lv10.level).toBe(10);
    expect(lv10.damage).toBe(180);
    expect(lv10.buildCost).toBe(1500000);
    expect(lv10.xpGained).toBe(464);
    expect(lv10.builderHallRequired).toBe(10);
  });

  it('all levels have valid normal and air image paths', () => {
    for (const lvl of mine.levels) {
      expect(lvl.images.normal).toMatch(/^images\/builder\/traps\/mine\/normal\/level-\d+\.png$/);
      expect(lvl.images.air).toMatch(/^images\/builder\/traps\/mine\/air\/level-\d+\.png$/);
    }
  });

  it('is not available at BH1 or BH2', () => {
    expect(mine.availablePerBuilderHall.find((e) => e.builderHallLevel === 1)?.count).toBe(0);
    expect(mine.availablePerBuilderHall.find((e) => e.builderHallLevel === 2)?.count).toBe(0);
  });

  it('is available at BH10 with count 6', () => {
    expect(mine.availablePerBuilderHall).toContainEqual({ builderHallLevel: 10, count: 6 });
  });
});
