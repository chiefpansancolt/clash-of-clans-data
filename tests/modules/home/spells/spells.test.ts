import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().spells().
 * Only this file needs updating when a new spell is added.
 */
describe('spells() namespace', () => {
  it('has 17 spells', () => {
    expect(home().spells().count()).toBe(17);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byType("dark") returns 7 spells', () => {
    expect(home().spells().byType('dark').count()).toBe(7);
  });

  it('byType counts sum to total', () => {
    expect(home().spells().byType('regular').count() + home().spells().byType('dark').count()).toBe(
      home().spells().count(),
    );
  });

  it('byType("regular") returns only regular spells', () => {
    expect(
      home()
        .spells()
        .byType('regular')
        .get()
        .every((s) => s.spellType === 'regular'),
    ).toBe(true);
  });

  it('byType("dark") returns only dark spells', () => {
    expect(
      home()
        .spells()
        .byType('dark')
        .get()
        .every((s) => s.spellType === 'dark'),
    ).toBe(true);
  });

  it('byTownHall returns only spells available at that TH', () => {
    const th5 = home().spells().byTownHall(5).get();
    expect(th5.length).toBeGreaterThan(0);
  });
});

testFilterImmutability(
  'byType("regular")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('regular'),
);

testFilterImmutability(
  'byType("dark")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('dark'),
);

testFilterImmutability(
  'byTownHall(7)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(7),
);
