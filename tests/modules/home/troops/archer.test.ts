import { home } from '@/modules/home';
import { HomeVillageTroops } from '@/modules/home';

describe('archer()', () => {
  it('returns a HomeTroop', () => {
    const a = home().troops().archer().first()!;
    expect(a).toBeDefined();
    expect(a.id).toBe('archer');
    expect(a.name).toBe('Archer');
  });

  it('has 14 levels', () => {
    expect(home().troops().archer().first()!.levels).toHaveLength(14);
  });

  it('is a regular elixir troop targeting both ground and air', () => {
    const a = home().troops().archer().first()!;
    expect(a.troopType).toBe('regular');
    expect(a.targetType).toBe('both');
    expect(a.damageType).toBe('single');
  });

  it('has housing space 1, movement speed 24, attack speed 1, range 3.5', () => {
    const a = home().troops().archer().first()!;
    expect(a.housingSpace).toBe(1);
    expect(a.movementSpeed).toBe(24);
    expect(a.attackSpeed).toBe(1);
    expect(a.range).toBe(3.5);
  });

  it('requires Barracks level 2', () => {
    expect(home().troops().archer().first()!.barrackLevelRequired).toBe(2);
  });

  it('has an icon image', () => {
    expect(home().troops().archer().first()!.images.icon).toBeTruthy();
  });

  it('level 1 stats: DPS 8, DPH 8, HP 22, no research', () => {
    const lvl = home().troops().archer().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(8);
    expect(lvl.stats.normal.damagePerShot).toBe(8);
    expect(lvl.hitpoints).toBe(22);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2 requires Lab 1 (TH3), research 20000 Elixir / 1h', () => {
    const lvl = home().troops().archer().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(1);
    expect(lvl.townHallRequired).toBe(3);
    expect(lvl.researchCost).toBe(20000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 1, minutes: 0, seconds: 0 });
  });

  it('level 8 requires Lab 9 (TH11), DPS 28, HP 52', () => {
    const lvl = home().troops().archer().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.stats.normal.dps).toBe(28);
    expect(lvl.hitpoints).toBe(52);
  });

  it('level 10 requires Lab 12 (TH14)', () => {
    const lvl = home().troops().archer().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
  });

  it('level 14 stats: DPS 46, DPH 46, HP 76, research 25M Elixir / 13d 12h', () => {
    const lvl = home().troops().archer().first()!.levels[13];
    expect(lvl.level).toBe(14);
    expect(lvl.stats.normal.dps).toBe(46);
    expect(lvl.stats.normal.damagePerShot).toBe(46);
    expect(lvl.hitpoints).toBe(76);
    expect(lvl.researchCost).toBe(25000000);
    expect(lvl.researchTime).toEqual({ days: 13, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().archer().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().archer()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Super Archer)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().archer().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-archer');
    expect(st.name).toBe('Super Archer');
  });

  it('has 7 levels (8-14)', () => {
    const st = home().troops().archer().first()!.superTroop!;
    expect(st.levels).toHaveLength(7);
    expect(st.levels[0].level).toBe(8);
    expect(st.levels[6].level).toBe(14);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 8', () => {
    const st = home().troops().archer().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(8);
  });

  it('combat stats: housing 12, speed 24, attack 1.5s, range 6', () => {
    const st = home().troops().archer().first()!.superTroop!;
    expect(st.housingSpace).toBe(12);
    expect(st.movementSpeed).toBe(24);
    expect(st.attackSpeed).toBe(1.5);
    expect(st.range).toBe(6);
  });

  it('special ability is Sharp Shot', () => {
    expect(home().troops().archer().first()!.superTroop!.specialAbility).toBe('Sharp Shot');
  });

  it('has an icon image', () => {
    expect(home().troops().archer().first()!.superTroop!.images.icon).toBeTruthy();
  });

  it('level 8: DPS 120, DPH 180, HP 450', () => {
    const lvl = home().troops().archer().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(8);
    expect(lvl.stats.normal.dps).toBe(120);
    expect(lvl.stats.normal.damagePerShot).toBe(180);
    expect(lvl.hitpoints).toBe(450);
  });

  it('level 14: DPS 170, DPH 255, HP 725', () => {
    const lvl = home().troops().archer().first()!.superTroop!.levels[6];
    expect(lvl.level).toBe(14);
    expect(lvl.stats.normal.dps).toBe(170);
    expect(lvl.stats.normal.damagePerShot).toBe(255);
    expect(lvl.hitpoints).toBe(725);
  });

  it('has normal images for each super level', () => {
    const levels = home().troops().archer().first()!.superTroop!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });
});

describe('troops() with archer', () => {
  it('byType("regular") includes archer', () => {
    expect(home().troops().byType('regular').find('archer')).toBeDefined();
  });

  it('withSuperTroop() includes archer', () => {
    expect(home().troops().withSuperTroop().find('archer')).toBeDefined();
  });

  it('byTownHall(1) includes archer (level 1 is TH1)', () => {
    expect(home().troops().byTownHall(1).find('archer')).toBeDefined();
  });
});
