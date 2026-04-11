import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().megaTesla()', () => builder().defenses().megaTesla());

describe('megaTesla()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().megaTesla().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('mega-tesla');
    expect(result.name).toBe('Mega Tesla');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().megaTesla().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().megaTesla().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().megaTesla().first()!.levels[0].hitpoints).toBe(700);
  });

  it('level 1 has correct dps', () => {
    expect(builder().defenses().megaTesla().first()!.levels[0].stats.normal.dps).toBe(95);
  });

  it('level 1 has correct damage per shot', () => {
    expect(builder().defenses().megaTesla().first()!.levels[0].stats.normal.damagePerShot).toBe(
      380,
    );
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().megaTesla().first()!.levels[9].hitpoints).toBe(2400);
  });

  it('level 10 has correct dps', () => {
    expect(builder().defenses().megaTesla().first()!.levels[9].stats.normal.dps).toBe(224);
  });

  it('level 10 has correct damage per shot', () => {
    expect(builder().defenses().megaTesla().first()!.levels[9].stats.normal.damagePerShot).toBe(
      896,
    );
  });

  it('level 1 requires Builder Hall 8', () => {
    expect(builder().defenses().megaTesla().first()!.levels[0].builderHallRequired).toBe(8);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().megaTesla().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has chain damage type', () => {
    expect(builder().defenses().megaTesla().first()!.modes.normal.damageType).toBe('chain');
  });

  it('targets both air and ground', () => {
    expect(builder().defenses().megaTesla().first()!.targetType).toBe('both');
  });

  it('has size 3x3', () => {
    expect(builder().defenses().megaTesla().first()!.size).toBe('3x3');
  });

  it('has range 7.5', () => {
    expect(builder().defenses().megaTesla().first()!.modes.normal.range).toBe(7.5);
  });

  it('has max 2 chain targets', () => {
    expect(builder().defenses().megaTesla().first()!.modes.normal.maxChainTargets).toBe(2);
  });

  it('has chain range of 3 tiles', () => {
    expect(builder().defenses().megaTesla().first()!.modes.normal.chainRange).toBe(3);
  });

  it('has availablePerBuilderHall starting from BH8', () => {
    const avail = builder().defenses().megaTesla().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(3);
    expect(avail[0].builderHallLevel).toBe(8);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .megaTesla()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/mega-tesla\/normal\/level-\d+\.png$/,
        );
      });
  });
});
