import { home, HomeVillagePets } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── L.A.S.S.I ────────────────────────────────────────────────────────────────

describe('lassi()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().lassi().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('lassi');
    expect(p.name).toBe('L.A.S.S.I');
  });

  it('has 15 levels', () => {
    expect(home().pets().lassi().first()!.levels).toHaveLength(15);
  });

  it('is a pet in home base', () => {
    const p = home().pets().lassi().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().lassi().first()!;
    expect(p.targetType).toBe('ground');
    expect(p.preferredTarget).toBe('Within 2.5 tiles of Hero');
    expect(p.attackType).toBe('Single Target');
    expect(p.movementSpeed).toBe(32);
    expect(p.attackSpeed).toBe(0.9);
    expect(p.range).toBe(0.6);
    expect(p.petHouseLevelRequired).toBe(1);
    expect(p.specialAbility).toBe('High Jumper');
  });

  it('has icon and normal images', () => {
    const p = home().pets().lassi().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: DPS 160, DPH 144, HP 2800, no upgrade cost, PH1, TH14', () => {
    const lvl = home().pets().lassi().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(160);
    expect(lvl.damagePerHit).toBe(144);
    expect(lvl.hitpoints).toBe(2800);
    expect(lvl.petHouseLevelRequired).toBe(1);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 200, DPH 180, HP 3200, 50,000 DE, 2d 12h, PH1, TH14', () => {
    const lvl = home().pets().lassi().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(200);
    expect(lvl.damagePerHit).toBe(180);
    expect(lvl.hitpoints).toBe(3200);
    expect(lvl.petHouseLevelRequired).toBe(1);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(50000);
    expect(lvl.upgradeTime).toEqual({ days: 2, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 260, DPH 234, HP 3700, 100,000 DE, 5d, PH1, TH14', () => {
    const lvl = home().pets().lassi().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(260);
    expect(lvl.damagePerHit).toBe(234);
    expect(lvl.hitpoints).toBe(3700);
    expect(lvl.petHouseLevelRequired).toBe(1);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(100000);
    expect(lvl.upgradeTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 11: DPS 290, DPH 261, HP 3850, 110,000 DE, 5d 12h, PH5, TH15', () => {
    const lvl = home().pets().lassi().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.damagePerSecond).toBe(290);
    expect(lvl.damagePerHit).toBe(261);
    expect(lvl.hitpoints).toBe(3850);
    expect(lvl.petHouseLevelRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(110000);
    expect(lvl.upgradeTime).toEqual({ days: 5, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 15: DPS 400, DPH 360, HP 4500, 150,000 DE, 7d 12h, PH5, TH15', () => {
    const lvl = home().pets().lassi().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.damagePerSecond).toBe(400);
    expect(lvl.damagePerHit).toBe(360);
    expect(lvl.hitpoints).toBe(4500);
    expect(lvl.petHouseLevelRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(150000);
    expect(lvl.upgradeTime).toEqual({ days: 7, hours: 12, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().lassi()).toBeInstanceOf(HomeVillagePets);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().pets().lassi()', () => home().pets().lassi());

// ─── pets() namespace ─────────────────────────────────────────────────────────

describe('pets() namespace', () => {
  it('has 9 pets', () => {
    expect(home().pets().count()).toBe(9);
  });

  it('byPetHouse(1) includes L.A.S.S.I', () => {
    expect(home().pets().byPetHouse(1).find('lassi')).toBeDefined();
  });

  it('byPetHouse(0) does not include L.A.S.S.I', () => {
    expect(home().pets().byPetHouse(0).find('lassi')).toBeUndefined();
  });

  it('byTownHall(14) includes L.A.S.S.I', () => {
    expect(home().pets().byTownHall(14).find('lassi')).toBeDefined();
  });

  it('byTownHall(13) does not include L.A.S.S.I', () => {
    expect(home().pets().byTownHall(13).find('lassi')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byPetHouse(1)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byPetHouse(1),
);

testFilterImmutability(
  'byTownHall(14)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byTownHall(14),
);
