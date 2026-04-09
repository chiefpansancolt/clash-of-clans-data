import { home, HomeVillageTroops } from '@/modules/home';

describe('hogRider()', () => {
  it('returns a HomeTroop', () => {
    const h = home().troops().hogRider().first()!;
    expect(h).toBeDefined();
    expect(h.id).toBe('hog-rider');
    expect(h.name).toBe('Hog Rider');
  });

  it('has 15 levels', () => {
    expect(home().troops().hogRider().first()!.levels).toHaveLength(15);
  });

  it('is a dark single-target troop targeting ground', () => {
    const h = home().troops().hogRider().first()!;
    expect(h.troopType).toBe('dark');
    expect(h.damageType).toBe('single');
    expect(h.targetType).toBe('ground');
  });

  it('has housing space 5, movement speed 24, attack speed 1, range 0.6', () => {
    const h = home().troops().hogRider().first()!;
    expect(h.housingSpace).toBe(5);
    expect(h.movementSpeed).toBe(24);
    expect(h.attackSpeed).toBe(1);
    expect(h.range).toBe(0.6);
  });

  it('requires Dark Barracks level 2', () => {
    expect(home().troops().hogRider().first()!.barrackLevelRequired).toBe(2);
  });

  it('has an icon image', () => {
    expect(home().troops().hogRider().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 60, DPH 60, HP 270, no research', () => {
    const lvl = home().troops().hogRider().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(60);
    expect(lvl.stats.normal.damagePerShot).toBe(60);
    expect(lvl.hitpoints).toBe(270);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 5 (TH7), 2000 Dark Elixir / 10h', () => {
    const lvl = home().troops().hogRider().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(7);
    expect(lvl.researchCost).toBe(2000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 10, minutes: 0, seconds: 0 });
  });

  it('levels 1 and 2 share the same sprite', () => {
    const levels = home().troops().hogRider().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('levels 3 and 4 share the same sprite', () => {
    const levels = home().troops().hogRider().first()!.levels;
    expect(levels[2].images.normal).toBe(levels[3].images.normal);
  });

  it('level 5 has a unique sprite', () => {
    const levels = home().troops().hogRider().first()!.levels;
    expect(levels[4].images.normal).not.toBe(levels[3].images.normal);
    expect(levels[4].images.normal).not.toBe(levels[5].images.normal);
  });

  it('level 8: Lab 10 (TH12), 47500 Dark Elixir / 3d, DPS 155, HP 810', () => {
    const lvl = home().troops().hogRider().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(47500);
    expect(lvl.researchTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(155);
    expect(lvl.hitpoints).toBe(810);
  });

  it('level 15: Lab 16 (TH18), 340000 Dark Elixir / 14d 12h, DPS 250, HP 1750', () => {
    const lvl = home().troops().hogRider().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.researchCost).toBe(340000);
    expect(lvl.researchTime).toEqual({ days: 14, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(250);
    expect(lvl.stats.normal.damagePerShot).toBe(250);
    expect(lvl.hitpoints).toBe(1750);
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().hogRider()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Super Hog Rider)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().hogRider().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-hog-rider');
    expect(st.name).toBe('Super Hog Rider');
  });

  it('has 6 levels (10-15)', () => {
    const st = home().troops().hogRider().first()!.superTroop!;
    expect(st.levels).toHaveLength(6);
    expect(st.levels[0].level).toBe(10);
    expect(st.levels[5].level).toBe(15);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 10', () => {
    const st = home().troops().hogRider().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(10);
  });

  it('combat stats: housing 12, speed 24, attack 1s, range 0.6', () => {
    const st = home().troops().hogRider().first()!.superTroop!;
    expect(st.housingSpace).toBe(12);
    expect(st.movementSpeed).toBe(24);
    expect(st.attackSpeed).toBe(1);
    expect(st.range).toBe(0.6);
  });

  it('special ability is Divide and Conquer', () => {
    expect(home().troops().hogRider().first()!.superTroop!.specialAbility).toBe(
      'Divide and Conquer',
    );
  });

  it('level 10: DPS 180, DPH 180, HP 1500, TH13', () => {
    const lvl = home().troops().hogRider().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(10);
    expect(lvl.stats.normal.dps).toBe(180);
    expect(lvl.stats.normal.damagePerShot).toBe(180);
    expect(lvl.hitpoints).toBe(1500);
    expect(lvl.townHallRequired).toBe(13);
  });

  it('level 15: DPS 300, DPH 300, HP 2350, TH18', () => {
    const lvl = home().troops().hogRider().first()!.superTroop!.levels[5];
    expect(lvl.level).toBe(15);
    expect(lvl.stats.normal.dps).toBe(300);
    expect(lvl.stats.normal.damagePerShot).toBe(300);
    expect(lvl.hitpoints).toBe(2350);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all super levels share the same sprite', () => {
    const levels = home().troops().hogRider().first()!.superTroop!.levels;
    const paths = new Set(levels.map((l) => l.images.normal));
    expect(paths.size).toBe(1);
  });
});

describe('troops() with hog rider', () => {
  it('byType("dark") includes hog-rider', () => {
    expect(home().troops().byType('dark').find('hog-rider')).toBeDefined();
  });

  it('byType("regular") does not include hog-rider', () => {
    expect(home().troops().byType('regular').find('hog-rider')).toBeUndefined();
  });

  it('withSuperTroop() includes hog-rider', () => {
    expect(home().troops().withSuperTroop().find('hog-rider')).toBeDefined();
  });

  it('byTownHall(1) includes hog-rider (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('hog-rider')).toBeDefined();
  });

  it('byTownHall(7) includes hog-rider (level 2 at TH7)', () => {
    expect(home().troops().byTownHall(7).find('hog-rider')).toBeDefined();
  });
});
