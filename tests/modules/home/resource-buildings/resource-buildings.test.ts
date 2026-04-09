import { home, HomeVillageClanCastle, HomeVillageResourceBuildings } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().resourceBuildings().
 * Only this file needs updating when a new resource building is added.
 */
describe('resourceBuildings() namespace', () => {
  it('has 6 resource buildings', () => {
    expect(home().resourceBuildings().count()).toBe(6);
  });

  it('byTownHall(1) returns at least one resource building', () => {
    expect(home().resourceBuildings().byTownHall(1).count()).toBeGreaterThan(0);
  });

  it('byTownHall returns only buildings available at that TH', () => {
    const th1 = home().resourceBuildings().byTownHall(1).get();
    expect(
      th1.every((b) => b.availablePerTownHall.some((e) => e.townHallLevel === 1 && e.count > 0)),
    ).toBe(true);
  });

  it('HomeVillageClanCastle defaults to clan castle data', () => {
    expect(new HomeVillageClanCastle().count()).toBe(1);
    expect(new HomeVillageClanCastle().first()!.id).toBe('clan-castle');
  });

  it('resourceBuildings() is a HomeVillageResourceBuildings instance', () => {
    expect(home().resourceBuildings()).toBeInstanceOf(HomeVillageResourceBuildings);
  });
});

testFilterImmutability(
  'byTownHall(1)',
  () => home().resourceBuildings(),
  (q) => (q as HomeVillageResourceBuildings).byTownHall(1),
);
