import { home, HomeVillagePets } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('sneezy()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().sneezy().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('sneezy');
    expect(p.name).toBe('Sneezy');
  });

  it('has 10 levels', () => {
    expect(home().pets().sneezy().first()!.levels).toHaveLength(10);
  });

  it('is a pet in home base', () => {
    const p = home().pets().sneezy().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().sneezy().first()!;
    expect(p.targetType).toBe('both');
    expect(p.preferredTarget).toBe('Defenses');
    expect(p.attackType).toBe('Single Target');
    expect(p.movementSpeed).toBe(24);
    expect(p.attackSpeed).toBe(0.8);
    expect(p.range).toBe(5.5);
    expect(p.petHouseLevelRequired).toBe(11);
    expect(p.specialAbility).toBe('ACHOO!');
    expect(p.maxBoogersSummoned).toBe(2);
    expect(p.rageDuration).toBe(30);
    expect(p.rageDamageIncreasePercent).toBe(1);
  });

  it('has icon and normal images', () => {
    const p = home().pets().sneezy().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: DPS 270, DPH 216, HP 3300, no upgrade cost, PH11, TH17', () => {
    const lvl = home().pets().sneezy().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(270);
    expect(lvl.damagePerHit).toBe(216);
    expect(lvl.hitpoints).toBe(3300);
    expect(lvl.petHouseLevelRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 350, DPH 280, HP 3900, 260,000 DE, 8d, PH11, TH17', () => {
    const lvl = home().pets().sneezy().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(350);
    expect(lvl.damagePerHit).toBe(280);
    expect(lvl.hitpoints).toBe(3900);
    expect(lvl.petHouseLevelRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.upgradeCost).toBe(260000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 450, DPH 360, HP 4650, 360,000 DE, 8d, PH11, TH17', () => {
    const lvl = home().pets().sneezy().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(450);
    expect(lvl.damagePerHit).toBe(360);
    expect(lvl.hitpoints).toBe(4650);
    expect(lvl.petHouseLevelRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.upgradeCost).toBe(360000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().sneezy()).toBeInstanceOf(HomeVillagePets);
  });
});

testQueryBaseContract('home().pets().sneezy()', () => home().pets().sneezy());
