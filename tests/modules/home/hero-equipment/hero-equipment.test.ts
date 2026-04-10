import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().heroEquipment().
 *
 * Count and filter contract tests live here so only this file needs
 * updating when new equipment is added — not every individual test file.
 */
describe('heroEquipment() namespace', () => {
  it('has 21 equipment', () => {
    expect(home().heroEquipment().count()).toBe(21);
  });

  it('byHero("barbarian-king") returns only BK equipment', () => {
    const results = home().heroEquipment().byHero('barbarian-king').get();
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((e) => e.hero === 'barbarian-king')).toBe(true);
  });

  it('byHero("archer-queen") returns only AQ equipment', () => {
    const results = home().heroEquipment().byHero('archer-queen').get();
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((e) => e.hero === 'archer-queen')).toBe(true);
  });

  it('byHero returns empty for unknown hero', () => {
    expect(home().heroEquipment().byHero('unknown-hero').count()).toBe(0);
  });

  it('byRarity("Common") returns only Common equipment', () => {
    const results = home().heroEquipment().byRarity('Common').get();
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((e) => e.rarity === 'Common')).toBe(true);
  });

  it('byRarity("Epic") returns only Epic equipment', () => {
    const results = home().heroEquipment().byRarity('Epic').get();
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((e) => e.rarity === 'Epic')).toBe(true);
  });

  it('byBlacksmith(0) includes equipment available without Blacksmith', () => {
    expect(home().heroEquipment().byBlacksmith(0).count()).toBeGreaterThan(0);
  });

  it('byBlacksmith(9) returns all equipment', () => {
    expect(home().heroEquipment().byBlacksmith(9).count()).toBe(home().heroEquipment().count());
  });
});

testFilterImmutability(
  'byHero("barbarian-king")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byHero('barbarian-king'),
);

testFilterImmutability(
  'byHero("archer-queen")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byHero('archer-queen'),
);

testFilterImmutability(
  'byRarity("Common")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byRarity('Common'),
);

testFilterImmutability(
  'byRarity("Epic")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byRarity('Epic'),
);

testFilterImmutability(
  'byBlacksmith(5)',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byBlacksmith(5),
);
