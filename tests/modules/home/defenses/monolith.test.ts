import { HomeDefenseQuery, homeDefenses } from '@/modules/home/defenses';
import { monolith } from '@/modules/home/defenses/monolith';
import { testFilterImmutability } from '../../../helpers';

describe('monolith()', () => {
  it('returns a HomeDefense object', () => {
    const result = monolith();
    expect(result).toBeDefined();
    expect(result.id).toBe('monolith');
    expect(result.name).toBe('Monolith');
  });

  it('has 6 levels', () => {
    expect(monolith().levels).toHaveLength(6);
  });

  it('targets both ground and air', () => {
    expect(monolith().targetType).toBe('both');
  });

  it('size is 3x3', () => {
    expect(monolith().size).toBe('3x3');
  });

  it('has no gear-up', () => {
    expect(monolith().gearUp).toBeUndefined();
  });

  it('base is home', () => {
    expect(monolith().base).toBe('home');
  });

  it('category is defense', () => {
    expect(monolith().category).toBe('defense');
  });
});

describe('monolith() modes', () => {
  it('has a normal mode', () => {
    expect(monolith().modes.normal).toBeDefined();
  });

  it('normal mode range is 11', () => {
    expect(monolith().modes.normal!.range).toBe(11);
  });

  it('normal mode attackSpeed is 1.5s', () => {
    expect(monolith().modes.normal!.attackSpeed).toBe(1.5);
  });

  it('normal mode damageType is single', () => {
    expect(monolith().modes.normal!.damageType).toBe('single');
  });
});

describe('monolith() levels', () => {
  it('level 1 has correct hitpoints', () => {
    expect(monolith().levels[0].hitpoints).toBe(4747);
  });

  it('level 1 has correct dps', () => {
    expect(monolith().levels[0].stats.normal.dps).toBe(150);
  });

  it('level 1 has correct damagePerShot', () => {
    expect(monolith().levels[0].stats.normal.damagePerShot).toBe(225);
  });

  it('level 1 has bonusDamagePercent of 11%', () => {
    expect(monolith().levels[0].stats.normal.bonusDamagePercent).toBe(11);
  });

  it('level 1 buildCost is 200000 Dark Elixir', () => {
    expect(monolith().levels[0].buildCost).toBe(200000);
    expect(monolith().levels[0].buildCostResource).toBe('Dark Elixir');
  });

  it('level 1 buildTime is 7d', () => {
    expect(monolith().levels[0].buildTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 1 xpGained is 777', () => {
    expect(monolith().levels[0].xpGained).toBe(777);
  });

  it('level 1 townHallRequired is 15', () => {
    expect(monolith().levels[0].townHallRequired).toBe(15);
  });

  it('level 1 is not a supercharge', () => {
    expect(monolith().levels[0].supercharge).toBeFalsy();
  });

  it('level 4 has correct dps', () => {
    expect(monolith().levels[3].stats.normal.dps).toBe(209);
  });

  it('level 4 has bonusDamagePercent of 14%', () => {
    expect(monolith().levels[3].stats.normal.bonusDamagePercent).toBe(14);
  });

  it('level 4 townHallRequired is 17', () => {
    expect(monolith().levels[3].townHallRequired).toBe(17);
  });

  it('level 4 is not a supercharge', () => {
    expect(monolith().levels[3].supercharge).toBeFalsy();
  });

  it('level 5 is the first supercharge', () => {
    expect(monolith().levels[4].supercharge).toBe(true);
  });

  it('level 5 has dps of 219', () => {
    expect(monolith().levels[4].stats.normal.dps).toBe(219);
  });

  it('level 5 hitpoints equal level 4', () => {
    expect(monolith().levels[4].hitpoints).toBe(5656);
  });

  it('level 5 buildCost is 150000 Dark Elixir', () => {
    expect(monolith().levels[4].buildCost).toBe(150000);
    expect(monolith().levels[4].buildCostResource).toBe('Dark Elixir');
  });

  it('level 6 is the second supercharge', () => {
    expect(monolith().levels[5].supercharge).toBe(true);
  });

  it('level 6 hitpoints increased from level 5', () => {
    expect(monolith().levels[5].hitpoints).toBe(5858);
  });

  it('level 6 dps matches level 5', () => {
    expect(monolith().levels[5].stats.normal.dps).toBe(219);
  });

  it('levels 5 and 6 have same damagePerShot', () => {
    expect(monolith().levels[4].stats.normal.damagePerShot).toBe(328.5);
    expect(monolith().levels[5].stats.normal.damagePerShot).toBe(328.5);
  });

  it('bonusDamagePercent increases with regular levels', () => {
    const levels = monolith().levels.filter((l) => !l.supercharge);
    const percents = levels.map((l) => l.stats.normal.bonusDamagePercent!);
    for (let i = 1; i < percents.length; i++) {
      expect(percents[i]).toBeGreaterThanOrEqual(percents[i - 1]);
    }
  });

  it('all levels have a normal image', () => {
    for (const lvl of monolith().levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('monolith() availablePerTownHall', () => {
  it('has entries', () => {
    expect(monolith().availablePerTownHall.length).toBeGreaterThan(0);
  });

  it('first available at TH14', () => {
    const th14 = monolith().availablePerTownHall.find((a) => a.townHallLevel === 14);
    expect(th14).toBeDefined();
    expect(th14!.count).toBe(1);
  });

  it('count is 1 from TH14 onwards', () => {
    for (const a of monolith().availablePerTownHall) {
      expect(a.count).toBe(1);
    }
  });

  it('not available below TH14', () => {
    const below = monolith().availablePerTownHall.filter((a) => a.townHallLevel < 14);
    expect(below).toHaveLength(0);
  });
});

describe('monolith() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = homeDefenses().findByName('Monolith');
    expect(result).toBeDefined();
    expect(result!.id).toBe('monolith');
  });

  it('homeDefenses().byBuilding("Monolith") returns one result', () => {
    expect(homeDefenses().byBuilding('Monolith').count()).toBe(1);
  });

  it('homeDefenses().byTownHall(14) excludes Monolith (no buildable level until TH15)', () => {
    const names = homeDefenses()
      .byTownHall(14)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Monolith');
  });

  it('homeDefenses().byTownHall(15) includes Monolith', () => {
    const names = homeDefenses()
      .byTownHall(15)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Monolith');
  });

  it('homeDefenses().byDamageType("single") includes Monolith', () => {
    const names = homeDefenses()
      .byDamageType('single')
      .get()
      .map((d) => d.name);
    expect(names).toContain('Monolith');
  });

  it('homeDefenses().hasGearUp() excludes Monolith', () => {
    const names = homeDefenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Monolith');
  });

  it('is a HomeDefenseQuery instance', () => {
    expect(homeDefenses().byBuilding('Monolith')).toBeInstanceOf(HomeDefenseQuery);
  });

  testFilterImmutability(
    'homeDefenses filter immutability',
    () => homeDefenses(),
    (q) => (q as HomeDefenseQuery).byBuilding('Monolith'),
  );
});
