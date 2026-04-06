import { HomeDefenseQuery, homeDefenses } from '@/modules/home/defenses';
import { multiArcherTower } from '@/modules/home/defenses/multi-archer-tower';
import { testFilterImmutability } from '../../../helpers';

describe('multiArcherTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = multiArcherTower();
    expect(result).toBeDefined();
    expect(result.id).toBe('multi-archer-tower');
    expect(result.name).toBe('Multi-Archer Tower');
  });

  it('has 6 levels', () => {
    expect(multiArcherTower().levels).toHaveLength(6);
  });

  it('targets both ground and air', () => {
    expect(multiArcherTower().targetType).toBe('both');
  });

  it('size is 3x3', () => {
    expect(multiArcherTower().size).toBe('3x3');
  });

  it('has no gear-up', () => {
    expect(multiArcherTower().gearUp).toBeUndefined();
  });

  it('base is home', () => {
    expect(multiArcherTower().base).toBe('home');
  });

  it('category is defense', () => {
    expect(multiArcherTower().category).toBe('defense');
  });
});

describe('multiArcherTower() modes', () => {
  it('has a normal mode', () => {
    expect(multiArcherTower().modes.normal).toBeDefined();
  });

  it('normal mode range is 10', () => {
    expect(multiArcherTower().modes.normal!.range).toBe(10);
  });

  it('normal mode attackSpeed is 0.6s', () => {
    expect(multiArcherTower().modes.normal!.attackSpeed).toBe(0.6);
  });

  it('normal mode damageType is multiple', () => {
    expect(multiArcherTower().modes.normal!.damageType).toBe('multiple');
  });

  it('normal mode numberOfTargets is 3', () => {
    expect(multiArcherTower().modes.normal!.numberOfTargets).toBe(3);
  });
});

describe('multiArcherTower() levels', () => {
  it('level 1 has correct hitpoints', () => {
    expect(multiArcherTower().levels[0].hitpoints).toBe(5000);
  });

  it('level 1 dps per archer is 100', () => {
    expect(multiArcherTower().levels[0].stats.normal.dps).toBe(100);
  });

  it('level 1 damagePerShot per archer is 60', () => {
    expect(multiArcherTower().levels[0].stats.normal.damagePerShot).toBe(60);
  });

  it('level 1 buildCost is 12000000 Gold', () => {
    expect(multiArcherTower().levels[0].buildCost).toBe(12000000);
    expect(multiArcherTower().levels[0].buildCostResource).toBe('Gold');
  });

  it('level 1 buildTime is 7d', () => {
    expect(multiArcherTower().levels[0].buildTime).toEqual({
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 777', () => {
    expect(multiArcherTower().levels[0].xpGained).toBe(777);
  });

  it('level 1 townHallRequired is 16', () => {
    expect(multiArcherTower().levels[0].townHallRequired).toBe(16);
  });

  it('level 1 is not a supercharge', () => {
    expect(multiArcherTower().levels[0].supercharge).toBeFalsy();
  });

  it('level 4 has correct dps', () => {
    expect(multiArcherTower().levels[3].stats.normal.dps).toBe(121);
  });

  it('level 4 townHallRequired is 18', () => {
    expect(multiArcherTower().levels[3].townHallRequired).toBe(18);
  });

  it('level 4 is not a supercharge', () => {
    expect(multiArcherTower().levels[3].supercharge).toBeFalsy();
  });

  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(multiArcherTower().levels[4].supercharge).toBe(true);
    expect(multiArcherTower().levels[4].level).toBe(1);
    expect(multiArcherTower().levels[5].supercharge).toBe(true);
    expect(multiArcherTower().levels[5].level).toBe(2);
  });

  it('supercharge 1 dps per archer is 126', () => {
    expect(multiArcherTower().levels[4].stats.normal.dps).toBe(126);
  });

  it('supercharge 1 hp matches regular level 4', () => {
    expect(multiArcherTower().levels[4].hitpoints).toBe(5500);
  });

  it('supercharge 2 hp increased to 5600', () => {
    expect(multiArcherTower().levels[5].hitpoints).toBe(5600);
  });

  it('supercharge levels require TH18', () => {
    expect(multiArcherTower().levels[4].townHallRequired).toBe(18);
    expect(multiArcherTower().levels[5].townHallRequired).toBe(18);
  });

  it('all levels have a normal image', () => {
    for (const lvl of multiArcherTower().levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('multiArcherTower() availablePerTownHall', () => {
  it('first available at TH16 with count 2', () => {
    const th16 = multiArcherTower().availablePerTownHall.find((a) => a.townHallLevel === 16);
    expect(th16).toBeDefined();
    expect(th16!.count).toBe(2);
  });

  it('count increases to 3 at TH17', () => {
    const th17 = multiArcherTower().availablePerTownHall.find((a) => a.townHallLevel === 17);
    expect(th17!.count).toBe(3);
  });

  it('not available below TH16', () => {
    const below = multiArcherTower().availablePerTownHall.filter((a) => a.townHallLevel < 16);
    expect(below).toHaveLength(0);
  });
});

describe('multiArcherTower() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = homeDefenses().findByName('Multi-Archer Tower');
    expect(result).toBeDefined();
    expect(result!.id).toBe('multi-archer-tower');
  });

  it('homeDefenses().byBuilding("Multi-Archer Tower") returns one result', () => {
    expect(homeDefenses().byBuilding('Multi-Archer Tower').count()).toBe(1);
  });

  it('homeDefenses().byTownHall(15) excludes Multi-Archer Tower', () => {
    const names = homeDefenses()
      .byTownHall(15)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Multi-Archer Tower');
  });

  it('homeDefenses().byTownHall(16) includes Multi-Archer Tower', () => {
    const names = homeDefenses()
      .byTownHall(16)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Multi-Archer Tower');
  });

  it('homeDefenses().byDamageType("multiple") includes Multi-Archer Tower', () => {
    const names = homeDefenses()
      .byDamageType('multiple')
      .get()
      .map((d) => d.name);
    expect(names).toContain('Multi-Archer Tower');
  });

  it('homeDefenses().hasGearUp() excludes Multi-Archer Tower', () => {
    const names = homeDefenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Multi-Archer Tower');
  });

  it('is a HomeDefenseQuery instance', () => {
    expect(homeDefenses().byBuilding('Multi-Archer Tower')).toBeInstanceOf(HomeDefenseQuery);
  });

  testFilterImmutability(
    'homeDefenses filter immutability',
    () => homeDefenses(),
    (q) => (q as HomeDefenseQuery).byBuilding('Multi-Archer Tower'),
  );
});
