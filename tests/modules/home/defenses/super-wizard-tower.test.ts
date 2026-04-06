import { HomeDefenseQuery, homeDefenses } from '@/modules/home/defenses';
import { superWizardTower } from '@/modules/home/defenses/super-wizard-tower';
import { testFilterImmutability } from '../../../helpers';

describe('superWizardTower()', () => {
  it('returns a HomeDefense object', () => {
    const result = superWizardTower();
    expect(result).toBeDefined();
    expect(result.id).toBe('super-wizard-tower');
    expect(result.name).toBe('Super Wizard Tower');
  });

  it('has 4 levels', () => {
    expect(superWizardTower().levels).toHaveLength(4);
  });

  it('targets both ground and air', () => {
    expect(superWizardTower().targetType).toBe('both');
  });

  it('size is 3x3', () => {
    expect(superWizardTower().size).toBe('3x3');
  });

  it('has no gear-up', () => {
    expect(superWizardTower().gearUp).toBeUndefined();
  });

  it('base is home', () => {
    expect(superWizardTower().base).toBe('home');
  });

  it('category is defense', () => {
    expect(superWizardTower().category).toBe('defense');
  });
});

describe('superWizardTower() modes', () => {
  it('has a normal mode', () => {
    expect(superWizardTower().modes.normal).toBeDefined();
  });

  it('normal mode range is 8', () => {
    expect(superWizardTower().modes.normal!.range).toBe(8);
  });

  it('normal mode attackSpeed is 1.3s', () => {
    expect(superWizardTower().modes.normal!.attackSpeed).toBe(1.3);
  });

  it('normal mode damageType is chain', () => {
    expect(superWizardTower().modes.normal!.damageType).toBe('chain');
  });

  it('normal mode maxChainTargets is 15', () => {
    expect(superWizardTower().modes.normal!.maxChainTargets).toBe(15);
  });
});

describe('superWizardTower() levels', () => {
  it('level 1 has correct hitpoints', () => {
    expect(superWizardTower().levels[0].hitpoints).toBe(6000);
  });

  it('level 1 dps is 290', () => {
    expect(superWizardTower().levels[0].stats.normal.dps).toBe(290);
  });

  it('level 1 damagePerShot is 377', () => {
    expect(superWizardTower().levels[0].stats.normal.damagePerShot).toBe(377);
  });

  it('level 1 secondaryChainDamagePerShot is 150.8', () => {
    expect(superWizardTower().levels[0].stats.normal.secondaryChainDamagePerShot).toBe(150.8);
  });

  it('level 1 buildCost is 29000000 Gold', () => {
    expect(superWizardTower().levels[0].buildCost).toBe(29000000);
    expect(superWizardTower().levels[0].buildCostResource).toBe('Gold');
  });

  it('level 1 buildTime is 13d', () => {
    expect(superWizardTower().levels[0].buildTime).toEqual({
      days: 13,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 1 xpGained is 1059', () => {
    expect(superWizardTower().levels[0].xpGained).toBe(1059);
  });

  it('level 1 townHallRequired is 18', () => {
    expect(superWizardTower().levels[0].townHallRequired).toBe(18);
  });

  it('level 1 is not a supercharge', () => {
    expect(superWizardTower().levels[0].supercharge).toBeFalsy();
  });

  it('level 2 hitpoints is 6300', () => {
    expect(superWizardTower().levels[1].hitpoints).toBe(6300);
  });

  it('level 2 dps is 320', () => {
    expect(superWizardTower().levels[1].stats.normal.dps).toBe(320);
  });

  it('level 2 damagePerShot is 416', () => {
    expect(superWizardTower().levels[1].stats.normal.damagePerShot).toBe(416);
  });

  it('level 2 secondaryChainDamagePerShot is 166.4', () => {
    expect(superWizardTower().levels[1].stats.normal.secondaryChainDamagePerShot).toBe(166.4);
  });

  it('level 2 buildCost is 30000000 Gold', () => {
    expect(superWizardTower().levels[1].buildCost).toBe(30000000);
  });

  it('level 2 buildTime is 14d', () => {
    expect(superWizardTower().levels[1].buildTime).toEqual({
      days: 14,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 2 xpGained is 1099', () => {
    expect(superWizardTower().levels[1].xpGained).toBe(1099);
  });

  it('supercharge 1 and 2 are supercharge levels', () => {
    expect(superWizardTower().levels[2].supercharge).toBe(true);
    expect(superWizardTower().levels[2].level).toBe(1);
    expect(superWizardTower().levels[3].supercharge).toBe(true);
    expect(superWizardTower().levels[3].level).toBe(2);
  });

  it('supercharge 1 dps is 327', () => {
    expect(superWizardTower().levels[2].stats.normal.dps).toBe(327);
  });

  it('supercharge 1 damagePerShot is 425.1', () => {
    expect(superWizardTower().levels[2].stats.normal.damagePerShot).toBe(425.1);
  });

  it('supercharge 1 secondaryChainDamagePerShot is 170.04', () => {
    expect(superWizardTower().levels[2].stats.normal.secondaryChainDamagePerShot).toBe(170.04);
  });

  it('supercharge 1 hp matches regular level 2', () => {
    expect(superWizardTower().levels[2].hitpoints).toBe(6300);
  });

  it('supercharge 2 hp increased to 6450', () => {
    expect(superWizardTower().levels[3].hitpoints).toBe(6450);
  });

  it('supercharge levels require TH18', () => {
    expect(superWizardTower().levels[2].townHallRequired).toBe(18);
    expect(superWizardTower().levels[3].townHallRequired).toBe(18);
  });

  it('all levels have a normal image', () => {
    for (const lvl of superWizardTower().levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });
});

describe('superWizardTower() availablePerTownHall', () => {
  it('only available at TH18 with count 2', () => {
    expect(superWizardTower().availablePerTownHall).toHaveLength(1);
    const th18 = superWizardTower().availablePerTownHall[0];
    expect(th18.townHallLevel).toBe(18);
    expect(th18.count).toBe(2);
  });

  it('not available below TH18', () => {
    const below = superWizardTower().availablePerTownHall.filter((a) => a.townHallLevel < 18);
    expect(below).toHaveLength(0);
  });
});

describe('superWizardTower() integration with homeDefenses()', () => {
  it('is included in homeDefenses()', () => {
    const result = homeDefenses().findByName('Super Wizard Tower');
    expect(result).toBeDefined();
    expect(result!.id).toBe('super-wizard-tower');
  });

  it('homeDefenses().byBuilding("Super Wizard Tower") returns one result', () => {
    expect(homeDefenses().byBuilding('Super Wizard Tower').count()).toBe(1);
  });

  it('homeDefenses().byTownHall(17) excludes Super Wizard Tower', () => {
    const names = homeDefenses()
      .byTownHall(17)
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Super Wizard Tower');
  });

  it('homeDefenses().byTownHall(18) includes Super Wizard Tower', () => {
    const names = homeDefenses()
      .byTownHall(18)
      .get()
      .map((d) => d.name);
    expect(names).toContain('Super Wizard Tower');
  });

  it('homeDefenses().byDamageType("chain") includes Super Wizard Tower', () => {
    const names = homeDefenses()
      .byDamageType('chain')
      .get()
      .map((d) => d.name);
    expect(names).toContain('Super Wizard Tower');
  });

  it('homeDefenses().hasGearUp() excludes Super Wizard Tower', () => {
    const names = homeDefenses()
      .hasGearUp()
      .get()
      .map((d) => d.name);
    expect(names).not.toContain('Super Wizard Tower');
  });

  it('is a HomeDefenseQuery instance', () => {
    expect(homeDefenses().byBuilding('Super Wizard Tower')).toBeInstanceOf(HomeDefenseQuery);
  });

  testFilterImmutability(
    'homeDefenses filter immutability',
    () => homeDefenses(),
    (q) => (q as HomeDefenseQuery).byBuilding('Super Wizard Tower'),
  );
});
