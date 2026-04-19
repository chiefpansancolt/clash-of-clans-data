import { home } from '@/modules/home';

describe('eagleArtillery()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().eagleArtillery().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('eagle-artillery');
    expect(result.name).toBe('Eagle Artillery');
  });

  it('has 7 levels', () => {
    expect(home().defenses().eagleArtillery().first()!.levels).toHaveLength(7);
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().eagleArtillery().first()!.levels[0].hitpoints).toBe(4000);
  });

  it('level 1 has correct build cost', () => {
    expect(home().defenses().eagleArtillery().first()!.levels[0].buildCost).toBe(5000000);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().eagleArtillery().first()!.targetType).toBe('both');
  });

  it('normal mode has range 50', () => {
    expect(home().defenses().eagleArtillery().first()!.modes.normal!.range).toBe(50);
  });

  it('normal mode has minimum range 7', () => {
    expect(home().defenses().eagleArtillery().first()!.modes.normal!.minRange).toBe(7);
  });

  it('normal mode attack speed is 0.75', () => {
    expect(home().defenses().eagleArtillery().first()!.modes.normal!.attackSpeed).toBe(0.75);
  });

  it('normal mode fires 3 shots per burst', () => {
    expect(home().defenses().eagleArtillery().first()!.modes.normal!.shotsPerBurst).toBe(3);
  });

  it('normal mode has 10s between bursts', () => {
    expect(home().defenses().eagleArtillery().first()!.modes.normal!.timeBetweenBursts).toBe(10);
  });

  it('normal mode requires 200 housing space to activate', () => {
    expect(home().defenses().eagleArtillery().first()!.modes.normal!.activationHousingSpace).toBe(
      200,
    );
  });

  it('normal mode is splash damage', () => {
    expect(home().defenses().eagleArtillery().first()!.modes.normal!.damageType).toBe('splash');
  });

  it('normal mode splash radius is 0.75', () => {
    expect(home().defenses().eagleArtillery().first()!.modes.normal!.splashRadius).toBe(0.75);
  });

  it('has no gear-up', () => {
    expect(home().defenses().eagleArtillery().first()!.gearUp).toBeUndefined();
  });

  it('level 1 dps is 67.5', () => {
    expect(home().defenses().eagleArtillery().first()!.levels[0].stats.normal.dps).toBe(67.5);
  });

  it('level 1 damage per shot is 225', () => {
    expect(home().defenses().eagleArtillery().first()!.levels[0].stats.normal.damagePerShot).toBe(
      225,
    );
  });

  it('level 1 shockwave damage per hit is 20', () => {
    expect(
      home().defenses().eagleArtillery().first()!.levels[0].stats.normal.shockwaveDamagePerHit,
    ).toBe(20);
  });

  it('level 7 dps is 157.5', () => {
    expect(home().defenses().eagleArtillery().first()!.levels[6].stats.normal.dps).toBe(157.5);
  });

  it('level 7 has correct hitpoints', () => {
    expect(home().defenses().eagleArtillery().first()!.levels[6].hitpoints).toBe(6200);
  });

  it('every level has xpGained', () => {
    home()
      .defenses()
      .eagleArtillery()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });

  it('level 1 xpGained is 587', () => {
    expect(home().defenses().eagleArtillery().first()!.levels[0].xpGained).toBe(587);
  });

  it('xpGained increases with level', () => {
    const xp = home()
      .defenses()
      .eagleArtillery()
      .first()!
      .levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('all levels have normal, headDown, and unloaded image variants', () => {
    home()
      .defenses()
      .eagleArtillery()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toBeDefined();
        expect(l.images.headDown).toBeDefined();
        expect(l.images.unloaded).toBeDefined();
      });
  });

  it('TH11 has 1 eagle artillery available', () => {
    expect(
      home()
        .defenses()
        .eagleArtillery()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 11)?.count,
    ).toBe(1);
  });

  it('TH16 has 1 eagle artillery available', () => {
    expect(
      home()
        .defenses()
        .eagleArtillery()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 16)?.count,
    ).toBe(1);
  });

  it('is not available at TH1-10', () => {
    expect(
      home()
        .defenses()
        .eagleArtillery()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel <= 10),
    ).toBeUndefined();
  });

  it('has count 0 at TH17 and TH18', () => {
    const avail = home().defenses().eagleArtillery().first()!.availablePerTownHall;
    expect(avail.find((a) => a.townHallLevel === 17)?.count).toBe(0);
    expect(avail.find((a) => a.townHallLevel === 18)?.count).toBe(0);
  });

  it('level 1 is available at TH11', () => {
    expect(home().defenses().eagleArtillery().first()!.levels[0].townHallRequired).toBe(11);
  });

  it('level 7 requires TH16', () => {
    expect(home().defenses().eagleArtillery().first()!.levels[6].townHallRequired).toBe(16);
  });
});

describe('HomeVillageDefenses with eagle artillery', () => {
  it('homeDefenses has 11 buildings', () => {
    expect(home().defenses().count()).toBeGreaterThanOrEqual(11);
  });

  it('byBuilding finds eagle-artillery by name', () => {
    expect(home().defenses().byBuilding('Eagle Artillery').count()).toBe(1);
    expect(home().defenses().byBuilding('eagle artillery').count()).toBe(1);
  });

  it('byTownHall(10) does not include eagle artillery', () => {
    expect(home().defenses().byTownHall(10).findByName('Eagle Artillery')).toBeUndefined();
  });

  it('byTownHall(11) includes eagle artillery', () => {
    expect(home().defenses().byTownHall(11).findByName('Eagle Artillery')).toBeDefined();
  });

  it('byDamageType("splash") includes eagle artillery', () => {
    expect(home().defenses().byDamageType('splash').findByName('Eagle Artillery')).toBeDefined();
  });

  it('hasGearUp does not include eagle artillery', () => {
    expect(home().defenses().hasGearUp().findByName('Eagle Artillery')).toBeUndefined();
  });
});
