import { home } from '@/modules/home';
import { HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('ricochetCannon()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().ricochetCannon().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('ricochet-cannon');
    expect(result.name).toBe('Ricochet Cannon');
  });

  it('has 6 levels', () => {
    expect(home().defenses().ricochetCannon().first()!.levels).toHaveLength(6);
  });

  it('targets ground only', () => {
    expect(home().defenses().ricochetCannon().first()!.targetType).toBe('ground');
  });

  it('size is 3x3', () => {
    expect(home().defenses().ricochetCannon().first()!.size).toBe('3x3');
  });

  it('has no gear-up', () => {
    expect(home().defenses().ricochetCannon().first()!.gearUp).toBeUndefined();
  });

  it('base is home', () => {
    expect(home().defenses().ricochetCannon().first()!.base).toBe('home');
  });

  it('category is defense', () => {
    expect(home().defenses().ricochetCannon().first()!.category).toBe('defense');
  });
});

describe('ricochetCannon() modes', () => {
  it('has a normal mode', () => {
    expect(home().defenses().ricochetCannon().first()!.modes.normal).toBeDefined();
  });

  it('normal mode range is 9', () => {
    expect(home().defenses().ricochetCannon().first()!.modes.normal!.range).toBe(9);
  });

  it('normal mode attackSpeed is 0.8s', () => {
    expect(home().defenses().ricochetCannon().first()!.modes.normal!.attackSpeed).toBe(0.8);
  });

  it('normal mode damageType is ricochet', () => {
    expect(home().defenses().ricochetCannon().first()!.modes.normal!.damageType).toBe('ricochet');
  });

  it('normal mode chainRange is 3.5', () => {
    expect(home().defenses().ricochetCannon().first()!.modes.normal!.chainRange).toBe(3.5);
  });
});

describe('ricochetCannon() levels', () => {
  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[0].hitpoints).toBe(5400);
  });

  it('level 1 dps is 360', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[0].stats.normal.dps).toBe(360);
  });

  it('level 1 damagePerShot is 288', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[0].stats.normal.damagePerShot).toBe(
      288,
    );
  });

  it('level 1 secondaryChainDamagePerShot is 201.6', () => {
    expect(
      home().defenses().ricochetCannon().first()!.levels[0].stats.normal
        .secondaryChainDamagePerShot,
    ).toBe(201.6);
  });

  it('level 1 buildCost is 12000000 Gold', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[0].buildCost).toBe(12000000);
    expect(home().defenses().ricochetCannon().first()!.levels[0].buildCostResource).toBe('Gold');
  });

  it('level 1 buildTime is 7d', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[0].buildTime).toEqual({
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 777', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[0].xpGained).toBe(777);
  });

  it('level 1 townHallRequired is 16', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[0].townHallRequired).toBe(16);
  });

  it('level 1 is not a supercharge', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[0].supercharge).toBeFalsy();
  });

  it('level 3 buildTime is 10d 18h', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[2].buildTime).toEqual({
      days: 10,
      hours: 18,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 3 townHallRequired is 17', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[2].townHallRequired).toBe(17);
  });

  it('level 4 dps is 412', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[3].stats.normal.dps).toBe(412);
  });

  it('level 4 damagePerShot is 329.6', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[3].stats.normal.damagePerShot).toBe(
      329.6,
    );
  });

  it('level 4 townHallRequired is 18', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[3].townHallRequired).toBe(18);
  });

  it('level 4 is not a supercharge', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[3].supercharge).toBeFalsy();
  });

  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[4].supercharge).toBe(true);
    expect(home().defenses().ricochetCannon().first()!.levels[4].level).toBe(1);
    expect(home().defenses().ricochetCannon().first()!.levels[5].supercharge).toBe(true);
    expect(home().defenses().ricochetCannon().first()!.levels[5].level).toBe(2);
  });

  it('supercharge 1 dps is 420', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[4].stats.normal.dps).toBe(420);
  });

  it('supercharge 1 secondaryChainDamagePerShot is 235.2', () => {
    expect(
      home().defenses().ricochetCannon().first()!.levels[4].stats.normal
        .secondaryChainDamagePerShot,
    ).toBe(235.2);
  });

  it('supercharge 1 hp matches regular level 4', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[4].hitpoints).toBe(6100);
  });

  it('supercharge 2 hp increased to 6250', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[5].hitpoints).toBe(6250);
  });

  it('supercharge levels require TH18', () => {
    expect(home().defenses().ricochetCannon().first()!.levels[4].townHallRequired).toBe(18);
    expect(home().defenses().ricochetCannon().first()!.levels[5].townHallRequired).toBe(18);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().defenses().ricochetCannon().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('ricochetCannon() availablePerTownHall', () => {
  it('first available at TH16 with count 2', () => {
    const th16 = home()
      .defenses()
      .ricochetCannon()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 16);
    expect(th16).toBeDefined();
    expect(th16!.count).toBe(2);
  });

  it('count increases to 3 at TH17', () => {
    const th17 = home()
      .defenses()
      .ricochetCannon()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 17);
    expect(th17!.count).toBe(3);
  });

  it('not available below TH16', () => {
    const below = home()
      .defenses()
      .ricochetCannon()
      .first()!
      .availablePerTownHall.filter((a) => a.townHallLevel < 16);
    expect(below).toHaveLength(0);
  });
});

describe('ricochetCannon() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = home().defenses().findByName('Ricochet Cannon');
    expect(result).toBeDefined();
    expect(result!.id).toBe('ricochet-cannon');
  });

  it('homeDefenses().byBuilding("Ricochet Cannon") returns one result', () => {
    expect(home().defenses().byBuilding('Ricochet Cannon').count()).toBe(1);
  });

  it('homeDefenses().byTownHall(15) excludes Ricochet Cannon', () => {
    const names = home()
      .defenses()
      .byTownHall(15)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Ricochet Cannon');
  });

  it('homeDefenses().byTownHall(16) includes Ricochet Cannon', () => {
    const names = home()
      .defenses()
      .byTownHall(16)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Ricochet Cannon');
  });

  it('homeDefenses().byDamageType("ricochet") includes Ricochet Cannon', () => {
    const names = home()
      .defenses()
      .byDamageType('ricochet')
      .get()
      .map((d) => d.name);
    expect(names).toContain('Ricochet Cannon');
  });

  it('homeDefenses().hasGearUp() excludes Ricochet Cannon', () => {
    const names = home()
      .defenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Ricochet Cannon');
  });

  it('is a HomeVillageDefenses instance', () => {
    expect(home().defenses().byBuilding('Ricochet Cannon')).toBeInstanceOf(HomeVillageDefenses);
  });

  testFilterImmutability(
    'homeDefenses filter immutability',
    () => home().defenses(),
    (q) => (q as HomeVillageDefenses).byBuilding('Ricochet Cannon'),
  );
});
