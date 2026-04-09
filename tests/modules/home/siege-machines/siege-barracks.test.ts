import { home, HomeVillageSiegeMachines } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Siege Barracks ───────────────────────────────────────────────────────────

describe('siegeBarracks()', () => {
  it('returns a SiegeMachine', () => {
    const m = home().siegeMachines().siegeBarracks().first()!;
    expect(m).toBeDefined();
    expect(m.id).toBe('siege-barracks');
    expect(m.name).toBe('Siege Barracks');
  });

  it('has 5 levels', () => {
    expect(home().siegeMachines().siegeBarracks().first()!.levels).toHaveLength(5);
  });

  it('is a siege-machine in home base', () => {
    const m = home().siegeMachines().siegeBarracks().first()!;
    expect(m.category).toBe('siege-machine');
    expect(m.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const m = home().siegeMachines().siegeBarracks().first()!;
    expect(m.housingSpace).toBe(1);
    expect(m.workshopLevelRequired).toBe(4);
    expect(m.movementSpeed).toBe(0);
    expect(m.lifetime).toBe(30);
    expect(m.preferredTarget).toBeUndefined();
    expect(m.attackType).toBeUndefined();
    expect(m.attackSpeed).toBeUndefined();
  });

  it('has an icon image', () => {
    expect(home().siegeMachines().siegeBarracks().first()!.images.icon).toBeTruthy();
  });

  it('level 1: 1 pekka, 6 wizards, HP 3300, no research, TH13', () => {
    const lvl = home().siegeMachines().siegeBarracks().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.pekkasSpawned).toBe(1);
    expect(lvl.wizardsSpawned).toBe(6);
    expect(lvl.hitpoints).toBe(3300);
    expect(lvl.damagePerSecond).toBeUndefined();
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Gold');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 3: 1 pekka, 10 wizards, HP 4100, Lab 10, TH13, 5,000,000 Gold, 4d', () => {
    const lvl = home().siegeMachines().siegeBarracks().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.pekkasSpawned).toBe(1);
    expect(lvl.wizardsSpawned).toBe(10);
    expect(lvl.hitpoints).toBe(4100);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(5000000);
    expect(lvl.researchTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: 2 pekkas, 11 wizards, HP 4800, Lab 14, TH16, 18,000,000 Gold, 12d', () => {
    const lvl = home().siegeMachines().siegeBarracks().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.pekkasSpawned).toBe(2);
    expect(lvl.wizardsSpawned).toBe(11);
    expect(lvl.hitpoints).toBe(4800);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(18000000);
    expect(lvl.researchTime).toEqual({ days: 12, hours: 0, minutes: 0, seconds: 0 });
  });

  it('all levels have normal images', () => {
    const levels = home().siegeMachines().siegeBarracks().first()!.levels;
    for (const lvl of levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('returns a HomeVillageSiegeMachines instance', () => {
    expect(home().siegeMachines().siegeBarracks()).toBeInstanceOf(HomeVillageSiegeMachines);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().siegeMachines().siegeBarracks()', () =>
  home().siegeMachines().siegeBarracks(),
);

// ─── siegeMachines() namespace ────────────────────────────────────────────────

describe('siegeMachines() namespace', () => {
  it('has 5 siege machines', () => {
    expect(home().siegeMachines().count()).toBe(5);
  });

  it('byWorkshop(4) includes siege barracks', () => {
    expect(home().siegeMachines().byWorkshop(4).find('siege-barracks')).toBeDefined();
  });

  it('byWorkshop(3) does not include siege barracks', () => {
    expect(home().siegeMachines().byWorkshop(3).find('siege-barracks')).toBeUndefined();
  });

  it('byTownHall(13) includes siege barracks', () => {
    expect(home().siegeMachines().byTownHall(13).find('siege-barracks')).toBeDefined();
  });

  it('byTownHall(12) does not include siege barracks', () => {
    expect(home().siegeMachines().byTownHall(12).find('siege-barracks')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byWorkshop(4)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byWorkshop(4),
);

testFilterImmutability(
  'byTownHall(13)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byTownHall(13),
);
