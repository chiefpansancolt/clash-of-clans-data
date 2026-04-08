import { home, HomeVillageTroops } from '@/modules/home';

// ─── Baby Dragon troop ────────────────────────────────────────────────────────

describe('babyDragon()', () => {
  it('returns a HomeTroop', () => {
    const bd = home().troops().babyDragon().first()!;
    expect(bd).toBeDefined();
    expect(bd.id).toBe('baby-dragon');
    expect(bd.name).toBe('Baby Dragon');
  });

  it('has 12 levels', () => {
    expect(home().troops().babyDragon().first()!.levels).toHaveLength(12);
  });

  it('is a regular splash troop targeting both ground and air', () => {
    const bd = home().troops().babyDragon().first()!;
    expect(bd.troopType).toBe('regular');
    expect(bd.damageType).toBe('splash');
    expect(bd.targetType).toBe('both');
  });

  it('has housing space 10, movement speed 20, attack speed 1, range 2.75', () => {
    const bd = home().troops().babyDragon().first()!;
    expect(bd.housingSpace).toBe(10);
    expect(bd.movementSpeed).toBe(20);
    expect(bd.attackSpeed).toBe(1);
    expect(bd.range).toBe(2.75);
  });

  it('requires Barracks level 11', () => {
    expect(home().troops().babyDragon().first()!.barrackLevelRequired).toBe(11);
  });

  it('has Tantrum special ability', () => {
    expect(home().troops().babyDragon().first()!.specialAbility).toBe('Tantrum');
  });

  it('has an icon image', () => {
    expect(home().troops().babyDragon().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 75, Enraged DPS 225, DPH 75, Enraged DPH 150, HP 1200, no research', () => {
    const lvl = home().troops().babyDragon().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(75);
    expect(lvl.stats.normal.damagePerShot).toBe(75);
    expect(lvl.stats.enraged!.dps).toBe(225);
    expect(lvl.stats.enraged!.damagePerShot).toBe(150);
    expect(lvl.hitpoints).toBe(1200);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 7 (TH9), 1.5M Elixir / 1d 6h', () => {
    const lvl = home().troops().babyDragon().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(9);
    expect(lvl.researchCost).toBe(1500000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 1, hours: 6, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(85);
    expect(lvl.hitpoints).toBe(1300);
  });

  it('levels 1 and 2 share the same sprite', () => {
    const levels = home().troops().babyDragon().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('levels 3 and 4 both require Lab 8 (TH10)', () => {
    const lvl3 = home().troops().babyDragon().first()!.levels[2];
    const lvl4 = home().troops().babyDragon().first()!.levels[3];
    expect(lvl3.laboratoryRequired).toBe(8);
    expect(lvl3.townHallRequired).toBe(10);
    expect(lvl4.laboratoryRequired).toBe(8);
    expect(lvl4.townHallRequired).toBe(10);
  });

  it('level 4: 2.8M Elixir / 2d, DPS 105, HP 1500', () => {
    const lvl = home().troops().babyDragon().first()!.levels[3];
    expect(lvl.researchCost).toBe(2800000);
    expect(lvl.researchTime).toEqual({ days: 2, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(105);
    expect(lvl.hitpoints).toBe(1500);
  });

  it('level 6: Lab 10 (TH12)', () => {
    const lvl = home().troops().babyDragon().first()!.levels[5];
    expect(lvl.level).toBe(6);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 12: DPS 185, Enraged DPS 555, HP 2350, Lab 16 (TH18), 29M / 15d 6h', () => {
    const lvl = home().troops().babyDragon().first()!.levels[11];
    expect(lvl.level).toBe(12);
    expect(lvl.stats.normal.dps).toBe(185);
    expect(lvl.stats.normal.damagePerShot).toBe(185);
    expect(lvl.stats.enraged!.dps).toBe(555);
    expect(lvl.stats.enraged!.damagePerShot).toBe(370);
    expect(lvl.hitpoints).toBe(2350);
    expect(lvl.researchCost).toBe(29000000);
    expect(lvl.researchTime).toEqual({ days: 15, hours: 6, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all levels have enraged stats', () => {
    const levels = home().troops().babyDragon().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.stats.enraged).toBeDefined();
      expect(lvl.stats.enraged!.dps).toBeGreaterThan(lvl.stats.normal.dps!);
    });
  });

  it('has normal images for each level', () => {
    const levels = home().troops().babyDragon().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().babyDragon()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── Inferno Dragon (Super Troop) ─────────────────────────────────────────────

describe('superTroop (Inferno Dragon)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().babyDragon().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('inferno-dragon');
    expect(st.name).toBe('Inferno Dragon');
  });

  it('has 7 levels (6-12)', () => {
    const st = home().troops().babyDragon().first()!.superTroop!;
    expect(st.levels).toHaveLength(7);
    expect(st.levels[0].level).toBe(6);
    expect(st.levels[6].level).toBe(12);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 6', () => {
    const st = home().troops().babyDragon().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(6);
  });

  it('combat stats: housing 15, speed 18, attack 0.128s, range 4', () => {
    const st = home().troops().babyDragon().first()!.superTroop!;
    expect(st.housingSpace).toBe(15);
    expect(st.movementSpeed).toBe(18);
    expect(st.attackSpeed).toBe(0.128);
    expect(st.range).toBe(4);
  });

  it('special ability is Inferno Beam', () => {
    expect(home().troops().babyDragon().first()!.superTroop!.specialAbility).toBe('Inferno Beam');
  });

  it('level 6: Stage1 DPS 75, Stage2 DPS 150, Stage3 DPS 1500, HP 1900, TH12', () => {
    const lvl = home().troops().babyDragon().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(6);
    expect(lvl.stats.normal.dps).toBe(75);
    expect(lvl.stats.stage2!.dps).toBe(150);
    expect(lvl.stats.stage3!.dps).toBe(1500);
    expect(lvl.hitpoints).toBe(1900);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 9: Stage1 DPS 85, Stage2 DPS 170, Stage3 DPS 1700, HP 2300, TH15', () => {
    const lvl = home().troops().babyDragon().first()!.superTroop!.levels[3];
    expect(lvl.level).toBe(9);
    expect(lvl.stats.normal.dps).toBe(85);
    expect(lvl.stats.stage2!.dps).toBe(170);
    expect(lvl.stats.stage3!.dps).toBe(1700);
    expect(lvl.hitpoints).toBe(2300);
    expect(lvl.townHallRequired).toBe(15);
  });

  it('level 12: Stage1 DPS 90, Stage2 DPS 182, Stage3 DPS 1820, HP 2700, TH18', () => {
    const lvl = home().troops().babyDragon().first()!.superTroop!.levels[6];
    expect(lvl.level).toBe(12);
    expect(lvl.stats.normal.dps).toBe(90);
    expect(lvl.stats.stage2!.dps).toBe(182);
    expect(lvl.stats.stage3!.dps).toBe(1820);
    expect(lvl.hitpoints).toBe(2700);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all levels share the same sprite', () => {
    const levels = home().troops().babyDragon().first()!.superTroop!.levels;
    const firstImage = levels[0].images.normal;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBe(firstImage);
    });
  });

  it('has normal images for each super level', () => {
    const levels = home().troops().babyDragon().first()!.superTroop!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops() with babyDragon', () => {
  it('byType("regular") includes baby-dragon', () => {
    expect(home().troops().byType('regular').find('baby-dragon')).toBeDefined();
  });

  it('withSuperTroop() includes baby-dragon (has Inferno Dragon super troop)', () => {
    expect(home().troops().withSuperTroop().find('baby-dragon')).toBeDefined();
  });

  it('byTownHall(1) includes baby-dragon (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('baby-dragon')).toBeDefined();
  });

  it('byTownHall(9) includes baby-dragon (level 2 at TH9)', () => {
    expect(home().troops().byTownHall(9).find('baby-dragon')).toBeDefined();
  });
});
