import {
  home,
  HomeVillageAlchemist,
  HomeVillageBuildersApprentice,
  HomeVillageHelperHut,
  HomeVillageLabAssistant,
  HomeVillageProspector,
} from '@/modules/home';

/**
 * Namespace-level tests for home().otherBuildings().
 * Only this file needs updating when a new other building or helper is added.
 */
describe('otherBuildings() namespace', () => {
  it('has 1 other building (bobs-hut)', () => {
    expect(home().otherBuildings().count()).toBe(1);
  });

  it('helpers() returns all 4 helpers', () => {
    expect(home().otherBuildings().helpers().count()).toBe(4);
  });

  it('helpers().byTownHall(14) returns helpers available at TH14', () => {
    expect(home().otherBuildings().helpers().byTownHall(14).count()).toBeGreaterThan(0);
  });

  it('per-helper classes default to their own data', () => {
    expect(new HomeVillageHelperHut().count()).toBe(1);
    expect(new HomeVillageLabAssistant().count()).toBe(1);
    expect(new HomeVillageBuildersApprentice().count()).toBe(1);
    expect(new HomeVillageAlchemist().count()).toBe(1);
    expect(new HomeVillageProspector().count()).toBe(1);
  });
});
