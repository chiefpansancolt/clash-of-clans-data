import { home } from '@/modules/home';
import { HomeVillageTroops } from '@/modules/home';

// ─── Wizard troop ─────────────────────────────────────────────────────────────

describe('wizard()', () => {
  it('returns a HomeTroop', () => {
    const w = home().troops().wizard().first()!;
    expect(w).toBeDefined();
    expect(w.id).toBe('wizard');
    expect(w.name).toBe('Wizard');
  });

  it('has 14 levels', () => {
    expect(home().troops().wizard().first()!.levels).toHaveLength(14);
  });

  it('is a regular elixir troop targeting both with splash damage', () => {
    const w = home().troops().wizard().first()!;
    expect(w.troopType).toBe('regular');
    expect(w.targetType).toBe('both');
    expect(w.damageType).toBe('splash');
  });

  it('has housing space 4, movement speed 16, attack speed 1.5, range 3', () => {
    const w = home().troops().wizard().first()!;
    expect(w.housingSpace).toBe(4);
    expect(w.movementSpeed).toBe(16);
    expect(w.attackSpeed).toBe(1.5);
    expect(w.range).toBe(3);
  });

  it('requires Barracks level 7', () => {
    expect(home().troops().wizard().first()!.barrackLevelRequired).toBe(7);
  });

  it('has an icon image', () => {
    expect(home().troops().wizard().first()!.images.icon).toBeTruthy();
  });

  it('level 1 stats: DPS 50, DPH 75, HP 75, no research', () => {
    const lvl = home().troops().wizard().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(50);
    expect(lvl.stats.normal.damagePerShot).toBe(75);
    expect(lvl.hitpoints).toBe(75);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2 requires Lab 3 (TH5), research 120000 Elixir / 4h', () => {
    const lvl = home().troops().wizard().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(3);
    expect(lvl.townHallRequired).toBe(5);
    expect(lvl.researchCost).toBe(120000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 4, minutes: 0, seconds: 0 });
  });

  it('level 4 stats: DPS 125, DPH 187.5, HP 135, Lab 5 (TH7), 600k / 12h', () => {
    const lvl = home().troops().wizard().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.stats.normal.dps).toBe(125);
    expect(lvl.stats.normal.damagePerShot).toBe(187.5);
    expect(lvl.hitpoints).toBe(135);
    expect(lvl.laboratoryRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(7);
    expect(lvl.researchCost).toBe(600000);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 9 requires Lab 10 (TH12), DPS 230, DPH 345, HP 230', () => {
    const lvl = home().troops().wizard().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.stats.normal.dps).toBe(230);
    expect(lvl.stats.normal.damagePerShot).toBe(345);
    expect(lvl.hitpoints).toBe(230);
    expect(lvl.researchCost).toBe(4000000);
    expect(lvl.researchTime).toEqual({ days: 2, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 11 requires Lab 13 (TH15), DPS 260, HP 270, 10M / 5d 12h', () => {
    const lvl = home().troops().wizard().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.stats.normal.dps).toBe(260);
    expect(lvl.hitpoints).toBe(270);
    expect(lvl.researchCost).toBe(10000000);
    expect(lvl.researchTime).toEqual({ days: 5, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 14 stats: DPS 310, DPH 465, HP 330, Lab 16 (TH18), 27M / 14d', () => {
    const lvl = home().troops().wizard().first()!.levels[13];
    expect(lvl.level).toBe(14);
    expect(lvl.stats.normal.dps).toBe(310);
    expect(lvl.stats.normal.damagePerShot).toBe(465);
    expect(lvl.hitpoints).toBe(330);
    expect(lvl.researchCost).toBe(27000000);
    expect(lvl.researchTime).toEqual({ days: 14, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().wizard().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().wizard()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── Super Troop: Super Wizard ────────────────────────────────────────────────

describe('superTroop (Super Wizard)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().wizard().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-wizard');
    expect(st.name).toBe('Super Wizard');
  });

  it('has 6 levels (9-14)', () => {
    const st = home().troops().wizard().first()!.superTroop!;
    expect(st.levels).toHaveLength(6);
    expect(st.levels[0].level).toBe(9);
    expect(st.levels[5].level).toBe(14);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 9', () => {
    const st = home().troops().wizard().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(9);
  });

  it('combat stats: housing 10, speed 20, attack 2s, range 3', () => {
    const st = home().troops().wizard().first()!.superTroop!;
    expect(st.housingSpace).toBe(10);
    expect(st.movementSpeed).toBe(20);
    expect(st.attackSpeed).toBe(2);
    expect(st.range).toBe(3);
  });

  it('special ability is Chain Magic', () => {
    expect(home().troops().wizard().first()!.superTroop!.specialAbility).toBe('Chain Magic');
  });

  it('has an icon image', () => {
    expect(home().troops().wizard().first()!.superTroop!.images.icon).toBeTruthy();
  });

  it('level 9: DPS 220, DPH 440, chain DPH 176, HP 545', () => {
    const lvl = home().troops().wizard().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(9);
    expect(lvl.stats.normal.dps).toBe(220);
    expect(lvl.stats.normal.damagePerShot).toBe(440);
    expect(lvl.stats.normal.chainDamagePerShot).toBe(176);
    expect(lvl.hitpoints).toBe(545);
  });

  it('level 14: DPS 335, DPH 670, chain DPH 268, HP 925', () => {
    const lvl = home().troops().wizard().first()!.superTroop!.levels[5];
    expect(lvl.level).toBe(14);
    expect(lvl.stats.normal.dps).toBe(335);
    expect(lvl.stats.normal.damagePerShot).toBe(670);
    expect(lvl.stats.normal.chainDamagePerShot).toBe(268);
    expect(lvl.hitpoints).toBe(925);
  });

  it('has normal images for each super level', () => {
    const levels = home().troops().wizard().first()!.superTroop!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops() with wizard', () => {
  it('byType("regular") includes wizard', () => {
    expect(home().troops().byType('regular').find('wizard')).toBeDefined();
  });

  it('withSuperTroop() includes wizard', () => {
    expect(home().troops().withSuperTroop().find('wizard')).toBeDefined();
  });

  it('byTownHall(5) includes wizard (level 1 is TH1)', () => {
    expect(home().troops().byTownHall(5).find('wizard')).toBeDefined();
  });

  it('byTownHall(0) does not include wizard', () => {
    expect(home().troops().byTownHall(0).find('wizard')).toBeUndefined();
  });
});
