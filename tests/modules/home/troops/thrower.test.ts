import { home, HomeVillageTroops } from '@/modules/home';

describe('thrower()', () => {
  it('returns a HomeTroop', () => {
    const t = home().troops().thrower().first()!;
    expect(t).toBeDefined();
    expect(t.id).toBe('thrower');
    expect(t.name).toBe('Thrower');
  });

  it('has 4 levels', () => {
    expect(home().troops().thrower().first()!.levels).toHaveLength(4);
  });

  it('is a regular single-target troop targeting ground and air', () => {
    const t = home().troops().thrower().first()!;
    expect(t.troopType).toBe('regular');
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('both');
  });

  it('has housing space 16, movement speed 18, attack speed 2.5, range 6', () => {
    const t = home().troops().thrower().first()!;
    expect(t.housingSpace).toBe(16);
    expect(t.movementSpeed).toBe(18);
    expect(t.attackSpeed).toBe(2.5);
    expect(t.range).toBe(6);
  });

  it('requires Barracks level 18', () => {
    expect(home().troops().thrower().first()!.barrackLevelRequired).toBe(18);
  });

  it('has an icon image', () => {
    expect(home().troops().thrower().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 190, DPH 475, HP 2200, no research', () => {
    const lvl = home().troops().thrower().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(190);
    expect(lvl.stats.normal.damagePerShot).toBe(475);
    expect(lvl.hitpoints).toBe(2200);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 14 (TH16), 16M Elixir / 9d 12h, DPS 210, HP 2350', () => {
    const lvl = home().troops().thrower().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(16000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 9, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(210);
    expect(lvl.hitpoints).toBe(2350);
  });

  it('level 3: Lab 15 (TH17), 18M Elixir / 10d 12h, DPS 230, HP 2600', () => {
    const lvl = home().troops().thrower().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(18000000);
    expect(lvl.researchTime).toEqual({ days: 10, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(230);
    expect(lvl.hitpoints).toBe(2600);
  });

  it('level 4: Lab 16 (TH18), 27M Elixir / 15d, DPS 240, DPH 600, HP 2800', () => {
    const lvl = home().troops().thrower().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.researchCost).toBe(27000000);
    expect(lvl.researchTime).toEqual({ days: 15, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(240);
    expect(lvl.stats.normal.damagePerShot).toBe(600);
    expect(lvl.hitpoints).toBe(2800);
  });

  it('has no super troop', () => {
    expect(home().troops().thrower().first()!.superTroop).toBeUndefined();
  });

  it('all levels have unique sprites', () => {
    const levels = home().troops().thrower().first()!.levels;
    const paths = levels.map((l) => l.images.normal);
    expect(new Set(paths).size).toBe(4);
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().thrower()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('troops() with thrower', () => {
  it('byType("regular") includes thrower', () => {
    expect(home().troops().byType('regular').find('thrower')).toBeDefined();
  });

  it('withSuperTroop() does not include thrower', () => {
    expect(home().troops().withSuperTroop().find('thrower')).toBeUndefined();
  });

  it('byTownHall(1) includes thrower (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('thrower')).toBeDefined();
  });

  it('byTownHall(16) includes thrower (level 2 at TH16)', () => {
    expect(home().troops().byTownHall(16).find('thrower')).toBeDefined();
  });
});
