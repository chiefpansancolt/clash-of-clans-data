import { home, HomeVillageTroops } from '@/modules/home';

// ─── P.E.K.K.A troop ──────────────────────────────────────────────────────────

describe('pekka()', () => {
  it('returns a HomeTroop', () => {
    const p = home().troops().pekka().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('pekka');
    expect(p.name).toBe('P.E.K.K.A');
  });

  it('has 13 levels', () => {
    expect(home().troops().pekka().first()!.levels).toHaveLength(13);
  });

  it('is a regular melee single-target ground troop', () => {
    const p = home().troops().pekka().first()!;
    expect(p.troopType).toBe('regular');
    expect(p.damageType).toBe('single');
    expect(p.targetType).toBe('ground');
  });

  it('has housing space 25, movement speed 16, attack speed 1.8, range 0.8', () => {
    const p = home().troops().pekka().first()!;
    expect(p.housingSpace).toBe(25);
    expect(p.movementSpeed).toBe(16);
    expect(p.attackSpeed).toBe(1.8);
    expect(p.range).toBe(0.8);
  });

  it('requires Barracks level 10', () => {
    expect(home().troops().pekka().first()!.barrackLevelRequired).toBe(10);
  });

  it('has an icon image', () => {
    expect(home().troops().pekka().first()!.images.icon).toBeTruthy();
  });

  it('has no super troop', () => {
    expect(home().troops().pekka().first()!.superTroop).toBeUndefined();
  });

  it('level 1 stats: DPS 260, DPH 468, HP 3000, no research', () => {
    const lvl = home().troops().pekka().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(260);
    expect(lvl.stats.normal.damagePerShot).toBe(468);
    expect(lvl.hitpoints).toBe(3000);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('levels 2 and 3 both require Lab 6 (TH8)', () => {
    const lvl2 = home().troops().pekka().first()!.levels[1];
    const lvl3 = home().troops().pekka().first()!.levels[2];
    expect(lvl2.laboratoryRequired).toBe(6);
    expect(lvl2.townHallRequired).toBe(8);
    expect(lvl3.laboratoryRequired).toBe(6);
    expect(lvl3.townHallRequired).toBe(8);
  });

  it('level 2: research 600K Elixir / 12h', () => {
    const lvl = home().troops().pekka().first()!.levels[1];
    expect(lvl.researchCost).toBe(600000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 4: Lab 7 (TH9), DPS 360, DPH 648, HP 4500, 2M / 1d 12h', () => {
    const lvl = home().troops().pekka().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(9);
    expect(lvl.stats.normal.dps).toBe(360);
    expect(lvl.stats.normal.damagePerShot).toBe(648);
    expect(lvl.hitpoints).toBe(4500);
    expect(lvl.researchCost).toBe(2000000);
    expect(lvl.researchTime).toEqual({ days: 1, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 5: 1d 16h research time', () => {
    const lvl = home().troops().pekka().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.researchTime).toEqual({ days: 1, hours: 16, minutes: 0, seconds: 0 });
  });

  it('levels 5 and 6 both require Lab 8 (TH10)', () => {
    const lvl5 = home().troops().pekka().first()!.levels[4];
    const lvl6 = home().troops().pekka().first()!.levels[5];
    expect(lvl5.laboratoryRequired).toBe(8);
    expect(lvl5.townHallRequired).toBe(10);
    expect(lvl6.laboratoryRequired).toBe(8);
    expect(lvl6.townHallRequired).toBe(10);
  });

  it('level 7: Lab 9 (TH11), DPS 540, DPH 972, HP 5900, 4.5M / 3d', () => {
    const lvl = home().troops().pekka().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.stats.normal.dps).toBe(540);
    expect(lvl.stats.normal.damagePerShot).toBe(972);
    expect(lvl.hitpoints).toBe(5900);
    expect(lvl.researchCost).toBe(4500000);
    expect(lvl.researchTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10 skips to Lab 13 (TH15)', () => {
    const lvl = home().troops().pekka().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.stats.normal.dps).toBe(750);
    expect(lvl.hitpoints).toBe(7200);
    expect(lvl.researchCost).toBe(10500000);
    expect(lvl.researchTime).toEqual({ days: 5, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 13: DPS 940, DPH 1692, HP 8800, Lab 16 (TH18), 28M / 14d 12h', () => {
    const lvl = home().troops().pekka().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.stats.normal.dps).toBe(940);
    expect(lvl.stats.normal.damagePerShot).toBe(1692);
    expect(lvl.hitpoints).toBe(8800);
    expect(lvl.researchCost).toBe(28000000);
    expect(lvl.researchTime).toEqual({ days: 14, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('has normal images for each level', () => {
    const levels = home().troops().pekka().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().pekka()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops() with pekka', () => {
  it('byType("regular") includes pekka', () => {
    expect(home().troops().byType('regular').find('pekka')).toBeDefined();
  });

  it('withSuperTroop() does not include pekka (no super troop in data)', () => {
    expect(home().troops().withSuperTroop().find('pekka')).toBeUndefined();
  });

  it('byTownHall(1) includes pekka (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('pekka')).toBeDefined();
  });

  it('byTownHall(8) includes pekka (level 2 at TH8)', () => {
    expect(home().troops().byTownHall(8).find('pekka')).toBeDefined();
  });
});
