import { home, HomeVillageTroops } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().troops().
 * Only this file needs updating when a new troop is added.
 */
describe('troops() namespace', () => {
  it('has 31 troops', () => {
    expect(home().troops().count()).toBe(31);
  });

  it('byType("regular") returns 19 troops', () => {
    expect(home().troops().byType('regular').count()).toBe(19);
  });

  it('byType("dark") returns 12 troops', () => {
    expect(home().troops().byType('dark').count()).toBe(12);
  });

  it('byType counts sum to total', () => {
    expect(home().troops().byType('regular').count() + home().troops().byType('dark').count()).toBe(
      home().troops().count(),
    );
  });

  it('withSuperTroop() returns 17 troops', () => {
    expect(home().troops().withSuperTroop().count()).toBe(17);
  });

  it('byType("regular") returns only regular troops', () => {
    expect(
      home()
        .troops()
        .byType('regular')
        .get()
        .every((t) => t.troopType === 'regular'),
    ).toBe(true);
  });

  it('byType("dark") returns only dark troops', () => {
    expect(
      home()
        .troops()
        .byType('dark')
        .get()
        .every((t) => t.troopType === 'dark'),
    ).toBe(true);
  });

  it('withSuperTroop() returns troops with superTroop defined', () => {
    expect(
      home()
        .troops()
        .withSuperTroop()
        .get()
        .every((t) => t.superTroop !== undefined),
    ).toBe(true);
  });
});

testFilterImmutability(
  'byType("regular")',
  () => home().troops(),
  (q) => (q as HomeVillageTroops).byType('regular'),
);

testFilterImmutability(
  'byType("dark")',
  () => home().troops(),
  (q) => (q as HomeVillageTroops).byType('dark'),
);

testFilterImmutability(
  'withSuperTroop()',
  () => home().troops(),
  (q) => (q as HomeVillageTroops).withSuperTroop(),
);

testFilterImmutability(
  'byTownHall(8)',
  () => home().troops(),
  (q) => (q as HomeVillageTroops).byTownHall(8),
);
