import { home, HomeVillagePets } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('diggy()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().diggy().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('diggy');
    expect(p.name).toBe('Diggy');
  });

  it('has 10 levels', () => {
    expect(home().pets().diggy().first()!.levels).toHaveLength(10);
  });

  it('is a pet in home base', () => {
    const p = home().pets().diggy().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().diggy().first()!;
    expect(p.targetType).toBe('ground');
    expect(p.preferredTarget).toBe("Hero's Target");
    expect(p.attackType).toBe('Single Target');
    expect(p.movementSpeed).toBe(32);
    expect(p.attackSpeed).toBe(1.1);
    expect(p.range).toBe(0.8);
    expect(p.petHouseLevelRequired).toBe(6);
    expect(p.specialAbility).toBe('Stunning Surprise');
  });

  it('has icon and normal images', () => {
    const p = home().pets().diggy().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: DPS 105, DPH 115.5, stun 2s, HP 3650, no upgrade cost, PH6, TH15', () => {
    const lvl = home().pets().diggy().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(105);
    expect(lvl.damagePerHit).toBe(115.5);
    expect(lvl.stunDuration).toBe(2);
    expect(lvl.hitpoints).toBe(3650);
    expect(lvl.petHouseLevelRequired).toBe(6);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 125, DPH 137.5, stun 2.5s, HP 4250, 130,000 DE, 4d, PH6, TH15', () => {
    const lvl = home().pets().diggy().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(125);
    expect(lvl.damagePerHit).toBe(137.5);
    expect(lvl.stunDuration).toBe(2.5);
    expect(lvl.hitpoints).toBe(4250);
    expect(lvl.petHouseLevelRequired).toBe(6);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(130000);
    expect(lvl.upgradeTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 150, DPH 165, stun 3s, HP 5000, 180,000 DE, 6d 12h, PH6, TH15', () => {
    const lvl = home().pets().diggy().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(150);
    expect(lvl.damagePerHit).toBe(165);
    expect(lvl.stunDuration).toBe(3);
    expect(lvl.hitpoints).toBe(5000);
    expect(lvl.petHouseLevelRequired).toBe(6);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(180000);
    expect(lvl.upgradeTime).toEqual({ days: 6, hours: 12, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().diggy()).toBeInstanceOf(HomeVillagePets);
  });
});

testQueryBaseContract('home().pets().diggy()', () => home().pets().diggy());
