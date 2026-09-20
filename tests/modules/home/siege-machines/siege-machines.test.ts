import { home, HomeVillageSiegeMachines } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().siegeMachines().
 * Only this file needs updating when a new siege machine is added.
 */
describe('siegeMachines() namespace', () => {
  it('has 9 siege machines', () => {
    expect(home().siegeMachines().count()).toBe(9);
  });

  it('byWorkshop returns only machines unlockable at that level', () => {
    const ws1 = home().siegeMachines().byWorkshop(1).get();
    expect(ws1.length).toBeGreaterThan(0);
    expect(ws1.every((m) => m.workshopLevelRequired <= 1)).toBe(true);
  });

  it('byWorkshop(0) returns empty', () => {
    expect(home().siegeMachines().byWorkshop(0).count()).toBe(0);
  });

  it('byTownHall returns only machines unlockable at that TH', () => {
    const th12 = home().siegeMachines().byTownHall(12).get();
    expect(th12.length).toBeGreaterThan(0);
  });

  it('byWorkshop(9) returns all siege machines', () => {
    expect(home().siegeMachines().byWorkshop(9).count()).toBe(home().siegeMachines().count());
  });
});

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
