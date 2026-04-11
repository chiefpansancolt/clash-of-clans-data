import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().hiddenTesla()', () =>
  builder().defenses().hiddenTesla(),
);

describe('hiddenTesla()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().hiddenTesla().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('hidden-tesla');
    expect(result.name).toBe('Hidden Tesla');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().hiddenTesla().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().hiddenTesla().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().hiddenTesla().first()!.levels[0].hitpoints).toBe(300);
  });

  it('level 1 has correct build cost', () => {
    expect(builder().defenses().hiddenTesla().first()!.levels[0].buildCost).toBe(50000);
  });

  it('level 1 normal dps is 60', () => {
    expect(builder().defenses().hiddenTesla().first()!.levels[0].stats.normal.dps).toBe(60);
  });

  it('level 10 normal dps is 141', () => {
    expect(builder().defenses().hiddenTesla().first()!.levels[9].stats.normal.dps).toBe(141);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().hiddenTesla().first()!.levels[9].hitpoints).toBe(1150);
  });

  it('level 1 requires Builder Hall 3', () => {
    expect(builder().defenses().hiddenTesla().first()!.levels[0].builderHallRequired).toBe(3);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().hiddenTesla().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has normal mode with range 7', () => {
    expect(builder().defenses().hiddenTesla().first()!.modes.normal.range).toBe(7);
  });

  it('has trigger range 6', () => {
    expect(builder().defenses().hiddenTesla().first()!.modes.normal.triggerRange).toBe(6);
  });

  it('has attackSpeed 0.6', () => {
    expect(builder().defenses().hiddenTesla().first()!.modes.normal.attackSpeed).toBe(0.6);
  });

  it('has single damage type', () => {
    expect(builder().defenses().hiddenTesla().first()!.modes.normal.damageType).toBe('single');
  });

  it('targets both ground and air', () => {
    expect(builder().defenses().hiddenTesla().first()!.targetType).toBe('both');
  });

  it('has size 2x2', () => {
    expect(builder().defenses().hiddenTesla().first()!.size).toBe('2x2');
  });

  it('has availablePerBuilderHall starting from BH3', () => {
    const avail = builder().defenses().hiddenTesla().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(8);
    expect(avail[0].builderHallLevel).toBe(3);
  });

  it('BH6 has 2 hidden teslas available', () => {
    const bh6 = builder()
      .defenses()
      .hiddenTesla()
      .first()!
      .availablePerBuilderHall.find((a) => a.builderHallLevel === 6);
    expect(bh6?.count).toBe(2);
  });

  it('BH7 has 3 hidden teslas available', () => {
    const bh7 = builder()
      .defenses()
      .hiddenTesla()
      .first()!
      .availablePerBuilderHall.find((a) => a.builderHallLevel === 7);
    expect(bh7?.count).toBe(3);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .hiddenTesla()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/hidden-tesla\/normal\/level-\d+\.png$/,
        );
      });
  });
});
