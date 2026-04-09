import { home, HomeVillageSiegeMachines } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Battle Drill ─────────────────────────────────────────────────────────────

describe('battleDrill()', () => {
  it('returns a SiegeMachine', () => {
    const m = home().siegeMachines().battleDrill().first()!;
    expect(m).toBeDefined();
    expect(m.id).toBe('battle-drill');
    expect(m.name).toBe('Battle Drill');
  });

  it('has 5 levels', () => {
    expect(home().siegeMachines().battleDrill().first()!.levels).toHaveLength(5);
  });

  it('is a siege-machine in home base', () => {
    const m = home().siegeMachines().battleDrill().first()!;
    expect(m.category).toBe('siege-machine');
    expect(m.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const m = home().siegeMachines().battleDrill().first()!;
    expect(m.housingSpace).toBe(1);
    expect(m.workshopLevelRequired).toBe(7);
    expect(m.preferredTarget).toBe('Defenses');
    expect(m.attackType).toBe('Single Target (Ground Only)');
    expect(m.movementSpeed).toBe(24);
    expect(m.range).toBe(1);
    expect(m.attackSpeed).toBe(1.7);
    expect(m.lifetime).toBeUndefined();
    expect(m.hpDecayPerSecond).toBeUndefined();
  });

  it('has an icon image', () => {
    expect(home().siegeMachines().battleDrill().first()!.images.icon).toBeTruthy();
  });

  it('level 1: DPS 430, DPA 731, HP 4800, no research, TH16', () => {
    const lvl = home().siegeMachines().battleDrill().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damagePerSecond).toBe(430);
    expect(lvl.damagePerHit).toBe(731);
    expect(lvl.hitpoints).toBe(4800);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Gold');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 3: DPS 510, DPA 867, HP 5400, Lab 13, TH16, 8,500,000 Gold, 5d', () => {
    const lvl = home().siegeMachines().battleDrill().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.damagePerSecond).toBe(510);
    expect(lvl.damagePerHit).toBe(867);
    expect(lvl.hitpoints).toBe(5400);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(8500000);
    expect(lvl.researchTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: DPS 590, DPA 1003, HP 6300, Lab 15, TH17, 17,000,000 Gold, 9d', () => {
    const lvl = home().siegeMachines().battleDrill().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damagePerSecond).toBe(590);
    expect(lvl.damagePerHit).toBe(1003);
    expect(lvl.hitpoints).toBe(6300);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(17000000);
    expect(lvl.researchTime).toEqual({ days: 9, hours: 0, minutes: 0, seconds: 0 });
  });

  it('all levels have normal images', () => {
    const levels = home().siegeMachines().battleDrill().first()!.levels;
    for (const lvl of levels) {
      expect(lvl.images.normal).toBeTruthy();
    }
  });

  it('returns a HomeVillageSiegeMachines instance', () => {
    expect(home().siegeMachines().battleDrill()).toBeInstanceOf(HomeVillageSiegeMachines);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().siegeMachines().battleDrill()', () =>
  home().siegeMachines().battleDrill(),
);

// ─── siegeMachines() namespace ────────────────────────────────────────────────

describe('siegeMachines() namespace', () => {
  it('has 8 siege machines', () => {
    expect(home().siegeMachines().count()).toBe(8);
  });

  it('byWorkshop(7) includes battle drill', () => {
    expect(home().siegeMachines().byWorkshop(7).find('battle-drill')).toBeDefined();
  });

  it('byWorkshop(6) does not include battle drill', () => {
    expect(home().siegeMachines().byWorkshop(6).find('battle-drill')).toBeUndefined();
  });

  it('byTownHall(16) includes battle drill', () => {
    expect(home().siegeMachines().byTownHall(16).find('battle-drill')).toBeDefined();
  });

  it('byTownHall(15) does not include battle drill', () => {
    expect(home().siegeMachines().byTownHall(15).find('battle-drill')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byWorkshop(7)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byWorkshop(7),
);

testFilterImmutability(
  'byTownHall(16)',
  () => home().siegeMachines(),
  (q) => (q as HomeVillageSiegeMachines).byTownHall(16),
);
