import { home, HomeVillagePets } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Poison Lizard ────────────────────────────────────────────────────────────

describe('poisonLizard()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().poisonLizard().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('poison-lizard');
    expect(p.name).toBe('Poison Lizard');
  });

  it('has 15 levels', () => {
    expect(home().pets().poisonLizard().first()!.levels).toHaveLength(15);
  });

  it('is a pet in home base', () => {
    const p = home().pets().poisonLizard().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().poisonLizard().first()!;
    expect(p.targetType).toBe('both');
    expect(p.preferredTarget).toBe('Heroes and Troops');
    expect(p.attackType).toBe('Single Target');
    expect(p.movementSpeed).toBe(36);
    expect(p.attackSpeed).toBe(0.35);
    expect(p.range).toBe(4.5);
    expect(p.petHouseLevelRequired).toBe(7);
    expect(p.specialAbility).toBe('Bad Breath');
  });

  it('has icon and normal images', () => {
    const p = home().pets().poisonLizard().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: DPS 181, DPH 63.35, poison 80 DPS / 26% / 35%, HP 1400, PH7, TH15', () => {
    const lvl = home().pets().poisonLizard().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(181);
    expect(lvl.damagePerHit).toBe(63.35);
    expect(lvl.poisonMaxDps).toBe(80);
    expect(lvl.poisonSpeedDecreasePercent).toBe(26);
    expect(lvl.poisonAttackRateDecreasePercent).toBe(35);
    expect(lvl.hitpoints).toBe(1400);
    expect(lvl.petHouseLevelRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 225, DPH 78.75, poison 100 DPS / 34% / 45%, HP 1600, 100,000 DE, 2d 12h, PH7, TH15', () => {
    const lvl = home().pets().poisonLizard().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(225);
    expect(lvl.damagePerHit).toBe(78.75);
    expect(lvl.poisonMaxDps).toBe(100);
    expect(lvl.poisonSpeedDecreasePercent).toBe(34);
    expect(lvl.poisonAttackRateDecreasePercent).toBe(45);
    expect(lvl.hitpoints).toBe(1600);
    expect(lvl.petHouseLevelRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(100000);
    expect(lvl.upgradeTime).toEqual({ days: 2, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 280, DPH 98, poison 120 DPS / 38% / 50%, HP 2050, 150,000 DE, 5d, PH7, TH15', () => {
    const lvl = home().pets().poisonLizard().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(280);
    expect(lvl.damagePerHit).toBe(98);
    expect(lvl.poisonMaxDps).toBe(120);
    expect(lvl.poisonSpeedDecreasePercent).toBe(38);
    expect(lvl.poisonAttackRateDecreasePercent).toBe(50);
    expect(lvl.hitpoints).toBe(2050);
    expect(lvl.petHouseLevelRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(150000);
    expect(lvl.upgradeTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 11: DPS 291, DPH 101.85, poison 120 DPS / 38% / 50%, HP 2100, 180,000 DE, 6d, PH11, TH17', () => {
    const lvl = home().pets().poisonLizard().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.damagePerSecond).toBe(291);
    expect(lvl.damagePerHit).toBe(101.85);
    expect(lvl.poisonMaxDps).toBe(120);
    expect(lvl.poisonSpeedDecreasePercent).toBe(38);
    expect(lvl.poisonAttackRateDecreasePercent).toBe(50);
    expect(lvl.hitpoints).toBe(2100);
    expect(lvl.petHouseLevelRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.upgradeCost).toBe(180000);
    expect(lvl.upgradeTime).toEqual({ days: 6, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 15: DPS 335, DPH 117.25, poison 140 DPS / 42% / 55%, HP 2300, 260,000 DE, 8d, PH11, TH17', () => {
    const lvl = home().pets().poisonLizard().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.damagePerSecond).toBe(335);
    expect(lvl.damagePerHit).toBe(117.25);
    expect(lvl.poisonMaxDps).toBe(140);
    expect(lvl.poisonSpeedDecreasePercent).toBe(42);
    expect(lvl.poisonAttackRateDecreasePercent).toBe(55);
    expect(lvl.hitpoints).toBe(2300);
    expect(lvl.petHouseLevelRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.upgradeCost).toBe(260000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().poisonLizard()).toBeInstanceOf(HomeVillagePets);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().pets().poisonLizard()', () => home().pets().poisonLizard());

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byPetHouse(7)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byPetHouse(7),
);

testFilterImmutability(
  'byTownHall(15)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byTownHall(15),
);
