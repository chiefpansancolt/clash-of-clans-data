import { home, HomeVillageHeroes } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Grand Warden ─────────────────────────────────────────────────────────────

describe('grandWarden()', () => {
  it('returns a HomeHero', () => {
    const h = home().heroes().grandWarden().first()!;
    expect(h).toBeDefined();
    expect(h.id).toBe('grand-warden');
    expect(h.name).toBe('Grand Warden');
  });

  it('has 80 levels', () => {
    expect(home().heroes().grandWarden().first()!.levels).toHaveLength(80);
  });

  it('is a hero in home base', () => {
    const h = home().heroes().grandWarden().first()!;
    expect(h.category).toBe('hero');
    expect(h.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const h = home().heroes().grandWarden().first()!;
    expect(h.preferredTarget).toBe('Any');
    expect(h.attackType).toBe('Ranged Single Target (Any target)');
    expect(h.movementSpeed).toBe(16);
    expect(h.attackSpeed).toBe(1.8);
    expect(h.range).toBe(7);
    expect(h.searchRadius).toBe(10);
    expect(h.specialAbility).toBe('Eternal Tome');
  });

  it('has an icon image', () => {
    const h = home().heroes().grandWarden().first()!;
    expect(h.images.icon).toBeTruthy();
  });

  it('level 1: DPS 43, DPH 77.4, HP 850, healthRecovery 90, cost 1,000,000 Elixir, instant, HH5', () => {
    const lvl = home().heroes().grandWarden().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(43);
    expect(lvl.damagePerHit).toBe(77.4);
    expect(lvl.hitpoints).toBe(850);
    expect(lvl.healthRecovery).toBe(90);
    expect(lvl.heroHallLevelRequired).toBe(5);
    expect(lvl.upgradeCost).toBe(1000000);
    expect(lvl.upgradeCostResource).toBe('Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 11: DPS 64, HP 1048, heroHall 5, 2,700,000 Elixir, 1d', () => {
    const lvl = home().heroes().grandWarden().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.damagePerSecond).toBe(64);
    expect(lvl.hitpoints).toBe(1048);
    expect(lvl.healthRecovery).toBe(109);
    expect(lvl.heroHallLevelRequired).toBe(5);
    expect(lvl.upgradeCost).toBe(2700000);
    expect(lvl.upgradeTime).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 50: DPS 254, HP 2074, healthRecovery 220, heroHall 7, 11,000,000 Elixir, 3d', () => {
    const lvl = home().heroes().grandWarden().first()!.levels[49];
    expect(lvl.level).toBe(50);
    expect(lvl.damagePerSecond).toBe(254);
    expect(lvl.hitpoints).toBe(2074);
    expect(lvl.healthRecovery).toBe(220);
    expect(lvl.heroHallLevelRequired).toBe(7);
    expect(lvl.upgradeCost).toBe(11000000);
    expect(lvl.upgradeTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 80: DPS 339, DPH 610.2, HP 2584, healthRecovery 275, heroHall 12, 30,000,000 Elixir, 8d', () => {
    const lvl = home().heroes().grandWarden().first()!.levels[79];
    expect(lvl.level).toBe(80);
    expect(lvl.damagePerSecond).toBe(339);
    expect(lvl.damagePerHit).toBe(610.2);
    expect(lvl.hitpoints).toBe(2584);
    expect(lvl.healthRecovery).toBe(275);
    expect(lvl.heroHallLevelRequired).toBe(12);
    expect(lvl.upgradeCost).toBe(30000000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageHeroes instance', () => {
    expect(home().heroes().grandWarden()).toBeInstanceOf(HomeVillageHeroes);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().heroes().grandWarden()', () => home().heroes().grandWarden());

// ─── heroes() namespace ───────────────────────────────────────────────────────

describe('heroes() namespace', () => {
  it('has 5 heroes', () => {
    expect(home().heroes().count()).toBe(5);
  });

  it('byHeroHall(5) includes Grand Warden', () => {
    expect(home().heroes().byHeroHall(5).find('grand-warden')).toBeDefined();
  });

  it('byHeroHall(4) does not include Grand Warden', () => {
    expect(home().heroes().byHeroHall(4).find('grand-warden')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byHeroHall(5)',
  () => home().heroes(),
  (q) => (q as HomeVillageHeroes).byHeroHall(5),
);
