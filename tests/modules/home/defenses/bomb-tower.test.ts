import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { bombTower } from '@/modules/home/defenses/bomb-tower';
import { testFilterImmutability } from '../../../helpers';

// ── bombTower() ───────────────────────────────────────────────────────────────

describe('bombTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = bombTower();
    expect(result).toBeDefined();
    expect(result.id).toBe('bomb-tower');
    expect(result.name).toBe('Bomb Tower');
  });

  it('has 13 levels', () => {
    expect(bombTower().levels).toHaveLength(13);
  });

  it('level 1 has correct hitpoints', () => {
    expect(bombTower().levels[0].hitpoints).toBe(650);
  });

  it('level 1 has correct build cost', () => {
    expect(bombTower().levels[0].buildCost).toBe(700000);
  });

  it('level 1 normal dps is 24', () => {
    expect(bombTower().levels[0].stats.normal.dps).toBe(24);
  });

  it('level 1 death damage is 150', () => {
    expect(bombTower().levels[0].deathDamage).toBe(150);
  });

  it('targets ground only', () => {
    expect(bombTower().targetType).toBe('ground');
  });

  it('has normal mode with range 6', () => {
    expect(bombTower().modes.normal.range).toBe(6);
  });

  it('normal mode attack speed is 1.1', () => {
    expect(bombTower().modes.normal.attackSpeed).toBe(1.1);
  });

  it('normal mode is splash damage', () => {
    expect(bombTower().modes.normal.damageType).toBe('splash');
  });

  it('normal mode splash radius is 1.5', () => {
    expect(bombTower().modes.normal.splashRadius).toBe(1.5);
  });

  it('has no gear-up', () => {
    expect(bombTower().gearUp).toBeUndefined();
  });

  it('all levels have only normal stats', () => {
    bombTower().levels.forEach((l) => {
      expect(l.stats.gearedUpBurst).toBeUndefined();
      expect(l.stats.gearedUpFastAttack).toBeUndefined();
    });
  });

  it('all levels have only normal images', () => {
    bombTower().levels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.gearedUpNormal).toBeUndefined();
    });
  });

  it('level 13 has correct hitpoints', () => {
    expect(bombTower().levels[12].hitpoints).toBe(3050);
  });

  it('level 13 normal dps is 122', () => {
    expect(bombTower().levels[12].stats.normal.dps).toBe(122);
  });

  it('level 13 death damage is 700', () => {
    expect(bombTower().levels[12].deathDamage).toBe(700);
  });

  it('every level has xpGained', () => {
    bombTower().levels.forEach((l) => {
      expect(typeof l.xpGained).toBe('number');
      expect(l.xpGained).toBeGreaterThan(0);
    });
  });

  it('level 1 xpGained is 207', () => {
    expect(bombTower().levels[0].xpGained).toBe(207);
  });

  it('xpGained increases with level', () => {
    const xp = bombTower().levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('TH8 has 1 bomb tower available', () => {
    expect(bombTower().availablePerTownHall.find((a) => a.townHallLevel === 8)?.count).toBe(1);
  });

  it('TH10 has 2 bomb towers available', () => {
    expect(bombTower().availablePerTownHall.find((a) => a.townHallLevel === 10)?.count).toBe(2);
  });

  it('is not available at TH1-7', () => {
    expect(bombTower().availablePerTownHall.find((a) => a.townHallLevel <= 7)).toBeUndefined();
  });

  it('every level has deathDamage', () => {
    bombTower().levels.forEach((l) => {
      expect(typeof l.deathDamage).toBe('number');
      expect(l.deathDamage).toBeGreaterThan(0);
    });
  });
});

// ── homeDefenses() with bomb tower ───────────────────────────────────────────

describe('HomeDefenseQuery with bomb tower', () => {
  it('homeDefenses has 8 buildings', () => {
    expect(homeDefenses().count()).toBeGreaterThanOrEqual(8);
  });

  it('byBuilding finds bomb-tower by name', () => {
    expect(homeDefenses().byBuilding('bomb tower').count()).toBe(1);
    expect(homeDefenses().byBuilding('Bomb Tower').count()).toBe(1);
  });

  it('byTownHall(7) does not include bomb tower', () => {
    expect(homeDefenses().byTownHall(7).findByName('Bomb Tower')).toBeUndefined();
  });

  it('byTownHall(8) includes bomb tower', () => {
    expect(homeDefenses().byTownHall(8).findByName('Bomb Tower')).toBeDefined();
  });

  it('byDamageType("splash") includes bomb tower', () => {
    expect(homeDefenses().byDamageType('splash').findByName('Bomb Tower')).toBeDefined();
  });

  it('hasGearUp does not include bomb tower', () => {
    expect(homeDefenses().hasGearUp().findByName('Bomb Tower')).toBeUndefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byBuilding('Bomb Tower'),
);
