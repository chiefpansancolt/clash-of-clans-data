import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { airDefense } from '@/modules/home/defenses/air-defense';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ── airDefense() ──────────────────────────────────────────────────────────────

describe('airDefense()', () => {
  it('returns a HomeDefense object', () => {
    const result = airDefense();
    expect(result).toBeDefined();
    expect(result.id).toBe('air-defense');
    expect(result.name).toBe('Air Defense');
  });

  it('has 16 levels', () => {
    expect(airDefense().levels).toHaveLength(16);
  });

  it('level 1 has correct hitpoints', () => {
    expect(airDefense().levels[0].hitpoints).toBe(800);
  });

  it('level 1 has correct build cost', () => {
    expect(airDefense().levels[0].buildCost).toBe(22000);
  });

  it('level 1 normal dps is 80', () => {
    expect(airDefense().levels[0].stats.normal.dps).toBe(80);
  });

  it('targets air only', () => {
    expect(airDefense().targetType).toBe('air');
  });

  it('has normal mode with range 10', () => {
    expect(airDefense().modes.normal!.range).toBe(10);
  });

  it('has normal mode with attack speed 1', () => {
    expect(airDefense().modes.normal!.attackSpeed).toBe(1);
  });

  it('has no gear-up', () => {
    expect(airDefense().gearUp).toBeUndefined();
  });

  it('has no geared-up modes', () => {
    expect((airDefense().modes as Record<string, unknown>).gearedUpBurst).toBeUndefined();
    expect((airDefense().modes as Record<string, unknown>).gearedUpFastAttack).toBeUndefined();
  });

  it('all levels have only normal stats (no geared-up stats)', () => {
    airDefense().levels.forEach((l) => {
      expect(l.stats.gearedUpBurst).toBeUndefined();
      expect(l.stats.gearedUpFastAttack).toBeUndefined();
    });
  });

  it('all levels have only normal images', () => {
    airDefense().levels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.gearedUpNormal).toBeUndefined();
      expect(l.images.gearedUpBurst).toBeUndefined();
      expect(l.images.gearedUpFastAttack).toBeUndefined();
    });
  });

  it('level 16 has correct hitpoints', () => {
    expect(airDefense().levels[15].hitpoints).toBe(2000);
  });

  it('level 16 normal dps is 700', () => {
    expect(airDefense().levels[15].stats.normal.dps).toBe(700);
  });

  it('every level has xpGained', () => {
    airDefense().levels.forEach((l) => {
      expect(typeof l.xpGained).toBe('number');
      expect(l.xpGained).toBeGreaterThan(0);
    });
  });

  it('level 1 xpGained is 60', () => {
    expect(airDefense().levels[0].xpGained).toBe(60);
  });

  it('xpGained increases with level', () => {
    const xp = airDefense().levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('has availablePerTownHall entries', () => {
    const avail = airDefense().availablePerTownHall;
    expect(avail.length).toBeGreaterThan(0);
    avail.forEach((a) => {
      expect(a.townHallLevel).toBeGreaterThan(0);
      expect(a.count).toBeGreaterThan(0);
    });
  });

  it('TH4 has 1 air defense available', () => {
    expect(airDefense().availablePerTownHall.find((a) => a.townHallLevel === 4)?.count).toBe(1);
  });

  it('TH6 has 2 air defenses available', () => {
    expect(airDefense().availablePerTownHall.find((a) => a.townHallLevel === 6)?.count).toBe(2);
  });

  it('TH9 has 4 air defenses available', () => {
    expect(airDefense().availablePerTownHall.find((a) => a.townHallLevel === 9)?.count).toBe(4);
  });

  it('is not available at TH1-3', () => {
    expect(airDefense().availablePerTownHall.find((a) => a.townHallLevel <= 3)).toBeUndefined();
  });
});

// ── homeDefenses() with air defense ──────────────────────────────────────────

describe('HomeDefenseQuery with air defense', () => {
  it('homeDefenses has at least 4 buildings', () => {
    expect(homeDefenses().count()).toBeGreaterThanOrEqual(4);
  });

  it('byBuilding finds air-defense by name', () => {
    expect(homeDefenses().byBuilding('air defense').count()).toBe(1);
    expect(homeDefenses().byBuilding('Air Defense').count()).toBe(1);
  });

  it('byTownHall(3) does not include air defense', () => {
    expect(homeDefenses().byTownHall(3).findByName('Air Defense')).toBeUndefined();
  });

  it('byTownHall(4) includes air defense', () => {
    expect(homeDefenses().byTownHall(4).findByName('Air Defense')).toBeDefined();
  });

  it('byDamageType("single") includes air defense', () => {
    expect(homeDefenses().byDamageType('single').findByName('Air Defense')).toBeDefined();
  });

  it('hasGearUp does not include air defense', () => {
    expect(homeDefenses().hasGearUp().findByName('Air Defense')).toBeUndefined();
  });
});

testQueryBaseContract('homeDefenses', () => homeDefenses());

testFilterImmutability(
  'byBuilding',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byBuilding('Air Defense'),
);
