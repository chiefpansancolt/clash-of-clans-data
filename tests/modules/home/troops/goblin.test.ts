import { home } from '@/modules/home';
import { HomeVillageTroops } from '@/modules/home';

describe('goblin()', () => {
  it('returns a HomeTroop', () => {
    const g = home().troops().goblin().first()!;
    expect(g).toBeDefined();
    expect(g.id).toBe('goblin');
    expect(g.name).toBe('Goblin');
  });

  it('has 9 levels', () => {
    expect(home().troops().goblin().first()!.levels).toHaveLength(9);
  });

  it('is a regular elixir troop targeting ground', () => {
    const g = home().troops().goblin().first()!;
    expect(g.troopType).toBe('regular');
    expect(g.targetType).toBe('ground');
    expect(g.damageType).toBe('single');
  });

  it('has housing space 1, movement speed 32, attack speed 1, range 0.4', () => {
    const g = home().troops().goblin().first()!;
    expect(g.housingSpace).toBe(1);
    expect(g.movementSpeed).toBe(32);
    expect(g.attackSpeed).toBe(1);
    expect(g.range).toBe(0.4);
  });

  it('requires Barracks level 4', () => {
    expect(home().troops().goblin().first()!.barrackLevelRequired).toBe(4);
  });

  it('has an icon image', () => {
    expect(home().troops().goblin().first()!.images.icon).toBeTruthy();
  });

  it('level 1 stats: DPS 11, DPH 11, HP 25, no research', () => {
    const lvl = home().troops().goblin().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(11);
    expect(lvl.stats.normal.damagePerShot).toBe(11);
    expect(lvl.hitpoints).toBe(25);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2 requires Lab 1 (TH3), research 45000 Elixir / 2h', () => {
    const lvl = home().troops().goblin().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(1);
    expect(lvl.townHallRequired).toBe(3);
    expect(lvl.researchCost).toBe(45000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 2, minutes: 0, seconds: 0 });
  });

  it('level 5 requires Lab 6 (TH8), DPS 32, HP 65', () => {
    const lvl = home().troops().goblin().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.laboratoryRequired).toBe(6);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.stats.normal.dps).toBe(32);
    expect(lvl.hitpoints).toBe(65);
  });

  it('level 8 requires Lab 10 (TH12)', () => {
    const lvl = home().troops().goblin().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 9 stats: DPS 72, DPH 72, HP 146, research 8M Elixir / 5d', () => {
    const lvl = home().troops().goblin().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.stats.normal.dps).toBe(72);
    expect(lvl.stats.normal.damagePerShot).toBe(72);
    expect(lvl.hitpoints).toBe(146);
    expect(lvl.researchCost).toBe(8000000);
    expect(lvl.researchTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().goblin().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().goblin()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Sneaky Goblin)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().goblin().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('sneaky-goblin');
    expect(st.name).toBe('Sneaky Goblin');
  });

  it('has 3 levels (7-9)', () => {
    const st = home().troops().goblin().first()!.superTroop!;
    expect(st.levels).toHaveLength(3);
    expect(st.levels[0].level).toBe(7);
    expect(st.levels[2].level).toBe(9);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 7', () => {
    const st = home().troops().goblin().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(7);
  });

  it('combat stats: housing 3, speed 32, attack 1s, range 0.4', () => {
    const st = home().troops().goblin().first()!.superTroop!;
    expect(st.housingSpace).toBe(3);
    expect(st.movementSpeed).toBe(32);
    expect(st.attackSpeed).toBe(1);
    expect(st.range).toBe(0.4);
  });

  it('special ability is Cloak', () => {
    expect(home().troops().goblin().first()!.superTroop!.specialAbility).toBe('Cloak');
  });

  it('has an icon image', () => {
    expect(home().troops().goblin().first()!.superTroop!.images.icon).toBeTruthy();
  });

  it('level 7: DPS 155, DPH 155, HP 270', () => {
    const lvl = home().troops().goblin().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(7);
    expect(lvl.stats.normal.dps).toBe(155);
    expect(lvl.stats.normal.damagePerShot).toBe(155);
    expect(lvl.hitpoints).toBe(270);
  });

  it('level 9: DPS 180, DPH 180, HP 350', () => {
    const lvl = home().troops().goblin().first()!.superTroop!.levels[2];
    expect(lvl.level).toBe(9);
    expect(lvl.stats.normal.dps).toBe(180);
    expect(lvl.stats.normal.damagePerShot).toBe(180);
    expect(lvl.hitpoints).toBe(350);
  });

  it('has normal images for each super level', () => {
    const levels = home().troops().goblin().first()!.superTroop!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });
});

describe('troops() with goblin', () => {
  it('byType("regular") includes goblin', () => {
    expect(home().troops().byType('regular').find('goblin')).toBeDefined();
  });

  it('withSuperTroop() includes goblin', () => {
    expect(home().troops().withSuperTroop().find('goblin')).toBeDefined();
  });

  it('byTownHall(1) includes goblin (level 1 is TH1)', () => {
    expect(home().troops().byTownHall(1).find('goblin')).toBeDefined();
  });
});
