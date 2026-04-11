import { builder } from '@/modules/builder';
import { BuilderBarracksBuilding } from '@/types';

describe('Builder Barracks [Builder Base]', () => {
  const barracks = builder().armyBuildings().builderBarracks().first()! as BuilderBarracksBuilding;

  it('has correct identity', () => {
    expect(barracks.id).toBe('builder-barracks');
    expect(barracks.name).toBe('Builder Barracks');
    expect(barracks.base).toBe('builder');
    expect(barracks.category).toBe('army');
  });

  it('has 12 levels', () => {
    expect(barracks.levels).toHaveLength(12);
  });

  it('has correct first level stats', () => {
    const lv1 = barracks.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.unlockedUnit).toBe('Raged Barbarian');
    expect(lv1.hitpoints).toBe(300);
    expect(lv1.buildCost).toBe(0);
    expect(lv1.builderHallRequired).toBe(1);
  });

  it('has correct last level stats', () => {
    const lv12 = barracks.levels[11];
    expect(lv12.level).toBe(12);
    expect(lv12.unlockedUnit).toBe('Electrofire Wizard');
    expect(lv12.hitpoints).toBe(1450);
    expect(lv12.buildCost).toBe(3000000);
    expect(lv12.buildCostResource).toBe('Builder Elixir');
    expect(lv12.xpGained).toBe(657);
    expect(lv12.builderHallRequired).toBe(10);
  });

  it('all levels have valid image paths', () => {
    for (const lvl of barracks.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/builder\/army-buildings\/builder-barracks\/normal\/level-\d+\.png$/,
      );
    }
  });

  it('is available at all BH levels', () => {
    for (let bh = 1; bh <= 10; bh++) {
      expect(barracks.availablePerBuilderHall.find((e) => e.builderHallLevel === bh)?.count).toBe(
        1,
      );
    }
  });
});
