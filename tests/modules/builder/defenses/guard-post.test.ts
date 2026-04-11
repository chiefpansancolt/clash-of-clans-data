import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().guardPost()', () => builder().defenses().guardPost());

describe('guardPost()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().guardPost().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('guard-post');
    expect(result.name).toBe('Guard Post');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().guardPost().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().guardPost().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().guardPost().first()!.levels[0].hitpoints).toBe(300);
  });

  it('level 1 has correct build cost', () => {
    expect(builder().defenses().guardPost().first()!.levels[0].buildCost).toBe(200000);
  });

  it('level 1 troop level is 2', () => {
    expect(builder().defenses().guardPost().first()!.levels[0].troopLevel).toBe(2);
  });

  it('level 10 troop level is 20', () => {
    expect(builder().defenses().guardPost().first()!.levels[9].troopLevel).toBe(20);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().guardPost().first()!.levels[9].hitpoints).toBe(1150);
  });

  it('level 1 requires Builder Hall 4', () => {
    expect(builder().defenses().guardPost().first()!.levels[0].builderHallRequired).toBe(4);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().guardPost().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has none damage type', () => {
    expect(builder().defenses().guardPost().first()!.modes.normal.damageType).toBe('none');
  });

  it('targets ground only', () => {
    expect(builder().defenses().guardPost().first()!.targetType).toBe('ground');
  });

  it('has size 2x2', () => {
    expect(builder().defenses().guardPost().first()!.size).toBe('2x2');
  });

  it('has 2 defending troops', () => {
    const troops = builder().defenses().guardPost().first()!.defendingTroops!;
    expect(troops).toHaveLength(2);
    expect(troops[0].name).toBe('Raged Barbarian');
    expect(troops[1].name).toBe('Sneaky Archer');
  });

  it('has availablePerBuilderHall starting from BH4', () => {
    const avail = builder().defenses().guardPost().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(7);
    expect(avail[0].builderHallLevel).toBe(4);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .guardPost()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/guard-post\/normal\/level-\d+\.png$/,
        );
      });
  });
});
