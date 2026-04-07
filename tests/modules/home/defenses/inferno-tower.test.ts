import { home } from '@/modules/home';
import { HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('infernoTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().infernoTower().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('inferno-tower');
    expect(result.name).toBe('Inferno Tower');
  });

  it('has 12 levels', () => {
    expect(home().defenses().infernoTower().first()!.levels).toHaveLength(12);
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().infernoTower().first()!.levels[0].hitpoints).toBe(1500);
  });

  it('level 1 has correct build cost', () => {
    expect(home().defenses().infernoTower().first()!.levels[0].buildCost).toBe(1000000);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().infernoTower().first()!.targetType).toBe('both');
  });

  it('has normal (single target) mode with range 9', () => {
    expect(home().defenses().infernoTower().first()!.modes.normal!.range).toBe(9);
  });

  it('has multiTarget mode with range 10', () => {
    expect(home().defenses().infernoTower().first()!.modes.multiTarget?.range).toBe(10);
  });

  it('normal mode attack speed is 0.128', () => {
    expect(home().defenses().infernoTower().first()!.modes.normal!.attackSpeed).toBe(0.128);
  });

  it('normal mode is single target', () => {
    expect(home().defenses().infernoTower().first()!.modes.normal!.damageType).toBe('single');
  });

  it('multiTarget mode is multiple damage type', () => {
    expect(home().defenses().infernoTower().first()!.modes.multiTarget?.damageType).toBe(
      'multiple',
    );
  });

  it('has no gear-up', () => {
    expect(home().defenses().infernoTower().first()!.gearUp).toBeUndefined();
  });

  it('level 1 single target max dps is 800', () => {
    expect(home().defenses().infernoTower().first()!.levels[0].stats.normal.dps).toBe(800);
  });

  it('level 1 single target initial dps is 30', () => {
    expect(home().defenses().infernoTower().first()!.levels[0].stats.normal.dpsInitial).toBe(30);
  });

  it('level 1 single target dps after 1.5s is 80', () => {
    expect(home().defenses().infernoTower().first()!.levels[0].stats.normal.dpsAfter1p5s).toBe(80);
  });

  it('level 1 multi target dps per target is 30', () => {
    expect(home().defenses().infernoTower().first()!.levels[0].stats.multiTarget?.dps).toBe(30);
  });

  it('level 1 multi target has 5 targets', () => {
    expect(
      home().defenses().infernoTower().first()!.levels[0].stats.multiTarget?.numberOfTargets,
    ).toBe(5);
  });

  it('level 8 multi target has 6 targets', () => {
    expect(
      home().defenses().infernoTower().first()!.levels[7].stats.multiTarget?.numberOfTargets,
    ).toBe(6);
  });

  it('level 12 single target max dps is 3300', () => {
    expect(home().defenses().infernoTower().first()!.levels[11].stats.normal.dps).toBe(3300);
  });

  it('level 12 has correct hitpoints', () => {
    expect(home().defenses().infernoTower().first()!.levels[11].hitpoints).toBe(5100);
  });

  it('every level has xpGained', () => {
    home()
      .defenses()
      .infernoTower()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });

  it('level 1 xpGained is 207', () => {
    expect(home().defenses().infernoTower().first()!.levels[0].xpGained).toBe(207);
  });

  it('xpGained increases with level', () => {
    const xp = home()
      .defenses()
      .infernoTower()
      .first()!
      .levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('all levels have all 4 image variants', () => {
    home()
      .defenses()
      .infernoTower()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toBeDefined();
        expect(l.images.multiTarget).toBeDefined();
        expect(l.images.singleTargetDepleted).toBeDefined();
        expect(l.images.multiTargetDepleted).toBeDefined();
      });
  });

  it('TH10 has 2 inferno towers available', () => {
    expect(
      home()
        .defenses()
        .infernoTower()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 10)?.count,
    ).toBe(2);
  });

  it('TH12 has 3 inferno towers available', () => {
    expect(
      home()
        .defenses()
        .infernoTower()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 12)?.count,
    ).toBe(3);
  });

  it('is not available at TH1-9', () => {
    expect(
      home()
        .defenses()
        .infernoTower()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel <= 9),
    ).toBeUndefined();
  });
});

describe('HomeVillageDefenses with inferno tower', () => {
  it('homeDefenses has 10 buildings', () => {
    expect(home().defenses().count()).toBeGreaterThanOrEqual(10);
  });

  it('byBuilding finds inferno-tower by name', () => {
    expect(home().defenses().byBuilding('inferno tower').count()).toBe(1);
    expect(home().defenses().byBuilding('Inferno Tower').count()).toBe(1);
  });

  it('byTownHall(9) does not include inferno tower', () => {
    expect(home().defenses().byTownHall(9).findByName('Inferno Tower')).toBeUndefined();
  });

  it('byTownHall(10) includes inferno tower', () => {
    expect(home().defenses().byTownHall(10).findByName('Inferno Tower')).toBeDefined();
  });

  it('byDamageType("single") includes inferno tower', () => {
    expect(home().defenses().byDamageType('single').findByName('Inferno Tower')).toBeDefined();
  });

  it('hasGearUp does not include inferno tower', () => {
    expect(home().defenses().hasGearUp().findByName('Inferno Tower')).toBeUndefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byBuilding('Inferno Tower'),
);
