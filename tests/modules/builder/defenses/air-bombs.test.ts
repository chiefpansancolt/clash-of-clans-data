import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().airBombs()', () => builder().defenses().airBombs());

describe('airBombs()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().airBombs().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('air-bombs');
    expect(result.name).toBe('Air Bombs');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().airBombs().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().airBombs().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().airBombs().first()!.levels[0].hitpoints).toBe(1000);
  });

  it('level 1 has correct build cost', () => {
    expect(builder().defenses().airBombs().first()!.levels[0].buildCost).toBe(300000);
  });

  it('level 1 normal dps is 90', () => {
    expect(builder().defenses().airBombs().first()!.levels[0].stats.normal.dps).toBe(90);
  });

  it('level 10 normal dps is 212', () => {
    expect(builder().defenses().airBombs().first()!.levels[9].stats.normal.dps).toBe(212);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().airBombs().first()!.levels[9].hitpoints).toBe(2900);
  });

  it('level 1 requires Builder Hall 4', () => {
    expect(builder().defenses().airBombs().first()!.levels[0].builderHallRequired).toBe(4);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().airBombs().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has normal mode with range 7.5', () => {
    expect(builder().defenses().airBombs().first()!.modes.normal.range).toBe(7.5);
  });

  it('has splash radius of 1.5', () => {
    expect(builder().defenses().airBombs().first()!.modes.normal.splashRadius).toBe(1.5);
  });

  it('has splash damage type', () => {
    expect(builder().defenses().airBombs().first()!.modes.normal.damageType).toBe('splash');
  });

  it('targets air only', () => {
    expect(builder().defenses().airBombs().first()!.targetType).toBe('air');
  });

  it('has size 3x3', () => {
    expect(builder().defenses().airBombs().first()!.size).toBe('3x3');
  });

  it('has availablePerBuilderHall starting from BH4', () => {
    const avail = builder().defenses().airBombs().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(7);
    expect(avail[0].builderHallLevel).toBe(4);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .airBombs()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/air-bombs\/normal\/level-\d+\.png$/,
        );
      });
  });
});
