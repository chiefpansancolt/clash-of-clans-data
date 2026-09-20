import { home, HomeVillageSiegeMachines } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('skyWagon()', () => {
  it('returns a SiegeMachine', () => {
    const m = home().siegeMachines().skyWagon().first()!;
    expect(m).toBeDefined();
    expect(m.id).toBe('sky-wagon');
    expect(m.name).toBe('Sky Wagon');
  });

  it('has 4 levels', () => {
    expect(home().siegeMachines().skyWagon().first()!.levels).toHaveLength(4);
  });

  it('is a siege-machine in home base', () => {
    const m = home().siegeMachines().skyWagon().first()!;
    expect(m.category).toBe('siege-machine');
    expect(m.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const m = home().siegeMachines().skyWagon().first()!;
    expect(m.housingSpace).toBe(1);
    expect(m.workshopLevelRequired).toBe(9);
    expect(m.preferredTarget).toBe('Defenses');
    expect(m.attackType).toBe('Area Splash (Ground Only)');
    expect(m.movementSpeed).toBe(16);
    expect(m.attackSpeed).toBe(8);
    expect(m.range).toBe(5.5);
    expect(m.lifetime).toBeUndefined();
    expect(m.hpDecayPerSecond).toBeUndefined();
  });

  it('has an icon image', () => {
    expect(home().siegeMachines().skyWagon().first()!.images.icon).toBeTruthy();
  });

  it('level 1: 4 barrels, 2 Minions, 1 Balloon, 1 Baby Dragon, DPS 1, DPH 8, HP 3600, no research, TH17', () => {
    const lvl = home().siegeMachines().skyWagon().first()!.levels[0];

    expect(lvl.level).toBe(1);
    expect(lvl.barrelCount).toBe(4);
    expect(lvl.damagePerSecond).toBe(1);
    expect(lvl.damagePerHit).toBe(8);
    expect(lvl.hitpoints).toBe(3600);

    expect(lvl.troopsSpawnedPerBarrel).toEqual({
      minions: 2,
      balloons: 1,
      babyDragons: 1,
    });

    expect(lvl.troopLevels).toEqual({
      minions: 10,
      balloons: 9,
      babyDragons: 8,
    });

    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 3: 5 barrels, DPS 3, DPH 24, HP 4000, Lab 16, TH17, 26,000,000 Elixir, 13d12h', () => {
    const lvl = home().siegeMachines().skyWagon().first()!.levels[2];

    expect(lvl.level).toBe(3);
    expect(lvl.barrelCount).toBe(5);
    expect(lvl.damagePerSecond).toBe(3);
    expect(lvl.damagePerHit).toBe(24);
    expect(lvl.hitpoints).toBe(4000);

    expect(lvl.troopsSpawnedPerBarrel).toEqual({
      minions: 4,
      balloons: 1,
      babyDragons: 1,
    });

    expect(lvl.troopLevels).toEqual({
      minions: 12,
      balloons: 11,
      babyDragons: 10,
    });

    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(26000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({
      days: 13,
      hours: 12,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 4: 5 barrels, DPS 4, DPH 32, HP 4200, Lab 16, TH18, 29,000,000 Elixir, 16d', () => {
    const lvl = home().siegeMachines().skyWagon().first()!.levels[3];

    expect(lvl.level).toBe(4);
    expect(lvl.barrelCount).toBe(5);
    expect(lvl.damagePerSecond).toBe(4);
    expect(lvl.damagePerHit).toBe(32);
    expect(lvl.hitpoints).toBe(4200);

    expect(lvl.troopsSpawnedPerBarrel).toEqual({
      minions: 4,
      balloons: 1,
      babyDragons: 1,
    });

    expect(lvl.troopLevels).toEqual({
      minions: 13,
      balloons: 12,
      babyDragons: 11,
    });

    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.researchCost).toBe(29000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({
      days: 16,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('all levels have normal images', () => {
    const levels = home().siegeMachines().skyWagon().first()!.levels;

    for (const lvl of levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('returns a HomeVillageSiegeMachines instance', () => {
    expect(home().siegeMachines().skyWagon()).toBeInstanceOf(HomeVillageSiegeMachines);
  });
});

testQueryBaseContract('home().siegeMachines().skyWagon()', () => home().siegeMachines().skyWagon());
