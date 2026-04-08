import { home, HomeVillageTroops } from '@/modules/home';

// ─── Ice Golem troop ──────────────────────────────────────────────────────────

describe('iceGolem()', () => {
  it('returns a HomeTroop', () => {
    const ig = home().troops().iceGolem().first()!;
    expect(ig).toBeDefined();
    expect(ig.id).toBe('ice-golem');
    expect(ig.name).toBe('Ice Golem');
  });

  it('has 9 levels', () => {
    expect(home().troops().iceGolem().first()!.levels).toHaveLength(9);
  });

  it('is a dark single troop targeting ground', () => {
    const ig = home().troops().iceGolem().first()!;
    expect(ig.troopType).toBe('dark');
    expect(ig.damageType).toBe('single');
    expect(ig.targetType).toBe('ground');
  });

  it('has housing space 15, movement speed 12, attack speed 2, range 1', () => {
    const ig = home().troops().iceGolem().first()!;
    expect(ig.housingSpace).toBe(15);
    expect(ig.movementSpeed).toBe(12);
    expect(ig.attackSpeed).toBe(2);
    expect(ig.range).toBe(1);
  });

  it('has preferred target Defenses', () => {
    expect(home().troops().iceGolem().first()!.preferredTarget).toBe('Defenses');
  });

  it('has freeze radius 7.5 on offense, 5.5 on defense', () => {
    const ig = home().troops().iceGolem().first()!;
    expect(ig.freezeRadiusOnOffense).toBe(7.5);
    expect(ig.freezeRadiusOnDefense).toBe(5.5);
  });

  it('requires Dark Barracks level 8', () => {
    expect(home().troops().iceGolem().first()!.barrackLevelRequired).toBe(8);
  });

  it('has an icon image', () => {
    expect(home().troops().iceGolem().first()!.images.icon).toBeTruthy();
  });

  it('has no super troop', () => {
    expect(home().troops().iceGolem().first()!.superTroop).toBeUndefined();
  });

  it('level 1: DPS 24, DPH 48, HP 2600, freeze 4.0s offense / 2.0s defense, no research', () => {
    const lvl = home().troops().iceGolem().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(24);
    expect(lvl.stats.normal.damagePerShot).toBe(48);
    expect(lvl.hitpoints).toBe(2600);
    expect(lvl.deathFreezeTimeOnOffense).toBe(4.0);
    expect(lvl.deathFreezeTimeOnDefense).toBe(2.0);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 9 (TH11), 27500 Dark Elixir / 2d, freeze 4.75s / 2.25s', () => {
    const lvl = home().troops().iceGolem().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.researchCost).toBe(27500);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 2, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.deathFreezeTimeOnOffense).toBe(4.75);
    expect(lvl.deathFreezeTimeOnDefense).toBe(2.25);
  });

  it('levels 1 and 2 share the same sprite', () => {
    const levels = home().troops().iceGolem().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('level 3: also Lab 9 (TH11), DPS 32, freeze 5.5s / 2.5s', () => {
    const lvl = home().troops().iceGolem().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.stats.normal.dps).toBe(32);
    expect(lvl.deathFreezeTimeOnOffense).toBe(5.5);
    expect(lvl.deathFreezeTimeOnDefense).toBe(2.5);
  });

  it('levels 3 and 4 share the same sprite', () => {
    const levels = home().troops().iceGolem().first()!.levels;
    expect(levels[2].images.normal).toBe(levels[3].images.normal);
  });

  it('level 4: Lab 10 (TH12), 50000 Dark Elixir / 3d 6h, DPS 36', () => {
    const lvl = home().troops().iceGolem().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(50000);
    expect(lvl.researchTime).toEqual({ days: 3, hours: 6, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(36);
  });

  it('levels 5 and 6 share the same sprite', () => {
    const levels = home().troops().iceGolem().first()!.levels;
    expect(levels[4].images.normal).toBe(levels[5].images.normal);
  });

  it('level 6: Lab 12 (TH14), 110000 Dark Elixir / 6d 12h, freeze 7.5s / 3.25s', () => {
    const lvl = home().troops().iceGolem().first()!.levels[5];
    expect(lvl.level).toBe(6);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.researchCost).toBe(110000);
    expect(lvl.researchTime).toEqual({ days: 6, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.deathFreezeTimeOnOffense).toBe(7.5);
    expect(lvl.deathFreezeTimeOnDefense).toBe(3.25);
  });

  it('level 8: Lab 14 (TH16), DPS 52, DPH 104, HP 4200, freeze 8.5s / 3.5s', () => {
    const lvl = home().troops().iceGolem().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.stats.normal.dps).toBe(52);
    expect(lvl.stats.normal.damagePerShot).toBe(104);
    expect(lvl.hitpoints).toBe(4200);
    expect(lvl.deathFreezeTimeOnOffense).toBe(8.5);
    expect(lvl.deathFreezeTimeOnDefense).toBe(3.5);
    expect(lvl.researchCost).toBe(180000);
    expect(lvl.researchTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 9: Lab 15 (TH17), DPS 56, DPH 112, HP 4350, freeze 9.0s / 3.5s', () => {
    const lvl = home().troops().iceGolem().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.stats.normal.dps).toBe(56);
    expect(lvl.stats.normal.damagePerShot).toBe(112);
    expect(lvl.hitpoints).toBe(4350);
    expect(lvl.deathFreezeTimeOnOffense).toBe(9.0);
    expect(lvl.deathFreezeTimeOnDefense).toBe(3.5);
    expect(lvl.researchCost).toBe(280000);
    expect(lvl.researchTime).toEqual({ days: 10, hours: 14, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().iceGolem()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops() with iceGolem', () => {
  it('byType("dark") includes ice-golem', () => {
    expect(home().troops().byType('dark').find('ice-golem')).toBeDefined();
  });

  it('byType("regular") does not include ice-golem', () => {
    expect(home().troops().byType('regular').find('ice-golem')).toBeUndefined();
  });

  it('withSuperTroop() does not include ice-golem', () => {
    expect(home().troops().withSuperTroop().find('ice-golem')).toBeUndefined();
  });

  it('byTownHall(1) includes ice-golem (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('ice-golem')).toBeDefined();
  });

  it('byTownHall(11) includes ice-golem (level 2 at TH11)', () => {
    expect(home().troops().byTownHall(11).find('ice-golem')).toBeDefined();
  });
});
