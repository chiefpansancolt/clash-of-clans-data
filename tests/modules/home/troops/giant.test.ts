import { home } from '@/modules/home';
import { HomeVillageTroops } from '@/modules/home';

describe('giant()', () => {
  it('returns a HomeTroop', () => {
    const g = home().troops().giant().first()!;
    expect(g).toBeDefined();
    expect(g.id).toBe('giant');
    expect(g.name).toBe('Giant');
  });

  it('has 14 levels', () => {
    expect(home().troops().giant().first()!.levels).toHaveLength(14);
  });

  it('is a regular elixir troop targeting ground', () => {
    const g = home().troops().giant().first()!;
    expect(g.troopType).toBe('regular');
    expect(g.targetType).toBe('ground');
    expect(g.damageType).toBe('single');
  });

  it('has housing space 5, movement speed 12, attack speed 2, range 1', () => {
    const g = home().troops().giant().first()!;
    expect(g.housingSpace).toBe(5);
    expect(g.movementSpeed).toBe(12);
    expect(g.attackSpeed).toBe(2);
    expect(g.range).toBe(1);
  });

  it('requires Barracks level 3', () => {
    expect(home().troops().giant().first()!.barrackLevelRequired).toBe(3);
  });

  it('has an icon image', () => {
    expect(home().troops().giant().first()!.images.icon).toBeTruthy();
  });

  it('level 1 stats: DPS 12, DPH 24, HP 400, no research', () => {
    const lvl = home().troops().giant().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(12);
    expect(lvl.stats.normal.damagePerShot).toBe(24);
    expect(lvl.hitpoints).toBe(400);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2 requires Lab 2 (TH4), research 40000 Elixir / 2h', () => {
    const lvl = home().troops().giant().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(2);
    expect(lvl.townHallRequired).toBe(4);
    expect(lvl.researchCost).toBe(40000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 2, minutes: 0, seconds: 0 });
  });

  it('level 9 requires Lab 10 (TH12), DPS 70, HP 1850', () => {
    const lvl = home().troops().giant().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.stats.normal.dps).toBe(70);
    expect(lvl.hitpoints).toBe(1850);
  });

  it('level 10 requires Lab 11 (TH13)', () => {
    const lvl = home().troops().giant().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
  });

  it('level 14 stats: DPS 114, DPH 228, HP 3000, research 25M Elixir / 13d 12h', () => {
    const lvl = home().troops().giant().first()!.levels[13];
    expect(lvl.level).toBe(14);
    expect(lvl.stats.normal.dps).toBe(114);
    expect(lvl.stats.normal.damagePerShot).toBe(228);
    expect(lvl.hitpoints).toBe(3000);
    expect(lvl.researchCost).toBe(25000000);
    expect(lvl.researchTime).toEqual({ days: 13, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().giant().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().giant()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Super Giant)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().giant().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-giant');
    expect(st.name).toBe('Super Giant');
  });

  it('has 6 levels (9-14)', () => {
    const st = home().troops().giant().first()!.superTroop!;
    expect(st.levels).toHaveLength(6);
    expect(st.levels[0].level).toBe(9);
    expect(st.levels[5].level).toBe(14);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 9', () => {
    const st = home().troops().giant().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(9);
  });

  it('combat stats: housing 10, speed 12, attack 2s, range 1', () => {
    const st = home().troops().giant().first()!.superTroop!;
    expect(st.housingSpace).toBe(10);
    expect(st.movementSpeed).toBe(12);
    expect(st.attackSpeed).toBe(2);
    expect(st.range).toBe(1);
  });

  it('special ability is Wall Buster', () => {
    expect(home().troops().giant().first()!.superTroop!.specialAbility).toBe('Wall Buster');
  });

  it('has an icon image', () => {
    expect(home().troops().giant().first()!.superTroop!.images.icon).toBeTruthy();
  });

  it('level 9: DPS 130, DPH 260, HP 4000', () => {
    const lvl = home().troops().giant().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(9);
    expect(lvl.stats.normal.dps).toBe(130);
    expect(lvl.stats.normal.damagePerShot).toBe(260);
    expect(lvl.hitpoints).toBe(4000);
  });

  it('level 14: DPS 205, DPH 410, HP 5600', () => {
    const lvl = home().troops().giant().first()!.superTroop!.levels[5];
    expect(lvl.level).toBe(14);
    expect(lvl.stats.normal.dps).toBe(205);
    expect(lvl.stats.normal.damagePerShot).toBe(410);
    expect(lvl.hitpoints).toBe(5600);
  });

  it('has normal images for each super level', () => {
    const levels = home().troops().giant().first()!.superTroop!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });
});

describe('troops() with giant', () => {
  it('byType("regular") includes giant', () => {
    expect(home().troops().byType('regular').find('giant')).toBeDefined();
  });

  it('withSuperTroop() includes giant', () => {
    expect(home().troops().withSuperTroop().find('giant')).toBeDefined();
  });

  it('byTownHall(1) includes giant (level 1 is TH1)', () => {
    expect(home().troops().byTownHall(1).find('giant')).toBeDefined();
  });
});
