import { home, HomeVillageTraps } from '@/modules/home';
import { testFilterImmutability } from '../../../helpers';

/**
 * Namespace-level tests for home().traps().
 * Only this file needs updating when a new trap is added.
 */
describe('traps() namespace', () => {
  it('has 8 traps', () => {
    expect(home().traps().count()).toBe(8);
  });

  it('byTownHall(3) returns at least one trap', () => {
    expect(home().traps().byTownHall(3).count()).toBeGreaterThan(0);
  });

  it('byTargetType("ground") returns only ground-targeting traps', () => {
    const ground = home().traps().byTargetType('ground').get();
    expect(ground.length).toBeGreaterThan(0);
    expect(ground.every((t) => t.targetType === 'ground')).toBe(true);
  });

  it('byTargetType("air") returns only air-targeting traps', () => {
    const air = home().traps().byTargetType('air').get();
    expect(air.length).toBeGreaterThan(0);
    expect(air.every((t) => t.targetType === 'air')).toBe(true);
  });

  it('byTrap("Bomb") returns the Bomb trap', () => {
    expect(home().traps().byTrap('Bomb').count()).toBe(1);
    expect(home().traps().byTrap('bomb').count()).toBe(1);
  });

  it('byTrap("unknown") returns empty', () => {
    expect(home().traps().byTrap('unknown').count()).toBe(0);
  });

  it('traps() is a HomeVillageTraps instance', () => {
    expect(home().traps()).toBeInstanceOf(HomeVillageTraps);
  });
});

testFilterImmutability(
  'byTownHall(10)',
  () => home().traps(),
  (q) => (q as HomeVillageTraps).byTownHall(10),
);

testFilterImmutability(
  'byTargetType("ground")',
  () => home().traps(),
  (q) => (q as HomeVillageTraps).byTargetType('ground'),
);
