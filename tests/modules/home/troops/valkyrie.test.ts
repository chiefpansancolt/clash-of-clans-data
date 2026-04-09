import { home, HomeVillageTroops } from '@/modules/home';

describe('valkyrie()', () => {
  it('returns a HomeTroop', () => {
    const v = home().troops().valkyrie().first()!;
    expect(v).toBeDefined();
    expect(v.id).toBe('valkyrie');
    expect(v.name).toBe('Valkyrie');
  });

  it('has 11 levels', () => {
    expect(home().troops().valkyrie().first()!.levels).toHaveLength(11);
  });

  it('is a dark splash troop targeting ground', () => {
    const v = home().troops().valkyrie().first()!;
    expect(v.troopType).toBe('dark');
    expect(v.damageType).toBe('splash');
    expect(v.targetType).toBe('ground');
  });

  it('has housing space 8, movement speed 24, attack speed 1.8, range 0.5', () => {
    const v = home().troops().valkyrie().first()!;
    expect(v.housingSpace).toBe(8);
    expect(v.movementSpeed).toBe(24);
    expect(v.attackSpeed).toBe(1.8);
    expect(v.range).toBe(0.5);
  });

  it('requires Dark Barracks level 3', () => {
    expect(home().troops().valkyrie().first()!.barrackLevelRequired).toBe(3);
  });

  it('has an icon image', () => {
    expect(home().troops().valkyrie().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 94, DPH 169.2, HP 750, no research', () => {
    const lvl = home().troops().valkyrie().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(94);
    expect(lvl.stats.normal.damagePerShot).toBe(169.2);
    expect(lvl.hitpoints).toBe(750);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 6 (TH8), 3000 Dark Elixir / 8h', () => {
    const lvl = home().troops().valkyrie().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(6);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.researchCost).toBe(3000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 8, minutes: 0, seconds: 0 });
  });

  it('levels 1 and 2 share the same sprite', () => {
    const levels = home().troops().valkyrie().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('levels 3 and 4 share the same sprite', () => {
    const levels = home().troops().valkyrie().first()!.levels;
    expect(levels[2].images.normal).toBe(levels[3].images.normal);
  });

  it('levels 6 and 7 share the same sprite', () => {
    const levels = home().troops().valkyrie().first()!.levels;
    expect(levels[5].images.normal).toBe(levels[6].images.normal);
  });

  it('level 7: Lab 10 (TH12), 55000 Dark Elixir / 2d 6h, DPS 185, HP 1650', () => {
    const lvl = home().troops().valkyrie().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(55000);
    expect(lvl.researchTime).toEqual({ days: 2, hours: 6, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(185);
    expect(lvl.hitpoints).toBe(1650);
  });

  it('level 11: Lab 14 (TH16), 170000 Dark Elixir / 6d, DPS 238, DPH 428.4, HP 2600', () => {
    const lvl = home().troops().valkyrie().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(170000);
    expect(lvl.researchTime).toEqual({ days: 6, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(238);
    expect(lvl.stats.normal.damagePerShot).toBe(428.4);
    expect(lvl.hitpoints).toBe(2600);
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().valkyrie()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Super Valkyrie)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().valkyrie().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-valkyrie');
    expect(st.name).toBe('Super Valkyrie');
  });

  it('has 5 levels (7-11)', () => {
    const st = home().troops().valkyrie().first()!.superTroop!;
    expect(st.levels).toHaveLength(5);
    expect(st.levels[0].level).toBe(7);
    expect(st.levels[4].level).toBe(11);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 7', () => {
    const st = home().troops().valkyrie().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(7);
  });

  it('combat stats: housing 20, speed 24, attack 1.1s, range 0.6', () => {
    const st = home().troops().valkyrie().first()!.superTroop!;
    expect(st.housingSpace).toBe(20);
    expect(st.movementSpeed).toBe(24);
    expect(st.attackSpeed).toBe(1.1);
    expect(st.range).toBe(0.6);
  });

  it('special ability is Farewell Gift', () => {
    expect(home().troops().valkyrie().first()!.superTroop!.specialAbility).toBe('Farewell Gift');
  });

  it('level 7: DPS 250, DPH 275, HP 2400, TH12', () => {
    const lvl = home().troops().valkyrie().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(7);
    expect(lvl.stats.normal.dps).toBe(250);
    expect(lvl.stats.normal.damagePerShot).toBe(275);
    expect(lvl.hitpoints).toBe(2400);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 11: DPS 375, DPH 412.5, HP 3900, TH16', () => {
    const lvl = home().troops().valkyrie().first()!.superTroop!.levels[4];
    expect(lvl.level).toBe(11);
    expect(lvl.stats.normal.dps).toBe(375);
    expect(lvl.stats.normal.damagePerShot).toBe(412.5);
    expect(lvl.hitpoints).toBe(3900);
    expect(lvl.townHallRequired).toBe(16);
  });

  it('all super levels share the same sprite', () => {
    const levels = home().troops().valkyrie().first()!.superTroop!.levels;
    const paths = new Set(levels.map((l) => l.images.normal));
    expect(paths.size).toBe(1);
  });
});

describe('troops() with valkyrie', () => {
  it('byType("dark") includes valkyrie', () => {
    expect(home().troops().byType('dark').find('valkyrie')).toBeDefined();
  });

  it('byType("regular") does not include valkyrie', () => {
    expect(home().troops().byType('regular').find('valkyrie')).toBeUndefined();
  });

  it('withSuperTroop() includes valkyrie', () => {
    expect(home().troops().withSuperTroop().find('valkyrie')).toBeDefined();
  });

  it('byTownHall(1) includes valkyrie (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('valkyrie')).toBeDefined();
  });

  it('byTownHall(8) includes valkyrie (level 2 at TH8)', () => {
    expect(home().troops().byTownHall(8).find('valkyrie')).toBeDefined();
  });
});
