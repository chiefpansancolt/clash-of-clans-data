import { home, HomeVillagePets } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('phoenix()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().phoenix().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('phoenix');
    expect(p.name).toBe('Phoenix');
  });

  it('has 10 levels', () => {
    expect(home().pets().phoenix().first()!.levels).toHaveLength(10);
  });

  it('is a pet in home base', () => {
    const p = home().pets().phoenix().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().phoenix().first()!;
    expect(p.targetType).toBe('both');
    expect(p.preferredTarget).toBe("Hero's Target");
    expect(p.attackType).toBe('Area Splash');
    expect(p.movementSpeed).toBe(16);
    expect(p.attackSpeed).toBe(1);
    expect(p.range).toBe(2.5);
    expect(p.petHouseLevelRequired).toBe(8);
    expect(p.specialAbility).toBe('Fiery Finale');
  });

  it('has icon, normal and egg images', () => {
    const p = home().pets().phoenix().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
    expect(p.images.egg).toBeTruthy();
  });

  it('level 1: DPS 178, DPH 178, revive 6s, HP 3120, no upgrade cost, PH8, TH15', () => {
    const lvl = home().pets().phoenix().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(178);
    expect(lvl.damagePerHit).toBe(178);
    expect(lvl.reviveDuration).toBe(6);
    expect(lvl.hitpoints).toBe(3120);
    expect(lvl.petHouseLevelRequired).toBe(8);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 210, DPH 210, revive 7s, HP 3600, 125,000 DE, 4d, PH8, TH15', () => {
    const lvl = home().pets().phoenix().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(210);
    expect(lvl.damagePerHit).toBe(210);
    expect(lvl.reviveDuration).toBe(7);
    expect(lvl.hitpoints).toBe(3600);
    expect(lvl.petHouseLevelRequired).toBe(8);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(125000);
    expect(lvl.upgradeTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 250, DPH 250, revive 8s, HP 4200, 190,000 DE, 6d 12h, PH8, TH15', () => {
    const lvl = home().pets().phoenix().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(250);
    expect(lvl.damagePerHit).toBe(250);
    expect(lvl.reviveDuration).toBe(8);
    expect(lvl.hitpoints).toBe(4200);
    expect(lvl.petHouseLevelRequired).toBe(8);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(190000);
    expect(lvl.upgradeTime).toEqual({ days: 6, hours: 12, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().phoenix()).toBeInstanceOf(HomeVillagePets);
  });
});

testQueryBaseContract('home().pets().phoenix()', () => home().pets().phoenix());
