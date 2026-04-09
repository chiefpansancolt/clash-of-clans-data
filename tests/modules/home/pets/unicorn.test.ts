import { home, HomeVillagePets } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('unicorn()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().unicorn().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('unicorn');
    expect(p.name).toBe('Unicorn');
  });

  it('has 15 levels', () => {
    expect(home().pets().unicorn().first()!.levels).toHaveLength(15);
  });

  it('is a pet in home base', () => {
    const p = home().pets().unicorn().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().unicorn().first()!;
    expect(p.targetType).toBe('both');
    expect(p.preferredTarget).toBe('Hero');
    expect(p.attackType).toBe('Single Target');
    expect(p.movementSpeed).toBe(16);
    expect(p.attackSpeed).toBe(1);
    expect(p.range).toBe(2.5);
    expect(p.petHouseLevelRequired).toBe(4);
    expect(p.specialAbility).toBe('Personal Healer');
  });

  it('has icon and normal images', () => {
    const p = home().pets().unicorn().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: HPS 50, HPulse 50, HP 1400, no upgrade cost, PH4, TH14', () => {
    const lvl = home().pets().unicorn().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.healingPerSecond).toBe(50);
    expect(lvl.healingPerPulse).toBe(50);
    expect(lvl.hitpoints).toBe(1400);
    expect(lvl.petHouseLevelRequired).toBe(4);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: HPS 60, HPulse 60, HP 1600, 95,000 DE, 4d, PH4, TH14', () => {
    const lvl = home().pets().unicorn().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.healingPerSecond).toBe(60);
    expect(lvl.healingPerPulse).toBe(60);
    expect(lvl.hitpoints).toBe(1600);
    expect(lvl.petHouseLevelRequired).toBe(4);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(95000);
    expect(lvl.upgradeTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: HPS 70, HPulse 70, HP 1950, 170,000 DE, 6d 12h, PH4, TH14', () => {
    const lvl = home().pets().unicorn().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.healingPerSecond).toBe(70);
    expect(lvl.healingPerPulse).toBe(70);
    expect(lvl.hitpoints).toBe(1950);
    expect(lvl.petHouseLevelRequired).toBe(4);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(170000);
    expect(lvl.upgradeTime).toEqual({ days: 6, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 11: HPS 71, HPulse 71, HP 2025, 200,000 DE, 7d, PH11, TH17', () => {
    const lvl = home().pets().unicorn().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.healingPerSecond).toBe(71);
    expect(lvl.healingPerPulse).toBe(71);
    expect(lvl.hitpoints).toBe(2025);
    expect(lvl.petHouseLevelRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.upgradeCost).toBe(200000);
    expect(lvl.upgradeTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 15: HPS 75, HPulse 75, HP 2325, 320,000 DE, 8d, PH11, TH17', () => {
    const lvl = home().pets().unicorn().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.healingPerSecond).toBe(75);
    expect(lvl.healingPerPulse).toBe(75);
    expect(lvl.hitpoints).toBe(2325);
    expect(lvl.petHouseLevelRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.upgradeCost).toBe(320000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('has no damagePerSecond or damagePerHit', () => {
    const lvl = home().pets().unicorn().first()!.levels[0];
    expect(lvl.damagePerSecond).toBeUndefined();
    expect(lvl.damagePerHit).toBeUndefined();
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().unicorn()).toBeInstanceOf(HomeVillagePets);
  });
});

testQueryBaseContract('home().pets().unicorn()', () => home().pets().unicorn());

testFilterImmutability(
  'byPetHouse(4)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byPetHouse(4),
);

testFilterImmutability(
  'byTownHall(14)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byTownHall(14),
);
