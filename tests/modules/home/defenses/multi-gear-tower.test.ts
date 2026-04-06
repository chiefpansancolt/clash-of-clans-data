import { HomeDefenseQuery, homeDefenses } from '@/modules/home/defenses';
import { multiGearTower } from '@/modules/home/defenses/multi-gear-tower';
import { testFilterImmutability } from '../../../helpers';

describe('multiGearTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = multiGearTower();
    expect(result).toBeDefined();
    expect(result.id).toBe('multi-gear-tower');
    expect(result.name).toBe('Multi-Gear Tower');
  });

  it('has 5 levels', () => {
    expect(multiGearTower().levels).toHaveLength(5);
  });

  it('targets both ground and air', () => {
    expect(multiGearTower().targetType).toBe('both');
  });

  it('size is 3x3', () => {
    expect(multiGearTower().size).toBe('3x3');
  });

  it('has no gear-up', () => {
    expect(multiGearTower().gearUp).toBeUndefined();
  });

  it('base is home', () => {
    expect(multiGearTower().base).toBe('home');
  });

  it('category is defense', () => {
    expect(multiGearTower().category).toBe('defense');
  });
});

describe('multiGearTower() modes', () => {
  it('has a normal (long range) mode', () => {
    expect(multiGearTower().modes.normal).toBeDefined();
  });

  it('normal mode range is 12', () => {
    expect(multiGearTower().modes.normal!.range).toBe(12);
  });

  it('normal mode attackSpeed is 1s', () => {
    expect(multiGearTower().modes.normal!.attackSpeed).toBe(1);
  });

  it('normal mode damageType is single', () => {
    expect(multiGearTower().modes.normal!.damageType).toBe('single');
  });

  it('has a fast attack mode', () => {
    expect(multiGearTower().modes.fastAttack).toBeDefined();
  });

  it('fast attack mode range is 8', () => {
    expect(multiGearTower().modes.fastAttack!.range).toBe(8);
  });

  it('fast attack mode attackSpeed is 0.192s', () => {
    expect(multiGearTower().modes.fastAttack!.attackSpeed).toBe(0.192);
  });

  it('fast attack mode damageType is single', () => {
    expect(multiGearTower().modes.fastAttack!.damageType).toBe('single');
  });

  it('fast attack mode shotsPerBurst is 4', () => {
    expect(multiGearTower().modes.fastAttack!.shotsPerBurst).toBe(4);
  });

  it('fast attack mode timeBetweenBursts is 0.383s', () => {
    expect(multiGearTower().modes.fastAttack!.timeBetweenBursts).toBe(0.383);
  });

  it('fast attack mode is available from level 1', () => {
    expect(multiGearTower().modes.fastAttack!.availableFromLevel).toBe(1);
  });
});

describe('multiGearTower() levels', () => {
  it('level 1 has correct hitpoints', () => {
    expect(multiGearTower().levels[0].hitpoints).toBe(4000);
  });

  it('level 1 normal dps is 350', () => {
    expect(multiGearTower().levels[0].stats.normal.dps).toBe(350);
  });

  it('level 1 normal damagePerShot is 350', () => {
    expect(multiGearTower().levels[0].stats.normal.damagePerShot).toBe(350);
  });

  it('level 1 fast attack dps is 650', () => {
    expect(multiGearTower().levels[0].stats.fastAttack!.dps).toBe(650);
  });

  it('level 1 fast attack damagePerShot is 156', () => {
    expect(multiGearTower().levels[0].stats.fastAttack!.damagePerShot).toBe(156);
  });

  it('level 1 buildCost is 17000000 Gold', () => {
    expect(multiGearTower().levels[0].buildCost).toBe(17000000);
    expect(multiGearTower().levels[0].buildCostResource).toBe('Gold');
  });

  it('level 1 buildTime is 10d', () => {
    expect(multiGearTower().levels[0].buildTime).toEqual({
      days: 10,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 929', () => {
    expect(multiGearTower().levels[0].xpGained).toBe(929);
  });

  it('level 1 townHallRequired is 17', () => {
    expect(multiGearTower().levels[0].townHallRequired).toBe(17);
  });

  it('level 1 is not a supercharge', () => {
    expect(multiGearTower().levels[0].supercharge).toBeFalsy();
  });

  it('level 2 buildTime is 10d 18h', () => {
    expect(multiGearTower().levels[1].buildTime).toEqual({
      days: 10,
      hours: 18,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 3 townHallRequired is 18', () => {
    expect(multiGearTower().levels[2].townHallRequired).toBe(18);
  });

  it('level 3 normal dps is 390', () => {
    expect(multiGearTower().levels[2].stats.normal.dps).toBe(390);
  });

  it('level 3 fast attack dps is 710', () => {
    expect(multiGearTower().levels[2].stats.fastAttack!.dps).toBe(710);
  });

  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(multiGearTower().levels[3].supercharge).toBe(true);
    expect(multiGearTower().levels[3].level).toBe(1);
    expect(multiGearTower().levels[4].supercharge).toBe(true);
    expect(multiGearTower().levels[4].level).toBe(2);
  });

  it('supercharge 1 normal dps is 400', () => {
    expect(multiGearTower().levels[3].stats.normal.dps).toBe(400);
  });

  it('supercharge 1 fast attack dps is 720', () => {
    expect(multiGearTower().levels[3].stats.fastAttack!.dps).toBe(720);
  });

  it('supercharge 1 fast attack damagePerShot is 172.8', () => {
    expect(multiGearTower().levels[3].stats.fastAttack!.damagePerShot).toBe(172.8);
  });

  it('supercharge 1 hp matches regular level 3', () => {
    expect(multiGearTower().levels[3].hitpoints).toBe(4350);
  });

  it('supercharge 2 hp increased to 4500', () => {
    expect(multiGearTower().levels[4].hitpoints).toBe(4500);
  });

  it('supercharge levels require TH18', () => {
    expect(multiGearTower().levels[3].townHallRequired).toBe(18);
    expect(multiGearTower().levels[4].townHallRequired).toBe(18);
  });

  it('all levels have a normal image', () => {
    for (const lvl of multiGearTower().levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('all levels have a fast attack image', () => {
    for (const lvl of multiGearTower().levels) {
      expect(lvl.images.fastAttack).toBeTruthy();
    }
  });
});

describe('multiGearTower() availablePerTownHall', () => {
  it('first available at TH17 with count 1', () => {
    const th17 = multiGearTower().availablePerTownHall.find((a) => a.townHallLevel === 17);
    expect(th17).toBeDefined();
    expect(th17!.count).toBe(1);
  });

  it('count stays at 1 at TH18', () => {
    const th18 = multiGearTower().availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18!.count).toBe(1);
  });

  it('not available below TH17', () => {
    const below = multiGearTower().availablePerTownHall.filter((a) => a.townHallLevel < 17);
    expect(below).toHaveLength(0);
  });
});

describe('multiGearTower() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = homeDefenses().findByName('Multi-Gear Tower');
    expect(result).toBeDefined();
    expect(result!.id).toBe('multi-gear-tower');
  });

  it('homeDefenses().byBuilding("Multi-Gear Tower") returns one result', () => {
    expect(homeDefenses().byBuilding('Multi-Gear Tower').count()).toBe(1);
  });

  it('homeDefenses().byTownHall(16) excludes Multi-Gear Tower', () => {
    const names = homeDefenses()
      .byTownHall(16)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Multi-Gear Tower');
  });

  it('homeDefenses().byTownHall(17) includes Multi-Gear Tower', () => {
    const names = homeDefenses()
      .byTownHall(17)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Multi-Gear Tower');
  });

  it('homeDefenses().byDamageType("single") includes Multi-Gear Tower', () => {
    const names = homeDefenses()
      .byDamageType('single')
      .get()
      .map((d) => d.name);
    expect(names).toContain('Multi-Gear Tower');
  });

  it('homeDefenses().hasGearUp() excludes Multi-Gear Tower', () => {
    const names = homeDefenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Multi-Gear Tower');
  });

  it('is a HomeDefenseQuery instance', () => {
    expect(homeDefenses().byBuilding('Multi-Gear Tower')).toBeInstanceOf(HomeDefenseQuery);
  });

  testFilterImmutability(
    'homeDefenses filter immutability',
    () => homeDefenses(),
    (q) => (q as HomeDefenseQuery).byBuilding('Multi-Gear Tower'),
  );
});
