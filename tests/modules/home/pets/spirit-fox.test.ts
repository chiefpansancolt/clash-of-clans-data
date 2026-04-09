import { home, HomeVillagePets } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('spiritFox()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().spiritFox().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('spirit-fox');
    expect(p.name).toBe('Spirit Fox');
  });

  it('has 10 levels', () => {
    expect(home().pets().spiritFox().first()!.levels).toHaveLength(10);
  });

  it('is a pet in home base', () => {
    const p = home().pets().spiritFox().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().spiritFox().first()!;
    expect(p.targetType).toBe('ground');
    expect(p.preferredTarget).toBe('Within 4.5 tiles of Hero');
    expect(p.attackType).toBe('Single Target');
    expect(p.movementSpeed).toBe(24);
    expect(p.attackSpeed).toBe(1.6);
    expect(p.range).toBe(2.5);
    expect(p.petHouseLevelRequired).toBe(9);
    expect(p.specialAbility).toBe('Spirit Walk');
  });

  it('has icon and normal images', () => {
    const p = home().pets().spiritFox().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: DPS 108, DPH 172.8, invisibility 3s, HP 1900, no upgrade cost, PH9, TH16', () => {
    const lvl = home().pets().spiritFox().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(108);
    expect(lvl.damagePerHit).toBe(172.8);
    expect(lvl.invisibilityDuration).toBe(3);
    expect(lvl.hitpoints).toBe(1900);
    expect(lvl.petHouseLevelRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 140, DPH 224, invisibility 3.5s, HP 2300, 180,000 DE, 5d 12h, PH9, TH16', () => {
    const lvl = home().pets().spiritFox().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(140);
    expect(lvl.damagePerHit).toBe(224);
    expect(lvl.invisibilityDuration).toBe(3.5);
    expect(lvl.hitpoints).toBe(2300);
    expect(lvl.petHouseLevelRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.upgradeCost).toBe(180000);
    expect(lvl.upgradeTime).toEqual({ days: 5, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 180, DPH 288, invisibility 4s, HP 2800, 230,000 DE, 8d, PH9, TH16', () => {
    const lvl = home().pets().spiritFox().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(180);
    expect(lvl.damagePerHit).toBe(288);
    expect(lvl.invisibilityDuration).toBe(4);
    expect(lvl.hitpoints).toBe(2800);
    expect(lvl.petHouseLevelRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.upgradeCost).toBe(230000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().spiritFox()).toBeInstanceOf(HomeVillagePets);
  });
});

testQueryBaseContract('home().pets().spiritFox()', () => home().pets().spiritFox());

testFilterImmutability(
  'byPetHouse(9)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byPetHouse(9),
);

testFilterImmutability(
  'byTownHall(16)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byTownHall(16),
);
