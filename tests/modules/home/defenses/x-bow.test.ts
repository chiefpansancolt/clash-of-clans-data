import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { xBow } from '@/modules/home/defenses/x-bow';
import { testFilterImmutability } from '../../../helpers';

// ── xBow() ────────────────────────────────────────────────────────────────────

describe('xBow()', () => {
  it('returns a HomeDefense object', () => {
    const result = xBow();
    expect(result).toBeDefined();
    expect(result.id).toBe('x-bow');
    expect(result.name).toBe('X-Bow');
  });

  it('has 12 levels', () => {
    expect(xBow().levels).toHaveLength(12);
  });

  it('level 1 has correct hitpoints', () => {
    expect(xBow().levels[0].hitpoints).toBe(1500);
  });

  it('level 1 has correct build cost', () => {
    expect(xBow().levels[0].buildCost).toBe(1000000);
  });

  it('level 1 normal dps is 60', () => {
    expect(xBow().levels[0].stats.normal.dps).toBe(60);
  });

  it('targets both ground and air', () => {
    expect(xBow().targetType).toBe('both');
  });

  it('has normal (ground) mode with range 14', () => {
    expect(xBow().modes.normal!.range).toBe(14);
  });

  it('has airAndGround mode with range 11.5', () => {
    expect(xBow().modes.airAndGround?.range).toBe(11.5);
  });

  it('normal mode attack speed is 0.128', () => {
    expect(xBow().modes.normal!.attackSpeed).toBe(0.128);
  });

  it('airAndGround mode attack speed is 0.128', () => {
    expect(xBow().modes.airAndGround?.attackSpeed).toBe(0.128);
  });

  it('normal mode is single target', () => {
    expect(xBow().modes.normal!.damageType).toBe('single');
  });

  it('has no gear-up', () => {
    expect(xBow().gearUp).toBeUndefined();
  });

  it('all levels have only normal stats', () => {
    xBow().levels.forEach((l) => {
      expect(l.stats.gearedUpBurst).toBeUndefined();
      expect(l.stats.gearedUpFastAttack).toBeUndefined();
    });
  });

  it('all levels have normal and airAndGround and depleted images', () => {
    xBow().levels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.airAndGround).toBeDefined();
      expect(l.images.groundDepleted).toBeDefined();
      expect(l.images.airAndGroundDepleted).toBeDefined();
    });
  });

  it('level 12 has correct hitpoints', () => {
    expect(xBow().levels[11].hitpoints).toBe(4800);
  });

  it('level 12 normal dps is 235', () => {
    expect(xBow().levels[11].stats.normal.dps).toBe(235);
  });

  it('every level has xpGained', () => {
    xBow().levels.forEach((l) => {
      expect(typeof l.xpGained).toBe('number');
      expect(l.xpGained).toBeGreaterThan(0);
    });
  });

  it('level 1 xpGained is 207', () => {
    expect(xBow().levels[0].xpGained).toBe(207);
  });

  it('xpGained increases with level', () => {
    const xp = xBow().levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('TH9 has 2 x-bows available', () => {
    expect(xBow().availablePerTownHall.find((a) => a.townHallLevel === 9)?.count).toBe(2);
  });

  it('TH11 has 4 x-bows available', () => {
    expect(xBow().availablePerTownHall.find((a) => a.townHallLevel === 11)?.count).toBe(4);
  });

  it('is not available at TH1-8', () => {
    expect(xBow().availablePerTownHall.find((a) => a.townHallLevel <= 8)).toBeUndefined();
  });
});

// ── homeDefenses() with x-bow ─────────────────────────────────────────────────

describe('HomeDefenseQuery with x-bow', () => {
  it('homeDefenses has 9 buildings', () => {
    expect(homeDefenses().count()).toBeGreaterThanOrEqual(9);
  });

  it('byBuilding finds x-bow by name', () => {
    expect(homeDefenses().byBuilding('x-bow').count()).toBe(1);
    expect(homeDefenses().byBuilding('X-Bow').count()).toBe(1);
  });

  it('byTownHall(8) does not include x-bow', () => {
    expect(homeDefenses().byTownHall(8).findByName('X-Bow')).toBeUndefined();
  });

  it('byTownHall(9) includes x-bow', () => {
    expect(homeDefenses().byTownHall(9).findByName('X-Bow')).toBeDefined();
  });

  it('byDamageType("single") includes x-bow', () => {
    expect(homeDefenses().byDamageType('single').findByName('X-Bow')).toBeDefined();
  });

  it('hasGearUp does not include x-bow', () => {
    expect(homeDefenses().hasGearUp().findByName('X-Bow')).toBeUndefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byBuilding('X-Bow'),
);
