import { home, HomeVillagePets } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('greedyRaven()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().greedyRaven().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('greedy-raven');
    expect(p.name).toBe('Greedy Raven');
  });

  it('has 10 levels', () => {
    expect(home().pets().greedyRaven().first()!.levels).toHaveLength(10);
  });

  it('is a pet in home base', () => {
    const p = home().pets().greedyRaven().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().greedyRaven().first()!;
    expect(p.targetType).toBe('both');
    expect(p.preferredTarget).toBe('Resources');
    expect(p.attackType).toBe('Single Target');
    expect(p.movementSpeed).toBe(28);
    expect(p.attackSpeed).toBe(0.42);
    expect(p.range).toBe(8);
    expect(p.petHouseLevelRequired).toBe(12);
    expect(p.specialAbility).toBe('Shine Sweep');
  });

  it('has icon and normal images', () => {
    const p = home().pets().greedyRaven().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: DPS 110, DPH 46.2, resourceDPS 550, HP 2150, no upgrade cost, PH12, TH18', () => {
    const lvl = home().pets().greedyRaven().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(110);
    expect(lvl.damagePerHit).toBe(46.2);
    expect(lvl.dpsOnResourceBuildings).toBe(550);
    expect(lvl.hitpoints).toBe(2150);
    expect(lvl.petHouseLevelRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 130, DPH 54.6, resourceDPS 650, HP 2750, 320,000 DE, 8d, PH12, TH18', () => {
    const lvl = home().pets().greedyRaven().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(130);
    expect(lvl.damagePerHit).toBe(54.6);
    expect(lvl.dpsOnResourceBuildings).toBe(650);
    expect(lvl.hitpoints).toBe(2750);
    expect(lvl.petHouseLevelRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.upgradeCost).toBe(320000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 155, DPH 65.1, resourceDPS 775, HP 3500, 420,000 DE, 8d, PH12, TH18', () => {
    const lvl = home().pets().greedyRaven().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(155);
    expect(lvl.damagePerHit).toBe(65.1);
    expect(lvl.dpsOnResourceBuildings).toBe(775);
    expect(lvl.hitpoints).toBe(3500);
    expect(lvl.petHouseLevelRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.upgradeCost).toBe(420000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().greedyRaven()).toBeInstanceOf(HomeVillagePets);
  });
});

testQueryBaseContract('home().pets().greedyRaven()', () => home().pets().greedyRaven());

testFilterImmutability(
  'byPetHouse(12)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byPetHouse(12),
);

testFilterImmutability(
  'byTownHall(18)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byTownHall(18),
);
