import { HomeGuardianQuery, homeGuardians } from '@/modules/home/guardians';
import { smasher } from '@/modules/home/guardians/smasher';
import { testFilterImmutability } from '../../../helpers';

describe('smasher()', () => {
  it('returns a SmasherGuardian object', () => {
    const result = smasher();
    expect(result).toBeDefined();
    expect(result.id).toBe('smasher');
    expect(result.name).toBe('Smasher');
  });

  it('has 5 levels', () => {
    expect(smasher().levels).toHaveLength(5);
  });

  it('targets both ground and air', () => {
    expect(smasher().targetType).toBe('both');
  });

  it('guardianType is smasher', () => {
    expect(smasher().guardianType).toBe('smasher');
  });

  it('specialAbility is Sore Loser', () => {
    expect(smasher().specialAbility).toBe('Sore Loser');
  });

  it('base is home', () => {
    expect(smasher().base).toBe('home');
  });

  it('category is guardian', () => {
    expect(smasher().category).toBe('guardian');
  });

  it('rageSpeedIncrease is 12', () => {
    expect(smasher().rageSpeedIncrease).toBe(12);
  });

  it('rageDamageIncrease is 60', () => {
    expect(smasher().rageDamageIncrease).toBe(60);
  });
});

describe('smasher() mode', () => {
  it('attackSpeed is 1.8s', () => {
    expect(smasher().mode.attackSpeed).toBe(1.8);
  });

  it('damageType is splash', () => {
    expect(smasher().mode.damageType).toBe('splash');
  });

  it('range is 1.25 tiles', () => {
    expect(smasher().mode.range).toBe(1.25);
  });

  it('damageRadius is 2.5 tiles', () => {
    expect(smasher().mode.damageRadius).toBe(2.5);
  });

  it('movementSpeed is 20', () => {
    expect(smasher().mode.movementSpeed).toBe(20);
  });

  it('searchRadius is 12 tiles', () => {
    expect(smasher().mode.searchRadius).toBe(12);
  });

  it('triggerRadius is 14 tiles', () => {
    expect(smasher().mode.triggerRadius).toBe(14);
  });

  it('has no patrolRadius', () => {
    expect(smasher().mode.patrolRadius).toBeUndefined();
  });

  it('has no deathDamageRadius', () => {
    expect(smasher().mode.deathDamageRadius).toBeUndefined();
  });
});

describe('smasher() levels', () => {
  it('level 1 hitpoints is 12000', () => {
    expect(smasher().levels[0].hitpoints).toBe(12000);
  });

  it('level 1 dps is 500', () => {
    expect(smasher().levels[0].stats.normal.dps).toBe(500);
  });

  it('level 1 damagePerShot is 900', () => {
    expect(smasher().levels[0].stats.normal.damagePerShot).toBe(900);
  });

  it('level 1 has no deathDamage', () => {
    expect(smasher().levels[0].deathDamage).toBeUndefined();
  });

  it('level 1 buildCost is 0 (initial unlock)', () => {
    expect(smasher().levels[0].buildCost).toBe(0);
    expect(smasher().levels[0].buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is instant', () => {
    expect(smasher().levels[0].buildTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 1 xpGained is 0', () => {
    expect(smasher().levels[0].xpGained).toBe(0);
  });

  it('level 1 townHallRequired is 18', () => {
    expect(smasher().levels[0].townHallRequired).toBe(18);
  });

  it('level 2 hitpoints is 13000', () => {
    expect(smasher().levels[1].hitpoints).toBe(13000);
  });

  it('level 2 dps is 550', () => {
    expect(smasher().levels[1].stats.normal.dps).toBe(550);
  });

  it('level 2 buildCost is 18000000 Elixir', () => {
    expect(smasher().levels[1].buildCost).toBe(18000000);
    expect(smasher().levels[1].buildCostResource).toBe('Elixir');
  });

  it('level 2 buildTime is 7d', () => {
    expect(smasher().levels[1].buildTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2 xpGained is 777', () => {
    expect(smasher().levels[1].xpGained).toBe(777);
  });

  it('level 3 dps is 600', () => {
    expect(smasher().levels[2].stats.normal.dps).toBe(600);
  });

  it('level 3 buildCost is 22000000 Elixir', () => {
    expect(smasher().levels[2].buildCost).toBe(22000000);
  });

  it('level 3 buildTime is 9d', () => {
    expect(smasher().levels[2].buildTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 3 xpGained is 881', () => {
    expect(smasher().levels[2].xpGained).toBe(881);
  });

  it('level 4 dps is 650', () => {
    expect(smasher().levels[3].stats.normal.dps).toBe(650);
  });

  it('level 4 buildTime is 11d', () => {
    expect(smasher().levels[3].buildTime).toEqual({ days: 11, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4 xpGained is 974', () => {
    expect(smasher().levels[3].xpGained).toBe(974);
  });

  it('level 5 hitpoints is 16000', () => {
    expect(smasher().levels[4].hitpoints).toBe(16000);
  });

  it('level 5 dps is 700', () => {
    expect(smasher().levels[4].stats.normal.dps).toBe(700);
  });

  it('level 5 damagePerShot is 1260', () => {
    expect(smasher().levels[4].stats.normal.damagePerShot).toBe(1260);
  });

  it('level 5 buildCost is 28000000 Elixir', () => {
    expect(smasher().levels[4].buildCost).toBe(28000000);
  });

  it('level 5 buildTime is 13d', () => {
    expect(smasher().levels[4].buildTime).toEqual({ days: 13, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5 xpGained is 1059', () => {
    expect(smasher().levels[4].xpGained).toBe(1059);
  });

  it('all levels have a normal image', () => {
    for (const lvl of smasher().levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('smasher() availablePerTownHall', () => {
  it('only available at TH18 with count 1', () => {
    expect(smasher().availablePerTownHall).toHaveLength(1);
    const th18 = smasher().availablePerTownHall[0];
    expect(th18.townHallLevel).toBe(18);
    expect(th18.count).toBe(1);
  });

  it('not available below TH18', () => {
    const below = smasher().availablePerTownHall.filter((a) => a.townHallLevel < 18);
    expect(below).toHaveLength(0);
  });
});

describe('smasher() integration with homeGuardians()', () => {
  it('is included in homeGuardians()', () => {
    const result = homeGuardians().findByName('Smasher');
    expect(result).toBeDefined();
    expect(result!.id).toBe('smasher');
  });

  it('homeGuardians().byGuardianType("smasher") returns one result', () => {
    expect(homeGuardians().byGuardianType('smasher').count()).toBe(1);
  });

  it('homeGuardians().byTownHall(17) excludes Smasher', () => {
    const names = homeGuardians()
      .byTownHall(17)
      .get()
      .map((g) => g.name);
    expect(names).not.toContain('Smasher');
  });

  it('homeGuardians().byTownHall(18) includes Smasher', () => {
    const names = homeGuardians()
      .byTownHall(18)
      .get()
      .map((g) => g.name);
    expect(names).toContain('Smasher');
  });

  it('homeGuardians().byGuardianType("longshot") excludes Smasher', () => {
    const names = homeGuardians()
      .byGuardianType('longshot')
      .get()
      .map((g) => g.name);
    expect(names).not.toContain('Smasher');
  });

  it('homeGuardians() total count is 2', () => {
    expect(homeGuardians().count()).toBe(2);
  });

  it('is a HomeGuardianQuery instance', () => {
    expect(homeGuardians().byGuardianType('smasher')).toBeInstanceOf(HomeGuardianQuery);
  });

  testFilterImmutability(
    'homeGuardians filter immutability',
    () => homeGuardians(),
    (q) => (q as HomeGuardianQuery).byGuardianType('smasher'),
  );
});
