import { home } from '@/modules/home';

describe('hiddenTesla()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().hiddenTesla().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('hidden-tesla');
    expect(result.name).toBe('Hidden Tesla');
  });

  it('has 19 levels', () => {
    expect(home().defenses().hiddenTesla().first()!.levels).toHaveLength(19);
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().hiddenTesla().first()!.levels[0].hitpoints).toBe(600);
  });

  it('level 1 has correct build cost', () => {
    expect(home().defenses().hiddenTesla().first()!.levels[0].buildCost).toBe(250000);
  });

  it('level 1 normal dps is 34', () => {
    expect(home().defenses().hiddenTesla().first()!.levels[0].stats.normal.dps).toBe(34);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().hiddenTesla().first()!.targetType).toBe('both');
  });

  it('has normal mode with range 7', () => {
    expect(home().defenses().hiddenTesla().first()!.modes.normal!.range).toBe(7);
  });

  it('normal mode attack speed is 0.6', () => {
    expect(home().defenses().hiddenTesla().first()!.modes.normal!.attackSpeed).toBe(0.6);
  });

  it('normal mode is single target', () => {
    expect(home().defenses().hiddenTesla().first()!.modes.normal!.damageType).toBe('single');
  });

  it('normal mode trigger range is 6', () => {
    expect(home().defenses().hiddenTesla().first()!.modes.normal!.triggerRange).toBe(6);
  });

  it('has no gear-up', () => {
    expect(home().defenses().hiddenTesla().first()!.gearUp).toBeUndefined();
  });

  it('all levels have only normal stats', () => {
    home()
      .defenses()
      .hiddenTesla()
      .first()!
      .levels.forEach((l) => {
        expect(l.stats.gearedUpBurst).toBeUndefined();
        expect(l.stats.gearedUpFastAttack).toBeUndefined();
      });
  });

  it('all levels have only normal images', () => {
    home()
      .defenses()
      .hiddenTesla()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toBeDefined();
        expect(l.images.gearedUpNormal).toBeUndefined();
      });
  });

  it('level 17 has correct hitpoints', () => {
    expect(home().defenses().hiddenTesla().first()!.levels[16].hitpoints).toBe(1750);
  });

  it('level 17 normal dps is 190', () => {
    expect(home().defenses().hiddenTesla().first()!.levels[16].stats.normal.dps).toBe(190);
  });

  it('every level has xpGained', () => {
    home()
      .defenses()
      .hiddenTesla()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });

  it('level 1 xpGained is 84', () => {
    expect(home().defenses().hiddenTesla().first()!.levels[0].xpGained).toBe(84);
  });

  it('xpGained increases with regular levels', () => {
    const xp = home()
      .defenses()
      .hiddenTesla()
      .first()!
      .levels.filter((l) => !l.supercharge)
      .map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('TH7 has 2 hidden teslas available', () => {
    expect(
      home()
        .defenses()
        .hiddenTesla()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 7)?.count,
    ).toBe(2);
  });

  it('TH12 has 5 hidden teslas available', () => {
    expect(
      home()
        .defenses()
        .hiddenTesla()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 12)?.count,
    ).toBe(5);
  });

  it('is not available at TH1-6', () => {
    expect(
      home()
        .defenses()
        .hiddenTesla()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel <= 6),
    ).toBeUndefined();
  });
});

describe('HomeVillageDefenses with hidden tesla', () => {
  it('homeDefenses has 7 buildings', () => {
    expect(home().defenses().count()).toBeGreaterThanOrEqual(7);
  });

  it('byBuilding finds hidden-tesla by name', () => {
    expect(home().defenses().byBuilding('hidden tesla').count()).toBe(1);
    expect(home().defenses().byBuilding('Hidden Tesla').count()).toBe(1);
  });

  it('byTownHall(6) does not include hidden tesla', () => {
    expect(home().defenses().byTownHall(6).findByName('Hidden Tesla')).toBeUndefined();
  });

  it('byTownHall(7) includes hidden tesla', () => {
    expect(home().defenses().byTownHall(7).findByName('Hidden Tesla')).toBeDefined();
  });

  it('byDamageType("single") includes hidden tesla', () => {
    expect(home().defenses().byDamageType('single').findByName('Hidden Tesla')).toBeDefined();
  });

  it('hasGearUp does not include hidden tesla', () => {
    expect(home().defenses().hasGearUp().findByName('Hidden Tesla')).toBeUndefined();
  });

  it('has 2 supercharge levels at TH18', () => {
    const sc = home()
      .defenses()
      .hiddenTesla()
      .first()!
      .levels.filter((l) => l.supercharge);
    expect(sc).toHaveLength(2);
    sc.forEach((l) => expect(l.townHallRequired).toBe(18));
  });

  it('supercharge 1: 1,750 HP, 195 dps, 117 damage, 12,000,000 Gold, 4d 12h, 623 XP', () => {
    const l = home().defenses().hiddenTesla().first()!.levels[17];
    expect(l.level).toBe(1);
    expect(l.supercharge).toBe(true);
    expect(l.hitpoints).toBe(1750);
    expect(l.stats.normal.dps).toBe(195);
    expect(l.stats.normal.damagePerShot).toBe(117);
    expect(l.buildCost).toBe(12000000);
    expect(l.buildCostResource).toBe('Gold');
    expect(l.buildTime).toEqual({ days: 4, hours: 12, minutes: 0, seconds: 0 });
    expect(l.xpGained).toBe(623);
  });

  it('supercharge 2: 1,800 HP, 8,000,000 Gold, 6d 12h, 749 XP', () => {
    const l = home().defenses().hiddenTesla().first()!.levels[18];
    expect(l.level).toBe(2);
    expect(l.supercharge).toBe(true);
    expect(l.hitpoints).toBe(1800);
    expect(l.buildCost).toBe(8000000);
    expect(l.buildTime).toEqual({ days: 6, hours: 12, minutes: 0, seconds: 0 });
    expect(l.xpGained).toBe(749);
  });
});
