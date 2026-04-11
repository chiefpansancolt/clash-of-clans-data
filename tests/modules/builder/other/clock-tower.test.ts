import { builder } from '@/modules/builder';
import { BuilderClockTowerBuilding } from '@/types';

describe('Clock Tower [Builder Base]', () => {
  const tower = builder().otherBuildings().clockTower().first()! as BuilderClockTowerBuilding;

  it('has correct identity', () => {
    expect(tower.id).toBe('clock-tower');
    expect(tower.name).toBe('Clock Tower');
    expect(tower.base).toBe('builder');
    expect(tower.category).toBe('other');
  });

  it('has 10 levels', () => {
    expect(tower.levels).toHaveLength(10);
  });

  it('has correct level 1 stats', () => {
    const lv1 = tower.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(650);
    expect(lv1.boostDurationMinutes).toBe(14);
    expect(lv1.timeGainedMinutes).toBe(126);
    expect(lv1.buildCost).toBe(150000);
    expect(lv1.buildCostResource).toBe('Builder Gold');
    expect(lv1.xpGained).toBe(84);
    expect(lv1.builderHallRequired).toBe(4);
  });

  it('has correct level 10 stats', () => {
    const lv10 = tower.levels[9];
    expect(lv10.level).toBe(10);
    expect(lv10.hitpoints).toBe(2750);
    expect(lv10.boostDurationMinutes).toBe(32);
    expect(lv10.timeGainedMinutes).toBe(288);
    expect(lv10.buildCost).toBe(3700000);
    expect(lv10.xpGained).toBe(657);
    expect(lv10.builderHallRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of tower.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/other\/clock-tower\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is not available at BH1-3', () => {
    for (let bh = 1; bh <= 3; bh++) {
      expect(tower.availablePerBuilderHall.find((e) => e.builderHallLevel === bh)?.count).toBe(0);
    }
  });

  it('is available at BH4-10 with count 1', () => {
    for (let bh = 4; bh <= 10; bh++) {
      expect(tower.availablePerBuilderHall).toContainEqual({ builderHallLevel: bh, count: 1 });
    }
  });
});
