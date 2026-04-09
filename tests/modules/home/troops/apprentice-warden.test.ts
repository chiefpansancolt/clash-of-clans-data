import { home, HomeVillageTroops } from '@/modules/home';

describe('apprenticeWarden()', () => {
  it('returns a HomeTroop', () => {
    const aw = home().troops().apprenticeWarden().first()!;
    expect(aw).toBeDefined();
    expect(aw.id).toBe('apprentice-warden');
    expect(aw.name).toBe('Apprentice Warden');
  });

  it('has 4 levels', () => {
    expect(home().troops().apprenticeWarden().first()!.levels).toHaveLength(4);
  });

  it('is a dark single troop targeting both ground and air', () => {
    const aw = home().troops().apprenticeWarden().first()!;
    expect(aw.troopType).toBe('dark');
    expect(aw.damageType).toBe('single');
    expect(aw.targetType).toBe('both');
  });

  it('has housing space 20, movement speed 20, attack speed 0.9, range 5, aura range 7', () => {
    const aw = home().troops().apprenticeWarden().first()!;
    expect(aw.housingSpace).toBe(20);
    expect(aw.movementSpeed).toBe(20);
    expect(aw.attackSpeed).toBe(0.9);
    expect(aw.range).toBe(5);
    expect(aw.auraRange).toBe(7);
  });

  it('requires Dark Barracks level 10', () => {
    expect(home().troops().apprenticeWarden().first()!.barrackLevelRequired).toBe(10);
  });

  it('has an icon image', () => {
    expect(home().troops().apprenticeWarden().first()!.images.icon).toBeTruthy();
  });

  it('has no super troop', () => {
    expect(home().troops().apprenticeWarden().first()!.superTroop).toBeUndefined();
  });

  it('level 1: DPS 170, DPH 153, aura HP increase 20%, HP 1500, no research', () => {
    const lvl = home().troops().apprenticeWarden().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(170);
    expect(lvl.stats.normal.damagePerShot).toBe(153);
    expect(lvl.auraHpIncrease).toBe(20);
    expect(lvl.hitpoints).toBe(1500);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 11 (TH13), 90000 Dark Elixir / 6d, DPS 185, DPH 166.5, aura 22%, HP 1650', () => {
    const lvl = home().troops().apprenticeWarden().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(90000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 6, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(185);
    expect(lvl.stats.normal.damagePerShot).toBe(166.5);
    expect(lvl.auraHpIncrease).toBe(22);
    expect(lvl.hitpoints).toBe(1650);
  });

  it('level 3: Lab 12 (TH14), 135000 Dark Elixir / 7d 12h, DPS 200, DPH 180, aura 24%, HP 1800', () => {
    const lvl = home().troops().apprenticeWarden().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.researchCost).toBe(135000);
    expect(lvl.researchTime).toEqual({ days: 7, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(200);
    expect(lvl.stats.normal.damagePerShot).toBe(180);
    expect(lvl.auraHpIncrease).toBe(24);
    expect(lvl.hitpoints).toBe(1800);
  });

  it('level 4: Lab 13 (TH15), 160000 Dark Elixir / 8d, DPS 215, DPH 193.5, aura 26%, HP 1950', () => {
    const lvl = home().troops().apprenticeWarden().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(160000);
    expect(lvl.researchTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(215);
    expect(lvl.stats.normal.damagePerShot).toBe(193.5);
    expect(lvl.auraHpIncrease).toBe(26);
    expect(lvl.hitpoints).toBe(1950);
  });

  it('each level has a unique sprite', () => {
    const levels = home().troops().apprenticeWarden().first()!.levels;
    const paths = levels.map((l) => l.images.normal);
    expect(new Set(paths).size).toBe(4);
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().apprenticeWarden()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('troops() with apprentice warden', () => {
  it('byType("dark") includes apprentice warden', () => {
    expect(home().troops().byType('dark').find('apprentice-warden')).toBeDefined();
  });

  it('byType("regular") does not include apprentice warden', () => {
    expect(home().troops().byType('regular').find('apprentice-warden')).toBeUndefined();
  });

  it('withSuperTroop() does not include apprentice warden', () => {
    expect(home().troops().withSuperTroop().find('apprentice-warden')).toBeUndefined();
  });

  it('byTownHall(1) includes apprentice warden (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('apprentice-warden')).toBeDefined();
  });

  it('byTownHall(13) includes apprentice warden (level 2 at TH13)', () => {
    expect(home().troops().byTownHall(13).find('apprentice-warden')).toBeDefined();
  });
});
