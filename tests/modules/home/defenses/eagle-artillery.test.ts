import { homeDefenses } from '@/modules/home/defenses';
import { HomeDefenseQuery } from '@/modules/home/defenses';
import { eagleArtillery } from '@/modules/home/defenses/eagle-artillery';
import { testFilterImmutability } from '../../../helpers';

describe('eagleArtillery()', () => {
  it('returns a HomeDefense object', () => {
    const result = eagleArtillery();
    expect(result).toBeDefined();
    expect(result.id).toBe('eagle-artillery');
    expect(result.name).toBe('Eagle Artillery');
  });

  it('has 7 levels', () => {
    expect(eagleArtillery().levels).toHaveLength(7);
  });

  it('level 1 has correct hitpoints', () => {
    expect(eagleArtillery().levels[0].hitpoints).toBe(4000);
  });

  it('level 1 has correct build cost', () => {
    expect(eagleArtillery().levels[0].buildCost).toBe(5000000);
  });

  it('targets both ground and air', () => {
    expect(eagleArtillery().targetType).toBe('both');
  });

  it('normal mode has range 50', () => {
    expect(eagleArtillery().modes.normal!.range).toBe(50);
  });

  it('normal mode has minimum range 7', () => {
    expect(eagleArtillery().modes.normal!.minRange).toBe(7);
  });

  it('normal mode attack speed is 0.75', () => {
    expect(eagleArtillery().modes.normal!.attackSpeed).toBe(0.75);
  });

  it('normal mode fires 3 shots per burst', () => {
    expect(eagleArtillery().modes.normal!.shotsPerBurst).toBe(3);
  });

  it('normal mode has 10s between bursts', () => {
    expect(eagleArtillery().modes.normal!.timeBetweenBursts).toBe(10);
  });

  it('normal mode requires 200 housing space to activate', () => {
    expect(eagleArtillery().modes.normal!.activationHousingSpace).toBe(200);
  });

  it('normal mode is splash damage', () => {
    expect(eagleArtillery().modes.normal!.damageType).toBe('splash');
  });

  it('normal mode splash radius is 0.75', () => {
    expect(eagleArtillery().modes.normal!.splashRadius).toBe(0.75);
  });

  it('has no gear-up', () => {
    expect(eagleArtillery().gearUp).toBeUndefined();
  });

  it('level 1 dps is 67.5', () => {
    expect(eagleArtillery().levels[0].stats.normal.dps).toBe(67.5);
  });

  it('level 1 damage per shot is 225', () => {
    expect(eagleArtillery().levels[0].stats.normal.damagePerShot).toBe(225);
  });

  it('level 1 shockwave damage per hit is 20', () => {
    expect(eagleArtillery().levels[0].stats.normal.shockwaveDamagePerHit).toBe(20);
  });

  it('level 7 dps is 157.5', () => {
    expect(eagleArtillery().levels[6].stats.normal.dps).toBe(157.5);
  });

  it('level 7 has correct hitpoints', () => {
    expect(eagleArtillery().levels[6].hitpoints).toBe(6200);
  });

  it('every level has xpGained', () => {
    eagleArtillery().levels.forEach((l) => {
      expect(typeof l.xpGained).toBe('number');
      expect(l.xpGained).toBeGreaterThan(0);
    });
  });

  it('level 1 xpGained is 587', () => {
    expect(eagleArtillery().levels[0].xpGained).toBe(587);
  });

  it('xpGained increases with level', () => {
    const xp = eagleArtillery().levels.map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('all levels have normal, headDown, and unloaded image variants', () => {
    eagleArtillery().levels.forEach((l) => {
      expect(l.images.normal).toBeDefined();
      expect(l.images.headDown).toBeDefined();
      expect(l.images.unloaded).toBeDefined();
    });
  });

  it('TH11 has 1 eagle artillery available', () => {
    expect(eagleArtillery().availablePerTownHall.find((a) => a.townHallLevel === 11)?.count).toBe(
      1,
    );
  });

  it('TH16 has 1 eagle artillery available', () => {
    expect(eagleArtillery().availablePerTownHall.find((a) => a.townHallLevel === 16)?.count).toBe(
      1,
    );
  });

  it('is not available at TH1-10', () => {
    expect(
      eagleArtillery().availablePerTownHall.find((a) => a.townHallLevel <= 10),
    ).toBeUndefined();
  });

  it('is not available at TH17-18', () => {
    expect(
      eagleArtillery().availablePerTownHall.find((a) => a.townHallLevel >= 17),
    ).toBeUndefined();
  });

  it('level 1 is available at TH11', () => {
    expect(eagleArtillery().levels[0].townHallRequired).toBe(11);
  });

  it('level 7 requires TH16', () => {
    expect(eagleArtillery().levels[6].townHallRequired).toBe(16);
  });
});

describe('HomeDefenseQuery with eagle artillery', () => {
  it('homeDefenses has 11 buildings', () => {
    expect(homeDefenses().count()).toBeGreaterThanOrEqual(11);
  });

  it('byBuilding finds eagle-artillery by name', () => {
    expect(homeDefenses().byBuilding('Eagle Artillery').count()).toBe(1);
    expect(homeDefenses().byBuilding('eagle artillery').count()).toBe(1);
  });

  it('byTownHall(10) does not include eagle artillery', () => {
    expect(homeDefenses().byTownHall(10).findByName('Eagle Artillery')).toBeUndefined();
  });

  it('byTownHall(11) includes eagle artillery', () => {
    expect(homeDefenses().byTownHall(11).findByName('Eagle Artillery')).toBeDefined();
  });

  it('byDamageType("splash") includes eagle artillery', () => {
    expect(homeDefenses().byDamageType('splash').findByName('Eagle Artillery')).toBeDefined();
  });

  it('hasGearUp does not include eagle artillery', () => {
    expect(homeDefenses().hasGearUp().findByName('Eagle Artillery')).toBeUndefined();
  });
});

testFilterImmutability(
  'byBuilding',
  () => homeDefenses(),
  (q) => (q as HomeDefenseQuery).byBuilding('Eagle Artillery'),
);
