import { home, HomeVillageTroops } from '@/modules/home';

describe('bowler()', () => {
  it('returns a HomeTroop', () => {
    const b = home().troops().bowler().first()!;
    expect(b).toBeDefined();
    expect(b.id).toBe('bowler');
    expect(b.name).toBe('Bowler');
  });

  it('has 10 levels', () => {
    expect(home().troops().bowler().first()!.levels).toHaveLength(10);
  });

  it('is a dark splash troop targeting ground', () => {
    const b = home().troops().bowler().first()!;
    expect(b.troopType).toBe('dark');
    expect(b.damageType).toBe('splash');
    expect(b.targetType).toBe('ground');
  });

  it('has housing space 6, movement speed 14, attack speed 2.2, range 3', () => {
    const b = home().troops().bowler().first()!;
    expect(b.housingSpace).toBe(6);
    expect(b.movementSpeed).toBe(14);
    expect(b.attackSpeed).toBe(2.2);
    expect(b.range).toBe(3);
  });

  it('requires Dark Barracks level 7', () => {
    expect(home().troops().bowler().first()!.barrackLevelRequired).toBe(7);
  });

  it('has an icon image', () => {
    expect(home().troops().bowler().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 60, DPH 132, HP 325, no research', () => {
    const lvl = home().troops().bowler().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(60);
    expect(lvl.stats.normal.damagePerShot).toBe(132);
    expect(lvl.hitpoints).toBe(325);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 8 (TH10), 32500 Dark Elixir / 2d, DPH 158.4', () => {
    const lvl = home().troops().bowler().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(8);
    expect(lvl.townHallRequired).toBe(10);
    expect(lvl.researchCost).toBe(32500);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 2, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.damagePerShot).toBe(158.4);
  });

  it('levels 1 and 2 share the same sprite', () => {
    const levels = home().troops().bowler().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('level 4: Lab 10 (TH12), DPS 96, DPH 211.2, HP 470', () => {
    const lvl = home().troops().bowler().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.stats.normal.dps).toBe(96);
    expect(lvl.stats.normal.damagePerShot).toBe(211.2);
    expect(lvl.hitpoints).toBe(470);
  });

  it('level 7: Lab 13 (TH15), DPS 114, DPH 250.8', () => {
    const lvl = home().troops().bowler().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.stats.normal.dps).toBe(114);
    expect(lvl.stats.normal.damagePerShot).toBe(250.8);
  });

  it('level 9: Lab 15 (TH17), DPS 140, DPH 308, HP 700', () => {
    const lvl = home().troops().bowler().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.stats.normal.dps).toBe(140);
    expect(lvl.stats.normal.damagePerShot).toBe(308);
    expect(lvl.hitpoints).toBe(700);
    expect(lvl.researchCost).toBe(260000);
    expect(lvl.researchTime).toEqual({ days: 10, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: Lab 16 (TH18), DPS 156, DPH 343.2, HP 850', () => {
    const lvl = home().troops().bowler().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.stats.normal.dps).toBe(156);
    expect(lvl.stats.normal.damagePerShot).toBe(343.2);
    expect(lvl.hitpoints).toBe(850);
    expect(lvl.researchCost).toBe(360000);
    expect(lvl.researchTime).toEqual({ days: 15, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().bowler()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Super Bowler)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().bowler().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-bowler');
    expect(st.name).toBe('Super Bowler');
  });

  it('has 7 levels (4-10)', () => {
    const st = home().troops().bowler().first()!.superTroop!;
    expect(st.levels).toHaveLength(7);
    expect(st.levels[0].level).toBe(4);
    expect(st.levels[6].level).toBe(10);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 4', () => {
    const st = home().troops().bowler().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(4);
  });

  it('combat stats: housing 30, speed 14, attack 2.2s, range 3', () => {
    const st = home().troops().bowler().first()!.superTroop!;
    expect(st.housingSpace).toBe(30);
    expect(st.movementSpeed).toBe(14);
    expect(st.attackSpeed).toBe(2.2);
    expect(st.range).toBe(3);
  });

  it('special ability is Triple Strike', () => {
    expect(home().troops().bowler().first()!.superTroop!.specialAbility).toBe('Triple Strike');
  });

  it('level 4: DPS 170, DPH 374, HP 1600, TH12', () => {
    const lvl = home().troops().bowler().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(4);
    expect(lvl.stats.normal.dps).toBe(170);
    expect(lvl.stats.normal.damagePerShot).toBe(374);
    expect(lvl.hitpoints).toBe(1600);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 8: DPS 240, DPH 528, HP 2600, TH16', () => {
    const lvl = home().troops().bowler().first()!.superTroop!.levels[4];
    expect(lvl.level).toBe(8);
    expect(lvl.stats.normal.dps).toBe(240);
    expect(lvl.stats.normal.damagePerShot).toBe(528);
    expect(lvl.hitpoints).toBe(2600);
    expect(lvl.townHallRequired).toBe(16);
  });

  it('level 10: DPS 300, DPH 660, HP 3600, TH18', () => {
    const lvl = home().troops().bowler().first()!.superTroop!.levels[6];
    expect(lvl.level).toBe(10);
    expect(lvl.stats.normal.dps).toBe(300);
    expect(lvl.stats.normal.damagePerShot).toBe(660);
    expect(lvl.hitpoints).toBe(3600);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all super levels share the same sprite', () => {
    const levels = home().troops().bowler().first()!.superTroop!.levels;
    const paths = new Set(levels.map((l) => l.images.normal));
    expect(paths.size).toBe(1);
  });
});

describe('troops() with bowler', () => {
  it('byType("dark") includes bowler', () => {
    expect(home().troops().byType('dark').find('bowler')).toBeDefined();
  });

  it('byType("regular") does not include bowler', () => {
    expect(home().troops().byType('regular').find('bowler')).toBeUndefined();
  });

  it('withSuperTroop() includes bowler', () => {
    expect(home().troops().withSuperTroop().find('bowler')).toBeDefined();
  });

  it('byTownHall(1) includes bowler (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('bowler')).toBeDefined();
  });

  it('byTownHall(10) includes bowler (level 2 at TH10)', () => {
    expect(home().troops().byTownHall(10).find('bowler')).toBeDefined();
  });
});
