import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { infernoTower } from '@/modules/home/defenses/inferno-tower';
import { testFilterImmutability } from '../../../helpers';

// ── infernoTower() ────────────────────────────────────────────────────────────

describe('infernoTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = infernoTower();
    expect(result).toBeDefined();
    expect(result.id).toBe('inferno-tower');
    expect(result.name).toBe('Inferno Tower');
  });

  it('has 12 levels', () => {
    expect(infernoTower().levels).toHaveLength(12);
  });

  it('level 1 has correct hitpoints', () => {
    expect(infernoTower().levels[0].hitpoints).toBe(1500);
  });

  it('level 1 has correct build cost', () => {
    expect(infernoTower().levels[0].buildCost).toBe(1000000);
  });

  it('targets both ground and air', () => {
    expect(infernoTower().targetType).toBe('both');
  });

  it('has normal (single target) mode with range 9', () => {
    expect(infernoTower().modes.normal.range).toBe(9);
  });

  it('has multiTarget mode with range 10', () => {
    expect(infernoTower().modes.multiTarget?.range).toBe(10);
  });

  it('normal mode attack speed is 0.128', () => {
    expect(infernoTower().modes.normal.attackSpeed).toBe(0.128);
  });

  it('normal mode is single target', () => {
    expect(infernoTower().modes.normal.damageType).toBe('single');
  });

  it('multiTarget mode is multiple damage type', () => {
    expect(infernoTower().modes.multiTarget?.damageType).toBe('multiple');
  });

  it('has no gear-up', () => {
    expect(infernoTower().gearUp).toBeUndefined();
  });

  // Single target stats
  it('level 1 single target max dps is 800', () => {
    expect(infernoTower().levels[0].stats.normal.dps).toBe(800);
  });

  it('level 1 single target initial dps is 30', () => {
    expect(infernoTower().levels[0].stats.normal.dpsInitial).toBe(30);
  });

  it('level 1 single target dps after 1.5s is 80', () => {
    expect(infernoTower().levels[0].stats.normal.dpsAfter1p5s).toBe(80);
  });

  // Multi target stats
  it('level 1 multi target dps per target is 30', () => {
    expect(infernoTower().levels[0].stats.multiTarget?.dps).toBe(30);
  });

  it('level 1 multi target has 5 targets', () => {
    expect(infernoTower().levels[0].stats.multiTarget?.numberOfTargets).toBe(5);
  });

  it('level 8 multi target has 6 targets', () => {
    expect(infernoTower().levels[7].stats.multiTarget?.numberOfTargets).toBe(6);
  });

  it('level 12 single target max dps is 3300', () => {
    expect(infernoTower().levels[11].stats.normal.dps).toBe(3300);
  });

  it('level 12 has correct hitpoints', () => {
    expect(infernoTower().levels[11].hitpoints).toBe(5100);
  });

  it('every level has xpGained', () => {
    infernoTower().levels.forEach((l) => {
      expect(typeof l.xpGained).toBe('number');
      expect(l.xpGained).toBeGreaterThan(0);
    });
  });

  it('level 1 xpGained is 207', () => {
    expect(infernoTower().levels[0].xpGained).toBe(207);
  });

  it('xpGained increases with level', () => {
    const xp = infernoTower().levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('all levels have all 4 image variants', () => {
    infernoTower().levels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.multiTarget).toBeDefined();
      expect(l.images.singleTargetDepleted).toBeDefined();
      expect(l.images.multiTargetDepleted).toBeDefined();
    });
  });

  it('TH10 has 2 inferno towers available', () => {
    expect(infernoTower().availablePerTownHall.find((a) => a.townHallLevel === 10)?.count).toBe(2);
  });

  it('TH12 has 3 inferno towers available', () => {
    expect(infernoTower().availablePerTownHall.find((a) => a.townHallLevel === 12)?.count).toBe(3);
  });

  it('is not available at TH1-9', () => {
    expect(infernoTower().availablePerTownHall.find((a) => a.townHallLevel <= 9)).toBeUndefined();
  });
});

// ── homeDefenses() with inferno tower ────────────────────────────────────────

describe('HomeDefenseQuery with inferno tower', () => {
  it('homeDefenses has 10 buildings', () => {
    expect(homeDefenses().count()).toBeGreaterThanOrEqual(10);
  });

  it('byBuilding finds inferno-tower by name', () => {
    expect(homeDefenses().byBuilding('inferno tower').count()).toBe(1);
    expect(homeDefenses().byBuilding('Inferno Tower').count()).toBe(1);
  });

  it('byTownHall(9) does not include inferno tower', () => {
    expect(homeDefenses().byTownHall(9).findByName('Inferno Tower')).toBeUndefined();
  });

  it('byTownHall(10) includes inferno tower', () => {
    expect(homeDefenses().byTownHall(10).findByName('Inferno Tower')).toBeDefined();
  });

  it('byDamageType("single") includes inferno tower', () => {
    expect(homeDefenses().byDamageType('single').findByName('Inferno Tower')).toBeDefined();
  });

  it('hasGearUp does not include inferno tower', () => {
    expect(homeDefenses().hasGearUp().findByName('Inferno Tower')).toBeUndefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byBuilding('Inferno Tower'),
);
