import { builder } from '@/modules/builder';

describe('Reinforcement Camp [Builder Base]', () => {
  const camp = builder().armyBuildings().reinforcementCamp().first()!;

  it('has correct identity', () => {
    expect(camp.id).toBe('reinforcement-camp');
    expect(camp.name).toBe('Reinforcement Camp');
    expect(camp.base).toBe('builder');
    expect(camp.category).toBe('army');
  });

  it('has 1 level (building never upgrades)', () => {
    expect(camp.levels).toHaveLength(1);
  });

  it('has correct level 1 stats', () => {
    const lv1 = camp.levels[0];
    expect(lv1.level).toBe(1);
    expect(lv1.hitpoints).toBe(300);
    expect(lv1.images.normal).toMatch(
      /^images\/builder\/army-buildings\/reinforcement-camp\/normal\/level-1\.png$/,
    );
  });

  it('has 2 instances', () => {
    expect(camp.instances).toHaveLength(2);
  });

  it('has correct first instance (free, BH6)', () => {
    const inst1 = camp.instances[0];
    expect(inst1.instance).toBe(1);
    expect(inst1.buildCost).toBe(0);
    expect(inst1.buildCostResource).toBe('Builder Elixir');
    expect(inst1.xpGained).toBe(0);
    expect(inst1.builderHallRequired).toBe(6);
  });

  it('has correct second instance (2nd camp, BH9)', () => {
    const inst2 = camp.instances[1];
    expect(inst2.instance).toBe(2);
    expect(inst2.buildCost).toBe(4000000);
    expect(inst2.buildCostResource).toBe('Builder Elixir');
    expect(inst2.xpGained).toBe(929);
    expect(inst2.builderHallRequired).toBe(9);
  });

  it('availablePerBuilderHall counts are correct', () => {
    expect(camp.availablePerBuilderHall.find((e) => e.builderHallLevel === 5)?.count).toBe(0);
    expect(camp.availablePerBuilderHall.find((e) => e.builderHallLevel === 6)?.count).toBe(1);
    expect(camp.availablePerBuilderHall.find((e) => e.builderHallLevel === 9)?.count).toBe(2);
    expect(camp.availablePerBuilderHall.find((e) => e.builderHallLevel === 10)?.count).toBe(2);
  });

  describe('byBuilderHall()', () => {
    it('BH5 returns 0 instances', () => {
      const filtered = builder().armyBuildings().reinforcementCamp().byBuilderHall(5).first()!;
      expect(filtered.instances).toHaveLength(0);
    });

    it('BH6 returns 1 instance', () => {
      const filtered = builder().armyBuildings().reinforcementCamp().byBuilderHall(6).first()!;
      expect(filtered.instances).toHaveLength(1);
      expect(filtered.instances[0].instance).toBe(1);
    });

    it('BH9 returns 2 instances (all camps)', () => {
      const filtered = builder().armyBuildings().reinforcementCamp().byBuilderHall(9).first()!;
      expect(filtered.instances).toHaveLength(2);
    });

    it('BH10 returns 2 instances (no change past BH9)', () => {
      const filtered = builder().armyBuildings().reinforcementCamp().byBuilderHall(10).first()!;
      expect(filtered.instances).toHaveLength(2);
    });
  });
});
