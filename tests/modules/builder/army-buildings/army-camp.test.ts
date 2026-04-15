import { builder } from '@/modules/builder';

describe('Army Camp [Builder Base]', () => {
  const armyCamp = builder().armyBuildings().armyCamp().first()!;

  it('has correct identity', () => {
    expect(armyCamp.id).toBe('army-camp');
    expect(armyCamp.name).toBe('Army Camp');
    expect(armyCamp.base).toBe('builder');
    expect(armyCamp.category).toBe('army');
  });

  it('has 1 level (building never upgrades)', () => {
    expect(armyCamp.levels).toHaveLength(1);
  });

  it('has correct level 1 stats', () => {
    const lv1 = armyCamp.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(300);
    expect(lv1.images.normal).toMatch(
      /^images\/builder\/army-buildings\/army-camp\/normal\/level-1\.png$/,
    );
  });

  it('has 6 instances', () => {
    expect(armyCamp.instances).toHaveLength(6);
  });

  it('has correct first instance (free, BH1)', () => {
    const inst1 = armyCamp.instances[0];
    expect(inst1.instance).toBe(1);
    expect(inst1.buildCost).toBe(0);
    expect(inst1.xpGained).toBe(0);
    expect(inst1.builderHallRequired).toBe(1);
  });

  it('has correct last instance (6th camp, BH7)', () => {
    const inst6 = armyCamp.instances[5];
    expect(inst6.instance).toBe(6);
    expect(inst6.buildCost).toBe(3000000);
    expect(inst6.buildCostResource).toBe('Builder Elixir');
    expect(inst6.xpGained).toBe(720);
    expect(inst6.builderHallRequired).toBe(7);
  });

  it('availablePerBuilderHall counts are correct', () => {
    expect(armyCamp.availablePerBuilderHall.find((e) => e.builderHallLevel === 1)?.count).toBe(1);
    expect(armyCamp.availablePerBuilderHall.find((e) => e.builderHallLevel === 4)?.count).toBe(4);
    expect(armyCamp.availablePerBuilderHall.find((e) => e.builderHallLevel === 7)?.count).toBe(6);
  });

  describe('byBuilderHall()', () => {
    it('BH1 returns 1 instance', () => {
      const camp = builder().armyBuildings().armyCamp().byBuilderHall(1).first()!;
      expect(camp.instances).toHaveLength(1);
      expect(camp.instances[0].instance).toBe(1);
    });

    it('BH4 returns 4 instances', () => {
      const camp = builder().armyBuildings().armyCamp().byBuilderHall(4).first()!;
      expect(camp.instances).toHaveLength(4);
    });

    it('BH7 returns 6 instances (all camps)', () => {
      const camp = builder().armyBuildings().armyCamp().byBuilderHall(7).first()!;
      expect(camp.instances).toHaveLength(6);
    });

    it('BH10 returns 6 instances (no change past BH7)', () => {
      const camp = builder().armyBuildings().armyCamp().byBuilderHall(10).first()!;
      expect(camp.instances).toHaveLength(6);
    });
  });
});
