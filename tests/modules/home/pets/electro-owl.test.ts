import { home, HomeVillagePets } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('electroOwl()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().electroOwl().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('electro-owl');
    expect(p.name).toBe('Electro Owl');
  });

  it('has 15 levels', () => {
    expect(home().pets().electroOwl().first()!.levels).toHaveLength(15);
  });

  it('is a pet in home base', () => {
    const p = home().pets().electroOwl().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().electroOwl().first()!;
    expect(p.targetType).toBe('both');
    expect(p.preferredTarget).toBe("Hero's Target");
    expect(p.attackType).toBe('Chain Lightning');
    expect(p.movementSpeed).toBe(20);
    expect(p.attackSpeed).toBe(1.4);
    expect(p.range).toBe(6);
    expect(p.petHouseLevelRequired).toBe(2);
    expect(p.specialAbility).toBe('High Voltage');
    expect(p.numberOfTargets).toBe(2);
    expect(p.chainDamageDecay).toBe(-20);
  });

  it('has icon and normal images', () => {
    const p = home().pets().electroOwl().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: DPS 100, DPH 140, HP 1600, no upgrade cost, PH2, TH14', () => {
    const lvl = home().pets().electroOwl().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(100);
    expect(lvl.damagePerHit).toBe(140);
    expect(lvl.hitpoints).toBe(1600);
    expect(lvl.petHouseLevelRequired).toBe(2);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 120, DPH 168, HP 2000, 75,000 DE, 4d, PH2, TH14', () => {
    const lvl = home().pets().electroOwl().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(120);
    expect(lvl.damagePerHit).toBe(168);
    expect(lvl.hitpoints).toBe(2000);
    expect(lvl.petHouseLevelRequired).toBe(2);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(75000);
    expect(lvl.upgradeTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 145, DPH 203, HP 2500, 150,000 DE, 6d 12h, PH2, TH14', () => {
    const lvl = home().pets().electroOwl().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(145);
    expect(lvl.damagePerHit).toBe(203);
    expect(lvl.hitpoints).toBe(2500);
    expect(lvl.petHouseLevelRequired).toBe(2);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(150000);
    expect(lvl.upgradeTime).toEqual({ days: 6, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 11: DPS 150, DPH 210, HP 2600, 165,000 DE, 7d, PH9, TH16', () => {
    const lvl = home().pets().electroOwl().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.damagePerSecond).toBe(150);
    expect(lvl.damagePerHit).toBe(210);
    expect(lvl.hitpoints).toBe(2600);
    expect(lvl.petHouseLevelRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.upgradeCost).toBe(165000);
    expect(lvl.upgradeTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 15: DPS 170, DPH 238, HP 3000, 225,000 DE, 8d, PH9, TH16', () => {
    const lvl = home().pets().electroOwl().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.damagePerSecond).toBe(170);
    expect(lvl.damagePerHit).toBe(238);
    expect(lvl.hitpoints).toBe(3000);
    expect(lvl.petHouseLevelRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.upgradeCost).toBe(225000);
    expect(lvl.upgradeTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().electroOwl()).toBeInstanceOf(HomeVillagePets);
  });
});

testQueryBaseContract('home().pets().electroOwl()', () => home().pets().electroOwl());

testFilterImmutability(
  'byPetHouse(2)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byPetHouse(2),
);

testFilterImmutability(
  'byTownHall(14)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byTownHall(14),
);
