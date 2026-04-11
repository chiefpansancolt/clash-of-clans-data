import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().crusher()', () => builder().defenses().crusher());

describe('crusher()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().crusher().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('crusher');
    expect(result.name).toBe('Crusher');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().crusher().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().crusher().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().crusher().first()!.levels[0].hitpoints).toBe(1000);
  });

  it('level 1 has correct build cost', () => {
    expect(builder().defenses().crusher().first()!.levels[0].buildCost).toBe(120000);
  });

  it('level 1 normal dps is 125', () => {
    expect(builder().defenses().crusher().first()!.levels[0].stats.normal.dps).toBe(125);
  });

  it('level 10 normal dps is 296', () => {
    expect(builder().defenses().crusher().first()!.levels[9].stats.normal.dps).toBe(296);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().crusher().first()!.levels[9].hitpoints).toBe(2900);
  });

  it('level 1 requires Builder Hall 3', () => {
    expect(builder().defenses().crusher().first()!.levels[0].builderHallRequired).toBe(3);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().crusher().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has normal mode with range 2.3', () => {
    expect(builder().defenses().crusher().first()!.modes.normal.range).toBe(2.3);
  });

  it('has splash radius of 2.8', () => {
    expect(builder().defenses().crusher().first()!.modes.normal.splashRadius).toBe(2.8);
  });

  it('has splash damage type', () => {
    expect(builder().defenses().crusher().first()!.modes.normal.damageType).toBe('splash');
  });

  it('targets ground only', () => {
    expect(builder().defenses().crusher().first()!.targetType).toBe('ground');
  });

  it('has size 3x3', () => {
    expect(builder().defenses().crusher().first()!.size).toBe('3x3');
  });

  it('has availablePerBuilderHall starting from BH3', () => {
    const avail = builder().defenses().crusher().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(8);
    expect(avail[0].builderHallLevel).toBe(3);
  });

  it('BH6 has 2 crushers available', () => {
    const bh6 = builder()
      .defenses()
      .crusher()
      .first()!
      .availablePerBuilderHall.find((a) => a.builderHallLevel === 6);
    expect(bh6?.count).toBe(2);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .crusher()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/crusher\/normal\/level-\d+\.png$/,
        );
      });
  });
});
