import { home, HomeVillageDefenses } from '@/modules/home';

describe('revengeTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().revengeTower().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('revenge-tower');
    expect(result.name).toBe('Revenge Tower');
  });

  it('has 2 levels', () => {
    expect(home().defenses().revengeTower().first()!.levels).toHaveLength(2);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().revengeTower().first()!.targetType).toBe('both');
  });

  it('size is 3x3', () => {
    expect(home().defenses().revengeTower().first()!.size).toBe('3x3');
  });

  it('has no gear-up', () => {
    expect(home().defenses().revengeTower().first()!.gearUp).toBeUndefined();
  });

  it('has specialAbility Tower Tantrum', () => {
    expect(home().defenses().revengeTower().first()!.specialAbility).toBe('Tower Tantrum');
  });

  it('base is home', () => {
    expect(home().defenses().revengeTower().first()!.base).toBe('home');
  });

  it('category is defense', () => {
    expect(home().defenses().revengeTower().first()!.category).toBe('defense');
  });
});

describe('revengeTower() modes', () => {
  it('has no normal mode', () => {
    expect(home().defenses().revengeTower().first()!.modes.normal).toBeUndefined();
  });

  it('has stage1 mode', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage1).toBeDefined();
  });

  it('stage1 range is 11', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage1!.range).toBe(11);
  });

  it('stage1 attackSpeed is 1.2s', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage1!.attackSpeed).toBe(1.2);
  });

  it('stage1 damageType is single', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage1!.damageType).toBe('single');
  });

  it('has stage2 mode', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage2).toBeDefined();
  });

  it('stage2 range is 11', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage2!.range).toBe(11);
  });

  it('stage2 attackSpeed is 0.6s', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage2!.attackSpeed).toBe(0.6);
  });

  it('stage2 damageType is ricochet', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage2!.damageType).toBe('ricochet');
  });

  it('stage2 chainRange is 2', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage2!.chainRange).toBe(2);
  });

  it('has stage3 mode', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage3).toBeDefined();
  });

  it('stage3 attackSpeed is 0.35s', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage3!.attackSpeed).toBe(0.35);
  });

  it('stage3 damageType is ricochet', () => {
    expect(home().defenses().revengeTower().first()!.modes.stage3!.damageType).toBe('ricochet');
  });
});

describe('revengeTower() levels', () => {
  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].hitpoints).toBe(5800);
  });

  it('level 1 buildCost is 430000 Dark Elixir', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].buildCost).toBe(430000);
    expect(home().defenses().revengeTower().first()!.levels[0].buildCostResource).toBe(
      'Dark Elixir',
    );
  });

  it('level 1 buildTime is 13d 5s', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].buildTime).toEqual({
      days: 13,
      hours: 0,
      minutes: 0,
      seconds: 5,
    });
  });

  it('level 1 xpGained is 1059', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].xpGained).toBe(1059);
  });

  it('level 1 townHallRequired is 18', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].townHallRequired).toBe(18);
  });

  it('level 1 stage1 dps is 375', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].stats.stage1!.dps).toBe(375);
  });

  it('level 1 stage1 damagePerShot is 450', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].stats.stage1!.damagePerShot).toBe(
      450,
    );
  });

  it('level 1 stage2 dps is 375', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].stats.stage2!.dps).toBe(375);
  });

  it('level 1 stage2 damagePerShot is 225', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].stats.stage2!.damagePerShot).toBe(
      225,
    );
  });

  it('level 1 stage2 secondaryChainDamagePerShot is 135', () => {
    expect(
      home().defenses().revengeTower().first()!.levels[0].stats.stage2!.secondaryChainDamagePerShot,
    ).toBe(135);
  });

  it('level 1 stage3 dps is 642', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].stats.stage3!.dps).toBe(642);
  });

  it('level 1 stage3 damagePerShot is 225', () => {
    expect(home().defenses().revengeTower().first()!.levels[0].stats.stage3!.damagePerShot).toBe(
      225,
    );
  });

  it('level 1 stage3 secondaryChainDamagePerShot is 135', () => {
    expect(
      home().defenses().revengeTower().first()!.levels[0].stats.stage3!.secondaryChainDamagePerShot,
    ).toBe(135);
  });

  it('level 1 stage3 tertiaryChainDamagePerShot is 81', () => {
    expect(
      home().defenses().revengeTower().first()!.levels[0].stats.stage3!.tertiaryChainDamagePerShot,
    ).toBe(81);
  });

  it('level 2 hitpoints is 6200', () => {
    expect(home().defenses().revengeTower().first()!.levels[1].hitpoints).toBe(6200);
  });

  it('level 2 buildCost is 460000 Dark Elixir', () => {
    expect(home().defenses().revengeTower().first()!.levels[1].buildCost).toBe(460000);
    expect(home().defenses().revengeTower().first()!.levels[1].buildCostResource).toBe(
      'Dark Elixir',
    );
  });

  it('level 2 buildTime is 14d', () => {
    expect(home().defenses().revengeTower().first()!.levels[1].buildTime).toEqual({
      days: 14,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 2 xpGained is 1099', () => {
    expect(home().defenses().revengeTower().first()!.levels[1].xpGained).toBe(1099);
  });

  it('level 2 stage1 dps is 416', () => {
    expect(home().defenses().revengeTower().first()!.levels[1].stats.stage1!.dps).toBe(416);
  });

  it('level 2 stage3 dps is 714', () => {
    expect(home().defenses().revengeTower().first()!.levels[1].stats.stage3!.dps).toBe(714);
  });

  it('level 2 stage3 tertiaryChainDamagePerShot is 90', () => {
    expect(
      home().defenses().revengeTower().first()!.levels[1].stats.stage3!.tertiaryChainDamagePerShot,
    ).toBe(90);
  });

  it('has no supercharge levels', () => {
    expect(
      home()
        .defenses()
        .revengeTower()
        .first()!
        .levels.every((l) => !l.supercharge),
    ).toBe(true);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().defenses().revengeTower().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('all levels have stage1, stage2, stage3 images', () => {
    for (const lvl of home().defenses().revengeTower().first()!.levels) {
      expect(lvl.images.stage1).toBeTruthy();
      expect(lvl.images.stage2).toBeTruthy();
      expect(lvl.images.stage3).toBeTruthy();
    }
  });
});

describe('revengeTower() availablePerTownHall', () => {
  it('only available at TH18 with count 1', () => {
    expect(home().defenses().revengeTower().first()!.availablePerTownHall).toHaveLength(1);
    const th18 = home().defenses().revengeTower().first()!.availablePerTownHall[0];
    expect(th18.townHallLevel).toBe(18);
    expect(th18.count).toBe(1);
  });

  it('not available below TH18', () => {
    const below = home()
      .defenses()
      .revengeTower()
      .first()!
      .availablePerTownHall.filter((a) => a.townHallLevel < 18);
    expect(below).toHaveLength(0);
  });
});

describe('revengeTower() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = home().defenses().findByName('Revenge Tower');
    expect(result).toBeDefined();
    expect(result!.id).toBe('revenge-tower');
  });

  it('homeDefenses().byBuilding("Revenge Tower") returns one result', () => {
    expect(home().defenses().byBuilding('Revenge Tower').count()).toBe(1);
  });

  it('homeDefenses().byTownHall(17) excludes Revenge Tower', () => {
    const names = home()
      .defenses()
      .byTownHall(17)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Revenge Tower');
  });

  it('homeDefenses().byTownHall(18) includes Revenge Tower', () => {
    const names = home()
      .defenses()
      .byTownHall(18)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Revenge Tower');
  });

  it('homeDefenses().hasGearUp() excludes Revenge Tower', () => {
    const names = home()
      .defenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Revenge Tower');
  });

  it('is a HomeVillageDefenses instance', () => {
    expect(home().defenses().byBuilding('Revenge Tower')).toBeInstanceOf(HomeVillageDefenses);
  });
});
