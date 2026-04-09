import { home, HomeVillageTroops } from '@/modules/home';

describe('rootRider()', () => {
  it('returns a HomeTroop', () => {
    const rr = home().troops().rootRider().first()!;
    expect(rr).toBeDefined();
    expect(rr.id).toBe('root-rider');
    expect(rr.name).toBe('Root Rider');
  });

  it('has 3 levels', () => {
    expect(home().troops().rootRider().first()!.levels).toHaveLength(3);
  });

  it('is a regular single-target troop targeting ground', () => {
    const rr = home().troops().rootRider().first()!;
    expect(rr.troopType).toBe('regular');
    expect(rr.damageType).toBe('single');
    expect(rr.targetType).toBe('ground');
  });

  it('has housing space 20, movement speed 12, attack speed 2.2, range 1', () => {
    const rr = home().troops().rootRider().first()!;
    expect(rr.housingSpace).toBe(20);
    expect(rr.movementSpeed).toBe(12);
    expect(rr.attackSpeed).toBe(2.2);
    expect(rr.range).toBe(1);
  });

  it('has wall attack speed 0.4', () => {
    expect(home().troops().rootRider().first()!.wallAttackSpeed).toBe(0.4);
  });

  it('requires Barracks level 17', () => {
    expect(home().troops().rootRider().first()!.barrackLevelRequired).toBe(17);
  });

  it('has an icon image', () => {
    expect(home().troops().rootRider().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 95, DPH 209, wall DPS 10000, wall DPH 4000, HP 6200, no research', () => {
    const lvl = home().troops().rootRider().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(95);
    expect(lvl.stats.normal.damagePerShot).toBe(209);
    expect(lvl.stats.wall!.dps).toBe(10000);
    expect(lvl.stats.wall!.damagePerShot).toBe(4000);
    expect(lvl.hitpoints).toBe(6200);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 13 (TH15), 15M / 8d, DPS 105, HP 6350', () => {
    const lvl = home().troops().rootRider().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(15000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(105);
    expect(lvl.hitpoints).toBe(6350);
  });

  it('level 3: DPS 115, DPH 253, HP 6500, Lab 14 (TH16), 17.6M / 10d', () => {
    const lvl = home().troops().rootRider().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.stats.normal.dps).toBe(115);
    expect(lvl.stats.normal.damagePerShot).toBe(253);
    expect(lvl.hitpoints).toBe(6500);
    expect(lvl.researchCost).toBe(17600000);
    expect(lvl.researchTime).toEqual({ days: 10, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
  });

  it('all levels have constant wall damage stats (10000 DPS / 4000 DPH)', () => {
    const levels = home().troops().rootRider().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.stats.wall!.dps).toBe(10000);
      expect(lvl.stats.wall!.damagePerShot).toBe(4000);
    });
  });

  it('all levels have unique sprites', () => {
    const levels = home().troops().rootRider().first()!.levels;
    const paths = levels.map((l) => l.images.normal);
    expect(new Set(paths).size).toBe(3);
  });

  it('has no super troop', () => {
    expect(home().troops().rootRider().first()!.superTroop).toBeUndefined();
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().rootRider()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('troops() with rootRider', () => {
  it('byType("regular") includes root-rider', () => {
    expect(home().troops().byType('regular').find('root-rider')).toBeDefined();
  });

  it('withSuperTroop() does not include root-rider', () => {
    expect(home().troops().withSuperTroop().find('root-rider')).toBeUndefined();
  });

  it('byTownHall(1) includes root-rider (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('root-rider')).toBeDefined();
  });

  it('byTownHall(15) includes root-rider (level 2 at TH15)', () => {
    expect(home().troops().byTownHall(15).find('root-rider')).toBeDefined();
  });
});
