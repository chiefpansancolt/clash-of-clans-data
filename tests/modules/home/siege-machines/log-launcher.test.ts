import { home, HomeVillageSiegeMachines } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Log Launcher ─────────────────────────────────────────────────────────────

describe('logLauncher()', () => {
  it('returns a SiegeMachine', () => {
    const m = home().siegeMachines().logLauncher().first()!;
    expect(m).toBeDefined();
    expect(m.id).toBe('log-launcher');
    expect(m.name).toBe('Log Launcher');
  });

  it('has 5 levels', () => {
    expect(home().siegeMachines().logLauncher().first()!.levels).toHaveLength(5);
  });

  it('is a siege-machine in home base', () => {
    const m = home().siegeMachines().logLauncher().first()!;
    expect(m.category).toBe('siege-machine');
    expect(m.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const m = home().siegeMachines().logLauncher().first()!;
    expect(m.housingSpace).toBe(1);
    expect(m.workshopLevelRequired).toBe(5);
    expect(m.preferredTarget).toBe('Walls (Damage x4)');
    expect(m.attackType).toBe('Area Splash (Ground Only)');
    expect(m.movementSpeed).toBe(5);
    expect(m.attackSpeed).toBe(3);
    expect(m.hpDecayPerSecond).toBe(156);
  });

  it('has an icon image', () => {
    expect(home().siegeMachines().logLauncher().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 140, DPH 420, vs walls 1680, point-blank 2900, lifetime 25.64s, HP 4000, no research, TH14', () => {
    const lvl = home().siegeMachines().logLauncher().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(140);
    expect(lvl.damagePerHit).toBe(420);
    expect(lvl.damageVsWalls).toBe(1680);
    expect(lvl.pointBlankDamage).toBe(2900);
    expect(lvl.lifetime).toBe(25.64);
    expect(lvl.hitpoints).toBe(4000);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Gold');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 3: DPS 180, DPH 540, vs walls 2160, HP 4800, Lab 10, TH14, 4,500,000 Gold, 4d', () => {
    const lvl = home().siegeMachines().logLauncher().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.damagePerSecond).toBe(180);
    expect(lvl.damagePerHit).toBe(540);
    expect(lvl.damageVsWalls).toBe(2160);
    expect(lvl.pointBlankDamage).toBe(3100);
    expect(lvl.lifetime).toBe(30.76);
    expect(lvl.hitpoints).toBe(4800);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.researchCost).toBe(4500000);
    expect(lvl.researchTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 220, DPH 660, vs walls 2640, HP 5500, Lab 14, TH16, 18,000,000 Gold, 12d', () => {
    const lvl = home().siegeMachines().logLauncher().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(220);
    expect(lvl.damagePerHit).toBe(660);
    expect(lvl.damageVsWalls).toBe(2640);
    expect(lvl.pointBlankDamage).toBe(3400);
    expect(lvl.lifetime).toBe(35.25);
    expect(lvl.hitpoints).toBe(5500);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(18000000);
    expect(lvl.researchTime).toEqual({ days: 12, hours: 0, minutes: 0, seconds: 0 });
  });

  it('all levels have normal images', () => {
    const levels = home().siegeMachines().logLauncher().first()!.levels;
    for (const lvl of levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('returns a HomeVillageSiegeMachines instance', () => {
    expect(home().siegeMachines().logLauncher()).toBeInstanceOf(HomeVillageSiegeMachines);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().siegeMachines().logLauncher()', () =>
  home().siegeMachines().logLauncher(),
);

// ─── siegeMachines() namespace ────────────────────────────────────────────────

describe('siegeMachines() namespace', () => {
  it('has 5 siege machines', () => {
    expect(home().siegeMachines().count()).toBe(5);
  });

  it('byWorkshop(5) includes log launcher', () => {
    expect(home().siegeMachines().byWorkshop(5).find('log-launcher')).toBeDefined();
  });

  it('byWorkshop(4) does not include log launcher', () => {
    expect(home().siegeMachines().byWorkshop(4).find('log-launcher')).toBeUndefined();
  });

  it('byTownHall(14) includes log launcher', () => {
    expect(home().siegeMachines().byTownHall(14).find('log-launcher')).toBeDefined();
  });

  it('byTownHall(13) does not include log launcher', () => {
    expect(home().siegeMachines().byTownHall(13).find('log-launcher')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byWorkshop(5)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byWorkshop(5),
);

testFilterImmutability(
  'byTownHall(14)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byTownHall(14),
);
