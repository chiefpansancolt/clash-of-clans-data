import { home, HomeVillageHeroes } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('royalChampion()', () => {
  it('returns a HomeHero', () => {
    const h = home().heroes().royalChampion().first()!;
    expect(h).toBeDefined();
    expect(h.id).toBe('royal-champion');
    expect(h.name).toBe('Royal Champion');
  });

  it('has 55 levels', () => {
    expect(home().heroes().royalChampion().first()!.levels).toHaveLength(55);
  });

  it('is a hero in home base', () => {
    const h = home().heroes().royalChampion().first()!;
    expect(h.category).toBe('hero');
    expect(h.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const h = home().heroes().royalChampion().first()!;
    expect(h.preferredTarget).toBe('Defenses');
    expect(h.attackType).toBe('Ranged (Ground & Air)');
    expect(h.movementSpeed).toBe(24);
    expect(h.attackSpeed).toBe(1.2);
    expect(h.range).toBe(3);
    expect(h.searchRadius).toBe(9);
    expect(h.specialAbility).toBe('Seeking Shield');
  });

  it('has an icon image', () => {
    const h = home().heroes().royalChampion().first()!;
    expect(h.images.icon).toBeTruthy();
  });

  it('level 1: DPS 340, DPH 408, HP 2508, healthRecovery 400, no cost, instant, HH7', () => {
    const lvl = home().heroes().royalChampion().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(340);
    expect(lvl.damagePerHit).toBe(408);
    expect(lvl.hitpoints).toBe(2508);
    expect(lvl.healthRecovery).toBe(400);
    expect(lvl.heroHallLevelRequired).toBe(7);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 402, HP 2890, healthRecovery 600, heroHall 7, 50,000 DE, 1d', () => {
    const lvl = home().heroes().royalChampion().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(402);
    expect(lvl.hitpoints).toBe(2890);
    expect(lvl.healthRecovery).toBe(600);
    expect(lvl.heroHallLevelRequired).toBe(7);
    expect(lvl.upgradeCost).toBe(50000);
    expect(lvl.upgradeTime).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 30: DPS 492, HP 3655, healthRecovery 1000, heroHall 8, 140,000 DE, 3d', () => {
    const lvl = home().heroes().royalChampion().first()!.levels[29];
    expect(lvl.level).toBe(30);
    expect(lvl.damagePerSecond).toBe(492);
    expect(lvl.hitpoints).toBe(3655);
    expect(lvl.healthRecovery).toBe(1000);
    expect(lvl.heroHallLevelRequired).toBe(8);
    expect(lvl.upgradeCost).toBe(140000);
    expect(lvl.upgradeTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 55: DPS 575, DPH 690, HP 4298, healthRecovery 1500, heroHall 12, 450,000 DE, 8d', () => {
    const lvl = home().heroes().royalChampion().first()!.levels[54];
    expect(lvl.level).toBe(55);
    expect(lvl.damagePerSecond).toBe(575);
    expect(lvl.damagePerHit).toBe(690);
    expect(lvl.hitpoints).toBe(4298);
    expect(lvl.healthRecovery).toBe(1500);
    expect(lvl.heroHallLevelRequired).toBe(12);
    expect(lvl.upgradeCost).toBe(450000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageHeroes instance', () => {
    expect(home().heroes().royalChampion()).toBeInstanceOf(HomeVillageHeroes);
  });
});

testQueryBaseContract('home().heroes().royalChampion()', () => home().heroes().royalChampion());
