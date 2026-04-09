import { home, HomeVillageDefenses } from '@/modules/home';

describe('firespitter()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().firespitter().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('firespitter');
    expect(result.name).toBe('Firespitter');
  });

  it('has 3 levels', () => {
    expect(home().defenses().firespitter().first()!.levels).toHaveLength(3);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().firespitter().first()!.targetType).toBe('both');
  });

  it('size is 3x3', () => {
    expect(home().defenses().firespitter().first()!.size).toBe('3x3');
  });

  it('has no gear-up', () => {
    expect(home().defenses().firespitter().first()!.gearUp).toBeUndefined();
  });

  it('base is home', () => {
    expect(home().defenses().firespitter().first()!.base).toBe('home');
  });

  it('category is defense', () => {
    expect(home().defenses().firespitter().first()!.category).toBe('defense');
  });
});

describe('firespitter() modes', () => {
  it('has a normal mode', () => {
    expect(home().defenses().firespitter().first()!.modes.normal).toBeDefined();
  });

  it('normal mode range is 16', () => {
    expect(home().defenses().firespitter().first()!.modes.normal!.range).toBe(16);
  });

  it('normal mode attackSpeed is 0.064s', () => {
    expect(home().defenses().firespitter().first()!.modes.normal!.attackSpeed).toBe(0.064);
  });

  it('normal mode damageType is multiple', () => {
    expect(home().defenses().firespitter().first()!.modes.normal!.damageType).toBe('multiple');
  });

  it('normal mode shotsPerBurst is 20', () => {
    expect(home().defenses().firespitter().first()!.modes.normal!.shotsPerBurst).toBe(20);
  });

  it('normal mode timeBetweenBursts is 1.0167s', () => {
    expect(home().defenses().firespitter().first()!.modes.normal!.timeBetweenBursts).toBe(1.0167);
  });
});

describe('firespitter() levels', () => {
  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().firespitter().first()!.levels[0].hitpoints).toBe(4500);
  });

  it('level 1 dps is 410', () => {
    expect(home().defenses().firespitter().first()!.levels[0].stats.normal.dps).toBe(410);
  });

  it('level 1 damagePerShot is 46', () => {
    expect(home().defenses().firespitter().first()!.levels[0].stats.normal.damagePerShot).toBe(46);
  });

  it('level 1 buildCost is 17000000 Gold', () => {
    expect(home().defenses().firespitter().first()!.levels[0].buildCost).toBe(17000000);
    expect(home().defenses().firespitter().first()!.levels[0].buildCostResource).toBe('Gold');
  });

  it('level 1 buildTime is 11d', () => {
    expect(home().defenses().firespitter().first()!.levels[0].buildTime).toEqual({
      days: 11,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 974', () => {
    expect(home().defenses().firespitter().first()!.levels[0].xpGained).toBe(974);
  });

  it('level 1 townHallRequired is 17', () => {
    expect(home().defenses().firespitter().first()!.levels[0].townHallRequired).toBe(17);
  });

  it('level 2 buildTime is 11d 12h', () => {
    expect(home().defenses().firespitter().first()!.levels[1].buildTime).toEqual({
      days: 11,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 2 dps is 437', () => {
    expect(home().defenses().firespitter().first()!.levels[1].stats.normal.dps).toBe(437);
  });

  it('level 2 damagePerShot is 49', () => {
    expect(home().defenses().firespitter().first()!.levels[1].stats.normal.damagePerShot).toBe(49);
  });

  it('level 2 xpGained is 996', () => {
    expect(home().defenses().firespitter().first()!.levels[1].xpGained).toBe(996);
  });

  it('level 3 dps is 455', () => {
    expect(home().defenses().firespitter().first()!.levels[2].stats.normal.dps).toBe(455);
  });

  it('level 3 damagePerShot is 51', () => {
    expect(home().defenses().firespitter().first()!.levels[2].stats.normal.damagePerShot).toBe(51);
  });

  it('level 3 buildTime is 15d', () => {
    expect(home().defenses().firespitter().first()!.levels[2].buildTime).toEqual({
      days: 15,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 3 xpGained is 1138', () => {
    expect(home().defenses().firespitter().first()!.levels[2].xpGained).toBe(1138);
  });

  it('level 3 townHallRequired is 18', () => {
    expect(home().defenses().firespitter().first()!.levels[2].townHallRequired).toBe(18);
  });

  it('has no supercharge levels', () => {
    expect(
      home()
        .defenses()
        .firespitter()
        .first()!
        .levels.every((l) => !l.supercharge),
    ).toBe(true);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().defenses().firespitter().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('firespitter() availablePerTownHall', () => {
  it('first available at TH17 with count 2', () => {
    const th17 = home()
      .defenses()
      .firespitter()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 17);
    expect(th17).toBeDefined();
    expect(th17!.count).toBe(2);
  });

  it('count stays at 2 at TH18', () => {
    const th18 = home()
      .defenses()
      .firespitter()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18!.count).toBe(2);
  });

  it('not available below TH17', () => {
    const below = home()
      .defenses()
      .firespitter()
      .first()!
      .availablePerTownHall.filter((a) => a.townHallLevel < 17);
    expect(below).toHaveLength(0);
  });
});

describe('firespitter() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = home().defenses().findByName('Firespitter');
    expect(result).toBeDefined();
    expect(result!.id).toBe('firespitter');
  });

  it('homeDefenses().byBuilding("Firespitter") returns one result', () => {
    expect(home().defenses().byBuilding('Firespitter').count()).toBe(1);
  });

  it('homeDefenses().byTownHall(16) excludes Firespitter', () => {
    const names = home()
      .defenses()
      .byTownHall(16)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Firespitter');
  });

  it('homeDefenses().byTownHall(17) includes Firespitter', () => {
    const names = home()
      .defenses()
      .byTownHall(17)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Firespitter');
  });

  it('homeDefenses().byDamageType("multiple") includes Firespitter', () => {
    const names = home()
      .defenses()
      .byDamageType('multiple')
      .get()
      .map((d) => d.name);
    expect(names).toContain('Firespitter');
  });

  it('homeDefenses().hasGearUp() excludes Firespitter', () => {
    const names = home()
      .defenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Firespitter');
  });

  it('is a HomeVillageDefenses instance', () => {
    expect(home().defenses().byBuilding('Firespitter')).toBeInstanceOf(HomeVillageDefenses);
  });
});
