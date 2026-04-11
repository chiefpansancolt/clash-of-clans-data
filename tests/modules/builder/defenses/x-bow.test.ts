import { builder } from '@/modules/builder';

describe('X-Bow [Builder Base]', () => {
  const xBow = builder().defenses().xBow().first()!;

  it('has correct identity', () => {
    expect(xBow.id).toBe('x-bow');
    expect(xBow.name).toBe('X-Bow');
    expect(xBow.base).toBe('builder');
    expect(xBow.category).toBe('defense');
  });

  it('has 5 levels', () => {
    expect(xBow.levels).toHaveLength(5);
  });

  it('has correct targetType', () => {
    expect(xBow.targetType).toBe('both');
  });

  it('has correct mode stats', () => {
    expect(xBow.modes.normal.range).toBe(12);
    expect(xBow.modes.normal.attackSpeed).toBe(0.192);
    expect(xBow.modes.normal.damageType).toBe('single');
  });

  it('has correct first level stats', () => {
    const lv1 = xBow.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(1700);
    expect(lv1.stats.normal.dps).toBe(80);
    expect(lv1.stats.normal.damagePerShot).toBe(15.36);
    expect(lv1.buildCost).toBe(4400000);
    expect(lv1.builderHallRequired).toBe(10);
  });

  it('has correct last level stats', () => {
    const lv5 = xBow.levels[4];
    expect(lv5.level).toBe(5);
    expect(lv5.hitpoints).toBe(2600);
    expect(lv5.stats.normal.dps).toBe(116);
    expect(lv5.stats.normal.damagePerShot).toBe(22.27);
    expect(lv5.buildCost).toBe(6000000);
  });

  it('all levels have a valid image path', () => {
    for (const lvl of xBow.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/defenses\/x-bow\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is available at BH10', () => {
    expect(xBow.availablePerBuilderHall).toContainEqual({ builderHallLevel: 10, count: 1 });
  });
});
