import { home, HomeVillagePets } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Frosty ───────────────────────────────────────────────────────────────────

describe('frosty()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().frosty().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('frosty');
    expect(p.name).toBe('Frosty');
  });

  it('has 15 levels', () => {
    expect(home().pets().frosty().first()!.levels).toHaveLength(15);
  });

  it('is a pet in home base', () => {
    const p = home().pets().frosty().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().frosty().first()!;
    expect(p.targetType).toBe('both');
    expect(p.preferredTarget).toBe('Within 4.5 tiles of Hero');
    expect(p.attackType).toBe('Single Target');
    expect(p.movementSpeed).toBe(24);
    expect(p.attackSpeed).toBe(1.2);
    expect(p.range).toBe(3.5);
    expect(p.petHouseLevelRequired).toBe(5);
    expect(p.specialAbility).toBe('Freezy Friends');
    expect(p.summonCooldown).toBe(8);
  });

  it('has icon and normal images', () => {
    const p = home().pets().frosty().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: DPS 94, DPH 112.8, 1 frostmite/summon, max 4, HP 2350, PH5, TH15', () => {
    const lvl = home().pets().frosty().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(94);
    expect(lvl.damagePerHit).toBe(112.8);
    expect(lvl.frostmitesPerSummon).toBe(1);
    expect(lvl.maxFrostmites).toBe(4);
    expect(lvl.hitpoints).toBe(2350);
    expect(lvl.petHouseLevelRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 110, DPH 132, 2 frostmites/summon, max 8, HP 2800, 115,000 DE, 4d, PH5, TH15', () => {
    const lvl = home().pets().frosty().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(110);
    expect(lvl.damagePerHit).toBe(132);
    expect(lvl.frostmitesPerSummon).toBe(2);
    expect(lvl.maxFrostmites).toBe(8);
    expect(lvl.hitpoints).toBe(2800);
    expect(lvl.petHouseLevelRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(115000);
    expect(lvl.upgradeTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 130, DPH 156, 2 frostmites/summon, max 10, HP 3300, 180,000 DE, 6d 12h, PH5, TH15', () => {
    const lvl = home().pets().frosty().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(130);
    expect(lvl.damagePerHit).toBe(156);
    expect(lvl.frostmitesPerSummon).toBe(2);
    expect(lvl.maxFrostmites).toBe(10);
    expect(lvl.hitpoints).toBe(3300);
    expect(lvl.petHouseLevelRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(180000);
    expect(lvl.upgradeTime).toEqual({ days: 6, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 11: DPS 134, DPH 160.8, 2 frostmites/summon, max 10, HP 3400, 200,000 DE, 7d, PH11, TH17', () => {
    const lvl = home().pets().frosty().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.damagePerSecond).toBe(134);
    expect(lvl.damagePerHit).toBe(160.8);
    expect(lvl.frostmitesPerSummon).toBe(2);
    expect(lvl.maxFrostmites).toBe(10);
    expect(lvl.hitpoints).toBe(3400);
    expect(lvl.petHouseLevelRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.upgradeCost).toBe(200000);
    expect(lvl.upgradeTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 15: DPS 150, DPH 180, 3 frostmites/summon, max 12, HP 3800, 320,000 DE, 8d, PH11, TH17', () => {
    const lvl = home().pets().frosty().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.damagePerSecond).toBe(150);
    expect(lvl.damagePerHit).toBe(180);
    expect(lvl.frostmitesPerSummon).toBe(3);
    expect(lvl.maxFrostmites).toBe(12);
    expect(lvl.hitpoints).toBe(3800);
    expect(lvl.petHouseLevelRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.upgradeCost).toBe(320000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().frosty()).toBeInstanceOf(HomeVillagePets);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().pets().frosty()', () => home().pets().frosty());

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byPetHouse(5)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byPetHouse(5),
);

testFilterImmutability(
  'byTownHall(15)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byTownHall(15),
);
