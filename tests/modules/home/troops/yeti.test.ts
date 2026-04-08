import { home, HomeVillageTroops } from '@/modules/home';

// ─── Yeti troop ───────────────────────────────────────────────────────────────

describe('yeti()', () => {
  it('returns a HomeTroop', () => {
    const y = home().troops().yeti().first()!;
    expect(y).toBeDefined();
    expect(y.id).toBe('yeti');
    expect(y.name).toBe('Yeti');
  });

  it('has 7 levels', () => {
    expect(home().troops().yeti().first()!.levels).toHaveLength(7);
  });

  it('is a regular single-target troop targeting ground', () => {
    const y = home().troops().yeti().first()!;
    expect(y.troopType).toBe('regular');
    expect(y.damageType).toBe('single');
    expect(y.targetType).toBe('ground');
  });

  it('has housing space 18, movement speed 12, attack speed 1, range 0.8', () => {
    const y = home().troops().yeti().first()!;
    expect(y.housingSpace).toBe(18);
    expect(y.movementSpeed).toBe(12);
    expect(y.attackSpeed).toBe(1);
    expect(y.range).toBe(0.8);
  });

  it('requires Barracks level 14', () => {
    expect(home().troops().yeti().first()!.barrackLevelRequired).toBe(14);
  });

  it('has an icon image', () => {
    expect(home().troops().yeti().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 230, DPH 230, HP 2900, no research', () => {
    const lvl = home().troops().yeti().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(230);
    expect(lvl.stats.normal.damagePerShot).toBe(230);
    expect(lvl.hitpoints).toBe(2900);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 10 (TH12), 5M / 3d', () => {
    const lvl = home().troops().yeti().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(5000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(250);
    expect(lvl.hitpoints).toBe(3200);
  });

  it('level 4: Lab 12 (TH14), 10M / 7d, DPS 290, HP 3700', () => {
    const lvl = home().troops().yeti().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.researchCost).toBe(10000000);
    expect(lvl.researchTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(290);
    expect(lvl.hitpoints).toBe(3700);
  });

  it('level 7: DPS 350, DPH 350, HP 4300, Lab 15 (TH17), 17M / 10d', () => {
    const lvl = home().troops().yeti().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.stats.normal.dps).toBe(350);
    expect(lvl.stats.normal.damagePerShot).toBe(350);
    expect(lvl.hitpoints).toBe(4300);
    expect(lvl.researchCost).toBe(17000000);
    expect(lvl.researchTime).toEqual({ days: 10, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
  });

  it('all levels have unique sprites', () => {
    const levels = home().troops().yeti().first()!.levels;
    const paths = levels.map((l) => l.images.normal);
    expect(new Set(paths).size).toBe(7);
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().yeti()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── Super Yeti ───────────────────────────────────────────────────────────────

describe('superTroop (Super Yeti)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().yeti().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-yeti');
    expect(st.name).toBe('Super Yeti');
  });

  it('has 5 levels (3-7)', () => {
    const st = home().troops().yeti().first()!.superTroop!;
    expect(st.levels).toHaveLength(5);
    expect(st.levels[0].level).toBe(3);
    expect(st.levels[4].level).toBe(7);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 3', () => {
    const st = home().troops().yeti().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(3);
  });

  it('combat stats: housing 35, speed 12, attack 1s, range 0.8', () => {
    const st = home().troops().yeti().first()!.superTroop!;
    expect(st.housingSpace).toBe(35);
    expect(st.movementSpeed).toBe(12);
    expect(st.attackSpeed).toBe(1);
    expect(st.range).toBe(0.8);
  });

  it('special ability is Shock and Awe', () => {
    expect(home().troops().yeti().first()!.superTroop!.specialAbility).toBe('Shock and Awe');
  });

  it('level 3: DPS 415, DPH 415, HP 5400', () => {
    const lvl = home().troops().yeti().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(3);
    expect(lvl.stats.normal.dps).toBe(415);
    expect(lvl.stats.normal.damagePerShot).toBe(415);
    expect(lvl.hitpoints).toBe(5400);
  });

  it('level 7: DPS 525, DPH 525, HP 7000', () => {
    const lvl = home().troops().yeti().first()!.superTroop!.levels[4];
    expect(lvl.level).toBe(7);
    expect(lvl.stats.normal.dps).toBe(525);
    expect(lvl.stats.normal.damagePerShot).toBe(525);
    expect(lvl.hitpoints).toBe(7000);
  });

  it('all super levels share the same sprite', () => {
    const levels = home().troops().yeti().first()!.superTroop!.levels;
    const first = levels[0].images.normal;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBe(first);
    });
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops() with yeti', () => {
  it('byType("regular") includes yeti', () => {
    expect(home().troops().byType('regular').find('yeti')).toBeDefined();
  });

  it('withSuperTroop() includes yeti', () => {
    expect(home().troops().withSuperTroop().find('yeti')).toBeDefined();
  });

  it('byTownHall(1) includes yeti (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('yeti')).toBeDefined();
  });

  it('byTownHall(12) includes yeti (level 2 at TH12)', () => {
    expect(home().troops().byTownHall(12).find('yeti')).toBeDefined();
  });
});
