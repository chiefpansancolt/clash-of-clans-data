import { home, HomeVillageDefenses } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

/**
 * Namespace-level tests for home().defenses().
 * testQueryBaseContract and filter immutability live here — not duplicated
 * per individual defense file.
 */
testQueryBaseContract('homeDefenses', () => home().defenses());

describe('defenses() namespace', () => {
  it('get() returns all defenses', () => {
    expect(home().defenses().count()).toBeGreaterThan(0);
  });

  it('byBuilding filters case-insensitively', () => {
    expect(home().defenses().byBuilding('cannon').count()).toBe(1);
    expect(home().defenses().byBuilding('CANNON').count()).toBe(1);
  });

  it('byBuilding returns empty for unknown building', () => {
    expect(home().defenses().byBuilding('unknown').count()).toBe(0);
  });

  it('byTownHall(1) returns at least one defense', () => {
    expect(home().defenses().byTownHall(1).count()).toBeGreaterThan(0);
  });

  it('byDamageType("single") returns only single-target defenses', () => {
    const single = home().defenses().byDamageType('single').get();
    expect(single.length).toBeGreaterThan(0);
    expect(single.every((d) => d.modes.normal?.damageType === 'single')).toBe(true);
  });

  it('byDamageType("splash") returns only splash defenses', () => {
    const splash = home().defenses().byDamageType('splash').get();
    expect(splash.length).toBeGreaterThan(0);
    expect(splash.every((d) => d.modes.normal?.damageType === 'splash')).toBe(true);
  });

  it('hasGearUp() returns at least 2 defenses', () => {
    expect(home().defenses().hasGearUp().count()).toBeGreaterThanOrEqual(2);
  });

  it('hasGearUp() returns only defenses with a gearUp', () => {
    expect(
      home()
        .defenses()
        .hasGearUp()
        .get()
        .every((d) => d.gearUp !== undefined),
    ).toBe(true);
  });
});

testFilterImmutability(
  'byBuilding("Cannon")',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byBuilding('Cannon'),
);

testFilterImmutability(
  'byTownHall(10)',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byTownHall(10),
);

testFilterImmutability(
  'byDamageType("single")',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).byDamageType('single'),
);

testFilterImmutability(
  'hasGearUp()',
  () => home().defenses(),
  (q) => (q as HomeVillageDefenses).hasGearUp(),
);
