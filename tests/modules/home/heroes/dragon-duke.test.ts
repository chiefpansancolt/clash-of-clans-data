import { home, HomeVillageHeroes } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Dragon Duke ──────────────────────────────────────────────────────────────

describe('dragonDuke()', () => {
  it('returns a HomeHero', () => {
    const h = home().heroes().dragonDuke().first()!;
    expect(h).toBeDefined();
    expect(h.id).toBe('dragon-duke');
    expect(h.name).toBe('Dragon Duke');
  });

  it('has 25 levels', () => {
    expect(home().heroes().dragonDuke().first()!.levels).toHaveLength(25);
  });

  it('is a hero in home base', () => {
    const h = home().heroes().dragonDuke().first()!;
    expect(h.category).toBe('hero');
    expect(h.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const h = home().heroes().dragonDuke().first()!;
    expect(h.preferredTarget).toBe('None');
    expect(h.movementSpeed).toBe(20);
    expect(h.attackSpeed).toBe(1.2);
    expect(h.range).toBe(1.25);
    expect(h.searchRadius).toBe(10);
    expect(h.specialAbility).toBe('Royal Rampage');
  });

  it('has an icon image', () => {
    const h = home().heroes().dragonDuke().first()!;
    expect(h.images.icon).toBeTruthy();
  });

  it('level 1: DPS 304, DPH 364.8, HP 9100, healthRecovery 3500, no cost, instant, HH9', () => {
    const lvl = home().heroes().dragonDuke().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(304);
    expect(lvl.damagePerHit).toBe(364.8);
    expect(lvl.hitpoints).toBe(9100);
    expect(lvl.healthRecovery).toBe(3500);
    expect(lvl.heroHallLevelRequired).toBe(9);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 340, HP 9775, healthRecovery 4000, heroHall 9, 130,000 DE, 3d', () => {
    const lvl = home().heroes().dragonDuke().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(340);
    expect(lvl.hitpoints).toBe(9775);
    expect(lvl.healthRecovery).toBe(4000);
    expect(lvl.heroHallLevelRequired).toBe(9);
    expect(lvl.upgradeCost).toBe(130000);
    expect(lvl.upgradeTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 15: DPS 360, HP 10150, healthRecovery 4250, heroHall 10, 250,000 DE, 6d', () => {
    const lvl = home().heroes().dragonDuke().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.damagePerSecond).toBe(360);
    expect(lvl.hitpoints).toBe(10150);
    expect(lvl.healthRecovery).toBe(4250);
    expect(lvl.heroHallLevelRequired).toBe(10);
    expect(lvl.upgradeCost).toBe(250000);
    expect(lvl.upgradeTime).toEqual({ days: 6, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 25: DPS 400, DPH 480, HP 10900, healthRecovery 4750, heroHall 12, 480,000 DE, 8d', () => {
    const lvl = home().heroes().dragonDuke().first()!.levels[24];
    expect(lvl.level).toBe(25);
    expect(lvl.damagePerSecond).toBe(400);
    expect(lvl.damagePerHit).toBe(480);
    expect(lvl.hitpoints).toBe(10900);
    expect(lvl.healthRecovery).toBe(4750);
    expect(lvl.heroHallLevelRequired).toBe(12);
    expect(lvl.upgradeCost).toBe(480000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageHeroes instance', () => {
    expect(home().heroes().dragonDuke()).toBeInstanceOf(HomeVillageHeroes);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().heroes().dragonDuke()', () => home().heroes().dragonDuke());

// ─── heroes() namespace ───────────────────────────────────────────────────────

describe('heroes() namespace', () => {
  it('has 6 heroes', () => {
    expect(home().heroes().count()).toBe(6);
  });

  it('byHeroHall(9) includes Dragon Duke', () => {
    expect(home().heroes().byHeroHall(9).find('dragon-duke')).toBeDefined();
  });

  it('byHeroHall(8) does not include Dragon Duke', () => {
    expect(home().heroes().byHeroHall(8).find('dragon-duke')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byHeroHall(9)',
  () => home().heroes(),
  (q) => (q as HomeVillageHeroes).byHeroHall(9),
);
