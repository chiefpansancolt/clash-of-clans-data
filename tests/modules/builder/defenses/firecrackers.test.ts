import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().firecrackers()', () =>
  builder().defenses().firecrackers(),
);

describe('firecrackers()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().firecrackers().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('firecrackers');
    expect(result.name).toBe('Firecrackers');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().firecrackers().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().firecrackers().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().firecrackers().first()!.levels[0].hitpoints).toBe(400);
  });

  it('level 1 has correct build cost', () => {
    expect(builder().defenses().firecrackers().first()!.levels[0].buildCost).toBe(40000);
  });

  it('level 1 normal dps is 59', () => {
    expect(builder().defenses().firecrackers().first()!.levels[0].stats.normal.dps).toBe(59);
  });

  it('level 10 normal dps is 137', () => {
    expect(builder().defenses().firecrackers().first()!.levels[9].stats.normal.dps).toBe(137);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().firecrackers().first()!.levels[9].hitpoints).toBe(1500);
  });

  it('level 1 requires Builder Hall 3', () => {
    expect(builder().defenses().firecrackers().first()!.levels[0].builderHallRequired).toBe(3);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().firecrackers().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has normal mode with range 9', () => {
    expect(builder().defenses().firecrackers().first()!.modes.normal.range).toBe(9);
  });

  it('fires 3 shots per burst', () => {
    expect(builder().defenses().firecrackers().first()!.modes.normal.shotsPerBurst).toBe(3);
  });

  it('has single damage type', () => {
    expect(builder().defenses().firecrackers().first()!.modes.normal.damageType).toBe('single');
  });

  it('targets air only', () => {
    expect(builder().defenses().firecrackers().first()!.targetType).toBe('air');
  });

  it('has size 2x2', () => {
    expect(builder().defenses().firecrackers().first()!.size).toBe('2x2');
  });

  it('has availablePerBuilderHall starting from BH3', () => {
    const avail = builder().defenses().firecrackers().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(8);
    expect(avail[0].builderHallLevel).toBe(3);
  });

  it('BH9 has 5 firecrackers available', () => {
    const bh9 = builder()
      .defenses()
      .firecrackers()
      .first()!
      .availablePerBuilderHall.find((a) => a.builderHallLevel === 9);
    expect(bh9?.count).toBe(5);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .firecrackers()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/firecrackers\/normal\/level-\d+\.png$/,
        );
      });
  });
});
