import { builder } from '@/modules/builder';
import { testQueryBaseContract } from '../../../helpers';

testQueryBaseContract('builder().defenses().lavaLauncher()', () =>
  builder().defenses().lavaLauncher(),
);

describe('lavaLauncher()', () => {
  it('returns a BuilderDefense object', () => {
    const result = builder().defenses().lavaLauncher().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('lava-launcher');
    expect(result.name).toBe('Lava Launcher');
  });

  it('has correct base and category', () => {
    const result = builder().defenses().lavaLauncher().first()!;
    expect(result.base).toBe('builder');
    expect(result.category).toBe('defense');
  });

  it('has 10 levels', () => {
    expect(builder().defenses().lavaLauncher().first()!.levels).toHaveLength(10);
  });

  it('level 1 has correct hitpoints', () => {
    expect(builder().defenses().lavaLauncher().first()!.levels[0].hitpoints).toBe(500);
  });

  it('level 1 has correct dps', () => {
    expect(builder().defenses().lavaLauncher().first()!.levels[0].stats.normal.dps).toBe(7.1);
  });

  it('level 1 has correct damage per shot', () => {
    expect(builder().defenses().lavaLauncher().first()!.levels[0].stats.normal.damagePerShot).toBe(
      50,
    );
  });

  it('level 1 has correct burn dps', () => {
    expect(builder().defenses().lavaLauncher().first()!.levels[0].stats.normal.burnDps).toBe(15);
  });

  it('level 1 has correct total burn damage', () => {
    expect(
      builder().defenses().lavaLauncher().first()!.levels[0].stats.normal.totalBurnDamage,
    ).toBe(300);
  });

  it('level 10 has correct hitpoints', () => {
    expect(builder().defenses().lavaLauncher().first()!.levels[9].hitpoints).toBe(1850);
  });

  it('level 10 has correct dps', () => {
    expect(builder().defenses().lavaLauncher().first()!.levels[9].stats.normal.dps).toBe(16.8);
  });

  it('level 10 has correct burn dps', () => {
    expect(builder().defenses().lavaLauncher().first()!.levels[9].stats.normal.burnDps).toBe(37.5);
  });

  it('level 1 requires Builder Hall 9', () => {
    expect(builder().defenses().lavaLauncher().first()!.levels[0].builderHallRequired).toBe(9);
  });

  it('level 10 requires Builder Hall 10', () => {
    expect(builder().defenses().lavaLauncher().first()!.levels[9].builderHallRequired).toBe(10);
  });

  it('has splash damage type', () => {
    expect(builder().defenses().lavaLauncher().first()!.modes.normal.damageType).toBe('splash');
  });

  it('targets ground only', () => {
    expect(builder().defenses().lavaLauncher().first()!.targetType).toBe('ground');
  });

  it('has size 3x3', () => {
    expect(builder().defenses().lavaLauncher().first()!.size).toBe('3x3');
  });

  it('has max range 13 and min range 6', () => {
    expect(builder().defenses().lavaLauncher().first()!.modes.normal.range).toBe(13);
    expect(builder().defenses().lavaLauncher().first()!.modes.normal.minRange).toBe(6);
  });

  it('has lava lifetime of 20s', () => {
    expect(builder().defenses().lavaLauncher().first()!.modes.normal.lavaLifetime).toBe(20);
  });

  it('has lava radius of 2.5 tiles', () => {
    expect(builder().defenses().lavaLauncher().first()!.modes.normal.lavaRadius).toBe(2.5);
  });

  it('has availablePerBuilderHall starting from BH9', () => {
    const avail = builder().defenses().lavaLauncher().first()!.availablePerBuilderHall;
    expect(avail.length).toBe(2);
    expect(avail[0].builderHallLevel).toBe(9);
  });

  it('all levels have a valid image path', () => {
    builder()
      .defenses()
      .lavaLauncher()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toMatch(
          /^images\/builder\/defenses\/lava-launcher\/normal\/level-\d+\.png$/,
        );
      });
  });
});
