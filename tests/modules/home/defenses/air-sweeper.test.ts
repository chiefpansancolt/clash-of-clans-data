import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { airSweeper } from '@/modules/home/defenses/air-sweeper';
import { testFilterImmutability } from '../../../helpers';

// ── airSweeper() ──────────────────────────────────────────────────────────────

describe('airSweeper()', () => {
  it('returns a HomeDefense object', () => {
    const result = airSweeper();
    expect(result).toBeDefined();
    expect(result.id).toBe('air-sweeper');
    expect(result.name).toBe('Air Sweeper');
  });

  it('has 7 levels', () => {
    expect(airSweeper().levels).toHaveLength(7);
  });

  it('level 1 has correct hitpoints', () => {
    expect(airSweeper().levels[0].hitpoints).toBe(750);
  });

  it('level 1 has correct build cost', () => {
    expect(airSweeper().levels[0].buildCost).toBe(200000);
  });

  it('targets air only', () => {
    expect(airSweeper().targetType).toBe('air');
  });

  it('normal mode damage type is none', () => {
    expect(airSweeper().modes.normal.damageType).toBe('none');
  });

  it('normal mode range is 15', () => {
    expect(airSweeper().modes.normal.range).toBe(15);
  });

  it('normal mode attack speed is 5', () => {
    expect(airSweeper().modes.normal.attackSpeed).toBe(5);
  });

  it('has no gear-up', () => {
    expect(airSweeper().gearUp).toBeUndefined();
  });

  it('all levels have pushStrength (not dps)', () => {
    airSweeper().levels.forEach((l) => {
      expect(l.stats.normal.pushStrength).toBeDefined();
      expect(l.stats.normal.dps).toBeUndefined();
      expect(l.stats.normal.damagePerShot).toBeUndefined();
    });
  });

  it('level 1 pushStrength is 1.6', () => {
    expect(airSweeper().levels[0].stats.normal.pushStrength).toBe(1.6);
  });

  it('level 7 pushStrength is 4.0', () => {
    expect(airSweeper().levels[6].stats.normal.pushStrength).toBe(4.0);
  });

  it('pushStrength increases with level', () => {
    const ps = airSweeper().levels.map((l) => l.stats.normal.pushStrength!);
    for (let i = 0; i < ps.length - 1; i++) {
      expect(ps[i + 1]).toBeGreaterThan(ps[i]);
    }
  });

  it('all levels have only normal images', () => {
    airSweeper().levels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.gearedUpNormal).toBeUndefined();
    });
  });

  it('every level has xpGained', () => {
    airSweeper().levels.forEach((l) => {
      expect(typeof l.xpGained).toBe('number');
      expect(l.xpGained).toBeGreaterThan(0);
    });
  });

  it('level 1 xpGained is 120', () => {
    expect(airSweeper().levels[0].xpGained).toBe(120);
  });

  it('TH6 has 1 air sweeper available', () => {
    expect(airSweeper().availablePerTownHall.find((a) => a.townHallLevel === 6)?.count).toBe(1);
  });

  it('TH9 has 2 air sweepers available', () => {
    expect(airSweeper().availablePerTownHall.find((a) => a.townHallLevel === 9)?.count).toBe(2);
  });

  it('is not available at TH1-5', () => {
    expect(airSweeper().availablePerTownHall.find((a) => a.townHallLevel <= 5)).toBeUndefined();
  });
});

// ── homeDefenses() with air sweeper ──────────────────────────────────────────

describe('HomeDefenseQuery with air sweeper', () => {
  it('homeDefenses has 6 buildings', () => {
    expect(homeDefenses().count()).toBe(6);
  });

  it('byBuilding finds air-sweeper by name', () => {
    expect(homeDefenses().byBuilding('air sweeper').count()).toBe(1);
    expect(homeDefenses().byBuilding('Air Sweeper').count()).toBe(1);
  });

  it('byTownHall(5) does not include air sweeper', () => {
    expect(homeDefenses().byTownHall(5).findByName('Air Sweeper')).toBeUndefined();
  });

  it('byTownHall(6) includes air sweeper', () => {
    expect(homeDefenses().byTownHall(6).findByName('Air Sweeper')).toBeDefined();
  });

  it('byDamageType("none") returns only air sweeper', () => {
    const none = homeDefenses().byDamageType('none');
    expect(none.count()).toBe(1);
    expect(none.findByName('Air Sweeper')).toBeDefined();
  });

  it('byDamageType("single") excludes air sweeper', () => {
    expect(homeDefenses().byDamageType('single').findByName('Air Sweeper')).toBeUndefined();
  });

  it('hasGearUp does not include air sweeper', () => {
    expect(homeDefenses().hasGearUp().findByName('Air Sweeper')).toBeUndefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byBuilding('Air Sweeper'),
);
