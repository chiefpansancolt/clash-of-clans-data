import { home, HomeVillageHeroes } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('minionPrince()', () => {
  it('returns a HomeHero', () => {
    const h = home().heroes().minionPrince().first()!;
    expect(h).toBeDefined();
    expect(h.id).toBe('minion-prince');
    expect(h.name).toBe('Minion Prince');
  });

  it('has 95 levels', () => {
    expect(home().heroes().minionPrince().first()!.levels).toHaveLength(95);
  });

  it('is a hero in home base', () => {
    const h = home().heroes().minionPrince().first()!;
    expect(h.category).toBe('hero');
    expect(h.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const h = home().heroes().minionPrince().first()!;
    expect(h.preferredTarget).toBe('Any');
    expect(h.attackType).toBe('Ranged (Ground & Air)');
    expect(h.movementSpeed).toBe(24);
    expect(h.attackSpeed).toBe(0.85);
    expect(h.range).toBe(4.5);
    expect(h.searchRadius).toBe(10);
    expect(h.specialAbility).toBe('Dark Orb');
  });

  it('has an icon image', () => {
    const h = home().heroes().minionPrince().first()!;
    expect(h.images.icon).toBeTruthy();
  });

  it('level 1: DPS 173, DPH 147.05, HP 200, healthRecovery 200, no cost, HH3', () => {
    const lvl = home().heroes().minionPrince().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(173);
    expect(lvl.damagePerHit).toBe(147.05);
    expect(lvl.hitpoints).toBe(200);
    expect(lvl.healthRecovery).toBe(200);
    expect(lvl.heroHallLevelRequired).toBe(3);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 11: DPS 222, HP 620, heroHall 4, 10,500 DE, 22h', () => {
    const lvl = home().heroes().minionPrince().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.damagePerSecond).toBe(222);
    expect(lvl.hitpoints).toBe(620);
    expect(lvl.healthRecovery).toBe(280);
    expect(lvl.heroHallLevelRequired).toBe(4);
    expect(lvl.upgradeCost).toBe(10500);
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 22, minutes: 0, seconds: 0 });
  });

  it('level 50: DPS 545, HP 2258, healthRecovery 600, heroHall 7, 95,000 DE, 3d', () => {
    const lvl = home().heroes().minionPrince().first()!.levels[49];
    expect(lvl.level).toBe(50);
    expect(lvl.damagePerSecond).toBe(545);
    expect(lvl.hitpoints).toBe(2258);
    expect(lvl.healthRecovery).toBe(600);
    expect(lvl.heroHallLevelRequired).toBe(7);
    expect(lvl.upgradeCost).toBe(95000);
    expect(lvl.upgradeTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 95: DPS 765, DPH 650.25, HP 4510, healthRecovery 1050, heroHall 12, 450,000 DE, 8d', () => {
    const lvl = home().heroes().minionPrince().first()!.levels[94];
    expect(lvl.level).toBe(95);
    expect(lvl.damagePerSecond).toBe(765);
    expect(lvl.damagePerHit).toBe(650.25);
    expect(lvl.hitpoints).toBe(4510);
    expect(lvl.healthRecovery).toBe(1050);
    expect(lvl.heroHallLevelRequired).toBe(12);
    expect(lvl.upgradeCost).toBe(450000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageHeroes instance', () => {
    expect(home().heroes().minionPrince()).toBeInstanceOf(HomeVillageHeroes);
  });
});

testQueryBaseContract('home().heroes().minionPrince()', () => home().heroes().minionPrince());

describe('heroes() namespace', () => {
  it('has 6 heroes', () => {
    expect(home().heroes().count()).toBe(6);
  });

  it('byHeroHall(3) includes Minion Prince', () => {
    expect(home().heroes().byHeroHall(3).find('minion-prince')).toBeDefined();
  });

  it('byHeroHall(2) does not include Minion Prince', () => {
    expect(home().heroes().byHeroHall(2).find('minion-prince')).toBeUndefined();
  });
});

testFilterImmutability(
  'byHeroHall(3)',
  () => home().heroes(),
  (q) => (q as HomeVillageHeroes).byHeroHall(3),
);
