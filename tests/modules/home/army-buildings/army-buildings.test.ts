import {
  home,
  HomeVillageArmyBuildings,
  HomeVillageBarracks,
  HomeVillageBlacksmith,
  HomeVillageDarkBarracks,
  HomeVillageDarkSpellFactory,
  HomeVillageHeroBanner,
  HomeVillageHeroHall,
  HomeVillageLaboratory,
  HomeVillagePetHouse,
  HomeVillageSpellFactory,
  HomeVillageWorkshop,
} from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().armyBuildings().
 * Only this file needs updating when a new army building is added.
 */
describe('armyBuildings() namespace', () => {
  it('armyBuildings() is a HomeVillageArmyBuildings instance', () => {
    expect(home().armyBuildings()).toBeInstanceOf(HomeVillageArmyBuildings);
  });

  it('byTownHall(1) returns at least one army building', () => {
    expect(home().armyBuildings().byTownHall(1).count()).toBeGreaterThan(0);
  });

  it('byTownHall returns only buildings available at that TH', () => {
    const th1 = home().armyBuildings().byTownHall(1).get();
    expect(
      th1.every((b) => b.availablePerTownHall.some((e) => e.townHallLevel === 1 && e.count > 0)),
    ).toBe(true);
  });

  it('per-building classes default to their own data', () => {
    expect(new HomeVillageBarracks().count()).toBe(1);
    expect(new HomeVillageDarkBarracks().count()).toBe(1);
    expect(new HomeVillageLaboratory().count()).toBe(1);
    expect(new HomeVillageSpellFactory().count()).toBe(1);
    expect(new HomeVillageDarkSpellFactory().count()).toBe(1);
    expect(new HomeVillageHeroBanner().count()).toBe(1);
    expect(new HomeVillageHeroHall().count()).toBe(1);
    expect(new HomeVillageBlacksmith().count()).toBe(1);
    expect(new HomeVillageWorkshop().count()).toBe(1);
    expect(new HomeVillagePetHouse().count()).toBe(1);
  });
});

testFilterImmutability(
  'byTownHall(1)',
  () => home().armyBuildings(),
  (q) => (q as HomeVillageArmyBuildings).byTownHall(1),
);
