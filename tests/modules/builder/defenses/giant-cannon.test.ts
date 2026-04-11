import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().giantCannon()', () =>
  builder().defenses().giantCannon(),
);

describe('giantCannon()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().giantCannon().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('giant-cannon');
    expect(result.name).toBe('Giant Cannon');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().giantCannon().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().giantCannon().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().giantCannon().first()!.levels[0].hitpoints).toBe(700);
  });

  it('level 1 has correct dps', () => {
    expect(builder().defenses().giantCannon().first()!.levels[0].stats.normal.dps).toBe(41);
  });

  it('level 1 has correct damage per shot', () => {
    expect(builder().defenses().giantCannon().first()!.levels[0].stats.normal.damagePerShot).toBe(
      205,
    );
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().giantCannon().first()!.levels[9].hitpoints).toBe(2400);
  });

  it('level 10 has correct dps', () => {
    expect(builder().defenses().giantCannon().first()!.levels[9].stats.normal.dps).toBe(96);
  });

  it('level 10 has correct damage per shot', () => {
    expect(builder().defenses().giantCannon().first()!.levels[9].stats.normal.damagePerShot).toBe(
      480,
    );
  });

  it('level 1 requires Builder Hall 7', () => {
    expect(builder().defenses().giantCannon().first()!.levels[0].builderHallRequired).toBe(7);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().giantCannon().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has splash damage type', () => {
    expect(builder().defenses().giantCannon().first()!.modes.normal.damageType).toBe('splash');
  });

  it('targets ground only', () => {
    expect(builder().defenses().giantCannon().first()!.targetType).toBe('ground');
  });

  it('has size 3x3', () => {
    expect(builder().defenses().giantCannon().first()!.size).toBe('3x3');
  });

  it('has range 9.5', () => {
    expect(builder().defenses().giantCannon().first()!.modes.normal.range).toBe(9.5);
  });

  it('has attack speed of 5 seconds', () => {
    expect(builder().defenses().giantCannon().first()!.modes.normal.attackSpeed).toBe(5);
  });

  it('has availablePerBuilderHall starting from BH7', () => {
    const avail = builder().defenses().giantCannon().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(4);
    expect(avail[0].builderHallLevel).toBe(7);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .giantCannon()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/giant-cannon\/normal\/level-\d+\.png$/,
        );
      });
  });
});
