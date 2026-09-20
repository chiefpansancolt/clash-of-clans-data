import { home } from '@/modules/home';
import { LoggerGuardian } from '@/types';

describe('logger()', () => {
  it('returns a LoggerGuardian object', () => {
    const result = home().guardians().logger().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('logger');
    expect(result.name).toBe('Logger');
  });

  it('has 5 levels', () => {
    expect(home().guardians().logger().first()!.levels).toHaveLength(5);
  });

  it('targets both ground and air', () => {
    expect(home().guardians().logger().first()!.targetType).toBe('both');
  });

  it('guardianType is logger', () => {
    expect(home().guardians().logger().first()!.guardianType).toBe('logger');
  });

  it('specialAbility is Rolling Log', () => {
    expect(home().guardians().logger().first()!.specialAbility).toBe('Rolling Log');
  });

  it('base is home', () => {
    expect(home().guardians().logger().first()!.base).toBe('home');
  });

  it('category is guardian', () => {
    expect(home().guardians().logger().first()!.category).toBe('guardian');
  });

  it('returns a LoggerGuardian type', () => {
    const logger = home().guardians().logger().first()! as LoggerGuardian;
    expect(logger.guardianType).toBe('logger');
  });
});

describe('logger() mode', () => {
  it('attackSpeed is 2.5s', () => {
    expect(home().guardians().logger().first()!.mode.attackSpeed).toBe(2.5);
  });

  it('damageType is splash', () => {
    expect(home().guardians().logger().first()!.mode.damageType).toBe('splash');
  });

  it('range is 7 tiles', () => {
    expect(home().guardians().logger().first()!.mode.range).toBe(7);
  });

  it('movementSpeed is 8', () => {
    expect(home().guardians().logger().first()!.mode.movementSpeed).toBe(8);
  });

  it('searchRadius is 14 tiles', () => {
    expect(home().guardians().logger().first()!.mode.searchRadius).toBe(14);
  });

  it('triggerRadius is 15 tiles', () => {
    expect(home().guardians().logger().first()!.mode.triggerRadius).toBe(15);
  });

  it('pushbackRange is 1 tile', () => {
    expect(home().guardians().logger().first()!.mode.pushbackRange).toBe(1);
  });

  it('has no patrolRadius', () => {
    expect(home().guardians().logger().first()!.mode.patrolRadius).toBeUndefined();
  });

  it('has no damageRadius', () => {
    expect(home().guardians().logger().first()!.mode.damageRadius).toBeUndefined();
  });

  it('has no deathDamageRadius', () => {
    expect(home().guardians().logger().first()!.mode.deathDamageRadius).toBeUndefined();
  });
});

describe('logger() levels', () => {
  it('level 1 hitpoints is 8000', () => {
    expect(home().guardians().logger().first()!.levels[0].hitpoints).toBe(8000);
  });

  it('level 1 dps is 230', () => {
    expect(home().guardians().logger().first()!.levels[0].stats.normal.dps).toBe(230);
  });

  it('level 1 damagePerShot is 575', () => {
    expect(home().guardians().logger().first()!.levels[0].stats.normal.damagePerShot).toBe(575);
  });

  it('level 1 has no deathDamage', () => {
    expect(home().guardians().logger().first()!.levels[0].deathDamage).toBeUndefined();
  });

  it('level 1 buildCost is 0 (initial unlock)', () => {
    expect(home().guardians().logger().first()!.levels[0].buildCost).toBe(0);
    expect(home().guardians().logger().first()!.levels[0].buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is instant', () => {
    expect(home().guardians().logger().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 0', () => {
    expect(home().guardians().logger().first()!.levels[0].xpGained).toBe(0);
  });

  it('level 1 townHallRequired is 18', () => {
    expect(home().guardians().logger().first()!.levels[0].townHallRequired).toBe(18);
  });

  it('level 1 postHitTileRange is 7', () => {
    expect(home().guardians().logger().first()!.levels[0].postHitTileRange).toBe(7);
  });

  it('level 2 hitpoints is 9000', () => {
    expect(home().guardians().logger().first()!.levels[1].hitpoints).toBe(9000);
  });

  it('level 2 dps is 260', () => {
    expect(home().guardians().logger().first()!.levels[1].stats.normal.dps).toBe(260);
  });

  it('level 2 buildCost is 18000000 Elixir', () => {
    expect(home().guardians().logger().first()!.levels[1].buildCost).toBe(18000000);
    expect(home().guardians().logger().first()!.levels[1].buildCostResource).toBe('Elixir');
  });

  it('level 2 buildTime is 7d', () => {
    expect(home().guardians().logger().first()!.levels[1].buildTime).toEqual({
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 2 xpGained is 777', () => {
    expect(home().guardians().logger().first()!.levels[1].xpGained).toBe(777);
  });

  it('level 2 postHitTileRange is 7', () => {
    expect(home().guardians().logger().first()!.levels[1].postHitTileRange).toBe(7);
  });

  it('level 3 dps is 290', () => {
    expect(home().guardians().logger().first()!.levels[2].stats.normal.dps).toBe(290);
  });

  it('level 3 buildCost is 22000000 Elixir', () => {
    expect(home().guardians().logger().first()!.levels[2].buildCost).toBe(22000000);
  });

  it('level 3 buildTime is 9d', () => {
    expect(home().guardians().logger().first()!.levels[2].buildTime).toEqual({
      days: 9,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 3 xpGained is 881', () => {
    expect(home().guardians().logger().first()!.levels[2].xpGained).toBe(881);
  });

  it('level 3 postHitTileRange is 7', () => {
    expect(home().guardians().logger().first()!.levels[2].postHitTileRange).toBe(7);
  });

  it('level 4 hitpoints is 11000', () => {
    expect(home().guardians().logger().first()!.levels[3].hitpoints).toBe(11000);
  });

  it('level 4 dps is 320', () => {
    expect(home().guardians().logger().first()!.levels[3].stats.normal.dps).toBe(320);
  });

  it('level 4 damagePerShot is 800', () => {
    expect(home().guardians().logger().first()!.levels[3].stats.normal.damagePerShot).toBe(800);
  });

  it('level 4 buildCost is 26000000 Elixir', () => {
    expect(home().guardians().logger().first()!.levels[3].buildCost).toBe(26000000);
  });

  it('level 4 buildTime is 11d', () => {
    expect(home().guardians().logger().first()!.levels[3].buildTime).toEqual({
      days: 11,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 4 xpGained is 974', () => {
    expect(home().guardians().logger().first()!.levels[3].xpGained).toBe(974);
  });

  it('level 4 postHitTileRange is 8', () => {
    expect(home().guardians().logger().first()!.levels[3].postHitTileRange).toBe(8);
  });

  it('level 5 hitpoints is 12000', () => {
    expect(home().guardians().logger().first()!.levels[4].hitpoints).toBe(12000);
  });

  it('level 5 dps is 350', () => {
    expect(home().guardians().logger().first()!.levels[4].stats.normal.dps).toBe(350);
  });

  it('level 5 damagePerShot is 875', () => {
    expect(home().guardians().logger().first()!.levels[4].stats.normal.damagePerShot).toBe(875);
  });

  it('level 5 buildCost is 28000000 Elixir', () => {
    expect(home().guardians().logger().first()!.levels[4].buildCost).toBe(28000000);
  });

  it('level 5 buildTime is 13d', () => {
    expect(home().guardians().logger().first()!.levels[4].buildTime).toEqual({
      days: 13,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 5 xpGained is 1059', () => {
    expect(home().guardians().logger().first()!.levels[4].xpGained).toBe(1059);
  });

  it('level 5 postHitTileRange is 8', () => {
    expect(home().guardians().logger().first()!.levels[4].postHitTileRange).toBe(8);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().guardians().logger().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('logger() availablePerTownHall', () => {
  it('only available at TH18 with count 1', () => {
    expect(home().guardians().logger().first()!.availablePerTownHall).toHaveLength(1);
    const th18 = home().guardians().logger().first()!.availablePerTownHall[0];
    expect(th18.townHallLevel).toBe(18);
    expect(th18.count).toBe(1);
  });

  it('not available below TH18', () => {
    const below = home()
      .guardians()
      .logger()
      .first()!
      .availablePerTownHall.filter((a) => a.townHallLevel < 18);
    expect(below).toHaveLength(0);
  });
});
