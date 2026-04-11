import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().archerTower()', () =>
  builder().defenses().archerTower(),
);

describe('archerTower()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().archerTower().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('archer-tower');
    expect(result.name).toBe('Archer Tower');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().archerTower().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().archerTower().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().archerTower().first()!.levels[0].hitpoints).toBe(500);
  });

  it('level 1 has correct build cost', () => {
    expect(builder().defenses().archerTower().first()!.levels[0].buildCost).toBe(12000);
  });

  it('level 1 long range dps is 40', () => {
    expect(builder().defenses().archerTower().first()!.levels[0].stats.normal.dps).toBe(40);
  });

  it('level 1 fast attack dps is 89', () => {
    expect(builder().defenses().archerTower().first()!.levels[0].stats.fastAttack?.dps).toBe(89);
  });

  it('level 10 long range dps is 94', () => {
    expect(builder().defenses().archerTower().first()!.levels[9].stats.normal.dps).toBe(94);
  });

  it('level 10 fast attack dps is 209', () => {
    expect(builder().defenses().archerTower().first()!.levels[9].stats.fastAttack?.dps).toBe(209);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().archerTower().first()!.levels[9].hitpoints).toBe(1850);
  });

  it('level 1 requires Builder Hall 2', () => {
    expect(builder().defenses().archerTower().first()!.levels[0].builderHallRequired).toBe(2);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().archerTower().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has long range (normal) mode with range 10', () => {
    expect(builder().defenses().archerTower().first()!.modes.normal.range).toBe(10);
  });

  it('has fast attack mode with range 7', () => {
    expect(builder().defenses().archerTower().first()!.modes.fastAttack?.range).toBe(7);
  });

  it('has fast attack mode with attackSpeed 0.45', () => {
    expect(builder().defenses().archerTower().first()!.modes.fastAttack?.attackSpeed).toBe(0.45);
  });

  it('has single damage type', () => {
    expect(builder().defenses().archerTower().first()!.modes.normal.damageType).toBe('single');
  });

  it('targets both ground and air', () => {
    expect(builder().defenses().archerTower().first()!.targetType).toBe('both');
  });

  it('has availablePerBuilderHall starting from BH2', () => {
    const avail = builder().defenses().archerTower().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(9);
    expect(avail[0].builderHallLevel).toBe(2);
  });

  it('BH4 has 2 archer towers available', () => {
    const bh4 = builder()
      .defenses()
      .archerTower()
      .first()!
      .availablePerBuilderHall.find((a) => a.builderHallLevel === 4);
    expect(bh4?.count).toBe(2);
  });

  it('BH6 has 3 archer towers available', () => {
    const bh6 = builder()
      .defenses()
      .archerTower()
      .first()!
      .availablePerBuilderHall.find((a) => a.builderHallLevel === 6);
    expect(bh6?.count).toBe(3);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .archerTower()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/archer-tower\/normal\/level-\d+\.png$/,
        );
      });
  });

  it('all levels have fastAttack stats', () => {
    builder()
      .defenses()
      .archerTower()
      .first()!
      .levels.forEach((l) => {
        expect(l.stats.fastAttack).toBeDefined();
        expect(typeof l.stats.fastAttack!.dps).toBe('number');
      });
  });
});
