import { home, HomeVillagePets } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().pets().
 * Only this file needs updating when a new pet is added.
 */
describe('pets() namespace', () => {
  it('has 12 pets', () => {
    expect(home().pets().count()).toBe(12);
  });

  it('byPetHouse returns only pets unlockable at that level', () => {
    const ph1 = home().pets().byPetHouse(1).get();
    expect(ph1.length).toBeGreaterThan(0);
    expect(ph1.every((p) => p.petHouseLevelRequired <= 1)).toBe(true);
  });

  it('byPetHouse(0) returns empty', () => {
    expect(home().pets().byPetHouse(0).count()).toBe(0);
  });

  it('byPetHouse(12) returns all pets', () => {
    expect(home().pets().byPetHouse(12).count()).toBe(home().pets().count());
  });

  it('byTownHall returns only pets available at that TH', () => {
    const th14 = home().pets().byTownHall(14).get();
    expect(th14.length).toBeGreaterThan(0);
  });
});

testFilterImmutability(
  'byPetHouse(1)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byPetHouse(1),
);

testFilterImmutability(
  'byTownHall(14)',
  () => home().pets(),
  (q) => (q as HomeVillagePets).byTownHall(14),
);
