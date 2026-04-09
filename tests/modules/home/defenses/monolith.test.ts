import { home, HomeVillageDefenses } from '@/modules/home';

describe('monolith()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().monolith().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('monolith');
    expect(result.name).toBe('Monolith');
  });

  it('has 6 levels', () => {
    expect(home().defenses().monolith().first()!.levels).toHaveLength(6);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().monolith().first()!.targetType).toBe('both');
  });

  it('size is 3x3', () => {
    expect(home().defenses().monolith().first()!.size).toBe('3x3');
  });

  it('has no gear-up', () => {
    expect(home().defenses().monolith().first()!.gearUp).toBeUndefined();
  });

  it('base is home', () => {
    expect(home().defenses().monolith().first()!.base).toBe('home');
  });

  it('category is defense', () => {
    expect(home().defenses().monolith().first()!.category).toBe('defense');
  });
});

describe('monolith() modes', () => {
  it('has a normal mode', () => {
    expect(home().defenses().monolith().first()!.modes.normal).toBeDefined();
  });

  it('normal mode range is 11', () => {
    expect(home().defenses().monolith().first()!.modes.normal!.range).toBe(11);
  });

  it('normal mode attackSpeed is 1.5s', () => {
    expect(home().defenses().monolith().first()!.modes.normal!.attackSpeed).toBe(1.5);
  });

  it('normal mode damageType is single', () => {
    expect(home().defenses().monolith().first()!.modes.normal!.damageType).toBe('single');
  });
});

describe('monolith() levels', () => {
  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().monolith().first()!.levels[0].hitpoints).toBe(4747);
  });

  it('level 1 has correct dps', () => {
    expect(home().defenses().monolith().first()!.levels[0].stats.normal.dps).toBe(150);
  });

  it('level 1 has correct damagePerShot', () => {
    expect(home().defenses().monolith().first()!.levels[0].stats.normal.damagePerShot).toBe(225);
  });

  it('level 1 has bonusDamagePercent of 11%', () => {
    expect(home().defenses().monolith().first()!.levels[0].stats.normal.bonusDamagePercent).toBe(
      11,
    );
  });

  it('level 1 buildCost is 200000 Dark Elixir', () => {
    expect(home().defenses().monolith().first()!.levels[0].buildCost).toBe(200000);
    expect(home().defenses().monolith().first()!.levels[0].buildCostResource).toBe('Dark Elixir');
  });

  it('level 1 buildTime is 7d', () => {
    expect(home().defenses().monolith().first()!.levels[0].buildTime).toEqual({
      days: 7,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 777', () => {
    expect(home().defenses().monolith().first()!.levels[0].xpGained).toBe(777);
  });

  it('level 1 townHallRequired is 15', () => {
    expect(home().defenses().monolith().first()!.levels[0].townHallRequired).toBe(15);
  });

  it('level 1 is not a supercharge', () => {
    expect(home().defenses().monolith().first()!.levels[0].supercharge).toBeFalsy();
  });

  it('level 4 has correct dps', () => {
    expect(home().defenses().monolith().first()!.levels[3].stats.normal.dps).toBe(209);
  });

  it('level 4 has bonusDamagePercent of 14%', () => {
    expect(home().defenses().monolith().first()!.levels[3].stats.normal.bonusDamagePercent).toBe(
      14,
    );
  });

  it('level 4 townHallRequired is 17', () => {
    expect(home().defenses().monolith().first()!.levels[3].townHallRequired).toBe(17);
  });

  it('level 4 is not a supercharge', () => {
    expect(home().defenses().monolith().first()!.levels[3].supercharge).toBeFalsy();
  });

  it('supercharge 1 is the first supercharge level', () => {
    expect(home().defenses().monolith().first()!.levels[4].supercharge).toBe(true);
    expect(home().defenses().monolith().first()!.levels[4].level).toBe(1);
  });

  it('supercharge 1 has dps of 219', () => {
    expect(home().defenses().monolith().first()!.levels[4].stats.normal.dps).toBe(219);
  });

  it('supercharge 1 hitpoints equal regular level 4', () => {
    expect(home().defenses().monolith().first()!.levels[4].hitpoints).toBe(5656);
  });

  it('supercharge 1 buildCost is 150000 Dark Elixir', () => {
    expect(home().defenses().monolith().first()!.levels[4].buildCost).toBe(150000);
    expect(home().defenses().monolith().first()!.levels[4].buildCostResource).toBe('Dark Elixir');
  });

  it('supercharge 2 is the second supercharge level', () => {
    expect(home().defenses().monolith().first()!.levels[5].supercharge).toBe(true);
    expect(home().defenses().monolith().first()!.levels[5].level).toBe(2);
  });

  it('supercharge 2 hitpoints increased from supercharge 1', () => {
    expect(home().defenses().monolith().first()!.levels[5].hitpoints).toBe(5858);
  });

  it('supercharge 2 dps matches supercharge 1', () => {
    expect(home().defenses().monolith().first()!.levels[5].stats.normal.dps).toBe(219);
  });

  it('supercharge 1 and 2 have same damagePerShot', () => {
    expect(home().defenses().monolith().first()!.levels[4].stats.normal.damagePerShot).toBe(328.5);
    expect(home().defenses().monolith().first()!.levels[5].stats.normal.damagePerShot).toBe(328.5);
  });

  it('bonusDamagePercent increases with regular levels', () => {
    const levels = home()
      .defenses()
      .monolith()
      .first()!
      .levels.filter((l) => !l.supercharge);
    const percents = levels.map((l) => l.stats.normal.bonusDamagePercent!);
    for (let i = 1; i < percents.length; i++) {
      expect(percents[i]).toBeGreaterThanOrEqual(percents[i - 1]);
    }
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().defenses().monolith().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('monolith() availablePerTownHall', () => {
  it('has entries', () => {
    expect(home().defenses().monolith().first()!.availablePerTownHall.length).toBeGreaterThan(0);
  });

  it('first available at TH14', () => {
    const th14 = home()
      .defenses()
      .monolith()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 14);
    expect(th14).toBeDefined();
    expect(th14!.count).toBe(1);
  });

  it('count is 1 from TH14 onwards', () => {
    for (const a of home().defenses().monolith().first()!.availablePerTownHall) {
      expect(a.count).toBe(1);
    }
  });

  it('not available below TH14', () => {
    const below = home()
      .defenses()
      .monolith()
      .first()!
      .availablePerTownHall.filter((a) => a.townHallLevel < 14);
    expect(below).toHaveLength(0);
  });
});

describe('monolith() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = home().defenses().findByName('Monolith');
    expect(result).toBeDefined();
    expect(result!.id).toBe('monolith');
  });

  it('homeDefenses().byBuilding("Monolith") returns one result', () => {
    expect(home().defenses().byBuilding('Monolith').count()).toBe(1);
  });

  it('homeDefenses().byTownHall(14) excludes Monolith (no buildable level until TH15)', () => {
    const names = home()
      .defenses()
      .byTownHall(14)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Monolith');
  });

  it('homeDefenses().byTownHall(15) includes Monolith', () => {
    const names = home()
      .defenses()
      .byTownHall(15)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Monolith');
  });

  it('homeDefenses().byDamageType("single") includes Monolith', () => {
    const names = home()
      .defenses()
      .byDamageType('single')
      .get()
      .map((d) => d.name);
    expect(names).toContain('Monolith');
  });

  it('homeDefenses().hasGearUp() excludes Monolith', () => {
    const names = home()
      .defenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Monolith');
  });

  it('is a HomeVillageDefenses instance', () => {
    expect(home().defenses().byBuilding('Monolith')).toBeInstanceOf(HomeVillageDefenses);
  });
});
