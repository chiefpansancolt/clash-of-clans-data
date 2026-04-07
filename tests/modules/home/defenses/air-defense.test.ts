import { home } from '@/modules/home';
import { HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('airDefense()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().airDefense().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('air-defense');
    expect(result.name).toBe('Air Defense');
  });

  it('has 18 levels', () => {
    expect(home().defenses().airDefense().first()!.levels).toHaveLength(18);
  });

  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().airDefense().first()!.levels[0].hitpoints).toBe(800);
  });

  it('level 1 has correct build cost', () => {
    expect(home().defenses().airDefense().first()!.levels[0].buildCost).toBe(22000);
  });

  it('level 1 normal dps is 80', () => {
    expect(home().defenses().airDefense().first()!.levels[0].stats.normal.dps).toBe(80);
  });

  it('targets air only', () => {
    expect(home().defenses().airDefense().first()!.targetType).toBe('air');
  });

  it('has normal mode with range 10', () => {
    expect(home().defenses().airDefense().first()!.modes.normal!.range).toBe(10);
  });

  it('has normal mode with attack speed 1', () => {
    expect(home().defenses().airDefense().first()!.modes.normal!.attackSpeed).toBe(1);
  });

  it('has no gear-up', () => {
    expect(home().defenses().airDefense().first()!.gearUp).toBeUndefined();
  });

  it('has no geared-up modes', () => {
    expect(
      (home().defenses().airDefense().first()!.modes as Record<string, unknown>).gearedUpBurst,
    ).toBeUndefined();
    expect(
      (home().defenses().airDefense().first()!.modes as Record<string, unknown>).gearedUpFastAttack,
    ).toBeUndefined();
  });

  it('all levels have only normal stats (no geared-up stats)', () => {
    home()
      .defenses()
      .airDefense()
      .first()!
      .levels.forEach((l) => {
        expect(l.stats.gearedUpBurst).toBeUndefined();
        expect(l.stats.gearedUpFastAttack).toBeUndefined();
      });
  });

  it('all levels have only normal images', () => {
    home()
      .defenses()
      .airDefense()
      .first()!
      .levels.forEach((l) => {
        expect(l.images.normal).toBeDefined();
        expect(l.images.gearedUpNormal).toBeUndefined();
        expect(l.images.gearedUpBurst).toBeUndefined();
        expect(l.images.gearedUpFastAttack).toBeUndefined();
      });
  });

  it('level 16 has correct hitpoints', () => {
    expect(home().defenses().airDefense().first()!.levels[15].hitpoints).toBe(2000);
  });

  it('level 16 normal dps is 700', () => {
    expect(home().defenses().airDefense().first()!.levels[15].stats.normal.dps).toBe(700);
  });

  it('every level has xpGained', () => {
    home()
      .defenses()
      .airDefense()
      .first()!
      .levels.forEach((l) => {
        expect(typeof l.xpGained).toBe('number');
        expect(l.xpGained).toBeGreaterThan(0);
      });
  });

  it('level 1 xpGained is 60', () => {
    expect(home().defenses().airDefense().first()!.levels[0].xpGained).toBe(60);
  });

  it('xpGained increases with regular levels', () => {
    const xp = home()
      .defenses()
      .airDefense()
      .first()!
      .levels.filter((l) => !l.supercharge)
      .map((l) => l.xpGained);
    for (let i = 0; i < xp.length - 1; i++) {
      expect(xp[i + 1]).toBeGreaterThanOrEqual(xp[i]);
    }
  });

  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(home().defenses().airDefense().first()!.levels[16].supercharge).toBe(true);
    expect(home().defenses().airDefense().first()!.levels[16].level).toBe(1);
    expect(home().defenses().airDefense().first()!.levels[17].supercharge).toBe(true);
    expect(home().defenses().airDefense().first()!.levels[17].level).toBe(2);
  });

  it('supercharge 1 dps is 720', () => {
    expect(home().defenses().airDefense().first()!.levels[16].stats.normal.dps).toBe(720);
  });

  it('supercharge 2 dps is 740', () => {
    expect(home().defenses().airDefense().first()!.levels[17].stats.normal.dps).toBe(740);
  });

  it('supercharge levels require TH18', () => {
    expect(home().defenses().airDefense().first()!.levels[16].townHallRequired).toBe(18);
    expect(home().defenses().airDefense().first()!.levels[17].townHallRequired).toBe(18);
  });

  it('supercharge levels keep HP at 2000', () => {
    expect(home().defenses().airDefense().first()!.levels[16].hitpoints).toBe(2000);
    expect(home().defenses().airDefense().first()!.levels[17].hitpoints).toBe(2000);
  });

  it('has availablePerTownHall entries', () => {
    const avail = home().defenses().airDefense().first()!.availablePerTownHall;
    expect(avail.length).toBeGreaterThan(0);
    avail.forEach((a) => {
      expect(a.townHallLevel).toBeGreaterThan(0);
      expect(a.count).toBeGreaterThan(0);
    });
  });

  it('TH4 has 1 air defense available', () => {
    expect(
      home()
        .defenses()
        .airDefense()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 4)?.count,
    ).toBe(1);
  });

  it('TH6 has 2 air defenses available', () => {
    expect(
      home()
        .defenses()
        .airDefense()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 6)?.count,
    ).toBe(2);
  });

  it('TH9 has 4 air defenses available', () => {
    expect(
      home()
        .defenses()
        .airDefense()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel === 9)?.count,
    ).toBe(4);
  });

  it('is not available at TH1-3', () => {
    expect(
      home()
        .defenses()
        .airDefense()
        .first()!
        .availablePerTownHall.find((a) => a.townHallLevel <= 3),
    ).toBeUndefined();
  });
});

describe('HomeVillageDefenses with air defense', () => {
  it('homeDefenses has at least 4 buildings', () => {
    expect(home().defenses().count()).toBeGreaterThanOrEqual(4);
  });

  it('byBuilding finds air-defense by name', () => {
    expect(home().defenses().byBuilding('air defense').count()).toBe(1);
    expect(home().defenses().byBuilding('Air Defense').count()).toBe(1);
  });

  it('byTownHall(3) does not include air defense', () => {
    expect(home().defenses().byTownHall(3).findByName('Air Defense')).toBeUndefined();
  });

  it('byTownHall(4) includes air defense', () => {
    expect(home().defenses().byTownHall(4).findByName('Air Defense')).toBeDefined();
  });

  it('byDamageType("single") includes air defense', () => {
    expect(home().defenses().byDamageType('single').findByName('Air Defense')).toBeDefined();
  });

  it('hasGearUp does not include air defense', () => {
    expect(home().defenses().hasGearUp().findByName('Air Defense')).toBeUndefined();
  });
});

testQueryBaseContract('homeDefenses', () => home().defenses());

testFilterImmutability(
  'byBuilding',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byBuilding('Air Defense'),
);
