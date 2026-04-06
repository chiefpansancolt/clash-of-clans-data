import { HomeDefenseQuery, homeDefenses } from '@/modules/home/defenses';
import { ricochetCannon } from '@/modules/home/defenses/ricochet-cannon';
import { testFilterImmutability } from '../../../helpers';

describe('ricochetCannon()', () => {
  it('returns a HomeDefense object', () => {
    const result = ricochetCannon();
    expect(result).toBeDefined();
    expect(result.id).toBe('ricochet-cannon');
    expect(result.name).toBe('Ricochet Cannon');
  });

  it('has 6 levels', () => {
    expect(ricochetCannon().levels).toHaveLength(6);
  });

  it('targets ground only', () => {
    expect(ricochetCannon().targetType).toBe('ground');
  });

  it('size is 3x3', () => {
    expect(ricochetCannon().size).toBe('3x3');
  });

  it('has no gear-up', () => {
    expect(ricochetCannon().gearUp).toBeUndefined();
  });

  it('base is home', () => {
    expect(ricochetCannon().base).toBe('home');
  });

  it('category is defense', () => {
    expect(ricochetCannon().category).toBe('defense');
  });
});

describe('ricochetCannon() modes', () => {
  it('has a normal mode', () => {
    expect(ricochetCannon().modes.normal).toBeDefined();
  });

  it('normal mode range is 9', () => {
    expect(ricochetCannon().modes.normal!.range).toBe(9);
  });

  it('normal mode attackSpeed is 0.8s', () => {
    expect(ricochetCannon().modes.normal!.attackSpeed).toBe(0.8);
  });

  it('normal mode damageType is ricochet', () => {
    expect(ricochetCannon().modes.normal!.damageType).toBe('ricochet');
  });

  it('normal mode chainRange is 3.5', () => {
    expect(ricochetCannon().modes.normal!.chainRange).toBe(3.5);
  });
});

describe('ricochetCannon() levels', () => {
  it('level 1 has correct hitpoints', () => {
    expect(ricochetCannon().levels[0].hitpoints).toBe(5400);
  });

  it('level 1 dps is 360', () => {
    expect(ricochetCannon().levels[0].stats.normal.dps).toBe(360);
  });

  it('level 1 damagePerShot is 288', () => {
    expect(ricochetCannon().levels[0].stats.normal.damagePerShot).toBe(288);
  });

  it('level 1 secondaryChainDamagePerShot is 201.6', () => {
    expect(ricochetCannon().levels[0].stats.normal.secondaryChainDamagePerShot).toBe(201.6);
  });

  it('level 1 buildCost is 12000000 Gold', () => {
    expect(ricochetCannon().levels[0].buildCost).toBe(12000000);
    expect(ricochetCannon().levels[0].buildCostResource).toBe('Gold');
  });

  it('level 1 buildTime is 7d', () => {
    expect(ricochetCannon().levels[0].buildTime).toEqual({
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 777', () => {
    expect(ricochetCannon().levels[0].xpGained).toBe(777);
  });

  it('level 1 townHallRequired is 16', () => {
    expect(ricochetCannon().levels[0].townHallRequired).toBe(16);
  });

  it('level 1 is not a supercharge', () => {
    expect(ricochetCannon().levels[0].supercharge).toBeFalsy();
  });

  it('level 3 buildTime is 10d 18h', () => {
    expect(ricochetCannon().levels[2].buildTime).toEqual({
      days: 10,
      hours: 18,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 3 townHallRequired is 17', () => {
    expect(ricochetCannon().levels[2].townHallRequired).toBe(17);
  });

  it('level 4 dps is 412', () => {
    expect(ricochetCannon().levels[3].stats.normal.dps).toBe(412);
  });

  it('level 4 damagePerShot is 329.6', () => {
    expect(ricochetCannon().levels[3].stats.normal.damagePerShot).toBe(329.6);
  });

  it('level 4 townHallRequired is 18', () => {
    expect(ricochetCannon().levels[3].townHallRequired).toBe(18);
  });

  it('level 4 is not a supercharge', () => {
    expect(ricochetCannon().levels[3].supercharge).toBeFalsy();
  });

  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(ricochetCannon().levels[4].supercharge).toBe(true);
    expect(ricochetCannon().levels[4].level).toBe(1);
    expect(ricochetCannon().levels[5].supercharge).toBe(true);
    expect(ricochetCannon().levels[5].level).toBe(2);
  });

  it('supercharge 1 dps is 420', () => {
    expect(ricochetCannon().levels[4].stats.normal.dps).toBe(420);
  });

  it('supercharge 1 secondaryChainDamagePerShot is 235.2', () => {
    expect(ricochetCannon().levels[4].stats.normal.secondaryChainDamagePerShot).toBe(235.2);
  });

  it('supercharge 1 hp matches regular level 4', () => {
    expect(ricochetCannon().levels[4].hitpoints).toBe(6100);
  });

  it('supercharge 2 hp increased to 6250', () => {
    expect(ricochetCannon().levels[5].hitpoints).toBe(6250);
  });

  it('supercharge levels require TH18', () => {
    expect(ricochetCannon().levels[4].townHallRequired).toBe(18);
    expect(ricochetCannon().levels[5].townHallRequired).toBe(18);
  });

  it('all levels have a normal image', () => {
    for (const lvl of ricochetCannon().levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('ricochetCannon() availablePerTownHall', () => {
  it('first available at TH16 with count 2', () => {
    const th16 = ricochetCannon().availablePerTownHall.find((a) => a.townHallLevel === 16);
    expect(th16).toBeDefined();
    expect(th16!.count).toBe(2);
  });

  it('count increases to 3 at TH17', () => {
    const th17 = ricochetCannon().availablePerTownHall.find((a) => a.townHallLevel === 17);
    expect(th17!.count).toBe(3);
  });

  it('not available below TH16', () => {
    const below = ricochetCannon().availablePerTownHall.filter((a) => a.townHallLevel < 16);
    expect(below).toHaveLength(0);
  });
});

describe('ricochetCannon() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = homeDefenses().findByName('Ricochet Cannon');
    expect(result).toBeDefined();
    expect(result!.id).toBe('ricochet-cannon');
  });

  it('homeDefenses().byBuilding("Ricochet Cannon") returns one result', () => {
    expect(homeDefenses().byBuilding('Ricochet Cannon').count()).toBe(1);
  });

  it('homeDefenses().byTownHall(15) excludes Ricochet Cannon', () => {
    const names = homeDefenses()
      .byTownHall(15)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Ricochet Cannon');
  });

  it('homeDefenses().byTownHall(16) includes Ricochet Cannon', () => {
    const names = homeDefenses()
      .byTownHall(16)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Ricochet Cannon');
  });

  it('homeDefenses().byDamageType("ricochet") includes Ricochet Cannon', () => {
    const names = homeDefenses()
      .byDamageType('ricochet')
      .get()
      .map((d) => d.name);
    expect(names).toContain('Ricochet Cannon');
  });

  it('homeDefenses().hasGearUp() excludes Ricochet Cannon', () => {
    const names = homeDefenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Ricochet Cannon');
  });

  it('is a HomeDefenseQuery instance', () => {
    expect(homeDefenses().byBuilding('Ricochet Cannon')).toBeInstanceOf(HomeDefenseQuery);
  });

  testFilterImmutability(
    'homeDefenses filter immutability',
    () => homeDefenses(),
    (q) => (q as HomeDefenseQuery).byBuilding('Ricochet Cannon'),
  );
});
