import { home, HomeVillageSiegeMachines } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('battleBlimp()', () => {
  it('returns a SiegeMachine', () => {
    const m = home().siegeMachines().battleBlimp().first()!;
    expect(m).toBeDefined();
    expect(m.id).toBe('battle-blimp');
    expect(m.name).toBe('Battle Blimp');
  });

  it('has 5 levels', () => {
    expect(home().siegeMachines().battleBlimp().first()!.levels).toHaveLength(5);
  });

  it('is a siege-machine in home base', () => {
    const m = home().siegeMachines().battleBlimp().first()!;
    expect(m.category).toBe('siege-machine');
    expect(m.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const m = home().siegeMachines().battleBlimp().first()!;
    expect(m.housingSpace).toBe(1);
    expect(m.workshopLevelRequired).toBe(2);
    expect(m.preferredTarget).toBe('None');
    expect(m.attackType).toBe('Area Splash');
    expect(m.movementSpeed).toBe(18);
    expect(m.attackSpeed).toBe(1.5);
  });

  it('has an icon image', () => {
    expect(home().siegeMachines().battleBlimp().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 100, HP 3000, deathDamage 700, no research, TH12', () => {
    const lvl = home().siegeMachines().battleBlimp().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(100);
    expect(lvl.damagePerHit).toBe(150);
    expect(lvl.damageWhenDestroyed).toBe(700);
    expect(lvl.damageVsWalls).toBeUndefined();
    expect(lvl.hitpoints).toBe(3000);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Gold');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4: DPS 220, HP 4500, deathDamage 1000, Lab 11, TH13, 6,500,000 Gold, 7d', () => {
    const lvl = home().siegeMachines().battleBlimp().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.damagePerSecond).toBe(220);
    expect(lvl.damagePerHit).toBe(330);
    expect(lvl.damageWhenDestroyed).toBe(1000);
    expect(lvl.hitpoints).toBe(4500);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(6500000);
    expect(lvl.researchTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 260, HP 5000, deathDamage 1100, Lab 13, TH15, 10,000,000 Gold, 9d', () => {
    const lvl = home().siegeMachines().battleBlimp().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(260);
    expect(lvl.damagePerHit).toBe(390);
    expect(lvl.damageWhenDestroyed).toBe(1100);
    expect(lvl.hitpoints).toBe(5000);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(10000000);
    expect(lvl.researchTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
  });

  it('all levels have normal images', () => {
    const levels = home().siegeMachines().battleBlimp().first()!.levels;
    for (const lvl of levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('returns a HomeVillageSiegeMachines instance', () => {
    expect(home().siegeMachines().battleBlimp()).toBeInstanceOf(HomeVillageSiegeMachines);
  });
});

testQueryBaseContract('home().siegeMachines().battleBlimp()', () =>
  home().siegeMachines().battleBlimp(),
);
