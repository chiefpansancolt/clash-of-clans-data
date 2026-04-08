import { home, HomeVillageTroops } from '@/modules/home';

// ─── Headhunter troop ─────────────────────────────────────────────────────────

describe('headhunter()', () => {
  it('returns a HomeTroop', () => {
    const hh = home().troops().headhunter().first()!;
    expect(hh).toBeDefined();
    expect(hh.id).toBe('headhunter');
    expect(hh.name).toBe('Headhunter');
  });

  it('has 3 levels', () => {
    expect(home().troops().headhunter().first()!.levels).toHaveLength(3);
  });

  it('is a dark single troop targeting ground', () => {
    const hh = home().troops().headhunter().first()!;
    expect(hh.troopType).toBe('dark');
    expect(hh.damageType).toBe('single');
    expect(hh.targetType).toBe('ground');
  });

  it('has housing space 6, movement speed 32, attack speed 0.6, range 3', () => {
    const hh = home().troops().headhunter().first()!;
    expect(hh.housingSpace).toBe(6);
    expect(hh.movementSpeed).toBe(32);
    expect(hh.attackSpeed).toBe(0.6);
    expect(hh.range).toBe(3);
  });

  it('has preferred target Heroes', () => {
    expect(home().troops().headhunter().first()!.preferredTarget).toBe('Heroes');
  });

  it('requires Dark Barracks level 9', () => {
    expect(home().troops().headhunter().first()!.barrackLevelRequired).toBe(9);
  });

  it('has an icon image', () => {
    expect(home().troops().headhunter().first()!.images.icon).toBeTruthy();
  });

  it('has no super troop', () => {
    expect(home().troops().headhunter().first()!.superTroop).toBeUndefined();
  });

  it('level 1: DPS 105, DPH 63, DPS on Heroes 420, HP 360, no research', () => {
    const lvl = home().troops().headhunter().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.stats.normal.dps).toBe(105);
    expect(lvl.stats.normal.damagePerShot).toBe(63);
    expect(lvl.stats.normal.dpsOnHeroes).toBe(420);
    expect(lvl.hitpoints).toBe(360);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(1);
  });

  it('level 1 poison: max DPS 220, speed decrease 40%, attack rate decrease 55%', () => {
    const lvl = home().troops().headhunter().first()!.levels[0];
    expect(lvl.poisonMaxDps).toBe(220);
    expect(lvl.poisonSpeedDecrease).toBe(40);
    expect(lvl.poisonAttackRateDecrease).toBe(55);
  });

  it('level 2: Lab 10 (TH12), 57500 Dark Elixir / 5d, DPS 115, HP 400', () => {
    const lvl = home().troops().headhunter().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(57500);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(115);
    expect(lvl.stats.normal.dpsOnHeroes).toBe(460);
    expect(lvl.hitpoints).toBe(400);
  });

  it('level 2 poison: max DPS 260, speed decrease 42%, attack rate decrease 60%', () => {
    const lvl = home().troops().headhunter().first()!.levels[1];
    expect(lvl.poisonMaxDps).toBe(260);
    expect(lvl.poisonSpeedDecrease).toBe(42);
    expect(lvl.poisonAttackRateDecrease).toBe(60);
  });

  it('level 3: Lab 11 (TH13), 90000 Dark Elixir / 7d, DPS 125, DPH 75, DPS on Heroes 500, HP 440', () => {
    const lvl = home().troops().headhunter().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(90000);
    expect(lvl.researchTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
    expect(lvl.stats.normal.dps).toBe(125);
    expect(lvl.stats.normal.damagePerShot).toBe(75);
    expect(lvl.stats.normal.dpsOnHeroes).toBe(500);
    expect(lvl.hitpoints).toBe(440);
  });

  it('level 3 poison: max DPS 280, speed decrease 44%, attack rate decrease 65%', () => {
    const lvl = home().troops().headhunter().first()!.levels[2];
    expect(lvl.poisonMaxDps).toBe(280);
    expect(lvl.poisonSpeedDecrease).toBe(44);
    expect(lvl.poisonAttackRateDecrease).toBe(65);
  });

  it('each level has a unique sprite', () => {
    const levels = home().troops().headhunter().first()!.levels;
    const paths = levels.map((l) => l.images.normal);
    expect(new Set(paths).size).toBe(3);
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().headhunter()).toBeInstanceOf(HomeVillageTroops);
  });
});

// ─── troops() namespace ───────────────────────────────────────────────────────

describe('troops() with headhunter', () => {
  it('byType("dark") includes headhunter', () => {
    expect(home().troops().byType('dark').find('headhunter')).toBeDefined();
  });

  it('byType("regular") does not include headhunter', () => {
    expect(home().troops().byType('regular').find('headhunter')).toBeUndefined();
  });

  it('withSuperTroop() does not include headhunter', () => {
    expect(home().troops().withSuperTroop().find('headhunter')).toBeUndefined();
  });

  it('byTownHall(1) includes headhunter (level 1 TH1 convention)', () => {
    expect(home().troops().byTownHall(1).find('headhunter')).toBeDefined();
  });

  it('byTownHall(12) includes headhunter (level 2 at TH12)', () => {
    expect(home().troops().byTownHall(12).find('headhunter')).toBeDefined();
  });
});
