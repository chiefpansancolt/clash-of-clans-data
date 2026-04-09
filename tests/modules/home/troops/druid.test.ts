import { home, HomeVillageTroops } from '@/modules/home';

describe('druid()', () => {
  it('returns a HomeTroop', () => {
    const d = home().troops().druid().first()!;
    expect(d).toBeDefined();
    expect(d.id).toBe('druid');
    expect(d.name).toBe('Druid');
  });

  it('has 5 levels', () => {
    expect(home().troops().druid().first()!.levels).toHaveLength(5);
  });

  it('is a dark chain troop targeting both ground and air', () => {
    const d = home().troops().druid().first()!;
    expect(d.troopType).toBe('dark');
    expect(d.damageType).toBe('chain');
    expect(d.targetType).toBe('both');
  });

  it('has housing space 16, movement speed 24, attack speed 1, range 5', () => {
    const d = home().troops().druid().first()!;
    expect(d.housingSpace).toBe(16);
    expect(d.movementSpeed).toBe(24);
    expect(d.attackSpeed).toBe(1);
    expect(d.range).toBe(5);
  });

  it('has 4 targets and 30s evolve time', () => {
    const d = home().troops().druid().first()!;
    expect(d.numberOfTargets).toBe(4);
    expect(d.evolveTime).toBe(30);
  });

  it('has special ability Bear Form', () => {
    expect(home().troops().druid().first()!.specialAbility).toBe('Bear Form');
  });

  it('requires Dark Barracks level 11', () => {
    expect(home().troops().druid().first()!.barrackLevelRequired).toBe(11);
  });

  it('has an icon image', () => {
    expect(home().troops().druid().first()!.images.icon).toBeTruthy();
  });

  it('has no super troop', () => {
    expect(home().troops().druid().first()!.superTroop).toBeUndefined();
  });

  it('level 1: HPS 80, HPH 80, hero healing 84, HP 1300, no research', () => {
    const lvl = home().troops().druid().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.healingPerSecond).toBe(80);
    expect(lvl.stats.normal.healingPerPulse).toBe(80);
    expect(lvl.stats.normal.healingPerSecondOnHeroes).toBe(84);
    expect(lvl.hitpoints).toBe(1300);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 12 (TH14), 125000 Dark Elixir / 9d, HPS 85, hero healing 89.25, HP 1400', () => {
    const lvl = home().troops().druid().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.researchCost).toBe(125000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.healingPerSecond).toBe(85);
    expect(lvl.stats.normal.healingPerSecondOnHeroes).toBe(89.25);
    expect(lvl.hitpoints).toBe(1400);
  });

  it('level 3: Lab 13 (TH15), 175000 Dark Elixir / 9d 12h, HPS 90, hero healing 99, HP 1500', () => {
    const lvl = home().troops().druid().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(175000);
    expect(lvl.researchTime).toEqual({ days: 9, hours: 12, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.healingPerSecond).toBe(90);
    expect(lvl.stats.normal.healingPerSecondOnHeroes).toBe(99);
    expect(lvl.hitpoints).toBe(1500);
  });

  it('level 4: Lab 14 (TH16), 187500 Dark Elixir / 11d, HPS 95, hero healing 104.5, HP 1600', () => {
    const lvl = home().troops().druid().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(187500);
    expect(lvl.researchTime).toEqual({ days: 11, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.healingPerSecond).toBe(95);
    expect(lvl.stats.normal.healingPerSecondOnHeroes).toBe(104.5);
    expect(lvl.hitpoints).toBe(1600);
  });

  it('level 5: Lab 15 (TH17), 300000 Dark Elixir / 12d, HPS 100, hero healing 115, HP 1700', () => {
    const lvl = home().troops().druid().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(300000);
    expect(lvl.researchTime).toEqual({ days: 12, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.healingPerSecond).toBe(100);
    expect(lvl.stats.normal.healingPerSecondOnHeroes).toBe(115);
    expect(lvl.hitpoints).toBe(1700);
  });

  it('levels 1-2 share a sprite, levels 3-4 share a sprite, level 5 is unique', () => {
    const levels = home().troops().druid().first()!.levels;
    expect(levels[0].images.normal).toBe(levels[1].images.normal);
    expect(levels[2].images.normal).toBe(levels[3].images.normal);
    expect(levels[0].images.normal).not.toBe(levels[2].images.normal);
    expect(levels[4].images.normal).not.toBe(levels[2].images.normal);
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().druid()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('troops() with druid', () => {
  it('byType("dark") includes druid', () => {
    expect(home().troops().byType('dark').find('druid')).toBeDefined();
  });

  it('byType("regular") does not include druid', () => {
    expect(home().troops().byType('regular').find('druid')).toBeUndefined();
  });

  it('withSuperTroop() does not include druid', () => {
    expect(home().troops().withSuperTroop().find('druid')).toBeUndefined();
  });

  it('byTownHall(1) includes druid (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('druid')).toBeDefined();
  });

  it('byTownHall(14) includes druid (level 2 at TH14)', () => {
    expect(home().troops().byTownHall(14).find('druid')).toBeDefined();
  });
});
