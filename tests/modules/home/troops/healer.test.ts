import { home } from '@/modules/home';
import { HomeVillageTroops } from '@/modules/home';

describe('healer()', () => {
  it('returns a HomeTroop', () => {
    const h = home().troops().healer().first()!;
    expect(h).toBeDefined();
    expect(h.id).toBe('healer');
    expect(h.name).toBe('Healer');
  });

  it('has 11 levels', () => {
    expect(home().troops().healer().first()!.levels).toHaveLength(11);
  });

  it('is a regular troop targeting ground with no damage type', () => {
    const h = home().troops().healer().first()!;
    expect(h.troopType).toBe('regular');
    expect(h.targetType).toBe('ground');
    expect(h.damageType).toBe('none');
  });

  it('has housing space 14, movement speed 16, heal speed 0.7, range 5', () => {
    const h = home().troops().healer().first()!;
    expect(h.housingSpace).toBe(14);
    expect(h.movementSpeed).toBe(16);
    expect(h.attackSpeed).toBe(0.7);
    expect(h.range).toBe(5);
  });

  it('requires Barracks level 8', () => {
    expect(home().troops().healer().first()!.barrackLevelRequired).toBe(8);
  });

  it('has an icon image', () => {
    expect(home().troops().healer().first()!.images.icon).toBeTruthy();
  });

  it('has no super troop', () => {
    expect(home().troops().healer().first()!.superTroop).toBeUndefined();
  });

  it('level 1 stats: HPS 36, HPP 25.2, HPS on heroes 19, HPP on heroes 13.3, HP 500, no research', () => {
    const lvl = home().troops().healer().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.healingPerSecond).toBe(36);
    expect(lvl.stats.normal.healingPerPulse).toBe(25.2);
    expect(lvl.stats.normal.healingPerSecondOnHeroes).toBe(19);
    expect(lvl.stats.normal.healingPerPulseOnHeroes).toBe(13.3);
    expect(lvl.hitpoints).toBe(500);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(6);
  });

  it('level 1 has no dps or damagePerShot', () => {
    const lvl = home().troops().healer().first()!.levels[0];
    expect(lvl.stats.normal.dps).toBeUndefined();
    expect(lvl.stats.normal.damagePerShot).toBeUndefined();
  });

  it('level 2 requires Lab 5 (TH7), research 450000 Elixir / 12h', () => {
    const lvl = home().troops().healer().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(7);
    expect(lvl.researchCost).toBe(450000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 5 requires Lab 9 (TH11), HPS 72, HP 1500, 4M / 3d', () => {
    const lvl = home().troops().healer().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.stats.normal.healingPerSecond).toBe(72);
    expect(lvl.stats.normal.healingPerSecondOnHeroes).toBe(48);
    expect(lvl.hitpoints).toBe(1500);
    expect(lvl.researchCost).toBe(4000000);
    expect(lvl.researchTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 8 requires Lab 13 (TH15), HPS 76, HPP 53.2, HPS on heroes 68, HP 1800', () => {
    const lvl = home().troops().healer().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.stats.normal.healingPerSecond).toBe(76);
    expect(lvl.stats.normal.healingPerPulse).toBe(53.2);
    expect(lvl.stats.normal.healingPerSecondOnHeroes).toBe(68);
    expect(lvl.hitpoints).toBe(1800);
    expect(lvl.researchCost).toBe(11000000);
    expect(lvl.researchTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 11 stats: HPS 82, HPP 57.4, HPS heroes 88, HPP heroes 61.6, HP 2100, Lab 16 (TH18), 28.5M / 15d', () => {
    const lvl = home().troops().healer().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.stats.normal.healingPerSecond).toBe(82);
    expect(lvl.stats.normal.healingPerPulse).toBe(57.4);
    expect(lvl.stats.normal.healingPerSecondOnHeroes).toBe(88);
    expect(lvl.stats.normal.healingPerPulseOnHeroes).toBe(61.6);
    expect(lvl.hitpoints).toBe(2100);
    expect(lvl.researchCost).toBe(28500000);
    expect(lvl.researchTime).toEqual({ days: 15, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().healer().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().healer()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('troops() with healer', () => {
  it('byType("regular") includes healer', () => {
    expect(home().troops().byType('regular').find('healer')).toBeDefined();
  });

  it('withSuperTroop() does not include healer (no super troop)', () => {
    expect(home().troops().withSuperTroop().find('healer')).toBeUndefined();
  });

  it('byTownHall(6) includes healer (level 1 unlocks at TH6)', () => {
    expect(home().troops().byTownHall(6).find('healer')).toBeDefined();
  });

  it('byTownHall(0) does not include healer', () => {
    expect(home().troops().byTownHall(0).find('healer')).toBeUndefined();
  });
});
