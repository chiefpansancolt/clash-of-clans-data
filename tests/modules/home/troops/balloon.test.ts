import { home } from '@/modules/home';
import { HomeVillageTroops } from '@/modules/home';

// ─── Balloon troop ────────────────────────────────────────────────────────────

describe('balloon()', () => {
  it('returns a HomeTroop', () => {
    const b = home().troops().balloon().first()!;
    expect(b).toBeDefined();
    expect(b.id).toBe('balloon');
    expect(b.name).toBe('Balloon');
  });

  it('has 12 levels', () => {
    expect(home().troops().balloon().first()!.levels).toHaveLength(12);
  });

  it('is a regular elixir troop targeting ground with splash damage', () => {
    const b = home().troops().balloon().first()!;
    expect(b.troopType).toBe('regular');
    expect(b.targetType).toBe('ground');
    expect(b.damageType).toBe('splash');
  });

  it('has housing space 5, movement speed 10, attack speed 3, range 0.5', () => {
    const b = home().troops().balloon().first()!;
    expect(b.housingSpace).toBe(5);
    expect(b.movementSpeed).toBe(10);
    expect(b.attackSpeed).toBe(3);
    expect(b.range).toBe(0.5);
  });

  it('requires Barracks level 6', () => {
    expect(home().troops().balloon().first()!.barrackLevelRequired).toBe(6);
  });

  it('has an icon image', () => {
    expect(home().troops().balloon().first()!.images.icon).toBeTruthy();
  });

  it('level 1 stats: DPS 25, DPH 75, death damage 25, HP 150, no research', () => {
    const lvl = home().troops().balloon().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(25);
    expect(lvl.stats.normal.damagePerShot).toBe(75);
    expect(lvl.stats.normal.deathDamage).toBe(25);
    expect(lvl.hitpoints).toBe(150);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2 requires Lab 2 (TH4), research 100000 Elixir / 4h', () => {
    const lvl = home().troops().balloon().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(2);
    expect(lvl.townHallRequired).toBe(4);
    expect(lvl.researchCost).toBe(100000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 4, minutes: 0, seconds: 0 });
  });

  it('level 7 requires Lab 9 (TH11), DPS 198, DPH 594, death damage 214, HP 690', () => {
    const lvl = home().troops().balloon().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.stats.normal.dps).toBe(198);
    expect(lvl.stats.normal.damagePerShot).toBe(594);
    expect(lvl.stats.normal.deathDamage).toBe(214);
    expect(lvl.hitpoints).toBe(690);
    expect(lvl.researchCost).toBe(4400000);
    expect(lvl.researchTime).toEqual({ days: 3, hours: 6, minutes: 0, seconds: 0 });
  });

  it('level 10 requires Lab 12 (TH14), DPS 276, DPH 828, death damage 352, HP 1040', () => {
    const lvl = home().troops().balloon().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.stats.normal.dps).toBe(276);
    expect(lvl.stats.normal.damagePerShot).toBe(828);
    expect(lvl.stats.normal.deathDamage).toBe(352);
    expect(lvl.hitpoints).toBe(1040);
  });

  it('level 12 stats: DPS 304, DPH 912, death damage 398, HP 1240, research 17.5M / 11d', () => {
    const lvl = home().troops().balloon().first()!.levels[11];
    expect(lvl.level).toBe(12);
    expect(lvl.stats.normal.dps).toBe(304);
    expect(lvl.stats.normal.damagePerShot).toBe(912);
    expect(lvl.stats.normal.deathDamage).toBe(398);
    expect(lvl.hitpoints).toBe(1240);
    expect(lvl.researchCost).toBe(17500000);
    expect(lvl.researchTime).toEqual({ days: 11, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().balloon().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().balloon()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── Super Troop: Rocket Balloon ──────────────────────────────────────────────

describe('superTroop (Rocket Balloon)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().balloon().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('rocket-balloon');
    expect(st.name).toBe('Rocket Balloon');
  });

  it('has 5 levels (8-12)', () => {
    const st = home().troops().balloon().first()!.superTroop!;
    expect(st.levels).toHaveLength(5);
    expect(st.levels[0].level).toBe(8);
    expect(st.levels[4].level).toBe(12);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 8', () => {
    const st = home().troops().balloon().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(8);
  });

  it('combat stats: housing 8, speed 12, attack 3s, range 0.5', () => {
    const st = home().troops().balloon().first()!.superTroop!;
    expect(st.housingSpace).toBe(8);
    expect(st.movementSpeed).toBe(12);
    expect(st.attackSpeed).toBe(3);
    expect(st.range).toBe(0.5);
  });

  it('special ability is Boosters', () => {
    expect(home().troops().balloon().first()!.superTroop!.specialAbility).toBe('Boosters');
  });

  it('has an icon image', () => {
    expect(home().troops().balloon().first()!.superTroop!.images.icon).toBeTruthy();
  });

  it('level 8: DPS 270, DPH 810, death damage 580, HP 840', () => {
    const lvl = home().troops().balloon().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(8);
    expect(lvl.stats.normal.dps).toBe(270);
    expect(lvl.stats.normal.damagePerShot).toBe(810);
    expect(lvl.stats.normal.deathDamage).toBe(580);
    expect(lvl.hitpoints).toBe(840);
  });

  it('level 12: DPS 304, DPH 912, death damage 730, HP 1240', () => {
    const lvl = home().troops().balloon().first()!.superTroop!.levels[4];
    expect(lvl.level).toBe(12);
    expect(lvl.stats.normal.dps).toBe(304);
    expect(lvl.stats.normal.damagePerShot).toBe(912);
    expect(lvl.stats.normal.deathDamage).toBe(730);
    expect(lvl.hitpoints).toBe(1240);
  });

  it('has normal images for each super level', () => {
    const levels = home().troops().balloon().first()!.superTroop!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops() with balloon', () => {
  it('byType("regular") includes balloon', () => {
    expect(home().troops().byType('regular').find('balloon')).toBeDefined();
  });

  it('withSuperTroop() includes balloon', () => {
    expect(home().troops().withSuperTroop().find('balloon')).toBeDefined();
  });

  it('byTownHall(4) includes balloon (level 1 is TH1)', () => {
    expect(home().troops().byTownHall(4).find('balloon')).toBeDefined();
  });

  it('byTownHall(0) does not include balloon', () => {
    expect(home().troops().byTownHall(0).find('balloon')).toBeUndefined();
  });
});
