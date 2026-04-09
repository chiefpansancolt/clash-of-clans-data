import { home, HomeVillageTroops } from '@/modules/home';

describe('witch()', () => {
  it('returns a HomeTroop', () => {
    const w = home().troops().witch().first()!;
    expect(w).toBeDefined();
    expect(w.id).toBe('witch');
    expect(w.name).toBe('Witch');
  });

  it('has 8 levels', () => {
    expect(home().troops().witch().first()!.levels).toHaveLength(8);
  });

  it('is a dark splash troop targeting both ground and air', () => {
    const w = home().troops().witch().first()!;
    expect(w.troopType).toBe('dark');
    expect(w.damageType).toBe('splash');
    expect(w.targetType).toBe('both');
  });

  it('has housing space 12, movement speed 12, attack speed 0.7, range 4', () => {
    const w = home().troops().witch().first()!;
    expect(w.housingSpace).toBe(12);
    expect(w.movementSpeed).toBe(12);
    expect(w.attackSpeed).toBe(0.7);
    expect(w.range).toBe(4);
  });

  it('has summon cooldown 7s', () => {
    expect(home().troops().witch().first()!.summonCooldown).toBe(7);
  });

  it('requires Dark Barracks level 5', () => {
    expect(home().troops().witch().first()!.barrackLevelRequired).toBe(5);
  });

  it('has an icon image', () => {
    expect(home().troops().witch().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 100, DPH 70, HP 300, 4 skeletons/summon, max 6, skeleton level 1, no research', () => {
    const lvl = home().troops().witch().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(100);
    expect(lvl.stats.normal.damagePerShot).toBe(70);
    expect(lvl.hitpoints).toBe(300);
    expect(lvl.skeletonsPerSummon).toBe(4);
    expect(lvl.maxSkeletons).toBe(6);
    expect(lvl.skeletonLevel).toBe(1);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 7 (TH9), 20000 Dark Elixir / 2d', () => {
    const lvl = home().troops().witch().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(9);
    expect(lvl.researchCost).toBe(20000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 2, hours: 0, minutes: 0, seconds: 0 });
  });

  it('levels 1 and 2 share the same sprite', () => {
    const levels = home().troops().witch().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('levels 3 and 4 share the same sprite', () => {
    const levels = home().troops().witch().first()!.levels;
    expect(levels[2].images.normal).toBe(levels[3].images.normal);
  });

  it('level 4: DPS 165, DPH 115.5 (decimal), 4 skeletons/summon, max 12', () => {
    const lvl = home().troops().witch().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.stats.normal.dps).toBe(165);
    expect(lvl.stats.normal.damagePerShot).toBe(115.5);
    expect(lvl.skeletonsPerSummon).toBe(4);
    expect(lvl.maxSkeletons).toBe(12);
  });

  it('level 5: DPH 129.5 (decimal), 4 skeletons/summon, max 14, TH12', () => {
    const lvl = home().troops().witch().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.stats.normal.damagePerShot).toBe(129.5);
    expect(lvl.skeletonsPerSummon).toBe(4);
    expect(lvl.maxSkeletons).toBe(14);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 7: Lab 14 (TH16), 5 skeletons/summon, max 16, DPS 220', () => {
    const lvl = home().troops().witch().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.skeletonsPerSummon).toBe(5);
    expect(lvl.maxSkeletons).toBe(16);
    expect(lvl.stats.normal.dps).toBe(220);
  });

  it('level 8: Lab 16 (TH18), 5 skeletons/summon, max 16, skeleton level 2, DPS 260, HP 650', () => {
    const lvl = home().troops().witch().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.skeletonsPerSummon).toBe(5);
    expect(lvl.maxSkeletons).toBe(16);
    expect(lvl.skeletonLevel).toBe(2);
    expect(lvl.stats.normal.dps).toBe(260);
    expect(lvl.stats.normal.damagePerShot).toBe(182);
    expect(lvl.hitpoints).toBe(650);
    expect(lvl.researchCost).toBe(355000);
    expect(lvl.researchTime).toEqual({ days: 15, hours: 12, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().witch()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Super Witch)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().witch().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-witch');
    expect(st.name).toBe('Super Witch');
  });

  it('has 4 levels (5-8)', () => {
    const st = home().troops().witch().first()!.superTroop!;
    expect(st.levels).toHaveLength(4);
    expect(st.levels[0].level).toBe(5);
    expect(st.levels[3].level).toBe(8);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 5', () => {
    const st = home().troops().witch().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(5);
  });

  it('combat stats: housing 40, speed 12, attack 0.7s, range 4', () => {
    const st = home().troops().witch().first()!.superTroop!;
    expect(st.housingSpace).toBe(40);
    expect(st.movementSpeed).toBe(12);
    expect(st.attackSpeed).toBe(0.7);
    expect(st.range).toBe(4);
  });

  it('special ability is Big Boy', () => {
    expect(home().troops().witch().first()!.superTroop!.specialAbility).toBe('Big Boy');
  });

  it('level 5: DPS 360, DPH 252, HP 3200, TH12', () => {
    const lvl = home().troops().witch().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(5);
    expect(lvl.stats.normal.dps).toBe(360);
    expect(lvl.stats.normal.damagePerShot).toBe(252);
    expect(lvl.hitpoints).toBe(3200);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 8: DPS 470, DPH 329, HP 4100, TH18', () => {
    const lvl = home().troops().witch().first()!.superTroop!.levels[3];
    expect(lvl.level).toBe(8);
    expect(lvl.stats.normal.dps).toBe(470);
    expect(lvl.stats.normal.damagePerShot).toBe(329);
    expect(lvl.hitpoints).toBe(4100);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all super levels share the same sprite', () => {
    const levels = home().troops().witch().first()!.superTroop!.levels;
    const paths = new Set(levels.map((l) => l.images.normal));
    expect(paths.size).toBe(1);
  });
});

describe('troops() with witch', () => {
  it('byType("dark") includes witch', () => {
    expect(home().troops().byType('dark').find('witch')).toBeDefined();
  });

  it('byType("regular") does not include witch', () => {
    expect(home().troops().byType('regular').find('witch')).toBeUndefined();
  });

  it('withSuperTroop() includes witch', () => {
    expect(home().troops().withSuperTroop().find('witch')).toBeDefined();
  });

  it('byTownHall(1) includes witch (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('witch')).toBeDefined();
  });

  it('byTownHall(9) includes witch (level 2 at TH9)', () => {
    expect(home().troops().byTownHall(9).find('witch')).toBeDefined();
  });
});
