import { builder } from '@/modules/builder';
import { BuilderHealingHutBuilding } from '@/types';

describe('Healing Hut [Builder Base]', () => {
  const hut = builder().armyBuildings().healingHut().first()! as BuilderHealingHutBuilding;

  it('has correct identity', () => {
    expect(hut.id).toBe('healing-hut');
    expect(hut.name).toBe('Healing Hut');
    expect(hut.base).toBe('builder');
    expect(hut.category).toBe('army');
  });

  it('has 6 levels', () => {
    expect(hut.levels).toHaveLength(6);
  });

  it('has correct level 1 stats', () => {
    const lv1 = hut.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(600);
    expect(lv1.healthRecovery).toBe(4);
    expect(lv1.buildCost).toBe(1500000);
    expect(lv1.buildCostResource).toBe('Builder Elixir');
    expect(lv1.xpGained).toBe(328);
    expect(lv1.builderHallRequired).toBe(6);
  });

  it('has correct level 6 stats', () => {
    const lv6 = hut.levels[5];
    expect(lv6.level).toBe(6);
    expect(lv6.hitpoints).toBe(1250);
    expect(lv6.healthRecovery).toBe(24);
    expect(lv6.buildCost).toBe(5000000);
    expect(lv6.xpGained).toBe(720);
    expect(lv6.builderHallRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of hut.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/army-buildings\/healing-hut\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is not available at BH1-5', () => {
    for (let bh = 1; bh <= 5; bh++) {
      expect(hut.availablePerBuilderHall.find((e) => e.builderHallLevel === bh)?.count).toBe(0);
    }
  });

  it('is available at BH6-10 with count 1', () => {
    for (let bh = 6; bh <= 10; bh++) {
      expect(hut.availablePerBuilderHall).toContainEqual({ builderHallLevel: bh, count: 1 });
    }
  });
});
