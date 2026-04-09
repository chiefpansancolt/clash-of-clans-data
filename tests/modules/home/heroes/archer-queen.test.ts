import { home, HomeVillageHeroes } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Archer Queen ─────────────────────────────────────────────────────────────

describe('archerQueen()', () => {
  it('returns a HomeHero', () => {
    const h = home().heroes().archerQueen().first()!;
    expect(h).toBeDefined();
    expect(h.id).toBe('archer-queen');
    expect(h.name).toBe('Archer Queen');
  });

  it('has 105 levels', () => {
    expect(home().heroes().archerQueen().first()!.levels).toHaveLength(105);
  });

  it('is a hero in home base', () => {
    const h = home().heroes().archerQueen().first()!;
    expect(h.category).toBe('hero');
    expect(h.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const h = home().heroes().archerQueen().first()!;
    expect(h.preferredTarget).toBe('None');
    expect(h.attackType).toBe('Ranged (Ground & Air)');
    expect(h.movementSpeed).toBe(24);
    expect(h.attackSpeed).toBe(0.75);
    expect(h.range).toBe(5);
    expect(h.searchRadius).toBe(10);
    expect(h.specialAbility).toBe('Royal Cloak');
  });

  it('has an icon image', () => {
    const h = home().heroes().archerQueen().first()!;
    expect(h.images.icon).toBeTruthy();
  });

  it('level 1: DPS 136, DPH 102, HP 580, healthRecovery 115, no cost, HH2', () => {
    const lvl = home().heroes().archerQueen().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(136);
    expect(lvl.damagePerHit).toBe(102);
    expect(lvl.hitpoints).toBe(580);
    expect(lvl.healthRecovery).toBe(115);
    expect(lvl.heroHallLevelRequired).toBe(2);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 11: DPS 173, HP 714, heroHall 3, 10,500 DE, 22h', () => {
    const lvl = home().heroes().archerQueen().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.damagePerSecond).toBe(173);
    expect(lvl.hitpoints).toBe(714);
    expect(lvl.healthRecovery).toBe(145);
    expect(lvl.heroHallLevelRequired).toBe(3);
    expect(lvl.upgradeCost).toBe(10500);
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 22, minutes: 0, seconds: 0 });
  });

  it('level 50: DPS 456, HP 1606, healthRecovery 265, heroHall 5, 85,000 DE, 3d', () => {
    const lvl = home().heroes().archerQueen().first()!.levels[49];
    expect(lvl.level).toBe(50);
    expect(lvl.damagePerSecond).toBe(456);
    expect(lvl.hitpoints).toBe(1606);
    expect(lvl.healthRecovery).toBe(265);
    expect(lvl.heroHallLevelRequired).toBe(5);
    expect(lvl.upgradeCost).toBe(85000);
    expect(lvl.upgradeTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 105: DPS 795, DPH 596.25, HP 3456, healthRecovery 430, heroHall 12, 450,000 DE, 8d', () => {
    const lvl = home().heroes().archerQueen().first()!.levels[104];
    expect(lvl.level).toBe(105);
    expect(lvl.damagePerSecond).toBe(795);
    expect(lvl.damagePerHit).toBe(596.25);
    expect(lvl.hitpoints).toBe(3456);
    expect(lvl.healthRecovery).toBe(430);
    expect(lvl.heroHallLevelRequired).toBe(12);
    expect(lvl.upgradeCost).toBe(450000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageHeroes instance', () => {
    expect(home().heroes().archerQueen()).toBeInstanceOf(HomeVillageHeroes);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().heroes().archerQueen()', () => home().heroes().archerQueen());

// ─── heroes() namespace ───────────────────────────────────────────────────────

describe('heroes() namespace', () => {
  it('has 2 heroes', () => {
    expect(home().heroes().count()).toBe(2);
  });

  it('byHeroHall(2) includes Archer Queen', () => {
    expect(home().heroes().byHeroHall(2).find('archer-queen')).toBeDefined();
  });

  it('byHeroHall(1) does not include Archer Queen', () => {
    expect(home().heroes().byHeroHall(1).find('archer-queen')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byHeroHall(2)',
  () => home().heroes(),
  (q) => (q as HomeVillageHeroes).byHeroHall(2),
);
