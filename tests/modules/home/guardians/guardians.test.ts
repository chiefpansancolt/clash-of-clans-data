import { home, HomeVillageGuardians } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().guardians().
 * Only this file needs updating when a new guardian is added.
 */
describe('guardians() namespace', () => {
  it('has 2 guardians', () => {
    expect(home().guardians().count()).toBe(2);
  });

  it('byGuardianType("longshot") returns 1 guardian', () => {
    expect(home().guardians().byGuardianType('longshot').count()).toBe(1);
  });

  it('byGuardianType("smasher") returns 1 guardian', () => {
    expect(home().guardians().byGuardianType('smasher').count()).toBe(1);
  });

  it('byGuardianType returns only guardians of that type', () => {
    const ls = home().guardians().byGuardianType('longshot').get();
    expect(ls.every((g) => g.guardianType === 'longshot')).toBe(true);
  });

  it('byTownHall(17) excludes all guardians (all require TH18)', () => {
    expect(home().guardians().byTownHall(17).count()).toBe(0);
  });

  it('byTownHall(18) includes all guardians', () => {
    expect(home().guardians().byTownHall(18).count()).toBe(home().guardians().count());
  });

  it('guardians() is a HomeVillageGuardians instance', () => {
    expect(home().guardians()).toBeInstanceOf(HomeVillageGuardians);
  });
});

testFilterImmutability(
  'byGuardianType("longshot")',
  () => home().guardians(),
  (q) => (q as HomeVillageGuardians).byGuardianType('longshot'),
);

testFilterImmutability(
  'byTownHall(18)',
  () => home().guardians(),
  (q) => (q as HomeVillageGuardians).byTownHall(18),
);
