import { home, HomeVillageTroops } from '@/modules/home';

describe('electroDragon()', () => {
  it('returns a HomeTroop', () => {
    const ed = home().troops().electroDragon().first()!;
    expect(ed).toBeDefined();
    expect(ed.id).toBe('electro-dragon');
    expect(ed.name).toBe('Electro Dragon');
  });

  it('has 9 levels', () => {
    expect(home().troops().electroDragon().first()!.levels).toHaveLength(9);
  });

  it('is a regular chain-damage troop targeting both ground and air', () => {
    const ed = home().troops().electroDragon().first()!;
    expect(ed.troopType).toBe('regular');
    expect(ed.damageType).toBe('chain');
    expect(ed.targetType).toBe('both');
  });

  it('has housing space 30, movement speed 13, attack speed 3.5, range 3', () => {
    const ed = home().troops().electroDragon().first()!;
    expect(ed.housingSpace).toBe(30);
    expect(ed.movementSpeed).toBe(13);
    expect(ed.attackSpeed).toBe(3.5);
    expect(ed.range).toBe(3);
  });

  it('requires Barracks level 13', () => {
    expect(home().troops().electroDragon().first()!.barrackLevelRequired).toBe(13);
  });

  it('has an icon image', () => {
    expect(home().troops().electroDragon().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 260, DPH 910, death damage 65, HP 3400, no research', () => {
    const lvl = home().troops().electroDragon().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(260);
    expect(lvl.stats.normal.damagePerShot).toBe(910);
    expect(lvl.stats.normal.deathDamage).toBe(65);
    expect(lvl.hitpoints).toBe(3400);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(11);
  });

  it('level 2: Lab 9 (TH11), 6M / 4d', () => {
    const lvl = home().troops().electroDragon().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.researchCost).toBe(6000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(290);
    expect(lvl.hitpoints).toBe(3900);
  });

  it('levels 1, 2 and 3 share the same sprite', () => {
    const levels = home().troops().electroDragon().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
    expect(levels[1].images.normal).toBe(levels[2].images.normal);
  });

  it('level 4: Lab 11 (TH13), 9M / 7d, DPS 350, HP 4700', () => {
    const lvl = home().troops().electroDragon().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(9000000);
    expect(lvl.researchTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(350);
    expect(lvl.stats.normal.deathDamage).toBe(95);
    expect(lvl.hitpoints).toBe(4700);
  });

  it('level 9: DPS 500, DPH 1750, death damage 145, HP 6700, Lab 16 (TH18), 30M / 16d', () => {
    const lvl = home().troops().electroDragon().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.stats.normal.dps).toBe(500);
    expect(lvl.stats.normal.damagePerShot).toBe(1750);
    expect(lvl.stats.normal.deathDamage).toBe(145);
    expect(lvl.hitpoints).toBe(6700);
    expect(lvl.researchCost).toBe(30000000);
    expect(lvl.researchTime).toEqual({ days: 16, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all levels have death damage stats', () => {
    const levels = home().troops().electroDragon().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.stats.normal.deathDamage).toBeDefined();
      expect(lvl.stats.normal.deathDamage!).toBeGreaterThan(0);
    });
  });

  it('has normal images for each level', () => {
    const levels = home().troops().electroDragon().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('has no super troop', () => {
    expect(home().troops().electroDragon().first()!.superTroop).toBeUndefined();
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().electroDragon()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('troops() with electroDragon', () => {
  it('byType("regular") includes electro-dragon', () => {
    expect(home().troops().byType('regular').find('electro-dragon')).toBeDefined();
  });

  it('withSuperTroop() does not include electro-dragon', () => {
    expect(home().troops().withSuperTroop().find('electro-dragon')).toBeUndefined();
  });

  it('byTownHall(11) includes electro-dragon (level 1 unlocks at TH11)', () => {
    expect(home().troops().byTownHall(11).find('electro-dragon')).toBeDefined();
  });

  it('byTownHall(11) includes electro-dragon (level 2 at TH11)', () => {
    expect(home().troops().byTownHall(11).find('electro-dragon')).toBeDefined();
  });
});
