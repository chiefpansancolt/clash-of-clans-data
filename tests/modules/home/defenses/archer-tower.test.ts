import { home } from '@/modules/home';

describe('archerTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().archerTower().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('archer-tower');
    expect(result.name).toBe('Archer Tower');
  });

  it('has 21 levels', () => {
    expect(home().defenses().archerTower().first()!.levels).toHaveLength(21);
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().archerTower().first()!.levels[0].hitpoints).toBe(380);
  });

  it('level 1 has correct build cost', () => {
    expect(home().defenses().archerTower().first()!.levels[0].buildCost).toBe(1000);
  });

  it('level 1 normal dps is 11', () => {
    expect(home().defenses().archerTower().first()!.levels[0].stats.normal.dps).toBe(11);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().archerTower().first()!.targetType).toBe('both');
  });

  it('has normal mode with range 10', () => {
    expect(home().defenses().archerTower().first()!.modes.normal!.range).toBe(10);
  });

  it('has gearedUpFastAttack mode with range 8', () => {
    expect(home().defenses().archerTower().first()!.modes.gearedUpFastAttack?.range).toBe(8);
  });

  it('has gearedUpFastAttack mode with attack speed 0.25', () => {
    expect(home().defenses().archerTower().first()!.modes.gearedUpFastAttack?.attackSpeed).toBe(
      0.25,
    );
  });

  it('levels 1-9 have no gearedUpFastAttack stats', () => {
    const earlyLevels = home().defenses().archerTower().first()!.levels.slice(0, 9);
    earlyLevels.forEach((l) => expect(l.stats.gearedUpFastAttack).toBeUndefined());
  });

  it('levels 10+ have gearedUpFastAttack stats', () => {
    const lateLevels = home().defenses().archerTower().first()!.levels.slice(9);
    lateLevels.forEach((l) => expect(l.stats.gearedUpFastAttack).toBeDefined());
  });

  it('level 10 gearedUpFastAttack dps is 126', () => {
    const level10 = home()
      .defenses()
      .archerTower()
      .first()!
      .levels.find((l) => l.level === 10);
    expect(level10?.stats.gearedUpFastAttack?.dps).toBe(126);
  });

  it('levels 1-9 have no gearedUpNormal or gearedUpFastAttack images', () => {
    const earlyLevels = home().defenses().archerTower().first()!.levels.slice(0, 9);
    earlyLevels.forEach((l) => {
      expect(l.images.gearedUpNormal).toBeUndefined();
      expect(l.images.gearedUpFastAttack).toBeUndefined();
    });
  });

  it('levels 10+ have all three image variants', () => {
    const lateLevels = home().defenses().archerTower().first()!.levels.slice(9);
    lateLevels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.gearedUpNormal).toBeDefined();
      expect(l.images.gearedUpFastAttack).toBeDefined();
    });
  });

  it('has gearUp info', () => {
    expect(home().defenses().archerTower().first()!.gearUp).toBeDefined();
    expect(home().defenses().archerTower().first()!.gearUp?.requiresLevel).toBe(10);
  });

  it('every level has xpGained', () => {
    home()
      .defenses()
      .archerTower()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });

  it('level 1 xpGained is 3', () => {
    expect(home().defenses().archerTower().first()!.levels[0].xpGained).toBe(3);
  });

  it('xpGained increases with level', () => {
    const xp = home()
      .defenses()
      .archerTower()
      .first()!
      .levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('has availablePerTownHall entries', () => {
    const avail = home().defenses().archerTower().first()!.availablePerTownHall;
    expect(avail.length).toBeGreaterThan(0);
    avail.forEach((a) => {
      expect(a.townHallLevel).toBeGreaterThan(0);
      expect(a.count).toBeGreaterThan(0);
    });
  });

  it('TH2 has 1 archer tower available', () => {
    const th2 = home()
      .defenses()
      .archerTower()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 2);
    expect(th2?.count).toBe(1);
  });

  it('TH11 has 8 archer towers available', () => {
    const th11 = home()
      .defenses()
      .archerTower()
      .first()!
      .availablePerTownHall.find((a) => a.townHallLevel === 11);
    expect(th11?.count).toBe(8);
  });
});

describe('HomeVillageDefenses#byBuilding', () => {
  it('finds archer-tower by name', () => {
    expect(home().defenses().byBuilding('archer tower').count()).toBe(1);
    expect(home().defenses().byBuilding('Archer Tower').count()).toBe(1);
  });

  it('homeDefenses has at least 2 buildings', () => {
    expect(home().defenses().count()).toBeGreaterThanOrEqual(2);
  });
});

describe('HomeVillageDefenses#byTownHall', () => {
  it('TH1 returns cannon but not archer tower', () => {
    const th1 = home().defenses().byTownHall(1);
    expect(th1.findByName('Cannon')).toBeDefined();
    expect(th1.findByName('Archer Tower')).toBeUndefined();
  });

  it('TH2 includes archer tower', () => {
    expect(home().defenses().byTownHall(2).findByName('Archer Tower')).toBeDefined();
  });
});

describe('HomeVillageDefenses#hasGearUp', () => {
  it('includes archer tower', () => {
    expect(home().defenses().hasGearUp().findByName('Archer Tower')).toBeDefined();
  });

  it('returns all gearable buildings (at least 2)', () => {
    expect(home().defenses().hasGearUp().count()).toBeGreaterThanOrEqual(2);
  });
});
