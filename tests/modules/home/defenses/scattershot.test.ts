import { home } from '@/modules/home';
import { HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('scattershot()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().scattershot().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('scattershot');
    expect(result.name).toBe('Scattershot');
  });

  it('has 6 levels', () => {
    expect(home().defenses().scattershot().first()!.levels).toHaveLength(8);
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().scattershot().first()!.levels[0].hitpoints).toBe(3600);
  });

  it('level 1 has correct build cost', () => {
    expect(home().defenses().scattershot().first()!.levels[0].buildCost).toBe(8000000);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().scattershot().first()!.targetType).toBe('both');
  });

  it('normal mode has range 10', () => {
    expect(home().defenses().scattershot().first()!.modes.normal!.range).toBe(10);
  });

  it('normal mode has minimum range 3', () => {
    expect(home().defenses().scattershot().first()!.modes.normal!.minRange).toBe(3);
  });

  it('normal mode attack speed is 3.2', () => {
    expect(home().defenses().scattershot().first()!.modes.normal!.attackSpeed).toBe(3.2);
  });

  it('normal mode has 90 rounds', () => {
    expect(home().defenses().scattershot().first()!.modes.normal!.numberOfRounds).toBe(90);
  });

  it('normal mode is splash damage', () => {
    expect(home().defenses().scattershot().first()!.modes.normal!.damageType).toBe('splash');
  });

  it('has no gear-up', () => {
    expect(home().defenses().scattershot().first()!.gearUp).toBeUndefined();
  });

  it('level 1 dps is 125', () => {
    expect(home().defenses().scattershot().first()!.levels[0].stats.normal.dps).toBe(125);
  });

  it('level 1 max damage per shot is 400', () => {
    expect(home().defenses().scattershot().first()!.levels[0].stats.normal.damagePerShot).toBe(400);
  });

  it('level 1 min damage per shot is 300', () => {
    expect(home().defenses().scattershot().first()!.levels[0].stats.normal.damagePerShotMin).toBe(
      300,
    );
  });

  it('level 1 max splash damage is 300', () => {
    expect(home().defenses().scattershot().first()!.levels[0].stats.normal.splashDamageMax).toBe(
      300,
    );
  });

  it('level 1 min splash damage is 100', () => {
    expect(home().defenses().scattershot().first()!.levels[0].stats.normal.splashDamageMin).toBe(
      100,
    );
  });

  it('level 6 dps is 185', () => {
    expect(home().defenses().scattershot().first()!.levels[5].stats.normal.dps).toBe(185);
  });

  it('level 6 has correct hitpoints', () => {
    expect(home().defenses().scattershot().first()!.levels[5].hitpoints).toBe(5600);
  });

  it('every level has xpGained', () => {
    home()
      .defenses()
      .scattershot()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });

  it('level 1 xpGained is 720', () => {
    expect(home().defenses().scattershot().first()!.levels[0].xpGained).toBe(720);
  });

  it('xpGained increases with regular levels', () => {
    const xp = home()
      .defenses()
      .scattershot()
      .first()!
      .levels.filter((l) => !l.supercharge)
      .map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(home().defenses().scattershot().first()!.levels[6].supercharge).toBe(true);
    expect(home().defenses().scattershot().first()!.levels[6].level).toBe(1);
    expect(home().defenses().scattershot().first()!.levels[7].supercharge).toBe(true);
    expect(home().defenses().scattershot().first()!.levels[7].level).toBe(2);
  });

  it('supercharge 1 dps is 188', () => {
    expect(home().defenses().scattershot().first()!.levels[6].stats.normal.dps).toBe(188);
  });

  it('supercharge 2 hp increased to 5750', () => {
    expect(home().defenses().scattershot().first()!.levels[7].hitpoints).toBe(5750);
  });

  it('supercharge levels require TH17', () => {
    expect(home().defenses().scattershot().first()!.levels[6].townHallRequired).toBe(17);
    expect(home().defenses().scattershot().first()!.levels[7].townHallRequired).toBe(17);
  });

  it('all levels have normal and depleted image variants', () => {
    home()
      .defenses()
      .scattershot()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toBeDefined();
        expect(l.images.depleted).toBeDefined();
      });
  });

  it('TH13 has 2 scattershots available', () => {
    expect(
      home()
        .defenses()
        .scattershot()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 13)?.count,
    ).toBe(2);
  });

  it('TH18 has 2 scattershots available', () => {
    expect(
      home()
        .defenses()
        .scattershot()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 18)?.count,
    ).toBe(2);
  });

  it('is not available at TH1-12', () => {
    expect(
      home()
        .defenses()
        .scattershot()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel <= 12),
    ).toBeUndefined();
  });

  it('level 1 is available at TH13', () => {
    expect(home().defenses().scattershot().first()!.levels[0].townHallRequired).toBe(13);
  });

  it('level 6 requires TH17', () => {
    expect(home().defenses().scattershot().first()!.levels[5].townHallRequired).toBe(17);
  });
});

describe('HomeVillageDefenses with scattershot', () => {
  it('homeDefenses has at least 12 buildings', () => {
    expect(home().defenses().count()).toBeGreaterThanOrEqual(12);
  });

  it('byBuilding finds scattershot by name', () => {
    expect(home().defenses().byBuilding('Scattershot').count()).toBe(1);
    expect(home().defenses().byBuilding('scattershot').count()).toBe(1);
  });

  it('byTownHall(12) does not include scattershot', () => {
    expect(home().defenses().byTownHall(12).findByName('Scattershot')).toBeUndefined();
  });

  it('byTownHall(13) includes scattershot', () => {
    expect(home().defenses().byTownHall(13).findByName('Scattershot')).toBeDefined();
  });

  it('byDamageType("splash") includes scattershot', () => {
    expect(home().defenses().byDamageType('splash').findByName('Scattershot')).toBeDefined();
  });

  it('hasGearUp does not include scattershot', () => {
    expect(home().defenses().hasGearUp().findByName('Scattershot')).toBeUndefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byBuilding('Scattershot'),
);
