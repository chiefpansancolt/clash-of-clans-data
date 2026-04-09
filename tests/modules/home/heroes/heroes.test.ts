import { home, HomeVillageHeroes } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().heroes().
 * Only this file needs updating when a new hero is added.
 */
describe('heroes() namespace', () => {
  it('has 6 heroes', () => {
    expect(home().heroes().count()).toBe(6);
  });

  it('byHeroHall returns only heroes unlockable at that level', () => {
    const hh1 = home().heroes().byHeroHall(1).get();
    expect(hh1.length).toBeGreaterThan(0);
    expect(hh1.every((h) => h.levels.some((l) => l.heroHallLevelRequired <= 1))).toBe(true);
  });

  it('byHeroHall(0) returns empty', () => {
    expect(home().heroes().byHeroHall(0).count()).toBe(0);
  });

  it('byHeroHall(15) returns all heroes', () => {
    expect(home().heroes().byHeroHall(15).count()).toBe(home().heroes().count());
  });
});

testFilterImmutability(
  'byHeroHall(1)',
  () => home().heroes(),
  (q) => (q as HomeVillageHeroes).byHeroHall(1),
);
