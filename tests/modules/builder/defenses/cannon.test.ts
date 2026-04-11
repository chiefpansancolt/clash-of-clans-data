import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().cannon()', () => builder().defenses().cannon());

describe('cannon()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().cannon().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('cannon');
    expect(result.name).toBe('Cannon');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().cannon().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().cannon().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().cannon().first()!.levels[0].hitpoints).toBe(500);
  });

  it('level 1 has correct build cost', () => {
    expect(builder().defenses().cannon().first()!.levels[0].buildCost).toBe(10000);
  });

  it('level 1 build cost resource is Builder Gold', () => {
    expect(builder().defenses().cannon().first()!.levels[0].buildCostResource).toBe('Builder Gold');
  });

  it('level 1 normal dps is 70', () => {
    expect(builder().defenses().cannon().first()!.levels[0].stats.normal.dps).toBe(70);
  });

  it('level 10 normal dps is 165', () => {
    expect(builder().defenses().cannon().first()!.levels[9].stats.normal.dps).toBe(165);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().cannon().first()!.levels[9].hitpoints).toBe(1850);
  });

  it('level 1 requires Builder Hall 1', () => {
    expect(builder().defenses().cannon().first()!.levels[0].builderHallRequired).toBe(1);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().cannon().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has normal mode with range 8.5', () => {
    expect(builder().defenses().cannon().first()!.modes.normal.range).toBe(8.5);
  });

  it('has normal mode with attackSpeed 0.8', () => {
    expect(builder().defenses().cannon().first()!.modes.normal.attackSpeed).toBe(0.8);
  });

  it('has single damage type', () => {
    expect(builder().defenses().cannon().first()!.modes.normal.damageType).toBe('single');
  });

  it('targets ground', () => {
    expect(builder().defenses().cannon().first()!.targetType).toBe('ground');
  });

  it('has availablePerBuilderHall data', () => {
    const avail = builder().defenses().cannon().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(10);
    avail.forEach((a) => {
      expect(a.builderHallLevel).toBeGreaterThan(0);
      expect(a.count).toBeGreaterThan(0);
    });
  });

  it('BH3 has 2 cannons available', () => {
    const bh3 = builder()
      .defenses()
      .cannon()
      .first()!
      .availablePerBuilderHall.find((a) => a.builderHallLevel === 3);
    expect(bh3?.count).toBe(2);
  });

  it('BH7 has 3 cannons available', () => {
    const bh7 = builder()
      .defenses()
      .cannon()
      .first()!
      .availablePerBuilderHall.find((a) => a.builderHallLevel === 7);
    expect(bh7?.count).toBe(3);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .cannon()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/cannon\/normal\/level-\d+\.png$/,
        );
      });
  });

  it('every level has xpGained', () => {
    builder()
      .defenses()
      .cannon()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });
});
