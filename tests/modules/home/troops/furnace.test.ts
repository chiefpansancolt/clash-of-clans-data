import { home, HomeVillageTroops } from '@/modules/home';

// ─── Furnace troop ────────────────────────────────────────────────────────────

describe('furnace()', () => {
  it('returns a HomeTroop', () => {
    const f = home().troops().furnace().first()!;
    expect(f).toBeDefined();
    expect(f.id).toBe('furnace');
    expect(f.name).toBe('Furnace');
  });

  it('has 4 levels', () => {
    expect(home().troops().furnace().first()!.levels).toHaveLength(4);
  });

  it('is a dark troop with no direct damage targeting ground', () => {
    const f = home().troops().furnace().first()!;
    expect(f.troopType).toBe('dark');
    expect(f.damageType).toBe('none');
    expect(f.targetType).toBe('ground');
  });

  it('has housing space 18, movement speed 0, 60s lifetime', () => {
    const f = home().troops().furnace().first()!;
    expect(f.housingSpace).toBe(18);
    expect(f.movementSpeed).toBe(0);
    expect(f.lifetime).toBe(60);
  });

  it('has no range or attack speed', () => {
    const f = home().troops().furnace().first()!;
    expect(f.range).toBeUndefined();
    expect(f.attackSpeed).toBeUndefined();
  });

  it('requires Dark Barracks level 12', () => {
    expect(home().troops().furnace().first()!.barrackLevelRequired).toBe(12);
  });

  it('has an icon image', () => {
    expect(home().troops().furnace().first()!.images.icon).toBeTruthy();
  });

  it('has no super troop', () => {
    expect(home().troops().furnace().first()!.superTroop).toBeUndefined();
  });

  it('level 1: 19 firemites, HP 1530, no research', () => {
    const lvl = home().troops().furnace().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.firemitesSpawned).toBe(19);
    expect(lvl.hitpoints).toBe(1530);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 2: Lab 13 (TH15), 200000 Dark Elixir / 12d, 20 firemites, HP 1620', () => {
    const lvl = home().troops().furnace().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(200000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 12, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.firemitesSpawned).toBe(20);
    expect(lvl.hitpoints).toBe(1620);
  });

  it('level 3: Lab 14 (TH16), 260000 Dark Elixir / 14d, 21 firemites, HP 1710', () => {
    const lvl = home().troops().furnace().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(260000);
    expect(lvl.researchTime).toEqual({ days: 14, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.firemitesSpawned).toBe(21);
    expect(lvl.hitpoints).toBe(1710);
  });

  it('level 4: Lab 15 (TH17), 320000 Dark Elixir / 16d, 22 firemites, HP 1800', () => {
    const lvl = home().troops().furnace().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(320000);
    expect(lvl.researchTime).toEqual({ days: 16, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.firemitesSpawned).toBe(22);
    expect(lvl.hitpoints).toBe(1800);
  });

  it('each level has a unique sprite', () => {
    const levels = home().troops().furnace().first()!.levels;
    const paths = levels.map((l) => l.images.normal);
    expect(new Set(paths).size).toBe(4);
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().furnace()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops() with furnace', () => {
  it('byType("dark") includes furnace', () => {
    expect(home().troops().byType('dark').find('furnace')).toBeDefined();
  });

  it('byType("regular") does not include furnace', () => {
    expect(home().troops().byType('regular').find('furnace')).toBeUndefined();
  });

  it('withSuperTroop() does not include furnace', () => {
    expect(home().troops().withSuperTroop().find('furnace')).toBeUndefined();
  });

  it('byTownHall(1) includes furnace (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('furnace')).toBeDefined();
  });

  it('byTownHall(15) includes furnace (level 2 at TH15)', () => {
    expect(home().troops().byTownHall(15).find('furnace')).toBeDefined();
  });
});
