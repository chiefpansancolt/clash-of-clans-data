import { home } from '@/modules/home';
import { HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('mortar()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().mortar().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('mortar');
    expect(result.name).toBe('Mortar');
  });

  it('has 18 levels', () => {
    expect(home().defenses().mortar().first()!.levels).toHaveLength(18);
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().mortar().first()!.levels[0].hitpoints).toBe(400);
  });

  it('level 1 has correct build cost', () => {
    expect(home().defenses().mortar().first()!.levels[0].buildCost).toBe(5000);
  });

  it('level 1 normal dps is 4', () => {
    expect(home().defenses().mortar().first()!.levels[0].stats.normal.dps).toBe(4);
  });

  it('targets ground only', () => {
    expect(home().defenses().mortar().first()!.targetType).toBe('ground');
  });

  it('normal mode is splash damage', () => {
    expect(home().defenses().mortar().first()!.modes.normal!.damageType).toBe('splash');
  });

  it('normal mode has splash radius 1.5', () => {
    expect(home().defenses().mortar().first()!.modes.normal!.splashRadius).toBe(1.5);
  });

  it('has gearedUpBurst mode with 3 shots per burst', () => {
    expect(home().defenses().mortar().first()!.modes.gearedUpBurst?.shotsPerBurst).toBe(3);
  });

  it('gearedUpBurst mode available from level 8', () => {
    expect(home().defenses().mortar().first()!.modes.gearedUpBurst?.availableFromLevel).toBe(8);
  });

  it('levels 1-7 have no gearedUpBurst stats', () => {
    home()
      .defenses()
      .mortar()
      .first()!
      .levels.slice(0, 7)
      .forEach((l) => expect(l.stats.gearedUpBurst).toBeUndefined());
  });

  it('levels 8+ have gearedUpBurst stats', () => {
    home()
      .defenses()
      .mortar()
      .first()!
      .levels.slice(7)
      .forEach((l) => expect(l.stats.gearedUpBurst).toBeDefined());
  });

  it('level 8 gearedUpBurst dps is 24', () => {
    expect(
      home()
        .defenses()
        .mortar()
        .first()!
        .levels.find((l) => l.level === 8)?.stats.gearedUpBurst?.dps,
    ).toBe(24);
  });

  it('levels 1-7 have only normal images', () => {
    home()
      .defenses()
      .mortar()
      .first()!
      .levels.slice(0, 7)
      .forEach((l) => {
        expect(l.images.normal).toBeDefined();
        expect(l.images.gearedUpNormal).toBeUndefined();
        expect(l.images.gearedUpBurst).toBeUndefined();
      });
  });

  it('levels 8+ have all three image variants', () => {
    home()
      .defenses()
      .mortar()
      .first()!
      .levels.slice(7)
      .forEach((l) => {
        expect(l.images.normal).toBeDefined();
        expect(l.images.gearedUpNormal).toBeDefined();
        expect(l.images.gearedUpBurst).toBeDefined();
      });
  });

  it('has gearUp info requiring level 8', () => {
    expect(home().defenses().mortar().first()!.gearUp?.requiresLevel).toBe(8);
  });

  it('level 1 xpGained is 42', () => {
    expect(home().defenses().mortar().first()!.levels[0].xpGained).toBe(42);
  });

  it('TH3 has 1 mortar available', () => {
    expect(
      home()
        .defenses()
        .mortar()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 3)?.count,
    ).toBe(1);
  });

  it('TH8 has 4 mortars available', () => {
    expect(
      home()
        .defenses()
        .mortar()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 8)?.count,
    ).toBe(4);
  });
});

describe('HomeVillageDefenses with mortar', () => {
  it('homeDefenses has at least 3 buildings', () => {
    expect(home().defenses().count()).toBeGreaterThanOrEqual(3);
  });

  it('byDamageType("splash") includes mortar', () => {
    const splash = home().defenses().byDamageType('splash');
    expect(splash.count()).toBeGreaterThanOrEqual(1);
    expect(splash.findByName('Mortar')).toBeDefined();
  });

  it('byDamageType("single") excludes mortar', () => {
    expect(home().defenses().byDamageType('single').findByName('Mortar')).toBeUndefined();
  });

  it('hasGearUp includes mortar', () => {
    expect(home().defenses().hasGearUp().findByName('Mortar')).toBeDefined();
  });
});

testFilterImmutability(
  'byDamageType',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byDamageType('splash'),
);
