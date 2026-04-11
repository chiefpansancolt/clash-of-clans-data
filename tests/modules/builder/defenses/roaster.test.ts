import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().roaster()', () => builder().defenses().roaster());

describe('roaster()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().roaster().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('roaster');
    expect(result.name).toBe('Roaster');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().roaster().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().roaster().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().roaster().first()!.levels[0].hitpoints).toBe(800);
  });

  it('level 1 has correct dps', () => {
    expect(builder().defenses().roaster().first()!.levels[0].stats.normal.dps).toBe(59);
  });

  it('level 1 has correct damage per shot', () => {
    expect(builder().defenses().roaster().first()!.levels[0].stats.normal.damagePerShot).toBe(15);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().roaster().first()!.levels[9].hitpoints).toBe(2600);
  });

  it('level 10 has correct dps', () => {
    expect(builder().defenses().roaster().first()!.levels[9].stats.normal.dps).toBe(143);
  });

  it('level 10 has correct damage per shot', () => {
    expect(builder().defenses().roaster().first()!.levels[9].stats.normal.damagePerShot).toBe(36);
  });

  it('level 1 requires Builder Hall 6', () => {
    expect(builder().defenses().roaster().first()!.levels[0].builderHallRequired).toBe(6);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().roaster().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has splash damage type', () => {
    expect(builder().defenses().roaster().first()!.modes.normal.damageType).toBe('splash');
  });

  it('targets both air and ground', () => {
    expect(builder().defenses().roaster().first()!.targetType).toBe('both');
  });

  it('has size 3x3', () => {
    expect(builder().defenses().roaster().first()!.size).toBe('3x3');
  });

  it('has range 7', () => {
    expect(builder().defenses().roaster().first()!.modes.normal.range).toBe(7);
  });

  it('fires 15 shots per burst', () => {
    expect(builder().defenses().roaster().first()!.modes.normal.shotsPerBurst).toBe(15);
  });

  it('has availablePerBuilderHall starting from BH6', () => {
    const avail = builder().defenses().roaster().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(5);
    expect(avail[0].builderHallLevel).toBe(6);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .roaster()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/roaster\/normal\/level-\d+\.png$/,
        );
      });
  });
});
