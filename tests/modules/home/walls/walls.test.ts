import { home, HomeVillageWalls } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().walls().
 * Only this file needs updating when wall data changes.
 */
describe('walls() namespace', () => {
  it('has 1 wall type', () => {
    expect(home().walls().count()).toBe(1);
  });

  it('byTownHall(2) returns the wall', () => {
    expect(home().walls().byTownHall(2).count()).toBe(1);
  });

  it('byTownHall(1) returns empty (walls unlock at TH2)', () => {
    expect(home().walls().byTownHall(1).count()).toBe(0);
  });

  it('walls() is a HomeVillageWalls instance', () => {
    expect(home().walls()).toBeInstanceOf(HomeVillageWalls);
  });
});

testFilterImmutability(
  'byTownHall(5)',
  () => home().walls(),
  (q) => (q as HomeVillageWalls).byTownHall(5),
);
