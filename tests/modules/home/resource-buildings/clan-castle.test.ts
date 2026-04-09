import { home } from '@/modules/home';

describe('clanCastle()', () => {
  it('returns a HomeClanCastle object', () => {
    const result = home().resourceBuildings().clanCastle().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('clan-castle');
    expect(result.name).toBe('Clan Castle');
  });

  it('has 14 levels', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels).toHaveLength(14);
  });

  it('base is home', () => {
    expect(home().resourceBuildings().clanCastle().first()!.base).toBe('home');
  });

  it('category is resource', () => {
    expect(home().resourceBuildings().clanCastle().first()!.category).toBe('resource');
  });

  it('size is 3x3', () => {
    expect(home().resourceBuildings().clanCastle().first()!.size).toBe('3x3');
  });

  it('triggerRadius is 13', () => {
    expect(home().resourceBuildings().clanCastle().first()!.triggerRadius).toBe(13);
  });
});

describe('clanCastle() levels', () => {
  it('level 1 hitpoints is 600', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[0].hitpoints).toBe(600);
  });

  it('level 1 troopCapacity is 10', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[0].troopCapacity).toBe(10);
  });

  it('level 1 spellCapacity is 0', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[0].spellCapacity).toBe(0);
  });

  it('level 1 siegeMachineCapacity is 0', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[0].siegeMachineCapacity).toBe(0);
  });

  it('level 1 labLevelCap is 5', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[0].labLevelCap).toBe(5);
  });

  it('level 1 buildCost is 10000 Elixir', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[0].buildCost).toBe(10000);
    expect(home().resourceBuildings().clanCastle().first()!.levels[0].buildCostResource).toBe(
      'Elixir',
    );
  });

  it('level 1 buildTime is 0 (instant)', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[0].buildTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 0', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[0].xpGained).toBe(0);
  });

  it('level 1 townHallRequired is 3', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[0].townHallRequired).toBe(3);
  });

  it('level 4 spellCapacity is 1', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[3].spellCapacity).toBe(1);
  });

  it('level 6 siegeMachineCapacity is 1', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[5].siegeMachineCapacity).toBe(1);
  });

  it('level 6 townHallRequired is 10', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[5].townHallRequired).toBe(10);
  });

  it('level 7 buildTime is 3d', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[6].buildTime).toEqual({
      days: 3,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 12 siegeMachineCapacity is 2', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[11].siegeMachineCapacity).toBe(
      2,
    );
  });

  it('level 12 townHallRequired is 16', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[11].townHallRequired).toBe(16);
  });

  it('level 14 hitpoints is 6000', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[13].hitpoints).toBe(6000);
  });

  it('level 14 troopCapacity is 55', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[13].troopCapacity).toBe(55);
  });

  it('level 14 spellCapacity is 4', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[13].spellCapacity).toBe(4);
  });

  it('level 14 siegeMachineCapacity is 2', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[13].siegeMachineCapacity).toBe(
      2,
    );
  });

  it('level 14 buildCost is 28000000 Elixir', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[13].buildCost).toBe(28000000);
  });

  it('level 14 buildTime is 14d', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[13].buildTime).toEqual({
      days: 14,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 14 xpGained is 1099', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[13].xpGained).toBe(1099);
  });

  it('level 14 townHallRequired is 18', () => {
    expect(home().resourceBuildings().clanCastle().first()!.levels[13].townHallRequired).toBe(18);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().resourceBuildings().clanCastle().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('clanCastle() availablePerTownHall', () => {
  it('TH1 has 1 clan castle', () => {
    const th1 = home()
      .resourceBuildings()
      .clanCastle()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 1);
    expect(th1?.count).toBe(1);
  });

  it('TH10 has 1 clan castle', () => {
    const th10 = home()
      .resourceBuildings()
      .clanCastle()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 10);
    expect(th10?.count).toBe(1);
  });

  it('TH18 has 1 clan castle', () => {
    const th18 = home()
      .resourceBuildings()
      .clanCastle()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 18);
    expect(th18?.count).toBe(1);
  });
});
