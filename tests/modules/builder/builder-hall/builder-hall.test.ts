import { builder, BuilderBaseBuilderHall } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

describe('builderHall() [Builder Base]', () => {
  const bh = builder().builderHall().first()!;

  it('has correct identity', () => {
    expect(bh.id).toBe('builder-hall');
    expect(bh.name).toBe('Builder Hall');
    expect(bh.base).toBe('builder');
    expect(bh.category).toBe('builder-hall');
  });

  it('size is 4x4', () => {
    expect(bh.size).toBe('4x4');
  });

  it('has 10 levels', () => {
    expect(bh.levels).toHaveLength(10);
  });

  it('level 1 stats', () => {
    const l1 = bh.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(650);
    expect(l1.buildCost).toBe(0);
    expect(l1.buildCostResource).toBe('Builder Gold');
    expect(l1.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(l1.xpGained).toBe(0);
    expect(l1.maxBuildings).toBe(0);
  });

  it('level 2 stats', () => {
    const l2 = bh.levels[1];
    expect(l2.level).toBe(2);
    expect(l2.hitpoints).toBe(800);
    expect(l2.buildCost).toBe(3500);
    expect(l2.buildCostResource).toBe('Builder Gold');
    expect(l2.buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 5 });
    expect(l2.xpGained).toBe(2);
    expect(l2.maxBuildings).toBe(10);
  });

  it('level 10 stats', () => {
    const l10 = bh.levels[9];
    expect(l10.level).toBe(10);
    expect(l10.hitpoints).toBe(2750);
    expect(l10.buildCost).toBe(4800000);
    expect(l10.buildCostResource).toBe('Builder Gold');
    expect(l10.buildTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
    expect(l10.xpGained).toBe(777);
    expect(l10.maxBuildings).toBe(55);
  });

  it('all levels use Builder Gold as build resource', () => {
    bh.levels.forEach((l) => expect(l.buildCostResource).toBe('Builder Gold'));
  });

  it('each level has a normal image', () => {
    bh.levels.forEach((l) => {
      expect(l.images.normal).toBe(`images/builder/builder-hall/normal/level-${l.level}.png`);
    });
  });

  it('maxBuildings increases monotonically', () => {
    for (let i = 1; i < bh.levels.length; i++) {
      expect(bh.levels[i].maxBuildings).toBeGreaterThanOrEqual(bh.levels[i - 1].maxBuildings);
    }
  });

  it('builderHall() is a BuilderBaseBuilderHall instance', () => {
    expect(builder().builderHall()).toBeInstanceOf(BuilderBaseBuilderHall);
  });
});

testQueryBaseContract('builder().builderHall()', () => builder().builderHall());
