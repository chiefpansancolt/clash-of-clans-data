import { home } from '@/modules/home';

describe('xBow()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().xBow().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('x-bow');
    expect(result.name).toBe('X-Bow');
  });

  it('has 12 levels', () => {
    expect(home().defenses().xBow().first()!.levels).toHaveLength(14);
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().xBow().first()!.levels[0].hitpoints).toBe(1500);
  });

  it('level 1 has correct build cost', () => {
    expect(home().defenses().xBow().first()!.levels[0].buildCost).toBe(1000000);
  });

  it('level 1 normal dps is 60', () => {
    expect(home().defenses().xBow().first()!.levels[0].stats.normal.dps).toBe(60);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().xBow().first()!.targetType).toBe('both');
  });

  it('has normal (ground) mode with range 14', () => {
    expect(home().defenses().xBow().first()!.modes.normal!.range).toBe(14);
  });

  it('has airAndGround mode with range 11.5', () => {
    expect(home().defenses().xBow().first()!.modes.airAndGround?.range).toBe(11.5);
  });

  it('normal mode attack speed is 0.128', () => {
    expect(home().defenses().xBow().first()!.modes.normal!.attackSpeed).toBe(0.128);
  });

  it('airAndGround mode attack speed is 0.128', () => {
    expect(home().defenses().xBow().first()!.modes.airAndGround?.attackSpeed).toBe(0.128);
  });

  it('normal mode is single target', () => {
    expect(home().defenses().xBow().first()!.modes.normal!.damageType).toBe('single');
  });

  it('has no gear-up', () => {
    expect(home().defenses().xBow().first()!.gearUp).toBeUndefined();
  });

  it('all levels have only normal stats', () => {
    home()
      .defenses()
      .xBow()
      .first()!
      .levels.forEach((l) => {
        expect(l.stats.gearedUpBurst).toBeUndefined();
        expect(l.stats.gearedUpFastAttack).toBeUndefined();
      });
  });

  it('all levels have normal and airAndGround and depleted images', () => {
    home()
      .defenses()
      .xBow()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toBeDefined();
        expect(l.images.airAndGround).toBeDefined();
        expect(l.images.groundDepleted).toBeDefined();
        expect(l.images.airAndGroundDepleted).toBeDefined();
      });
  });

  it('level 12 has correct hitpoints', () => {
    expect(home().defenses().xBow().first()!.levels[11].hitpoints).toBe(4800);
  });

  it('level 12 normal dps is 235', () => {
    expect(home().defenses().xBow().first()!.levels[11].stats.normal.dps).toBe(235);
  });

  it('every level has xpGained', () => {
    home()
      .defenses()
      .xBow()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });

  it('level 1 xpGained is 207', () => {
    expect(home().defenses().xBow().first()!.levels[0].xpGained).toBe(207);
  });

  it('xpGained increases with regular levels', () => {
    const xp = home()
      .defenses()
      .xBow()
      .first()!
      .levels.filter((l) => !l.supercharge)
      .map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(home().defenses().xBow().first()!.levels[12].supercharge).toBe(true);
    expect(home().defenses().xBow().first()!.levels[12].level).toBe(1);
    expect(home().defenses().xBow().first()!.levels[13].supercharge).toBe(true);
    expect(home().defenses().xBow().first()!.levels[13].level).toBe(2);
  });

  it('supercharge 1 dps is 245', () => {
    expect(home().defenses().xBow().first()!.levels[12].stats.normal.dps).toBe(245);
  });

  it('supercharge 2 hp increased to 4900', () => {
    expect(home().defenses().xBow().first()!.levels[13].hitpoints).toBe(4900);
  });

  it('supercharge levels require TH17', () => {
    expect(home().defenses().xBow().first()!.levels[12].townHallRequired).toBe(17);
    expect(home().defenses().xBow().first()!.levels[13].townHallRequired).toBe(17);
  });

  it('TH9 has 2 x-bows available', () => {
    expect(
      home()
        .defenses()
        .xBow()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 9)?.count,
    ).toBe(2);
  });

  it('TH11 has 4 x-bows available', () => {
    expect(
      home()
        .defenses()
        .xBow()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 11)?.count,
    ).toBe(4);
  });

  it('is not available at TH1-8', () => {
    expect(
      home()
        .defenses()
        .xBow()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel <= 8),
    ).toBeUndefined();
  });
});

describe('HomeVillageDefenses with x-bow', () => {
  it('homeDefenses has 9 buildings', () => {
    expect(home().defenses().count()).toBeGreaterThanOrEqual(9);
  });

  it('byBuilding finds x-bow by name', () => {
    expect(home().defenses().byBuilding('x-bow').count()).toBe(1);
    expect(home().defenses().byBuilding('X-Bow').count()).toBe(1);
  });

  it('byTownHall(8) does not include x-bow', () => {
    expect(home().defenses().byTownHall(8).findByName('X-Bow')).toBeUndefined();
  });

  it('byTownHall(9) includes x-bow', () => {
    expect(home().defenses().byTownHall(9).findByName('X-Bow')).toBeDefined();
  });

  it('byDamageType("single") includes x-bow', () => {
    expect(home().defenses().byDamageType('single').findByName('X-Bow')).toBeDefined();
  });

  it('hasGearUp does not include x-bow', () => {
    expect(home().defenses().hasGearUp().findByName('X-Bow')).toBeUndefined();
  });
});
