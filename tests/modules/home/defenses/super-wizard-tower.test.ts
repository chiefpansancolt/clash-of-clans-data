import { home, HomeVillageDefenses } from '@/modules/home';

describe('superWizardTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = home().defenses().superWizardTower().first()!;
    expect(result).toBeDefined();
    expect(result.id).toBe('super-wizard-tower');
    expect(result.name).toBe('Super Wizard Tower');
  });

  it('has 4 levels', () => {
    expect(home().defenses().superWizardTower().first()!.levels).toHaveLength(4);
  });

  it('targets both ground and air', () => {
    expect(home().defenses().superWizardTower().first()!.targetType).toBe('both');
  });

  it('size is 3x3', () => {
    expect(home().defenses().superWizardTower().first()!.size).toBe('3x3');
  });

  it('has no gear-up', () => {
    expect(home().defenses().superWizardTower().first()!.gearUp).toBeUndefined();
  });

  it('base is home', () => {
    expect(home().defenses().superWizardTower().first()!.base).toBe('home');
  });

  it('category is defense', () => {
    expect(home().defenses().superWizardTower().first()!.category).toBe('defense');
  });
});

describe('superWizardTower() modes', () => {
  it('has a normal mode', () => {
    expect(home().defenses().superWizardTower().first()!.modes.normal).toBeDefined();
  });

  it('normal mode range is 8', () => {
    expect(home().defenses().superWizardTower().first()!.modes.normal!.range).toBe(8);
  });

  it('normal mode attackSpeed is 1.3s', () => {
    expect(home().defenses().superWizardTower().first()!.modes.normal!.attackSpeed).toBe(1.3);
  });

  it('normal mode damageType is chain', () => {
    expect(home().defenses().superWizardTower().first()!.modes.normal!.damageType).toBe('chain');
  });

  it('normal mode maxChainTargets is 15', () => {
    expect(home().defenses().superWizardTower().first()!.modes.normal!.maxChainTargets).toBe(15);
  });
});

describe('superWizardTower() levels', () => {
  it('level 1 has correct hitpoints', () => {
    expect(home().defenses().superWizardTower().first()!.levels[0].hitpoints).toBe(6000);
  });

  it('level 1 dps is 290', () => {
    expect(home().defenses().superWizardTower().first()!.levels[0].stats.normal.dps).toBe(290);
  });

  it('level 1 damagePerShot is 377', () => {
    expect(home().defenses().superWizardTower().first()!.levels[0].stats.normal.damagePerShot).toBe(
      377,
    );
  });

  it('level 1 secondaryChainDamagePerShot is 150.8', () => {
    expect(
      home().defenses().superWizardTower().first()!.levels[0].stats.normal
        .secondaryChainDamagePerShot,
    ).toBe(150.8);
  });

  it('level 1 buildCost is 29000000 Gold', () => {
    expect(home().defenses().superWizardTower().first()!.levels[0].buildCost).toBe(29000000);
    expect(home().defenses().superWizardTower().first()!.levels[0].buildCostResource).toBe('Gold');
  });

  it('level 1 buildTime is 13d', () => {
    expect(home().defenses().superWizardTower().first()!.levels[0].buildTime).toEqual({
      days: 13,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 1059', () => {
    expect(home().defenses().superWizardTower().first()!.levels[0].xpGained).toBe(1059);
  });

  it('level 1 townHallRequired is 18', () => {
    expect(home().defenses().superWizardTower().first()!.levels[0].townHallRequired).toBe(18);
  });

  it('level 1 is not a supercharge', () => {
    expect(home().defenses().superWizardTower().first()!.levels[0].supercharge).toBeFalsy();
  });

  it('level 2 hitpoints is 6300', () => {
    expect(home().defenses().superWizardTower().first()!.levels[1].hitpoints).toBe(6300);
  });

  it('level 2 dps is 320', () => {
    expect(home().defenses().superWizardTower().first()!.levels[1].stats.normal.dps).toBe(320);
  });

  it('level 2 damagePerShot is 416', () => {
    expect(home().defenses().superWizardTower().first()!.levels[1].stats.normal.damagePerShot).toBe(
      416,
    );
  });

  it('level 2 secondaryChainDamagePerShot is 166.4', () => {
    expect(
      home().defenses().superWizardTower().first()!.levels[1].stats.normal
        .secondaryChainDamagePerShot,
    ).toBe(166.4);
  });

  it('level 2 buildCost is 30000000 Gold', () => {
    expect(home().defenses().superWizardTower().first()!.levels[1].buildCost).toBe(30000000);
  });

  it('level 2 buildTime is 14d', () => {
    expect(home().defenses().superWizardTower().first()!.levels[1].buildTime).toEqual({
      days: 14,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 2 xpGained is 1099', () => {
    expect(home().defenses().superWizardTower().first()!.levels[1].xpGained).toBe(1099);
  });

  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(home().defenses().superWizardTower().first()!.levels[2].supercharge).toBe(true);
    expect(home().defenses().superWizardTower().first()!.levels[2].level).toBe(1);
    expect(home().defenses().superWizardTower().first()!.levels[3].supercharge).toBe(true);
    expect(home().defenses().superWizardTower().first()!.levels[3].level).toBe(2);
  });

  it('supercharge 1 dps is 327', () => {
    expect(home().defenses().superWizardTower().first()!.levels[2].stats.normal.dps).toBe(327);
  });

  it('supercharge 1 damagePerShot is 425.1', () => {
    expect(home().defenses().superWizardTower().first()!.levels[2].stats.normal.damagePerShot).toBe(
      425.1,
    );
  });

  it('supercharge 1 secondaryChainDamagePerShot is 170.04', () => {
    expect(
      home().defenses().superWizardTower().first()!.levels[2].stats.normal
        .secondaryChainDamagePerShot,
    ).toBe(170.04);
  });

  it('supercharge 1 hp matches regular level 2', () => {
    expect(home().defenses().superWizardTower().first()!.levels[2].hitpoints).toBe(6300);
  });

  it('supercharge 2 hp increased to 6450', () => {
    expect(home().defenses().superWizardTower().first()!.levels[3].hitpoints).toBe(6450);
  });

  it('supercharge levels require TH18', () => {
    expect(home().defenses().superWizardTower().first()!.levels[2].townHallRequired).toBe(18);
    expect(home().defenses().superWizardTower().first()!.levels[3].townHallRequired).toBe(18);
  });

  it('all levels have a normal image', () => {
    for (const lvl of home().defenses().superWizardTower().first()!.levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('superWizardTower() availablePerTownHall', () => {
  it('only available at TH18 with count 2', () => {
    expect(home().defenses().superWizardTower().first()!.availablePerTownHall).toHaveLength(1);
    const th18 = home().defenses().superWizardTower().first()!.availablePerTownHall[0];
    expect(th18.townHallLevel).toBe(18);
    expect(th18.count).toBe(2);
  });

  it('not available below TH18', () => {
    const below = home()
      .defenses()
      .superWizardTower()
      .first()!
      .availablePerTownHall.filter((a) => a.townHallLevel < 18);
    expect(below).toHaveLength(0);
  });
});

describe('superWizardTower() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = home().defenses().findByName('Super Wizard Tower');
    expect(result).toBeDefined();
    expect(result!.id).toBe('super-wizard-tower');
  });

  it('homeDefenses().byBuilding("Super Wizard Tower") returns one result', () => {
    expect(home().defenses().byBuilding('Super Wizard Tower').count()).toBe(1);
  });

  it('homeDefenses().byTownHall(17) excludes Super Wizard Tower', () => {
    const names = home()
      .defenses()
      .byTownHall(17)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Super Wizard Tower');
  });

  it('homeDefenses().byTownHall(18) includes Super Wizard Tower', () => {
    const names = home()
      .defenses()
      .byTownHall(18)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Super Wizard Tower');
  });

  it('homeDefenses().byDamageType("chain") includes Super Wizard Tower', () => {
    const names = home()
      .defenses()
      .byDamageType('chain')
      .get()
      .map((d) => d.name);
    expect(names).toContain('Super Wizard Tower');
  });

  it('homeDefenses().hasGearUp() excludes Super Wizard Tower', () => {
    const names = home()
      .defenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Super Wizard Tower');
  });

  it('is a HomeVillageDefenses instance', () => {
    expect(home().defenses().byBuilding('Super Wizard Tower')).toBeInstanceOf(HomeVillageDefenses);
  });
});
