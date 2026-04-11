import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().ottosOutpost()', () =>
  builder().defenses().ottosOutpost(),
);

describe('ottosOutpost()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().ottosOutpost().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('ottos-outpost');
    expect(result.name).toBe("O.T.T.O's Outpost");
  });

  it('has correct base and category', () => {
    const result = builder().defenses().ottosOutpost().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels[0].hitpoints).toBe(650);
  });

  it('level 1 has zero build cost (unlocked free at BH6)', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels[0].buildCost).toBe(0);
  });

  it('level 1 spawns 2 Zappies', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels[0].spawnCount).toBe(2);
  });

  it('level 4 spawns 3 Zappies', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels[3].spawnCount).toBe(3);
  });

  it('level 7 spawns 4 Zappies', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels[6].spawnCount).toBe(4);
  });

  it('level 10 spawns 5 Zappies', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels[9].spawnCount).toBe(5);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels[9].hitpoints).toBe(2750);
  });

  it('level 10 has correct build cost', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels[9].buildCost).toBe(6000000);
  });

  it('level 1 requires Builder Hall 6', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels[0].builderHallRequired).toBe(6);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().ottosOutpost().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has none damage type', () => {
    expect(builder().defenses().ottosOutpost().first()!.modes.normal.damageType).toBe('none');
  });

  it('targets both air and ground', () => {
    expect(builder().defenses().ottosOutpost().first()!.targetType).toBe('both');
  });

  it('has size 4x4', () => {
    expect(builder().defenses().ottosOutpost().first()!.size).toBe('4x4');
  });

  it('has special ability', () => {
    expect(builder().defenses().ottosOutpost().first()!.specialAbility).toBe(
      'Awards an extra star when destroyed',
    );
  });

  it('has availablePerBuilderHall starting from BH6', () => {
    const avail = builder().defenses().ottosOutpost().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(5);
    expect(avail[0].builderHallLevel).toBe(6);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .ottosOutpost()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/ottos-outpost\/normal\/level-\d+\.png$/,
        );
      });
  });
});
