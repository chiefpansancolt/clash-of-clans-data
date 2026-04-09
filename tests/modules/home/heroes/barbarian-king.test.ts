import { home, HomeVillageHeroes } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Barbarian King ───────────────────────────────────────────────────────────

describe('barbarianKing()', () => {
  it('returns a HomeHero', () => {
    const h = home().heroes().barbarianKing().first()!;
    expect(h).toBeDefined();
    expect(h.id).toBe('barbarian-king');
    expect(h.name).toBe('Barbarian King');
  });

  it('has 105 levels', () => {
    expect(home().heroes().barbarianKing().first()!.levels).toHaveLength(105);
  });

  it('is a hero in home base', () => {
    const h = home().heroes().barbarianKing().first()!;
    expect(h.category).toBe('hero');
    expect(h.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const h = home().heroes().barbarianKing().first()!;
    expect(h.preferredTarget).toBe('None');
    expect(h.attackType).toBe('Melee (Ground Only)');
    expect(h.movementSpeed).toBe(16);
    expect(h.attackSpeed).toBe(1.2);
    expect(h.range).toBe(1);
    expect(h.searchRadius).toBe(9);
    expect(h.specialAbility).toBe('Iron Fist');
  });

  it('has an icon image', () => {
    const h = home().heroes().barbarianKing().first()!;
    expect(h.images.icon).toBeTruthy();
  });

  it('level 1: DPS 102, DPH 122.4, HP 1445, healthRecovery 200, no cost, HH1', () => {
    const lvl = home().heroes().barbarianKing().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(102);
    expect(lvl.damagePerHit).toBe(122.4);
    expect(lvl.hitpoints).toBe(1445);
    expect(lvl.healthRecovery).toBe(200);
    expect(lvl.heroHallLevelRequired).toBe(1);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 11: DPS 124, HP 1850, heroHall 2, 10,500 DE, 22h', () => {
    const lvl = home().heroes().barbarianKing().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.damagePerSecond).toBe(124);
    expect(lvl.hitpoints).toBe(1850);
    expect(lvl.healthRecovery).toBe(310);
    expect(lvl.heroHallLevelRequired).toBe(2);
    expect(lvl.upgradeCost).toBe(10500);
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 22, minutes: 0, seconds: 0 });
  });

  it('level 50: DPS 282, HP 4845, healthRecovery 1125, heroHall 5, 85,000 DE, 3d', () => {
    const lvl = home().heroes().barbarianKing().first()!.levels[49];
    expect(lvl.level).toBe(50);
    expect(lvl.damagePerSecond).toBe(282);
    expect(lvl.hitpoints).toBe(4845);
    expect(lvl.healthRecovery).toBe(1125);
    expect(lvl.heroHallLevelRequired).toBe(5);
    expect(lvl.upgradeCost).toBe(85000);
    expect(lvl.upgradeTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 105: DPS 678, HP 12725, healthRecovery 3100, heroHall 12, 450,000 DE, 8d', () => {
    const lvl = home().heroes().barbarianKing().first()!.levels[104];
    expect(lvl.level).toBe(105);
    expect(lvl.damagePerSecond).toBe(678);
    expect(lvl.damagePerHit).toBe(813.6);
    expect(lvl.hitpoints).toBe(12725);
    expect(lvl.healthRecovery).toBe(3100);
    expect(lvl.heroHallLevelRequired).toBe(12);
    expect(lvl.upgradeCost).toBe(450000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageHeroes instance', () => {
    expect(home().heroes().barbarianKing()).toBeInstanceOf(HomeVillageHeroes);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().heroes().barbarianKing()', () => home().heroes().barbarianKing());

// ─── heroes() namespace ───────────────────────────────────────────────────────

describe('heroes() namespace', () => {
  it('has 5 heroes', () => {
    expect(home().heroes().count()).toBe(5);
  });

  it('byHeroHall(1) includes Barbarian King', () => {
    expect(home().heroes().byHeroHall(1).find('barbarian-king')).toBeDefined();
  });

  it('byHeroHall(0) does not include Barbarian King', () => {
    expect(home().heroes().byHeroHall(0).find('barbarian-king')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byHeroHall(1)',
  () => home().heroes(),
  (q) => (q as HomeVillageHeroes).byHeroHall(1),
);
