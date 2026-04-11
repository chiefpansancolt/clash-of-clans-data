import { builder } from '@/modules/builder';

describe('Mega Mine [Builder Base]', () => {
  const megaMine = builder().traps().megaMine().first()!;

  it('has correct identity', () => {
    expect(megaMine.id).toBe('mega-mine');
    expect(megaMine.name).toBe('Mega Mine');
    expect(megaMine.base).toBe('builder');
    expect(megaMine.category).toBe('trap');
  });

  it('has 10 levels', () => {
    expect(megaMine.levels).toHaveLength(10);
  });

  it('has correct targetType', () => {
    expect(megaMine.targetType).toBe('both');
  });

  it('has correct constant stats', () => {
    expect(megaMine.triggerRadius).toBe(3);
    expect(megaMine.damageRadius).toBe(4);
  });

  it('has correct first level stats', () => {
    const lv1 = megaMine.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.damage).toBe(250);
    expect(lv1.buildCost).toBe(30000);
    expect(lv1.xpGained).toBe(0);
    expect(lv1.builderHallRequired).toBe(4);
  });

  it('has correct last level stats', () => {
    const lv10 = megaMine.levels[9];
    expect(lv10.level).toBe(10);
    expect(lv10.damage).toBe(550);
    expect(lv10.buildCost).toBe(2500000);
    expect(lv10.xpGained).toBe(587);
    expect(lv10.builderHallRequired).toBe(10);
  });

  it('all levels have valid normal and air image paths', () => {
    for (const lvl of megaMine.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/traps\/mega-mine\/normal\/level-\d+\.png$/,
      );
      expect(lvl.images.air).toMatch(/^images\/builder\/traps\/mega-mine\/air\/level-\d+\.png$/);
    }
  });

  it('is not available at BH1, BH2, or BH3', () => {
    expect(megaMine.availablePerBuilderHall.find((e) => e.builderHallLevel === 1)?.count).toBe(0);
    expect(megaMine.availablePerBuilderHall.find((e) => e.builderHallLevel === 2)?.count).toBe(0);
    expect(megaMine.availablePerBuilderHall.find((e) => e.builderHallLevel === 3)?.count).toBe(0);
  });

  it('is available at BH10 with count 4', () => {
    expect(megaMine.availablePerBuilderHall).toContainEqual({ builderHallLevel: 10, count: 4 });
  });
});
