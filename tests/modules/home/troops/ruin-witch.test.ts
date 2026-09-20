import { home, HomeVillageTroops } from '@/modules/home';

describe('ruinWitch()', () => {
  it('returns a HomeTroop', () => {
    const troop = home().troops().ruinWitch().first()!;
    expect(troop).toBeDefined();
    expect(troop.id).toBe('ruin-witch');
    expect(troop.name).toBe('Ruin Witch');
  });

  it('has 4 levels', () => {
    expect(home().troops().ruinWitch().first()!.levels).toHaveLength(4);
  });

  it('is a dark single-target troop targeting ground', () => {
    const troop = home().troops().ruinWitch().first()!;
    expect(troop.troopType).toBe('dark');
    expect(troop.damageType).toBe('single');
    expect(troop.targetType).toBe('ground');
  });

  it('has housing space 26, movement speed 12, attack speed 2, range 0.8', () => {
    const troop = home().troops().ruinWitch().first()!;
    expect(troop.housingSpace).toBe(26);
    expect(troop.movementSpeed).toBe(12);
    expect(troop.attackSpeed).toBe(2);
    expect(troop.range).toBe(0.8);
  });

  it('prefers Rubble and summons Ruin Knights', () => {
    const troop = home().troops().ruinWitch().first()!;
    expect(troop.preferredTarget).toBe('Rubble');
    expect(troop.specialAbility).toBe('Summons Ruin Knights');
  });

  it('requires Dark Barracks level 13', () => {
    expect(home().troops().ruinWitch().first()!.barrackLevelRequired).toBe(13);
  });

  it('has an icon image', () => {
    expect(home().troops().ruinWitch().first()!.images.icon).toBeTruthy();
  });

  it('level 1: HP 2300, DPS 25, DPH 50, Knight Lv1, no research', () => {
    const lvl = home().troops().ruinWitch().first()!.levels[0];

    expect(lvl.level).toBe(1);
    expect(lvl.hitpoints).toBe(2300);
    expect(lvl.stats.normal.dps).toBe(25);
    expect(lvl.stats.normal.damagePerShot).toBe(50);

    expect(lvl.ruinKnightLevel).toBe(1);
    expect(lvl.maximumRuinKnightsSummoned).toBe(8);

    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
  });

  it('level 2: Lab 14 (TH16), 220k DE / 11d, HP 2550', () => {
    const lvl = home().troops().ruinWitch().first()!.levels[1];

    expect(lvl.level).toBe(2);
    expect(lvl.hitpoints).toBe(2550);

    expect(lvl.stats.normal.dps).toBe(26);
    expect(lvl.stats.normal.damagePerShot).toBe(52);

    expect(lvl.ruinKnightLevel).toBe(2);

    expect(lvl.researchCost).toBe(220000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({
      days: 11,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
  });

  it('level 3: Lab 15 (TH17), 300k DE / 12d, HP 2800', () => {
    const lvl = home().troops().ruinWitch().first()!.levels[2];

    expect(lvl.level).toBe(3);
    expect(lvl.hitpoints).toBe(2800);

    expect(lvl.stats.normal.dps).toBe(27);
    expect(lvl.stats.normal.damagePerShot).toBe(54);

    expect(lvl.ruinKnightLevel).toBe(3);

    expect(lvl.researchCost).toBe(300000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({
      days: 12,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
  });

  it('level 4: Lab 16 (TH18), 380k DE / 15d12h, HP 3050', () => {
    const lvl = home().troops().ruinWitch().first()!.levels[3];

    expect(lvl.level).toBe(4);
    expect(lvl.hitpoints).toBe(3050);

    expect(lvl.stats.normal.dps).toBe(28);
    expect(lvl.stats.normal.damagePerShot).toBe(56);

    expect(lvl.ruinKnightLevel).toBe(4);

    expect(lvl.researchCost).toBe(380000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({
      days: 15,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });

    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
  });

  it('all levels summon 8 Ruin Knights', () => {
    home()
      .troops()
      .ruinWitch()
      .first()!
      .levels.forEach((lvl) => {
        expect(lvl.maximumRuinKnightsSummoned).toBe(8);
      });
  });

  it('Ruin Knight level scales from 1 to 4', () => {
    expect(
      home()
        .troops()
        .ruinWitch()
        .first()!
        .levels.map((l) => l.ruinKnightLevel),
    ).toEqual([1, 2, 3, 4]);
  });

  it('all levels have unique sprites', () => {
    const paths = home()
      .troops()
      .ruinWitch()
      .first()!
      .levels.map((l) => l.images.normal);

    expect(new Set(paths).size).toBe(4);
  });

  it('has no super troop', () => {
    expect(home().troops().ruinWitch().first()!.superTroop).toBeUndefined();
  });

  it('returns a HomeVillageTroops instance', () => {
    expect(home().troops().ruinWitch()).toBeInstanceOf(HomeVillageTroops);
  });
});

describe('troops() with ruinWitch', () => {
  it('byType("dark") includes ruin-witch', () => {
    expect(home().troops().byType('dark').find('ruin-witch')).toBeDefined();
  });

  it('withSuperTroop() does not include ruin-witch', () => {
    expect(home().troops().withSuperTroop().find('ruin-witch')).toBeUndefined();
  });

  it('byTownHall(16) includes ruin-witch', () => {
    expect(home().troops().byTownHall(16).find('ruin-witch')).toBeDefined();
  });
});
