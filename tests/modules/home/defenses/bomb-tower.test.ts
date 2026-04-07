import { home } from '@/modules/home';
import { HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('bombTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().bombTower().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('bomb-tower');
    expect(result.name).toBe('Bomb Tower');
  });

  it('has 13 levels', () => {
    expect(home().defenses().bombTower().first()!.levels).toHaveLength(15);
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().bombTower().first()!.levels[0].hitpoints).toBe(650);
  });

  it('level 1 has correct build cost', () => {
    expect(home().defenses().bombTower().first()!.levels[0].buildCost).toBe(700000);
  });

  it('level 1 normal dps is 24', () => {
    expect(home().defenses().bombTower().first()!.levels[0].stats.normal.dps).toBe(24);
  });

  it('level 1 death damage is 150', () => {
    expect(home().defenses().bombTower().first()!.levels[0].deathDamage).toBe(150);
  });

  it('targets ground only', () => {
    expect(home().defenses().bombTower().first()!.targetType).toBe('ground');
  });

  it('has normal mode with range 6', () => {
    expect(home().defenses().bombTower().first()!.modes.normal!.range).toBe(6);
  });

  it('normal mode attack speed is 1.1', () => {
    expect(home().defenses().bombTower().first()!.modes.normal!.attackSpeed).toBe(1.1);
  });

  it('normal mode is splash damage', () => {
    expect(home().defenses().bombTower().first()!.modes.normal!.damageType).toBe('splash');
  });

  it('normal mode splash radius is 1.5', () => {
    expect(home().defenses().bombTower().first()!.modes.normal!.splashRadius).toBe(1.5);
  });

  it('has no gear-up', () => {
    expect(home().defenses().bombTower().first()!.gearUp).toBeUndefined();
  });

  it('all levels have only normal stats', () => {
    home()
      .defenses()
      .bombTower()
      .first()!
      .levels.forEach((l) => {
        expect(l.stats.gearedUpBurst).toBeUndefined();
        expect(l.stats.gearedUpFastAttack).toBeUndefined();
      });
  });

  it('all levels have only normal images', () => {
    home()
      .defenses()
      .bombTower()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toBeDefined();
        expect(l.images.gearedUpNormal).toBeUndefined();
      });
  });

  it('level 13 has correct hitpoints', () => {
    expect(home().defenses().bombTower().first()!.levels[12].hitpoints).toBe(3050);
  });

  it('level 13 normal dps is 122', () => {
    expect(home().defenses().bombTower().first()!.levels[12].stats.normal.dps).toBe(122);
  });

  it('level 13 death damage is 700', () => {
    expect(home().defenses().bombTower().first()!.levels[12].deathDamage).toBe(700);
  });

  it('every level has xpGained', () => {
    home()
      .defenses()
      .bombTower()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });

  it('level 1 xpGained is 207', () => {
    expect(home().defenses().bombTower().first()!.levels[0].xpGained).toBe(207);
  });

  it('xpGained increases with regular levels', () => {
    const xp = home()
      .defenses()
      .bombTower()
      .first()!
      .levels.filter((l) => !l.supercharge)
      .map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(home().defenses().bombTower().first()!.levels[13].supercharge).toBe(true);
    expect(home().defenses().bombTower().first()!.levels[13].level).toBe(1);
    expect(home().defenses().bombTower().first()!.levels[14].supercharge).toBe(true);
    expect(home().defenses().bombTower().first()!.levels[14].level).toBe(2);
  });

  it('supercharge 1 dps is 127', () => {
    expect(home().defenses().bombTower().first()!.levels[13].stats.normal.dps).toBe(127);
  });

  it('supercharge 2 hp increased to 3150', () => {
    expect(home().defenses().bombTower().first()!.levels[14].hitpoints).toBe(3150);
  });

  it('supercharge levels require TH18', () => {
    expect(home().defenses().bombTower().first()!.levels[13].townHallRequired).toBe(18);
    expect(home().defenses().bombTower().first()!.levels[14].townHallRequired).toBe(18);
  });

  it('TH8 has 1 bomb tower available', () => {
    expect(
      home()
        .defenses()
        .bombTower()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 8)?.count,
    ).toBe(1);
  });

  it('TH10 has 2 bomb towers available', () => {
    expect(
      home()
        .defenses()
        .bombTower()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 10)?.count,
    ).toBe(2);
  });

  it('is not available at TH1-7', () => {
    expect(
      home()
        .defenses()
        .bombTower()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel <= 7),
    ).toBeUndefined();
  });

  it('every regular level has deathDamage', () => {
    home()
      .defenses()
      .bombTower()
      .first()!
      .levels.filter((l) => !l.supercharge)
      .forEach((l) => {
        expect(typeof l.deathDamage).toBe('number');
        expect(l.deathDamage).toBeGreaterThan(0);
      });
  });
});

describe('HomeVillageDefenses with bomb tower', () => {
  it('homeDefenses has 8 buildings', () => {
    expect(home().defenses().count()).toBeGreaterThanOrEqual(8);
  });

  it('byBuilding finds bomb-tower by name', () => {
    expect(home().defenses().byBuilding('bomb tower').count()).toBe(1);
    expect(home().defenses().byBuilding('Bomb Tower').count()).toBe(1);
  });

  it('byTownHall(7) does not include bomb tower', () => {
    expect(home().defenses().byTownHall(7).findByName('Bomb Tower')).toBeUndefined();
  });

  it('byTownHall(8) includes bomb tower', () => {
    expect(home().defenses().byTownHall(8).findByName('Bomb Tower')).toBeDefined();
  });

  it('byDamageType("splash") includes bomb tower', () => {
    expect(home().defenses().byDamageType('splash').findByName('Bomb Tower')).toBeDefined();
  });

  it('hasGearUp does not include bomb tower', () => {
    expect(home().defenses().hasGearUp().findByName('Bomb Tower')).toBeUndefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byBuilding('Bomb Tower'),
);
