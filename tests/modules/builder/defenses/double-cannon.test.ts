import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().doubleCannon()', () =>
  builder().defenses().doubleCannon(),
);

describe('doubleCannon()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().doubleCannon().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('double-cannon');
    expect(result.name).toBe('Double Cannon');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().doubleCannon().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().doubleCannon().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().doubleCannon().first()!.levels[0].hitpoints).toBe(600);
  });

  it('level 1 has correct build cost', () => {
    expect(builder().defenses().doubleCannon().first()!.levels[0].buildCost).toBe(20000);
  });

  it('level 1 build cost resource is Builder Gold', () => {
    expect(builder().defenses().doubleCannon().first()!.levels[0].buildCostResource).toBe(
      'Builder Gold',
    );
  });

  it('level 1 normal dps is 91', () => {
    expect(builder().defenses().doubleCannon().first()!.levels[0].stats.normal.dps).toBe(91);
  });

  it('level 10 normal dps is 220', () => {
    expect(builder().defenses().doubleCannon().first()!.levels[9].stats.normal.dps).toBe(220);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().doubleCannon().first()!.levels[9].hitpoints).toBe(2200);
  });

  it('level 1 requires Builder Hall 2', () => {
    expect(builder().defenses().doubleCannon().first()!.levels[0].builderHallRequired).toBe(2);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().doubleCannon().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has normal mode with range 7', () => {
    expect(builder().defenses().doubleCannon().first()!.modes.normal.range).toBe(7);
  });

  it('has burst fire — 4 shots per burst', () => {
    expect(builder().defenses().doubleCannon().first()!.modes.normal.shotsPerBurst).toBe(4);
  });

  it('has timeBetweenBursts of 1.333s', () => {
    expect(builder().defenses().doubleCannon().first()!.modes.normal.timeBetweenBursts).toBe(1.333);
  });

  it('has single damage type', () => {
    expect(builder().defenses().doubleCannon().first()!.modes.normal.damageType).toBe('single');
  });

  it('targets ground', () => {
    expect(builder().defenses().doubleCannon().first()!.targetType).toBe('ground');
  });

  it('has availablePerBuilderHall data starting from BH2', () => {
    const avail = builder().defenses().doubleCannon().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(9);
    expect(avail[0].builderHallLevel).toBe(2);
  });

  it('BH5 has 2 double cannons available', () => {
    const bh5 = builder()
      .defenses()
      .doubleCannon()
      .first()!
      .availablePerBuilderHall.find((a) => a.builderHallLevel === 5);
    expect(bh5?.count).toBe(2);
  });

  it('BH8 has 3 double cannons available', () => {
    const bh8 = builder()
      .defenses()
      .doubleCannon()
      .first()!
      .availablePerBuilderHall.find((a) => a.builderHallLevel === 8);
    expect(bh8?.count).toBe(3);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .doubleCannon()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/double-cannon\/normal\/level-\d+\.png$/,
        );
      });
  });

  it('every level has xpGained', () => {
    builder()
      .defenses()
      .doubleCannon()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });
});
