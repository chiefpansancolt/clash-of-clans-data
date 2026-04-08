import { home, HomeVillageTroops } from '@/modules/home';

// ─── Minion troop ─────────────────────────────────────────────────────────────

describe('minion()', () => {
  it('returns a HomeTroop', () => {
    const m = home().troops().minion().first()!;
    expect(m).toBeDefined();
    expect(m.id).toBe('minion');
    expect(m.name).toBe('Minion');
  });

  it('has 14 levels', () => {
    expect(home().troops().minion().first()!.levels).toHaveLength(14);
  });

  it('is a dark single-target troop targeting ground and air', () => {
    const m = home().troops().minion().first()!;
    expect(m.troopType).toBe('dark');
    expect(m.damageType).toBe('single');
    expect(m.targetType).toBe('both');
  });

  it('has housing space 2, movement speed 32, attack speed 1, range 2.75', () => {
    const m = home().troops().minion().first()!;
    expect(m.housingSpace).toBe(2);
    expect(m.movementSpeed).toBe(32);
    expect(m.attackSpeed).toBe(1);
    expect(m.range).toBe(2.75);
  });

  it('requires Dark Barracks level 1', () => {
    expect(home().troops().minion().first()!.barrackLevelRequired).toBe(1);
  });

  it('has an icon image', () => {
    expect(home().troops().minion().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 38, DPH 38, HP 58, no research', () => {
    const lvl = home().troops().minion().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(38);
    expect(lvl.stats.normal.damagePerShot).toBe(38);
    expect(lvl.hitpoints).toBe(58);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 5 (TH7), 1000 Dark Elixir / 6h', () => {
    const lvl = home().troops().minion().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(7);
    expect(lvl.researchCost).toBe(1000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 6, minutes: 0, seconds: 0 });
  });

  it('levels 1 and 2 share the same sprite', () => {
    const levels = home().troops().minion().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('levels 3 and 4 share the same sprite', () => {
    const levels = home().troops().minion().first()!.levels;
    expect(levels[2].images.normal).toBe(levels[3].images.normal);
  });

  it('levels 7 and 8 share the same sprite', () => {
    const levels = home().troops().minion().first()!.levels;
    expect(levels[6].images.normal).toBe(levels[7].images.normal);
  });

  it('level 8: Lab 10 (TH12), 47500 Dark Elixir / 2d, DPS 62, HP 96', () => {
    const lvl = home().troops().minion().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(47500);
    expect(lvl.researchTime).toEqual({ days: 2, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(62);
    expect(lvl.hitpoints).toBe(96);
  });

  it('level 14: Lab 16 (TH18), 335000 Dark Elixir / 14d, DPS 92, HP 140', () => {
    const lvl = home().troops().minion().first()!.levels[13];
    expect(lvl.level).toBe(14);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.researchCost).toBe(335000);
    expect(lvl.researchTime).toEqual({ days: 14, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(92);
    expect(lvl.stats.normal.damagePerShot).toBe(92);
    expect(lvl.hitpoints).toBe(140);
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().minion()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── Super Minion ─────────────────────────────────────────────────────────────

describe('superTroop (Super Minion)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().minion().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-minion');
    expect(st.name).toBe('Super Minion');
  });

  it('has 7 levels (8-14)', () => {
    const st = home().troops().minion().first()!.superTroop!;
    expect(st.levels).toHaveLength(7);
    expect(st.levels[0].level).toBe(8);
    expect(st.levels[6].level).toBe(14);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 8', () => {
    const st = home().troops().minion().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(8);
  });

  it('combat stats: housing 12, speed 16, attack 1s, range 4', () => {
    const st = home().troops().minion().first()!.superTroop!;
    expect(st.housingSpace).toBe(12);
    expect(st.movementSpeed).toBe(16);
    expect(st.attackSpeed).toBe(1);
    expect(st.range).toBe(4);
  });

  it('special ability is Long Shot', () => {
    expect(home().troops().minion().first()!.superTroop!.specialAbility).toBe('Long Shot');
  });

  it('level 8: DPS 300, DPH 300, HP 1500, TH12', () => {
    const lvl = home().troops().minion().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(8);
    expect(lvl.stats.normal.dps).toBe(300);
    expect(lvl.stats.normal.damagePerShot).toBe(300);
    expect(lvl.hitpoints).toBe(1500);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 14: DPS 400, DPH 400, HP 2300, TH18', () => {
    const lvl = home().troops().minion().first()!.superTroop!.levels[6];
    expect(lvl.level).toBe(14);
    expect(lvl.stats.normal.dps).toBe(400);
    expect(lvl.stats.normal.damagePerShot).toBe(400);
    expect(lvl.hitpoints).toBe(2300);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all super levels share the same sprite', () => {
    const levels = home().troops().minion().first()!.superTroop!.levels;
    const paths = new Set(levels.map((l) => l.images.normal));
    expect(paths.size).toBe(1);
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops() with minion', () => {
  it('byType("dark") includes minion', () => {
    expect(home().troops().byType('dark').find('minion')).toBeDefined();
  });

  it('byType("regular") does not include minion', () => {
    expect(home().troops().byType('regular').find('minion')).toBeUndefined();
  });

  it('withSuperTroop() includes minion', () => {
    expect(home().troops().withSuperTroop().find('minion')).toBeDefined();
  });

  it('byTownHall(1) includes minion (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('minion')).toBeDefined();
  });

  it('byTownHall(7) includes minion (level 2 at TH7)', () => {
    expect(home().troops().byTownHall(7).find('minion')).toBeDefined();
  });
});
