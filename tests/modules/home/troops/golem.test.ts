import { home, HomeVillageTroops } from '@/modules/home';

describe('golem()', () => {
  it('returns a HomeTroop', () => {
    const g = home().troops().golem().first()!;
    expect(g).toBeDefined();
    expect(g.id).toBe('golem');
    expect(g.name).toBe('Golem');
  });

  it('has 14 levels', () => {
    expect(home().troops().golem().first()!.levels).toHaveLength(14);
  });

  it('is a dark single troop targeting ground', () => {
    const g = home().troops().golem().first()!;
    expect(g.troopType).toBe('dark');
    expect(g.damageType).toBe('single');
    expect(g.targetType).toBe('ground');
  });

  it('has housing space 30, movement speed 12, attack speed 2.4, range 1', () => {
    const g = home().troops().golem().first()!;
    expect(g.housingSpace).toBe(30);
    expect(g.movementSpeed).toBe(12);
    expect(g.attackSpeed).toBe(2.4);
    expect(g.range).toBe(1);
  });

  it('requires Dark Barracks level 4', () => {
    expect(home().troops().golem().first()!.barrackLevelRequired).toBe(4);
  });

  it('has an icon image', () => {
    expect(home().troops().golem().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 35, DPH 84, death damage 350, 2 golemites, HP 5100, no research', () => {
    const lvl = home().troops().golem().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(35);
    expect(lvl.stats.normal.damagePerShot).toBe(84);
    expect(lvl.stats.normal.deathDamage).toBe(350);
    expect(lvl.golemitesSpawned).toBe(2);
    expect(lvl.hitpoints).toBe(5100);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(8);
  });

  it('level 2: Lab 6 (TH8), 4000 Dark Elixir / 16h, 2 golemites', () => {
    const lvl = home().troops().golem().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(6);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.researchCost).toBe(4000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 16, minutes: 0, seconds: 0 });
    expect(lvl.golemitesSpawned).toBe(2);
  });

  it('levels 1 and 2 share the same sprite', () => {
    const levels = home().troops().golem().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
  });

  it('levels 3 and 4 share the same sprite', () => {
    const levels = home().troops().golem().first()!.levels;
    expect(levels[2].images.normal).toBe(levels[3].images.normal);
  });

  it('level 8: Lab 10 (TH12), 3 golemites, DPS 70, DPH 168, death damage 700, HP 7500', () => {
    const lvl = home().troops().golem().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.golemitesSpawned).toBe(3);
    expect(lvl.stats.normal.dps).toBe(70);
    expect(lvl.stats.normal.damagePerShot).toBe(168);
    expect(lvl.stats.normal.deathDamage).toBe(700);
    expect(lvl.hitpoints).toBe(7500);
  });

  it('level 13: Lab 14 (TH16), 4 golemites, DPS 95, HP 9200', () => {
    const lvl = home().troops().golem().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.golemitesSpawned).toBe(4);
    expect(lvl.stats.normal.dps).toBe(95);
    expect(lvl.hitpoints).toBe(9200);
  });

  it('level 14: Lab 15 (TH17), 4 golemites, DPS 100, DPH 240, death damage 1000, HP 9600, 230000 DE / 10d', () => {
    const lvl = home().troops().golem().first()!.levels[13];
    expect(lvl.level).toBe(14);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.golemitesSpawned).toBe(4);
    expect(lvl.stats.normal.dps).toBe(100);
    expect(lvl.stats.normal.damagePerShot).toBe(240);
    expect(lvl.stats.normal.deathDamage).toBe(1000);
    expect(lvl.hitpoints).toBe(9600);
    expect(lvl.researchCost).toBe(230000);
    expect(lvl.researchTime).toEqual({ days: 10, hours: 0, minutes: 0, seconds: 0 });
  });

  it('has no super troop', () => {
    expect(home().troops().golem().first()!.superTroop).toBeUndefined();
  });

  it('has normal images for each level', () => {
    const levels = home().troops().golem().first()!.levels;
    levels.forEach((lvl) => {
      expect(lvl.images.normal).toBeTruthy();
    });
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().golem()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('troops() with golem', () => {
  it('byType("dark") includes golem', () => {
    expect(home().troops().byType('dark').find('golem')).toBeDefined();
  });

  it('byType("regular") does not include golem', () => {
    expect(home().troops().byType('regular').find('golem')).toBeUndefined();
  });

  it('withSuperTroop() does not include golem', () => {
    expect(home().troops().withSuperTroop().find('golem')).toBeUndefined();
  });

  it('byTownHall(8) includes golem (level 1 unlocks at TH8)', () => {
    expect(home().troops().byTownHall(8).find('golem')).toBeDefined();
  });

  it('byTownHall(8) includes golem (level 2 at TH8)', () => {
    expect(home().troops().byTownHall(8).find('golem')).toBeDefined();
  });
});
