import { home } from '@/modules/home';
import { HomeVillageTroops } from '@/modules/home';

describe('wallBreaker()', () => {
  it('returns a HomeTroop', () => {
    const wb = home().troops().wallBreaker().first()!;
    expect(wb).toBeDefined();
    expect(wb.id).toBe('wall-breaker');
    expect(wb.name).toBe('Wall Breaker');
  });

  it('has 14 levels', () => {
    expect(home().troops().wallBreaker().first()!.levels).toHaveLength(14);
  });

  it('is a regular elixir troop targeting ground with splash damage', () => {
    const wb = home().troops().wallBreaker().first()!;
    expect(wb.troopType).toBe('regular');
    expect(wb.targetType).toBe('ground');
    expect(wb.damageType).toBe('splash');
  });

  it('has housing space 2, movement speed 24, attack speed 1, range 1', () => {
    const wb = home().troops().wallBreaker().first()!;
    expect(wb.housingSpace).toBe(2);
    expect(wb.movementSpeed).toBe(24);
    expect(wb.attackSpeed).toBe(1);
    expect(wb.range).toBe(1);
  });

  it('requires Barracks level 5', () => {
    expect(home().troops().wallBreaker().first()!.barrackLevelRequired).toBe(5);
  });

  it('has an icon image', () => {
    expect(home().troops().wallBreaker().first()!.images.icon).toBeTruthy();
  });

  it('level 1 stats: DPH 10, death damage 6, HP 20, no research', () => {
    const lvl = home().troops().wallBreaker().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(10);
    expect(lvl.stats.normal.damagePerShot).toBe(10);
    expect(lvl.stats.normal.deathDamage).toBe(6);
    expect(lvl.hitpoints).toBe(20);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2 requires Lab 2 (TH4), research 80000 Elixir / 3h', () => {
    const lvl = home().troops().wallBreaker().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(2);
    expect(lvl.townHallRequired).toBe(4);
    expect(lvl.researchCost).toBe(80000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 3, minutes: 0, seconds: 0 });
  });

  it('level 6 requires Lab 8 (TH10), DPH 55, death damage 30, HP 72', () => {
    const lvl = home().troops().wallBreaker().first()!.levels[5];
    expect(lvl.level).toBe(6);
    expect(lvl.laboratoryRequired).toBe(8);
    expect(lvl.townHallRequired).toBe(10);
    expect(lvl.stats.normal.dps).toBe(55);
    expect(lvl.stats.normal.deathDamage).toBe(30);
    expect(lvl.hitpoints).toBe(72);
  });

  it('level 9 requires Lab 11 (TH13)', () => {
    const lvl = home().troops().wallBreaker().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
  });

  it('level 14 stats: DPH 126, death damage 78, HP 170, research 26M Elixir / 14d', () => {
    const lvl = home().troops().wallBreaker().first()!.levels[13];
    expect(lvl.level).toBe(14);
    expect(lvl.stats.normal.dps).toBe(126);
    expect(lvl.stats.normal.damagePerShot).toBe(126);
    expect(lvl.stats.normal.deathDamage).toBe(78);
    expect(lvl.hitpoints).toBe(170);
    expect(lvl.researchCost).toBe(26000000);
    expect(lvl.researchTime).toEqual({ days: 14, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().wallBreaker().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().wallBreaker()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Super Wall Breaker)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().wallBreaker().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-wall-breaker');
    expect(st.name).toBe('Super Wall Breaker');
  });

  it('has 8 levels (7-14)', () => {
    const st = home().troops().wallBreaker().first()!.superTroop!;
    expect(st.levels).toHaveLength(8);
    expect(st.levels[0].level).toBe(7);
    expect(st.levels[7].level).toBe(14);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 7', () => {
    const st = home().troops().wallBreaker().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(7);
  });

  it('combat stats: housing 8, speed 28, attack 1s, range 0.6', () => {
    const st = home().troops().wallBreaker().first()!.superTroop!;
    expect(st.housingSpace).toBe(8);
    expect(st.movementSpeed).toBe(28);
    expect(st.attackSpeed).toBe(1);
    expect(st.range).toBe(0.6);
  });

  it('special ability is Mega Bomb', () => {
    expect(home().troops().wallBreaker().first()!.superTroop!.specialAbility).toBe('Mega Bomb');
  });

  it('has an icon image', () => {
    expect(home().troops().wallBreaker().first()!.superTroop!.images.icon).toBeTruthy();
  });

  it('level 7: DPH 78, death damage 175, HP 350', () => {
    const lvl = home().troops().wallBreaker().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(7);
    expect(lvl.stats.normal.dps).toBe(78);
    expect(lvl.stats.normal.damagePerShot).toBe(78);
    expect(lvl.stats.normal.deathDamage).toBe(175);
    expect(lvl.hitpoints).toBe(350);
  });

  it('level 14: DPH 170, death damage 413, HP 575', () => {
    const lvl = home().troops().wallBreaker().first()!.superTroop!.levels[7];
    expect(lvl.level).toBe(14);
    expect(lvl.stats.normal.dps).toBe(170);
    expect(lvl.stats.normal.damagePerShot).toBe(170);
    expect(lvl.stats.normal.deathDamage).toBe(413);
    expect(lvl.hitpoints).toBe(575);
  });

  it('has normal images for each super level', () => {
    const levels = home().troops().wallBreaker().first()!.superTroop!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });
});

describe('troops() with wallBreaker', () => {
  it('byType("regular") includes wallBreaker', () => {
    expect(home().troops().byType('regular').find('wall-breaker')).toBeDefined();
  });

  it('withSuperTroop() includes wallBreaker', () => {
    expect(home().troops().withSuperTroop().find('wall-breaker')).toBeDefined();
  });

  it('byTownHall(1) includes wallBreaker (level 1 is TH1)', () => {
    expect(home().troops().byTownHall(1).find('wall-breaker')).toBeDefined();
  });
});
