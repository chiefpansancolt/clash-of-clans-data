import { home } from '@/modules/home';
import { HomeVillageTroops } from '@/modules/home';

// ─── Barbarian troop ──────────────────────────────────────────────────────────

describe('barbarian()', () => {
  it('returns a HomeTroop', () => {
    const b = home().troops().barbarian().first()!;
    expect(b).toBeDefined();
    expect(b.id).toBe('barbarian');
    expect(b.name).toBe('Barbarian');
  });

  it('has 12 levels', () => {
    expect(home().troops().barbarian().first()!.levels).toHaveLength(12);
  });

  it('is a regular elixir troop targeting ground', () => {
    const b = home().troops().barbarian().first()!;
    expect(b.troopType).toBe('regular');
    expect(b.targetType).toBe('ground');
    expect(b.damageType).toBe('single');
  });

  it('has housing space 1, movement speed 18, attack speed 1, range 0.4', () => {
    const b = home().troops().barbarian().first()!;
    expect(b.housingSpace).toBe(1);
    expect(b.movementSpeed).toBe(18);
    expect(b.attackSpeed).toBe(1);
    expect(b.range).toBe(0.4);
  });

  it('requires Barracks level 1', () => {
    expect(home().troops().barbarian().first()!.barrackLevelRequired).toBe(1);
  });

  it('level 1 stats: DPS 9, DPH 9, HP 45, no research', () => {
    const lvl = home().troops().barbarian().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(9);
    expect(lvl.stats.normal.damagePerShot).toBe(9);
    expect(lvl.hitpoints).toBe(45);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2 requires Lab 1 (TH3), research 10000 Elixir / 30m', () => {
    const lvl = home().troops().barbarian().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(1);
    expect(lvl.townHallRequired).toBe(3);
    expect(lvl.researchCost).toBe(10000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 30, seconds: 0 });
  });

  it('level 8 requires Lab 9 (TH11), DPS 34, HP 205', () => {
    const lvl = home().troops().barbarian().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.stats.normal.dps).toBe(34);
    expect(lvl.hitpoints).toBe(205);
  });

  it('level 10 requires Lab 12 (TH14)', () => {
    const lvl = home().troops().barbarian().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
  });

  it('level 12 stats: DPS 48, DPH 48, HP 290, research 8M Elixir / 4d 12h', () => {
    const lvl = home().troops().barbarian().first()!.levels[11];
    expect(lvl.level).toBe(12);
    expect(lvl.stats.normal.dps).toBe(48);
    expect(lvl.stats.normal.damagePerShot).toBe(48);
    expect(lvl.hitpoints).toBe(290);
    expect(lvl.researchCost).toBe(8000000);
    expect(lvl.researchTime).toEqual({ days: 4, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().barbarian().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().barbarian()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── Super Barbarian ──────────────────────────────────────────────────────────

describe('superTroop (Super Barbarian)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().barbarian().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-barbarian');
    expect(st.name).toBe('Super Barbarian');
  });

  it('has 5 levels (8-12)', () => {
    const st = home().troops().barbarian().first()!.superTroop!;
    expect(st.levels).toHaveLength(5);
    expect(st.levels[0].level).toBe(8);
    expect(st.levels[4].level).toBe(12);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 8', () => {
    const st = home().troops().barbarian().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(8);
  });

  it('combat stats: housing 5, speed 20, attack 0.8s, range 0.6', () => {
    const st = home().troops().barbarian().first()!.superTroop!;
    expect(st.housingSpace).toBe(5);
    expect(st.movementSpeed).toBe(20);
    expect(st.attackSpeed).toBe(0.8);
    expect(st.range).toBe(0.6);
  });

  it('special ability is Rage', () => {
    expect(home().troops().barbarian().first()!.superTroop!.specialAbility).toBe('Rage');
  });

  it('level 8: DPS 180, DPH 144, HP 1000', () => {
    const lvl = home().troops().barbarian().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(8);
    expect(lvl.stats.normal.dps).toBe(180);
    expect(lvl.stats.normal.damagePerShot).toBe(144);
    expect(lvl.hitpoints).toBe(1000);
  });

  it('level 12: DPS 250, DPH 200, HP 1350', () => {
    const lvl = home().troops().barbarian().first()!.superTroop!.levels[4];
    expect(lvl.level).toBe(12);
    expect(lvl.stats.normal.dps).toBe(250);
    expect(lvl.stats.normal.damagePerShot).toBe(200);
    expect(lvl.hitpoints).toBe(1350);
  });

  it('has normal images for each super level', () => {
    const levels = home().troops().barbarian().first()!.superTroop!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops()', () => {
  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops()).toBeInstanceOf(HomeVillageTroops);
  });

  it('has 2 troops total', () => {
    expect(home().troops().count()).toBe(2);
  });

  it('byType("regular") returns 2 troops', () => {
    expect(home().troops().byType('regular').count()).toBe(2);
  });

  it('byType("dark") returns 0 troops', () => {
    expect(home().troops().byType('dark').count()).toBe(0);
  });

  it('withSuperTroop() returns 2 troops', () => {
    expect(home().troops().withSuperTroop().count()).toBe(2);
  });

  it('byTownHall(1) returns 2 troops (Barbarian and Archer level 1 are TH1)', () => {
    expect(home().troops().byTownHall(1).count()).toBe(2);
  });
});
