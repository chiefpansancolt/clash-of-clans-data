import { home, HomeVillageTroops } from '@/modules/home';

describe('electroTitan()', () => {
  it('returns a HomeTroop', () => {
    const et = home().troops().electroTitan().first()!;
    expect(et).toBeDefined();
    expect(et.id).toBe('electro-titan');
    expect(et.name).toBe('Electro Titan');
  });

  it('has 5 levels', () => {
    expect(home().troops().electroTitan().first()!.levels).toHaveLength(5);
  });

  it('is a regular single-target troop targeting both ground and air', () => {
    const et = home().troops().electroTitan().first()!;
    expect(et.troopType).toBe('regular');
    expect(et.damageType).toBe('single');
    expect(et.targetType).toBe('both');
  });

  it('has housing space 32, movement speed 16, attack speed 1.5, range 1.25', () => {
    const et = home().troops().electroTitan().first()!;
    expect(et.housingSpace).toBe(32);
    expect(et.movementSpeed).toBe(16);
    expect(et.attackSpeed).toBe(1.5);
    expect(et.range).toBe(1.25);
  });

  it('has aura attack speed 0.4 and aura range 3.5', () => {
    const et = home().troops().electroTitan().first()!;
    expect(et.auraAttackSpeed).toBe(0.4);
    expect(et.auraRange).toBe(3.5);
  });

  it('requires Barracks level 16', () => {
    expect(home().troops().electroTitan().first()!.barrackLevelRequired).toBe(16);
  });

  it('has an icon image', () => {
    expect(home().troops().electroTitan().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 180, DPH 270, aura DPS 75, aura DPH 30, HP 7200, no research', () => {
    const lvl = home().troops().electroTitan().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(180);
    expect(lvl.stats.normal.damagePerShot).toBe(270);
    expect(lvl.stats.aura!.dps).toBe(75);
    expect(lvl.stats.aura!.damagePerShot).toBe(30);
    expect(lvl.hitpoints).toBe(7200);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 12 (TH14), 14M / 9d, DPS 200, aura DPS 100, HP 7700', () => {
    const lvl = home().troops().electroTitan().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.researchCost).toBe(14000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(200);
    expect(lvl.stats.aura!.dps).toBe(100);
    expect(lvl.hitpoints).toBe(7700);
  });

  it('level 4: aura DPS 137.5, aura DPH 55', () => {
    const lvl = home().troops().electroTitan().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.stats.aura!.dps).toBe(137.5);
    expect(lvl.stats.aura!.damagePerShot).toBe(55);
  });

  it('level 5: DPS 270, DPH 405, aura DPS 150, aura DPH 60, HP 9200, Lab 16 (TH18), 30M / 16d', () => {
    const lvl = home().troops().electroTitan().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.stats.normal.dps).toBe(270);
    expect(lvl.stats.normal.damagePerShot).toBe(405);
    expect(lvl.stats.aura!.dps).toBe(150);
    expect(lvl.stats.aura!.damagePerShot).toBe(60);
    expect(lvl.hitpoints).toBe(9200);
    expect(lvl.researchCost).toBe(30000000);
    expect(lvl.researchTime).toEqual({ days: 16, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all levels have aura stats', () => {
    const levels = home().troops().electroTitan().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.stats.aura).toBeDefined();
      expect(lvl.stats.aura!.dps).toBeGreaterThan(0);
    });
  });

  it('all levels have unique sprites', () => {
    const levels = home().troops().electroTitan().first()!.levels;
    const paths = levels.map((l) => l.images.normal);
    expect(new Set(paths).size).toBe(5);
  });

  it('has no super troop', () => {
    expect(home().troops().electroTitan().first()!.superTroop).toBeUndefined();
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().electroTitan()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('troops() with electroTitan', () => {
  it('byType("regular") includes electro-titan', () => {
    expect(home().troops().byType('regular').find('electro-titan')).toBeDefined();
  });

  it('withSuperTroop() does not include electro-titan', () => {
    expect(home().troops().withSuperTroop().find('electro-titan')).toBeUndefined();
  });

  it('byTownHall(1) includes electro-titan (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('electro-titan')).toBeDefined();
  });

  it('byTownHall(14) includes electro-titan (level 2 at TH14)', () => {
    expect(home().troops().byTownHall(14).find('electro-titan')).toBeDefined();
  });
});
