import { home, HomeVillagePets } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Angry Jelly ──────────────────────────────────────────────────────────────

describe('angryJelly()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().angryJelly().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('angry-jelly');
    expect(p.name).toBe('Angry Jelly');
  });

  it('has 10 levels', () => {
    expect(home().pets().angryJelly().first()!.levels).toHaveLength(10);
  });

  it('is a pet in home base', () => {
    const p = home().pets().angryJelly().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().angryJelly().first()!;
    expect(p.targetType).toBe('both');
    expect(p.preferredTarget).toBe("Hero's Target");
    expect(p.attackType).toBe('Single Target');
    expect(p.movementSpeed).toBe(16);
    expect(p.attackSpeed).toBe(0.75);
    expect(p.range).toBe(1.5);
    expect(p.petHouseLevelRequired).toBe(10);
    expect(p.specialAbility).toBe('Brainwash');
  });

  it('has icon and normal images', () => {
    const p = home().pets().angryJelly().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: DPS 112, DPH 84, brainwash 25s, HP 1450, no upgrade cost, PH10, TH16', () => {
    const lvl = home().pets().angryJelly().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(112);
    expect(lvl.damagePerHit).toBe(84);
    expect(lvl.brainwashDuration).toBe(25);
    expect(lvl.hitpoints).toBe(1450);
    expect(lvl.petHouseLevelRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 148, DPH 111, brainwash 30s, HP 1750, 180,000 DE, 6d, PH10, TH16', () => {
    const lvl = home().pets().angryJelly().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(148);
    expect(lvl.damagePerHit).toBe(111);
    expect(lvl.brainwashDuration).toBe(30);
    expect(lvl.hitpoints).toBe(1750);
    expect(lvl.petHouseLevelRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.upgradeCost).toBe(180000);
    expect(lvl.upgradeTime).toEqual({ days: 6, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 193, DPH 144.75, brainwash 35s, HP 2125, 230,000 DE, 8d, PH10, TH16', () => {
    const lvl = home().pets().angryJelly().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(193);
    expect(lvl.damagePerHit).toBe(144.75);
    expect(lvl.brainwashDuration).toBe(35);
    expect(lvl.hitpoints).toBe(2125);
    expect(lvl.petHouseLevelRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.upgradeCost).toBe(230000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().angryJelly()).toBeInstanceOf(HomeVillagePets);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().pets().angryJelly()', () => home().pets().angryJelly());

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byPetHouse(10)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byPetHouse(10),
);

testFilterImmutability(
  'byTownHall(16)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byTownHall(16),
);
