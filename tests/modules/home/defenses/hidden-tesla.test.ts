import { home } from '@/modules/home';
import { HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

describe('hiddenTesla()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().hiddenTesla().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('hidden-tesla');
    expect(result.name).toBe('Hidden Tesla');
  });

  it('has 17 levels', () => {
    expect(home().defenses().hiddenTesla().first()!.levels).toHaveLength(17);
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

  it('xpGained increases with level', () => {
    const xp = home()
      .defenses()
      .hiddenTesla()
      .first()!
      .levels.map((l) => l.xpGained);
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
});

testFilterImmutability(
  'byBuilding',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byBuilding('Hidden Tesla'),
);
