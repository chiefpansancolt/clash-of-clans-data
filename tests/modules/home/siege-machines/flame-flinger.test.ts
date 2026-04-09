import { home, HomeVillageSiegeMachines } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Flame Flinger ────────────────────────────────────────────────────────────

describe('flameFlinger()', () => {
  it('returns a SiegeMachine', () => {
    const m = home().siegeMachines().flameFlinger().first()!;
    expect(m).toBeDefined();
    expect(m.id).toBe('flame-flinger');
    expect(m.name).toBe('Flame Flinger');
  });

  it('has 5 levels', () => {
    expect(home().siegeMachines().flameFlinger().first()!.levels).toHaveLength(5);
  });

  it('is a siege-machine in home base', () => {
    const m = home().siegeMachines().flameFlinger().first()!;
    expect(m.category).toBe('siege-machine');
    expect(m.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const m = home().siegeMachines().flameFlinger().first()!;
    expect(m.housingSpace).toBe(1);
    expect(m.workshopLevelRequired).toBe(6);
    expect(m.preferredTarget).toBe('Defenses');
    expect(m.attackType).toBe('Area Splash (Ground Only)');
    expect(m.movementSpeed).toBe(6);
    expect(m.range).toBe(11);
    expect(m.shotsPerBurst).toBe(3);
    expect(m.timeBetweenBursts).toBe(5);
    expect(m.hpDecayPerSecond).toBe(17);
    expect(m.attackSpeed).toBeUndefined();
    expect(m.lifetime).toBeUndefined();
  });

  it('has an icon image', () => {
    expect(home().siegeMachines().flameFlinger().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 124, DPH 225, flameMaxDps 80, lifetime 100s, HP 1700, no research, TH15', () => {
    const lvl = home().siegeMachines().flameFlinger().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(124);
    expect(lvl.damagePerHit).toBe(225);
    expect(lvl.flameMaxDps).toBe(80);
    expect(lvl.lifetime).toBe(100);
    expect(lvl.hitpoints).toBe(1700);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Gold');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 3: DPS 151, DPH 275, flameMaxDps 105, HP 1900, Lab 10, TH15, 8,000,000 Gold, 4d', () => {
    const lvl = home().siegeMachines().flameFlinger().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.damagePerSecond).toBe(151);
    expect(lvl.damagePerHit).toBe(275);
    expect(lvl.flameMaxDps).toBe(105);
    expect(lvl.lifetime).toBe(111.76);
    expect(lvl.hitpoints).toBe(1900);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(8000000);
    expect(lvl.researchTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 179, DPH 325, flameMaxDps 130, HP 2100, Lab 14, TH16, 18,000,000 Gold, 12d', () => {
    const lvl = home().siegeMachines().flameFlinger().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(179);
    expect(lvl.damagePerHit).toBe(325);
    expect(lvl.flameMaxDps).toBe(130);
    expect(lvl.lifetime).toBe(123.52);
    expect(lvl.hitpoints).toBe(2100);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(18000000);
    expect(lvl.researchTime).toEqual({ days: 12, hours: 0, minutes: 0, seconds: 0 });
  });

  it('all levels have normal images', () => {
    const levels = home().siegeMachines().flameFlinger().first()!.levels;
    for (const lvl of levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('returns a HomeVillageSiegeMachines instance', () => {
    expect(home().siegeMachines().flameFlinger()).toBeInstanceOf(HomeVillageSiegeMachines);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().siegeMachines().flameFlinger()', () =>
  home().siegeMachines().flameFlinger(),
);

// ─── siegeMachines() namespace ────────────────────────────────────────────────

describe('siegeMachines() namespace', () => {
  it('has 8 siege machines', () => {
    expect(home().siegeMachines().count()).toBe(8);
  });

  it('byWorkshop(6) includes flame flinger', () => {
    expect(home().siegeMachines().byWorkshop(6).find('flame-flinger')).toBeDefined();
  });

  it('byWorkshop(5) does not include flame flinger', () => {
    expect(home().siegeMachines().byWorkshop(5).find('flame-flinger')).toBeUndefined();
  });

  it('byTownHall(15) includes flame flinger', () => {
    expect(home().siegeMachines().byTownHall(15).find('flame-flinger')).toBeDefined();
  });

  it('byTownHall(14) does not include flame flinger', () => {
    expect(home().siegeMachines().byTownHall(14).find('flame-flinger')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byWorkshop(6)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byWorkshop(6),
);

testFilterImmutability(
  'byTownHall(15)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byTownHall(15),
);
