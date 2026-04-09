import { home, HomeVillageSiegeMachines } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('troopLauncher()', () => {
  it('returns a SiegeMachine', () => {
    const m = home().siegeMachines().troopLauncher().first()!;
    expect(m).toBeDefined();
    expect(m.id).toBe('troop-launcher');
    expect(m.name).toBe('Troop Launcher');
  });

  it('has 4 levels', () => {
    expect(home().siegeMachines().troopLauncher().first()!.levels).toHaveLength(4);
  });

  it('is a siege-machine in home base', () => {
    const m = home().siegeMachines().troopLauncher().first()!;
    expect(m.category).toBe('siege-machine');
    expect(m.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const m = home().siegeMachines().troopLauncher().first()!;
    expect(m.housingSpace).toBe(1);
    expect(m.workshopLevelRequired).toBe(8);
    expect(m.movementSpeed).toBe(0);
    expect(m.attackSpeed).toBe(6);
    expect(m.preferredTarget).toBeUndefined();
    expect(m.attackType).toBeUndefined();
    expect(m.lifetime).toBeUndefined();
    expect(m.hpDecayPerSecond).toBeUndefined();
  });

  it('has an icon image', () => {
    expect(home().siegeMachines().troopLauncher().first()!.images.icon).toBeTruthy();
  });

  it('level 1: 5 barrels, troopLevel 9, barbs 2, archers 3, giants 1, wallBreakers 1, HP 2000, lifetime 80s, no research, TH17', () => {
    const lvl = home().siegeMachines().troopLauncher().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.barrelCount).toBe(5);
    expect(lvl.troopLevel).toBe(9);
    expect(lvl.troopsSpawnedPerBarrel).toEqual({
      barbarians: 2,
      archers: 3,
      giants: 1,
      wallBreakers: 1,
    });
    expect(lvl.lifetime).toBe(80);
    expect(lvl.hitpoints).toBe(2000);
    expect(lvl.damagePerSecond).toBeUndefined();
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Gold');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 3: 6 barrels, troopLevel 11, archers 4, HP 2400, lifetime 96s, Lab 14, TH17, 10,000,000 Gold, 9d', () => {
    const lvl = home().siegeMachines().troopLauncher().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.barrelCount).toBe(6);
    expect(lvl.troopLevel).toBe(11);
    expect(lvl.troopsSpawnedPerBarrel).toEqual({
      barbarians: 2,
      archers: 4,
      giants: 1,
      wallBreakers: 2,
    });
    expect(lvl.lifetime).toBe(96);
    expect(lvl.hitpoints).toBe(2400);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(10000000);
    expect(lvl.researchTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4: 7 barrels, troopLevel 12, HP 2600, lifetime 104s, Lab 15, TH17, 17,000,000 Gold, 9d', () => {
    const lvl = home().siegeMachines().troopLauncher().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.barrelCount).toBe(7);
    expect(lvl.troopLevel).toBe(12);
    expect(lvl.troopsSpawnedPerBarrel).toEqual({
      barbarians: 2,
      archers: 4,
      giants: 1,
      wallBreakers: 2,
    });
    expect(lvl.lifetime).toBe(104);
    expect(lvl.hitpoints).toBe(2600);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(17000000);
    expect(lvl.researchTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
  });

  it('all levels have normal images', () => {
    const levels = home().siegeMachines().troopLauncher().first()!.levels;
    for (const lvl of levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('returns a HomeVillageSiegeMachines instance', () => {
    expect(home().siegeMachines().troopLauncher()).toBeInstanceOf(HomeVillageSiegeMachines);
  });
});

testQueryBaseContract('home().siegeMachines().troopLauncher()', () =>
  home().siegeMachines().troopLauncher(),
);

describe('siegeMachines() namespace', () => {
  it('has 8 siege machines', () => {
    expect(home().siegeMachines().count()).toBe(8);
  });

  it('byWorkshop(8) includes troop launcher', () => {
    expect(home().siegeMachines().byWorkshop(8).find('troop-launcher')).toBeDefined();
  });

  it('byWorkshop(7) does not include troop launcher', () => {
    expect(home().siegeMachines().byWorkshop(7).find('troop-launcher')).toBeUndefined();
  });

  it('byTownHall(17) includes troop launcher', () => {
    expect(home().siegeMachines().byTownHall(17).find('troop-launcher')).toBeDefined();
  });

  it('byTownHall(16) does not include troop launcher', () => {
    expect(home().siegeMachines().byTownHall(16).find('troop-launcher')).toBeUndefined();
  });
});

testFilterImmutability(
  'byWorkshop(8)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byWorkshop(8),
);

testFilterImmutability(
  'byTownHall(17)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byTownHall(17),
);
