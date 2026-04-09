import { home, HomeVillageSiegeMachines } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Wall Wrecker ─────────────────────────────────────────────────────────────

describe('wallWrecker()', () => {
  it('returns a SiegeMachine', () => {
    const m = home().siegeMachines().wallWrecker().first()!;
    expect(m).toBeDefined();
    expect(m.id).toBe('wall-wrecker');
    expect(m.name).toBe('Wall Wrecker');
  });

  it('has 6 levels', () => {
    expect(home().siegeMachines().wallWrecker().first()!.levels).toHaveLength(6);
  });

  it('is a siege-machine in home base', () => {
    const m = home().siegeMachines().wallWrecker().first()!;
    expect(m.category).toBe('siege-machine');
    expect(m.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const m = home().siegeMachines().wallWrecker().first()!;
    expect(m.housingSpace).toBe(1);
    expect(m.workshopLevelRequired).toBe(1);
    expect(m.preferredTarget).toBe('Walls');
    expect(m.attackType).toBe('Area Splash');
    expect(m.movementSpeed).toBe(12);
    expect(m.attackSpeed).toBe(1.3);
  });

  it('has an icon image', () => {
    expect(home().siegeMachines().wallWrecker().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 250, HP 5500, no research, TH12', () => {
    const lvl = home().siegeMachines().wallWrecker().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(250);
    expect(lvl.damagePerHit).toBe(325);
    expect(lvl.damageVsWalls).toBe(3250);
    expect(lvl.hitpoints).toBe(5500);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Gold');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4: DPS 400, HP 7000, Lab 11, TH13, 6,500,000 Gold, 7d', () => {
    const lvl = home().siegeMachines().wallWrecker().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.damagePerSecond).toBe(400);
    expect(lvl.damagePerHit).toBe(520);
    expect(lvl.damageVsWalls).toBe(5200);
    expect(lvl.hitpoints).toBe(7000);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(6500000);
    expect(lvl.researchTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 6: DPS 670, HP 10000, Lab 16, TH17, 26,000,000 Gold, 13d 12h', () => {
    const lvl = home().siegeMachines().wallWrecker().first()!.levels[5];
    expect(lvl.level).toBe(6);
    expect(lvl.damagePerSecond).toBe(670);
    expect(lvl.damagePerHit).toBe(871);
    expect(lvl.damageVsWalls).toBe(8710);
    expect(lvl.hitpoints).toBe(10000);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(26000000);
    expect(lvl.researchTime).toEqual({ days: 13, hours: 12, minutes: 0, seconds: 0 });
  });

  it('all levels have normal images', () => {
    const levels = home().siegeMachines().wallWrecker().first()!.levels;
    for (const lvl of levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('returns a HomeVillageSiegeMachines instance', () => {
    expect(home().siegeMachines().wallWrecker()).toBeInstanceOf(HomeVillageSiegeMachines);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().siegeMachines().wallWrecker()', () =>
  home().siegeMachines().wallWrecker(),
);

// ─── siegeMachines() namespace ────────────────────────────────────────────────

describe('siegeMachines() namespace', () => {
  it('has 2 siege machines', () => {
    expect(home().siegeMachines().count()).toBe(2);
  });

  it('byWorkshop(1) includes wall wrecker', () => {
    expect(home().siegeMachines().byWorkshop(1).find('wall-wrecker')).toBeDefined();
  });

  it('byTownHall(12) includes wall wrecker', () => {
    expect(home().siegeMachines().byTownHall(12).find('wall-wrecker')).toBeDefined();
  });

  it('byTownHall(11) does not include wall wrecker', () => {
    expect(home().siegeMachines().byTownHall(11).find('wall-wrecker')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byWorkshop(1)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byWorkshop(1),
);

testFilterImmutability(
  'byTownHall(12)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byTownHall(12),
);
