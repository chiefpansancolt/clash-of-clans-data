import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { scattershot } from '@/modules/home/defenses/scattershot';
import { testFilterImmutability } from '../../../helpers';

// ── scattershot() ─────────────────────────────────────────────────────────────

describe('scattershot()', () => {
  it('returns a HomeDefense object', () => {
    const result = scattershot();
    expect(result).toBeDefined();
    expect(result.id).toBe('scattershot');
    expect(result.name).toBe('Scattershot');
  });

  it('has 6 levels', () => {
    expect(scattershot().levels).toHaveLength(6);
  });

  it('level 1 has correct hitpoints', () => {
    expect(scattershot().levels[0].hitpoints).toBe(3600);
  });

  it('level 1 has correct build cost', () => {
    expect(scattershot().levels[0].buildCost).toBe(8000000);
  });

  it('targets both ground and air', () => {
    expect(scattershot().targetType).toBe('both');
  });

  it('normal mode has range 10', () => {
    expect(scattershot().modes.normal!.range).toBe(10);
  });

  it('normal mode has minimum range 3', () => {
    expect(scattershot().modes.normal!.minRange).toBe(3);
  });

  it('normal mode attack speed is 3.2', () => {
    expect(scattershot().modes.normal!.attackSpeed).toBe(3.2);
  });

  it('normal mode has 90 rounds', () => {
    expect(scattershot().modes.normal!.numberOfRounds).toBe(90);
  });

  it('normal mode is splash damage', () => {
    expect(scattershot().modes.normal!.damageType).toBe('splash');
  });

  it('has no gear-up', () => {
    expect(scattershot().gearUp).toBeUndefined();
  });

  it('level 1 dps is 125', () => {
    expect(scattershot().levels[0].stats.normal.dps).toBe(125);
  });

  it('level 1 max damage per shot is 400', () => {
    expect(scattershot().levels[0].stats.normal.damagePerShot).toBe(400);
  });

  it('level 1 min damage per shot is 300', () => {
    expect(scattershot().levels[0].stats.normal.damagePerShotMin).toBe(300);
  });

  it('level 1 max splash damage is 300', () => {
    expect(scattershot().levels[0].stats.normal.splashDamageMax).toBe(300);
  });

  it('level 1 min splash damage is 100', () => {
    expect(scattershot().levels[0].stats.normal.splashDamageMin).toBe(100);
  });

  it('level 6 dps is 185', () => {
    expect(scattershot().levels[5].stats.normal.dps).toBe(185);
  });

  it('level 6 has correct hitpoints', () => {
    expect(scattershot().levels[5].hitpoints).toBe(5600);
  });

  it('every level has xpGained', () => {
    scattershot().levels.forEach((l) => {
      expect(typeof l.xpGained).toBe('number');
      expect(l.xpGained).toBeGreaterThan(0);
    });
  });

  it('level 1 xpGained is 720', () => {
    expect(scattershot().levels[0].xpGained).toBe(720);
  });

  it('xpGained increases with level', () => {
    const xp = scattershot().levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('all levels have normal and depleted image variants', () => {
    scattershot().levels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.depleted).toBeDefined();
    });
  });

  it('TH13 has 2 scattershots available', () => {
    expect(scattershot().availablePerTownHall.find((a) => a.townHallLevel === 13)?.count).toBe(2);
  });

  it('TH18 has 2 scattershots available', () => {
    expect(scattershot().availablePerTownHall.find((a) => a.townHallLevel === 18)?.count).toBe(2);
  });

  it('is not available at TH1-12', () => {
    expect(scattershot().availablePerTownHall.find((a) => a.townHallLevel <= 12)).toBeUndefined();
  });

  it('level 1 is available at TH13', () => {
    expect(scattershot().levels[0].townHallRequired).toBe(13);
  });

  it('level 6 requires TH17', () => {
    expect(scattershot().levels[5].townHallRequired).toBe(17);
  });
});

// ── homeDefenses() with scattershot ──────────────────────────────────────────

describe('HomeDefenseQuery with scattershot', () => {
  it('homeDefenses has at least 12 buildings', () => {
    expect(homeDefenses().count()).toBeGreaterThanOrEqual(12);
  });

  it('byBuilding finds scattershot by name', () => {
    expect(homeDefenses().byBuilding('Scattershot').count()).toBe(1);
    expect(homeDefenses().byBuilding('scattershot').count()).toBe(1);
  });

  it('byTownHall(12) does not include scattershot', () => {
    expect(homeDefenses().byTownHall(12).findByName('Scattershot')).toBeUndefined();
  });

  it('byTownHall(13) includes scattershot', () => {
    expect(homeDefenses().byTownHall(13).findByName('Scattershot')).toBeDefined();
  });

  it('byDamageType("splash") includes scattershot', () => {
    expect(homeDefenses().byDamageType('splash').findByName('Scattershot')).toBeDefined();
  });

  it('hasGearUp does not include scattershot', () => {
    expect(homeDefenses().hasGearUp().findByName('Scattershot')).toBeUndefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byBuilding('Scattershot'),
);
