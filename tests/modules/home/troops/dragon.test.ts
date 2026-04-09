import { home } from '@/modules/home';
import { HomeVillageTroops } from '@/modules/home';

describe('dragon()', () => {
  it('returns a HomeTroop', () => {
    const d = home().troops().dragon().first()!;
    expect(d).toBeDefined();
    expect(d.id).toBe('dragon');
    expect(d.name).toBe('Dragon');
  });

  it('has 12 levels', () => {
    expect(home().troops().dragon().first()!.levels).toHaveLength(12);
  });

  it('is a regular splash troop targeting both ground and air', () => {
    const d = home().troops().dragon().first()!;
    expect(d.troopType).toBe('regular');
    expect(d.targetType).toBe('both');
    expect(d.damageType).toBe('splash');
  });

  it('has housing space 20, movement speed 16, attack speed 1.25, range 3', () => {
    const d = home().troops().dragon().first()!;
    expect(d.housingSpace).toBe(20);
    expect(d.movementSpeed).toBe(16);
    expect(d.attackSpeed).toBe(1.25);
    expect(d.range).toBe(3);
  });

  it('requires Barracks level 9', () => {
    expect(home().troops().dragon().first()!.barrackLevelRequired).toBe(9);
  });

  it('has an icon image', () => {
    expect(home().troops().dragon().first()!.images.icon).toBeTruthy();
  });

  it('has a super troop', () => {
    expect(home().troops().dragon().first()!.superTroop).toBeDefined();
  });

  it('level 1 stats: DPS 140, DPH 175, HP 1900, no research', () => {
    const lvl = home().troops().dragon().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(140);
    expect(lvl.stats.normal.damagePerShot).toBe(175);
    expect(lvl.hitpoints).toBe(1900);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2 requires Lab 5 (TH7), research 1M Elixir / 18h', () => {
    const lvl = home().troops().dragon().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(7);
    expect(lvl.researchCost).toBe(1000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 18, minutes: 0, seconds: 0 });
  });

  it('level 4 requires Lab 7 (TH9), DPS 210, DPH 262.5, HP 2700, 3M Elixir / 3d', () => {
    const lvl = home().troops().dragon().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(9);
    expect(lvl.stats.normal.dps).toBe(210);
    expect(lvl.stats.normal.damagePerShot).toBe(262.5);
    expect(lvl.hitpoints).toBe(2700);
    expect(lvl.researchCost).toBe(3000000);
    expect(lvl.researchTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 7 requires Lab 10 (TH12), DPS 310, DPH 387.5, HP 3900, 5M Elixir / 4d 12h', () => {
    const lvl = home().troops().dragon().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.stats.normal.dps).toBe(310);
    expect(lvl.stats.normal.damagePerShot).toBe(387.5);
    expect(lvl.hitpoints).toBe(3900);
    expect(lvl.researchCost).toBe(5000000);
    expect(lvl.researchTime).toEqual({ days: 4, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 9 requires Lab 12 (TH14), DPS 350, HP 4500, 10.5M / 7d', () => {
    const lvl = home().troops().dragon().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.stats.normal.dps).toBe(350);
    expect(lvl.hitpoints).toBe(4500);
    expect(lvl.researchCost).toBe(10500000);
    expect(lvl.researchTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 12 stats: DPS 410, DPH 512.5, HP 5700, Lab 15 (TH17), 18.5M / 10d', () => {
    const lvl = home().troops().dragon().first()!.levels[11];
    expect(lvl.level).toBe(12);
    expect(lvl.stats.normal.dps).toBe(410);
    expect(lvl.stats.normal.damagePerShot).toBe(512.5);
    expect(lvl.hitpoints).toBe(5700);
    expect(lvl.researchCost).toBe(18500000);
    expect(lvl.researchTime).toEqual({ days: 10, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().dragon().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().dragon()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('superTroop (Super Dragon)', () => {
  it('has a super troop defined', () => {
    const st = home().troops().dragon().first()!.superTroop!;
    expect(st).toBeDefined();
    expect(st.id).toBe('super-dragon');
    expect(st.name).toBe('Super Dragon');
  });

  it('has 10 levels (3-12)', () => {
    const st = home().troops().dragon().first()!.superTroop!;
    expect(st.levels).toHaveLength(10);
    expect(st.levels[0].level).toBe(3);
    expect(st.levels[9].level).toBe(12);
  });

  it('boost: 25000 Dark Elixir, 3 days, requires regular level 7', () => {
    const st = home().troops().dragon().first()!.superTroop!;
    expect(st.boostCost).toBe(25000);
    expect(st.boostCostResource).toBe('Dark Elixir');
    expect(st.boostDuration).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    expect(st.regularLevelRequired).toBe(7);
  });

  it('combat stats: housing 40, speed 14, attackSpeed 0.192s, range 3', () => {
    const st = home().troops().dragon().first()!.superTroop!;
    expect(st.housingSpace).toBe(40);
    expect(st.movementSpeed).toBe(14);
    expect(st.attackSpeed).toBe(0.192);
    expect(st.range).toBe(3);
  });

  it('burst fire: 10 shots per burst, 1.8s between bursts', () => {
    const st = home().troops().dragon().first()!.superTroop!;
    expect(st.shotsPerBurst).toBe(10);
    expect(st.timeBetweenBursts).toBe(1.8);
  });

  it('special ability is Roast', () => {
    expect(home().troops().dragon().first()!.superTroop!.specialAbility).toBe('Roast');
  });

  it('level 3: DPS 286, DPH 108, HP 3900, TH8', () => {
    const lvl = home().troops().dragon().first()!.superTroop!.levels[0];
    expect(lvl.level).toBe(3);
    expect(lvl.stats.normal.dps).toBe(286);
    expect(lvl.stats.normal.damagePerShot).toBe(108);
    expect(lvl.hitpoints).toBe(3900);
    expect(lvl.townHallRequired).toBe(8);
  });

  it('level 7 (normal min): DPS 381, DPH 144, HP 6100, TH12', () => {
    const lvl = home().troops().dragon().first()!.superTroop!.levels[4];
    expect(lvl.level).toBe(7);
    expect(lvl.stats.normal.dps).toBe(381);
    expect(lvl.stats.normal.damagePerShot).toBe(144);
    expect(lvl.hitpoints).toBe(6100);
    expect(lvl.townHallRequired).toBe(12);
  });

  it('level 12: DPS 490, DPH 185.4, HP 8000, TH17', () => {
    const lvl = home().troops().dragon().first()!.superTroop!.levels[9];
    expect(lvl.level).toBe(12);
    expect(lvl.stats.normal.dps).toBe(490);
    expect(lvl.stats.normal.damagePerShot).toBe(185.4);
    expect(lvl.hitpoints).toBe(8000);
    expect(lvl.townHallRequired).toBe(17);
  });

  it('has normal images for each super level', () => {
    const levels = home().troops().dragon().first()!.superTroop!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });
});

describe('troops() with dragon', () => {
  it('byType("regular") includes dragon', () => {
    expect(home().troops().byType('regular').find('dragon')).toBeDefined();
  });

  it('withSuperTroop() includes dragon', () => {
    expect(home().troops().withSuperTroop().find('dragon')).toBeDefined();
  });

  it('byTownHall(1) includes dragon (level 1 is TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('dragon')).toBeDefined();
  });

  it('byTownHall(0) does not include dragon', () => {
    expect(home().troops().byTownHall(0).find('dragon')).toBeUndefined();
  });
});
