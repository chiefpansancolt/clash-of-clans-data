import { mortar } from '@/modules/home/defenses/mortar';
import { homeDefenses } from '@/modules/home/defenses';
import { testFilterImmutability } from '../../../helpers';
import { HomeDefenseQuery } from '@/modules/home/defenses';

// ── mortar() ──────────────────────────────────────────────────────────────────

describe('mortar()', () => {
  it('returns a HomeDefense object', () => {
    const result = mortar();
    expect(result).toBeDefined();
    expect(result.id).toBe('mortar');
    expect(result.name).toBe('Mortar');
  });

  it('has 18 levels', () => {
    expect(mortar().levels).toHaveLength(18);
  });

  it('level 1 has correct hitpoints', () => {
    expect(mortar().levels[0].hitpoints).toBe(400);
  });

  it('level 1 has correct build cost', () => {
    expect(mortar().levels[0].buildCost).toBe(5000);
  });

  it('level 1 normal dps is 4', () => {
    expect(mortar().levels[0].stats.normal.dps).toBe(4);
  });

  it('targets ground only', () => {
    expect(mortar().targetType).toBe('ground');
  });

  it('normal mode is splash damage', () => {
    expect(mortar().modes.normal.damageType).toBe('splash');
  });

  it('normal mode has splash radius 1.5', () => {
    expect(mortar().modes.normal.splashRadius).toBe(1.5);
  });

  it('has gearedUpBurst mode with 3 shots per burst', () => {
    expect(mortar().modes.gearedUpBurst?.shotsPerBurst).toBe(3);
  });

  it('gearedUpBurst mode available from level 8', () => {
    expect(mortar().modes.gearedUpBurst?.availableFromLevel).toBe(8);
  });

  it('levels 1-7 have no gearedUpBurst stats', () => {
    mortar().levels.slice(0, 7).forEach((l) => expect(l.stats.gearedUpBurst).toBeUndefined());
  });

  it('levels 8+ have gearedUpBurst stats', () => {
    mortar().levels.slice(7).forEach((l) => expect(l.stats.gearedUpBurst).toBeDefined());
  });

  it('level 8 gearedUpBurst dps is 24', () => {
    expect(mortar().levels.find((l) => l.level === 8)?.stats.gearedUpBurst?.dps).toBe(24);
  });

  it('levels 1-7 have only normal images', () => {
    mortar().levels.slice(0, 7).forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.gearedUpNormal).toBeUndefined();
      expect(l.images.gearedUpBurst).toBeUndefined();
    });
  });

  it('levels 8+ have all three image variants', () => {
    mortar().levels.slice(7).forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.gearedUpNormal).toBeDefined();
      expect(l.images.gearedUpBurst).toBeDefined();
    });
  });

  it('has gearUp info requiring level 8', () => {
    expect(mortar().gearUp?.requiresLevel).toBe(8);
  });

  it('level 1 xpGained is 42', () => {
    expect(mortar().levels[0].xpGained).toBe(42);
  });

  it('TH3 has 1 mortar available', () => {
    expect(mortar().availablePerTownHall.find((a) => a.townHallLevel === 3)?.count).toBe(1);
  });

  it('TH8 has 4 mortars available', () => {
    expect(mortar().availablePerTownHall.find((a) => a.townHallLevel === 8)?.count).toBe(4);
  });
});

// ── homeDefenses() with mortar ────────────────────────────────────────────────

describe('HomeDefenseQuery with mortar', () => {
  it('homeDefenses has 3 buildings', () => {
    expect(homeDefenses().count()).toBe(3);
  });

  it('byDamageType("splash") returns mortar', () => {
    const splash = homeDefenses().byDamageType('splash');
    expect(splash.count()).toBe(1);
    expect(splash.findByName('Mortar')).toBeDefined();
  });

  it('byDamageType("single") excludes mortar', () => {
    expect(homeDefenses().byDamageType('single').findByName('Mortar')).toBeUndefined();
  });

  it('hasGearUp includes mortar', () => {
    expect(homeDefenses().hasGearUp().findByName('Mortar')).toBeDefined();
  });
});

testFilterImmutability('byDamageType', () => homeDefenses(), (q) =>
  (q as HomeDefenseQuery).byDamageType('splash'),
);
