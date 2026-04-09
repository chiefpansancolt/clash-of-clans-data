import { home, HomeVillageTroops } from '@/modules/home';

describe('lavaHound()', () => {
  it('returns a HomeTroop', () => {
    const lh = home().troops().lavaHound().first()!;
    expect(lh).toBeDefined();
    expect(lh.id).toBe('lava-hound');
    expect(lh.name).toBe('Lava Hound');
  });

  it('has 8 levels', () => {
    expect(home().troops().lavaHound().first()!.levels).toHaveLength(8);
  });

  it('is a dark single troop targeting ground', () => {
    const lh = home().troops().lavaHound().first()!;
    expect(lh.troopType).toBe('dark');
    expect(lh.damageType).toBe('single');
    expect(lh.targetType).toBe('ground');
  });

  it('has housing space 30, movement speed 20, attack speed 2, range 1', () => {
    const lh = home().troops().lavaHound().first()!;
    expect(lh.housingSpace).toBe(30);
    expect(lh.movementSpeed).toBe(20);
    expect(lh.attackSpeed).toBe(2);
    expect(lh.range).toBe(1);
  });

  it('requires Dark Barracks level 6', () => {
    expect(home().troops().lavaHound().first()!.barrackLevelRequired).toBe(6);
  });

  it('has an icon image', () => {
    expect(home().troops().lavaHound().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 10, DPH 20, deathDamage 100, 8 pups on offense, 8 on defense, HP 6100, no research', () => {
    const lvl = home().troops().lavaHound().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(10);
    expect(lvl.stats.normal.damagePerShot).toBe(20);
    expect(lvl.stats.normal.deathDamage).toBe(100);
    expect(lvl.pupsOnOffense).toBe(8);
    expect(lvl.pupsOnDefense).toBe(8);
    expect(lvl.hitpoints).toBe(6100);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 7 (TH9), 14000 Dark Elixir / 2d, 10 pups offense, 9 defense', () => {
    const lvl = home().troops().lavaHound().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(9);
    expect(lvl.researchCost).toBe(14000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 2, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.pupsOnOffense).toBe(10);
    expect(lvl.pupsOnDefense).toBe(9);
  });

  it('levels 1 and 2 share the same sprite', () => {
    const levels = home().troops().lavaHound().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('level 3: Lab 8 (TH10), DPS 14, deathDamage 200, 12 pups offense, 10 defense', () => {
    const lvl = home().troops().lavaHound().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.laboratoryRequired).toBe(8);
    expect(lvl.townHallRequired).toBe(10);
    expect(lvl.stats.normal.dps).toBe(14);
    expect(lvl.stats.normal.deathDamage).toBe(200);
    expect(lvl.pupsOnOffense).toBe(12);
    expect(lvl.pupsOnDefense).toBe(10);
  });

  it('level 5: DPS 18, deathDamage 300, 16 pups offense, 12 defense, TH12', () => {
    const lvl = home().troops().lavaHound().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.stats.normal.dps).toBe(18);
    expect(lvl.stats.normal.deathDamage).toBe(300);
    expect(lvl.pupsOnOffense).toBe(16);
    expect(lvl.pupsOnDefense).toBe(12);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 7: Lab 14 (TH16), DPS 22, deathDamage 400, 20 pups offense, 14 defense', () => {
    const lvl = home().troops().lavaHound().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.stats.normal.dps).toBe(22);
    expect(lvl.stats.normal.deathDamage).toBe(400);
    expect(lvl.pupsOnOffense).toBe(20);
    expect(lvl.pupsOnDefense).toBe(14);
  });

  it('level 8: Lab 16 (TH18), DPS 24, DPH 48, deathDamage 450, 22 pups offense, 15 defense, HP 9500', () => {
    const lvl = home().troops().lavaHound().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.stats.normal.dps).toBe(24);
    expect(lvl.stats.normal.damagePerShot).toBe(48);
    expect(lvl.stats.normal.deathDamage).toBe(450);
    expect(lvl.pupsOnOffense).toBe(22);
    expect(lvl.pupsOnDefense).toBe(15);
    expect(lvl.hitpoints).toBe(9500);
    expect(lvl.researchCost).toBe(345000);
    expect(lvl.researchTime).toEqual({ days: 15, hours: 6, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().lavaHound()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Ice Hound)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().lavaHound().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('ice-hound');
    expect(st.name).toBe('Ice Hound');
  });

  it('has 8 levels (1-8)', () => {
    const st = home().troops().lavaHound().first()!.superTroop!;
    expect(st.levels).toHaveLength(8);
    expect(st.levels[0].level).toBe(1);
    expect(st.levels[7].level).toBe(8);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 5', () => {
    const st = home().troops().lavaHound().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(5);
  });

  it('combat stats: housing 40, speed 20, attack 2s, range 0.75', () => {
    const st = home().troops().lavaHound().first()!.superTroop!;
    expect(st.housingSpace).toBe(40);
    expect(st.movementSpeed).toBe(20);
    expect(st.attackSpeed).toBe(2);
    expect(st.range).toBe(0.75);
  });

  it('special ability is Dish Served Cold', () => {
    expect(home().troops().lavaHound().first()!.superTroop!.specialAbility).toBe(
      'Dish Served Cold',
    );
  });

  it('level 1: DPS 2, DPH 4, HP 7500, freezeTime 3.75, 6 pups offense, 6 defense, TH7', () => {
    const lvl = home().troops().lavaHound().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(2);
    expect(lvl.stats.normal.damagePerShot).toBe(4);
    expect(lvl.hitpoints).toBe(7500);
    expect(lvl.freezeTime).toBe(3.75);
    expect(lvl.pupsOnOffense).toBe(6);
    expect(lvl.pupsOnDefense).toBe(6);
    expect(lvl.townHallRequired).toBe(7);
  });

  it('level 5: DPS 10, DPH 20, HP 9500, freezeTime 3.75, 10 pups offense, 10 defense, TH12', () => {
    const lvl = home().troops().lavaHound().first()!.superTroop!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.stats.normal.dps).toBe(10);
    expect(lvl.stats.normal.damagePerShot).toBe(20);
    expect(lvl.hitpoints).toBe(9500);
    expect(lvl.freezeTime).toBe(3.75);
    expect(lvl.pupsOnOffense).toBe(10);
    expect(lvl.pupsOnDefense).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 6: freezeTime 4.25, 12 pups offense, 11 defense, TH13', () => {
    const lvl = home().troops().lavaHound().first()!.superTroop!.levels[5];
    expect(lvl.level).toBe(6);
    expect(lvl.freezeTime).toBe(4.25);
    expect(lvl.pupsOnOffense).toBe(12);
    expect(lvl.pupsOnDefense).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
  });

  it('level 8: DPS 25, DPH 50, HP 11500, freezeTime 5.25, 16 pups offense, 13 defense, TH18', () => {
    const lvl = home().troops().lavaHound().first()!.superTroop!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.stats.normal.dps).toBe(25);
    expect(lvl.stats.normal.damagePerShot).toBe(50);
    expect(lvl.hitpoints).toBe(11500);
    expect(lvl.freezeTime).toBe(5.25);
    expect(lvl.pupsOnOffense).toBe(16);
    expect(lvl.pupsOnDefense).toBe(13);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all super levels share the same sprite', () => {
    const levels = home().troops().lavaHound().first()!.superTroop!.levels;
    const paths = new Set(levels.map((l) => l.images.normal));
    expect(paths.size).toBe(1);
  });
});

describe('troops() with lavaHound', () => {
  it('byType("dark") includes lava-hound', () => {
    expect(home().troops().byType('dark').find('lava-hound')).toBeDefined();
  });

  it('byType("regular") does not include lava-hound', () => {
    expect(home().troops().byType('regular').find('lava-hound')).toBeUndefined();
  });

  it('withSuperTroop() includes lava-hound', () => {
    expect(home().troops().withSuperTroop().find('lava-hound')).toBeDefined();
  });

  it('byTownHall(1) includes lava-hound (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('lava-hound')).toBeDefined();
  });

  it('byTownHall(9) includes lava-hound (level 2 at TH9)', () => {
    expect(home().troops().byTownHall(9).find('lava-hound')).toBeDefined();
  });
});
