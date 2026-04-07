import { home } from '@/modules/home';
import { HomeVillageGuardians } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('longshot()', () => {
  it('returns a LongshotGuardian object', () => {
    const result = home().guardians().longshot().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('longshot');
    expect(result.name).toBe('Longshot');
  });

  it('has 5 levels', () => {
    expect(home().guardians().longshot().first()!.levels).toHaveLength(5);
  });

  it('targets both ground and air', () => {
    expect(home().guardians().longshot().first()!.targetType).toBe('both');
  });

  it('guardianType is longshot', () => {
    expect(home().guardians().longshot().first()!.guardianType).toBe('longshot');
  });

  it('specialAbility is Final Blow', () => {
    expect(home().guardians().longshot().first()!.specialAbility).toBe('Final Blow');
  });

  it('base is home', () => {
    expect(home().guardians().longshot().first()!.base).toBe('home');
  });

  it('category is guardian', () => {
    expect(home().guardians().longshot().first()!.category).toBe('guardian');
  });

  it('size is N/A', () => {
    expect(home().guardians().longshot().first()!.size).toBe('N/A');
  });
});

describe('longshot() mode', () => {
  it('attackSpeed is 1.8s', () => {
    expect(home().guardians().longshot().first()!.mode.attackSpeed).toBe(1.8);
  });

  it('damageType is splash', () => {
    expect(home().guardians().longshot().first()!.mode.damageType).toBe('splash');
  });

  it('range is 11 tiles', () => {
    expect(home().guardians().longshot().first()!.mode.range).toBe(11);
  });

  it('damageRadius is 1 tile', () => {
    expect(home().guardians().longshot().first()!.mode.damageRadius).toBe(1);
  });

  it('deathDamageRadius is 3.5 tiles', () => {
    expect(home().guardians().longshot().first()!.mode.deathDamageRadius).toBe(3.5);
  });

  it('movementSpeed is 12', () => {
    expect(home().guardians().longshot().first()!.mode.movementSpeed).toBe(12);
  });

  it('patrolRadius is 17 tiles', () => {
    expect(home().guardians().longshot().first()!.mode.patrolRadius).toBe(17);
  });

  it('triggerRadius is 19 tiles', () => {
    expect(home().guardians().longshot().first()!.mode.triggerRadius).toBe(19);
  });

  it('has no searchRadius', () => {
    expect(home().guardians().longshot().first()!.mode.searchRadius).toBeUndefined();
  });
});

describe('longshot() levels', () => {
  it('level 1 hitpoints is 7000', () => {
    expect(home().guardians().longshot().first()!.levels[0].hitpoints).toBe(7000);
  });

  it('level 1 dps is 330', () => {
    expect(home().guardians().longshot().first()!.levels[0].stats.normal.dps).toBe(330);
  });

  it('level 1 damagePerShot is 594', () => {
    expect(home().guardians().longshot().first()!.levels[0].stats.normal.damagePerShot).toBe(594);
  });

  it('level 1 deathDamage is 1000', () => {
    expect(home().guardians().longshot().first()!.levels[0].deathDamage).toBe(1000);
  });

  it('level 1 buildCost is 0 (initial unlock)', () => {
    expect(home().guardians().longshot().first()!.levels[0].buildCost).toBe(0);
    expect(home().guardians().longshot().first()!.levels[0].buildCostResource).toBe('Elixir');
  });

  it('level 1 buildTime is instant', () => {
    expect(home().guardians().longshot().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 0', () => {
    expect(home().guardians().longshot().first()!.levels[0].xpGained).toBe(0);
  });

  it('level 1 townHallRequired is 18', () => {
    expect(home().guardians().longshot().first()!.levels[0].townHallRequired).toBe(18);
  });

  it('level 2 hitpoints is 8000', () => {
    expect(home().guardians().longshot().first()!.levels[1].hitpoints).toBe(8000);
  });

  it('level 2 dps is 360', () => {
    expect(home().guardians().longshot().first()!.levels[1].stats.normal.dps).toBe(360);
  });

  it('level 2 buildCost is 18000000 Elixir', () => {
    expect(home().guardians().longshot().first()!.levels[1].buildCost).toBe(18000000);
    expect(home().guardians().longshot().first()!.levels[1].buildCostResource).toBe('Elixir');
  });

  it('level 2 buildTime is 7d', () => {
    expect(home().guardians().longshot().first()!.levels[1].buildTime).toEqual({
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 2 xpGained is 777', () => {
    expect(home().guardians().longshot().first()!.levels[1].xpGained).toBe(777);
  });

  it('level 3 dps is 390', () => {
    expect(home().guardians().longshot().first()!.levels[2].stats.normal.dps).toBe(390);
  });

  it('level 3 buildCost is 22000000 Elixir', () => {
    expect(home().guardians().longshot().first()!.levels[2].buildCost).toBe(22000000);
  });

  it('level 3 buildTime is 9d', () => {
    expect(home().guardians().longshot().first()!.levels[2].buildTime).toEqual({
      days: 9,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 3 xpGained is 881', () => {
    expect(home().guardians().longshot().first()!.levels[2].xpGained).toBe(881);
  });

  it('level 4 dps is 420', () => {
    expect(home().guardians().longshot().first()!.levels[3].stats.normal.dps).toBe(420);
  });

  it('level 4 buildTime is 11d', () => {
    expect(home().guardians().longshot().first()!.levels[3].buildTime).toEqual({
      days: 11,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 4 xpGained is 974', () => {
    expect(home().guardians().longshot().first()!.levels[3].xpGained).toBe(974);
  });

  it('level 5 hitpoints is 11000', () => {
    expect(home().guardians().longshot().first()!.levels[4].hitpoints).toBe(11000);
  });

  it('level 5 dps is 450', () => {
    expect(home().guardians().longshot().first()!.levels[4].stats.normal.dps).toBe(450);
  });

  it('level 5 damagePerShot is 810', () => {
    expect(home().guardians().longshot().first()!.levels[4].stats.normal.damagePerShot).toBe(810);
  });

  it('level 5 buildCost is 28000000 Elixir', () => {
    expect(home().guardians().longshot().first()!.levels[4].buildCost).toBe(28000000);
  });

  it('level 5 buildTime is 13d', () => {
    expect(home().guardians().longshot().first()!.levels[4].buildTime).toEqual({
      days: 13,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 5 xpGained is 1059', () => {
    expect(home().guardians().longshot().first()!.levels[4].xpGained).toBe(1059);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().guardians().longshot().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('all levels have deathDamage of 1000', () => {
    for (const lvl of home().guardians().longshot().first()!.levels) {
      expect(lvl.deathDamage).toBe(1000);
    }
  });
});

describe('longshot() availablePerTownHall', () => {
  it('only available at TH18 with count 1', () => {
    expect(home().guardians().longshot().first()!.availablePerTownHall).toHaveLength(1);
    const th18 = home().guardians().longshot().first()!.availablePerTownHall[0];
    expect(th18.townHallLevel).toBe(18);
    expect(th18.count).toBe(1);
  });

  it('not available below TH18', () => {
    const below = home()
      .guardians()
      .longshot()
      .first()!
      .availablePerTownHall.filter((a) => a.townHallLevel < 18);
    expect(below).toHaveLength(0);
  });
});

describe('longshot() integration with homeGuardians()', () => {
  it('is included in homeGuardians()', () => {
    const result = home().guardians().findByName('Longshot');
    expect(result).toBeDefined();
    expect(result!.id).toBe('longshot');
  });

  it('homeGuardians().byGuardianType("longshot") returns one result', () => {
    expect(home().guardians().byGuardianType('longshot').count()).toBe(1);
  });

  it('homeGuardians().byTownHall(17) excludes Longshot', () => {
    const names = home()
      .guardians()
      .byTownHall(17)
      .get()
      .map((g) => g.name);
    expect(names).not.toContain('Longshot');
  });

  it('homeGuardians().byTownHall(18) includes Longshot', () => {
    const names = home()
      .guardians()
      .byTownHall(18)
      .get()
      .map((g) => g.name);
    expect(names).toContain('Longshot');
  });

  it('is a HomeVillageGuardians instance', () => {
    expect(home().guardians().byGuardianType('longshot')).toBeInstanceOf(HomeVillageGuardians);
  });

  testFilterImmutability(
    'homeGuardians filter immutability',
    () => home().guardians(),
    (q) => (q as HomeVillageGuardians).byGuardianType('longshot'),
  );
});
