import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().multiMortar()', () =>
  builder().defenses().multiMortar(),
);

describe('multiMortar()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().multiMortar().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('multi-mortar');
    expect(result.name).toBe('Multi Mortar');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().multiMortar().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().multiMortar().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().multiMortar().first()!.levels[0].hitpoints).toBe(500);
  });

  it('level 1 has correct build cost', () => {
    expect(builder().defenses().multiMortar().first()!.levels[0].buildCost).toBe(600000);
  });

  it('level 1 normal dps is 22', () => {
    expect(builder().defenses().multiMortar().first()!.levels[0].stats.normal.dps).toBe(22);
  });

  it('level 1 has 3 shots per burst', () => {
    expect(builder().defenses().multiMortar().first()!.levels[0].stats.normal.shotsPerBurst).toBe(
      3,
    );
  });

  it('level 1 has 6s between bursts', () => {
    expect(
      builder().defenses().multiMortar().first()!.levels[0].stats.normal.timeBetweenBursts,
    ).toBe(6);
  });

  it('level 10 normal dps is 62', () => {
    expect(builder().defenses().multiMortar().first()!.levels[9].stats.normal.dps).toBe(62);
  });

  it('level 10 has 5 shots per burst', () => {
    expect(builder().defenses().multiMortar().first()!.levels[9].stats.normal.shotsPerBurst).toBe(
      5,
    );
  });

  it('level 10 has 5s between bursts', () => {
    expect(
      builder().defenses().multiMortar().first()!.levels[9].stats.normal.timeBetweenBursts,
    ).toBe(5);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().multiMortar().first()!.levels[9].hitpoints).toBe(1850);
  });

  it('level 1 requires Builder Hall 5', () => {
    expect(builder().defenses().multiMortar().first()!.levels[0].builderHallRequired).toBe(5);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().multiMortar().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has normal mode with range 11', () => {
    expect(builder().defenses().multiMortar().first()!.modes.normal.range).toBe(11);
  });

  it('has min range of 4', () => {
    expect(builder().defenses().multiMortar().first()!.modes.normal.minRange).toBe(4);
  });

  it('has splash radius of 3', () => {
    expect(builder().defenses().multiMortar().first()!.modes.normal.splashRadius).toBe(3);
  });

  it('has splash damage type', () => {
    expect(builder().defenses().multiMortar().first()!.modes.normal.damageType).toBe('splash');
  });

  it('targets ground only', () => {
    expect(builder().defenses().multiMortar().first()!.targetType).toBe('ground');
  });

  it('has size 3x3', () => {
    expect(builder().defenses().multiMortar().first()!.size).toBe('3x3');
  });

  it('has availablePerBuilderHall starting from BH5', () => {
    const avail = builder().defenses().multiMortar().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(6);
    expect(avail[0].builderHallLevel).toBe(5);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .multiMortar()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/multi-mortar\/normal\/level-\d+\.png$/,
        );
      });
  });
});
