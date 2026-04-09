import { home, HomeVillagePets } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('mightyYak()', () => {
  it('returns a HomePet', () => {
    const p = home().pets().mightyYak().first()!;
    expect(p).toBeDefined();
    expect(p.id).toBe('mighty-yak');
    expect(p.name).toBe('Mighty Yak');
  });

  it('has 15 levels', () => {
    expect(home().pets().mightyYak().first()!.levels).toHaveLength(15);
  });

  it('is a pet in home base', () => {
    const p = home().pets().mightyYak().first()!;
    expect(p.category).toBe('pet');
    expect(p.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const p = home().pets().mightyYak().first()!;
    expect(p.targetType).toBe('ground');
    expect(p.preferredTarget).toBe('Within 7 tiles of Hero');
    expect(p.attackType).toBe('Single Target');
    expect(p.movementSpeed).toBe(20);
    expect(p.attackSpeed).toBe(2.1);
    expect(p.range).toBe(1.2);
    expect(p.petHouseLevelRequired).toBe(3);
    expect(p.specialAbility).toBe('Wall Buster');
    expect(p.rageDuration).toBe(8);
    expect(p.rageSpeedIncrease).toBe(16);
    expect(p.rageDamageIncreasePercent).toBe(70);
  });

  it('has icon and normal images', () => {
    const p = home().pets().mightyYak().first()!;
    expect(p.images.icon).toBeTruthy();
    expect(p.images.normal).toBeTruthy();
  });

  it('level 1: DPS 60, DPH 126, wallDmg 2520, HP 3750, no upgrade cost, PH3, TH14', () => {
    const lvl = home().pets().mightyYak().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(60);
    expect(lvl.damagePerHit).toBe(126);
    expect(lvl.damageVsWalls).toBe(2520);
    expect(lvl.hitpoints).toBe(3750);
    expect(lvl.petHouseLevelRequired).toBe(3);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(0);
    expect(lvl.upgradeCostResource).toBe('Dark Elixir');
    expect(lvl.upgradeTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 76, DPH 159.6, wallDmg 3192, HP 4750, 70,000 DE, 2d 12h, PH3, TH14', () => {
    const lvl = home().pets().mightyYak().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(76);
    expect(lvl.damagePerHit).toBe(159.6);
    expect(lvl.damageVsWalls).toBe(3192);
    expect(lvl.hitpoints).toBe(4750);
    expect(lvl.petHouseLevelRequired).toBe(3);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(70000);
    expect(lvl.upgradeTime).toEqual({ days: 2, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 10: DPS 96, DPH 201.6, wallDmg 4032, HP 5550, 120,000 DE, 5d, PH3, TH14', () => {
    const lvl = home().pets().mightyYak().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.damagePerSecond).toBe(96);
    expect(lvl.damagePerHit).toBe(201.6);
    expect(lvl.damageVsWalls).toBe(4032);
    expect(lvl.hitpoints).toBe(5550);
    expect(lvl.petHouseLevelRequired).toBe(3);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.upgradeCost).toBe(120000);
    expect(lvl.upgradeTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 11: DPS 100, DPH 210, wallDmg 4200, HP 5700, 130,000 DE, 5d 12h, PH7, TH15', () => {
    const lvl = home().pets().mightyYak().first()!.levels[10];
    expect(lvl.level).toBe(11);
    expect(lvl.damagePerSecond).toBe(100);
    expect(lvl.damagePerHit).toBe(210);
    expect(lvl.damageVsWalls).toBe(4200);
    expect(lvl.hitpoints).toBe(5700);
    expect(lvl.petHouseLevelRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(130000);
    expect(lvl.upgradeTime).toEqual({ days: 5, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 15: DPS 116, DPH 243.6, wallDmg 4872, HP 6300, 170,000 DE, 7d 12h, PH7, TH15', () => {
    const lvl = home().pets().mightyYak().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.damagePerSecond).toBe(116);
    expect(lvl.damagePerHit).toBe(243.6);
    expect(lvl.damageVsWalls).toBe(4872);
    expect(lvl.hitpoints).toBe(6300);
    expect(lvl.petHouseLevelRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.upgradeCost).toBe(170000);
    expect(lvl.upgradeTime).toEqual({ days: 7, hours: 12, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillagePets instance', () => {
    expect(home().pets().mightyYak()).toBeInstanceOf(HomeVillagePets);
  });
});

testQueryBaseContract('home().pets().mightyYak()', () => home().pets().mightyYak());

testFilterImmutability(
  'byPetHouse(3)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byPetHouse(3),
);

testFilterImmutability(
  'byTownHall(14)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byTownHall(14),
);
