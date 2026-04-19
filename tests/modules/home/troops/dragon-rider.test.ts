import { home, HomeVillageTroops } from '@/modules/home';

describe('dragonRider()', () => {
  it('returns a HomeTroop', () => {
    const dr = home().troops().dragonRider().first()!;
    expect(dr).toBeDefined();
    expect(dr.id).toBe('dragon-rider');
    expect(dr.name).toBe('Dragon Rider');
  });

  it('has 6 levels', () => {
    expect(home().troops().dragonRider().first()!.levels).toHaveLength(6);
  });

  it('is a regular single-target troop targeting ground', () => {
    const dr = home().troops().dragonRider().first()!;
    expect(dr.troopType).toBe('regular');
    expect(dr.damageType).toBe('single');
    expect(dr.targetType).toBe('ground');
  });

  it('has housing space 25, movement speed 20, attack speed 1.2, range 4', () => {
    const dr = home().troops().dragonRider().first()!;
    expect(dr.housingSpace).toBe(25);
    expect(dr.movementSpeed).toBe(20);
    expect(dr.attackSpeed).toBe(1.2);
    expect(dr.range).toBe(4);
  });

  it('requires Barracks level 15', () => {
    expect(home().troops().dragonRider().first()!.barrackLevelRequired).toBe(15);
  });

  it('has an icon image', () => {
    expect(home().troops().dragonRider().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 340, DPH 408, death 700, HP 4100, no research', () => {
    const lvl = home().troops().dragonRider().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(340);
    expect(lvl.stats.normal.damagePerShot).toBe(408);
    expect(lvl.stats.normal.deathDamage).toBe(700);
    expect(lvl.hitpoints).toBe(4100);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(13);
  });

  it('level 2: Lab 11 (TH13), 7.5M / 6d, DPS 370, HP 4400', () => {
    const lvl = home().troops().dragonRider().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(7500000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 6, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(370);
    expect(lvl.hitpoints).toBe(4400);
  });

  it('level 4: Lab 14 (TH16), 14.5M / 9d, DPS 430, death 1000, HP 5100', () => {
    const lvl = home().troops().dragonRider().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(14500000);
    expect(lvl.researchTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(430);
    expect(lvl.stats.normal.deathDamage).toBe(1000);
    expect(lvl.hitpoints).toBe(5100);
  });

  it('level 6: DPS 520, DPH 624, death 1200, HP 6200, Lab 16 (TH18), 29.5M / 15d12h', () => {
    const lvl = home().troops().dragonRider().first()!.levels[5];
    expect(lvl.level).toBe(6);
    expect(lvl.stats.normal.dps).toBe(520);
    expect(lvl.stats.normal.damagePerShot).toBe(624);
    expect(lvl.stats.normal.deathDamage).toBe(1200);
    expect(lvl.hitpoints).toBe(6200);
    expect(lvl.researchCost).toBe(29500000);
    expect(lvl.researchTime).toEqual({ days: 15, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all levels have death damage', () => {
    const levels = home().troops().dragonRider().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.stats.normal.deathDamage).toBeDefined();
      expect(lvl.stats.normal.deathDamage!).toBeGreaterThan(0);
    });
  });

  it('all levels have unique sprites', () => {
    const levels = home().troops().dragonRider().first()!.levels;
    const paths = levels.map((l) => l.images.normal);
    expect(new Set(paths).size).toBe(6);
  });

  it('has no super troop', () => {
    expect(home().troops().dragonRider().first()!.superTroop).toBeUndefined();
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().dragonRider()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('troops() with dragonRider', () => {
  it('byType("regular") includes dragon-rider', () => {
    expect(home().troops().byType('regular').find('dragon-rider')).toBeDefined();
  });

  it('withSuperTroop() does not include dragon-rider', () => {
    expect(home().troops().withSuperTroop().find('dragon-rider')).toBeUndefined();
  });

  it('byTownHall(13) includes dragon-rider (level 1 unlocks at TH13)', () => {
    expect(home().troops().byTownHall(13).find('dragon-rider')).toBeDefined();
  });

  it('byTownHall(13) includes dragon-rider (level 2 at TH13)', () => {
    expect(home().troops().byTownHall(13).find('dragon-rider')).toBeDefined();
  });
});
