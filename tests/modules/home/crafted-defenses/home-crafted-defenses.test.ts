import { home } from '@/modules/home';
import { HomeVillageCraftedDefenses } from '@/modules/home';

describe('homeCraftedDefenses()', () => {
  it('returns a HomeVillageCraftedDefenses', () => {
    expect(home().craftedDefenses()).toBeInstanceOf(HomeVillageCraftedDefenses);
  });

  it('has 9 defenses (Phase 1 + Phase 2 + Phase 3)', () => {
    expect(home().craftedDefenses().count()).toBe(9);
  });

  it('byPhase() returns a HomeVillageCraftedDefenses', () => {
    expect(home().craftedDefenses().byPhase(1)).toBeInstanceOf(HomeVillageCraftedDefenses);
  });

  it('current() returns a HomeVillageCraftedDefenses', () => {
    expect(home().craftedDefenses().current()).toBeInstanceOf(HomeVillageCraftedDefenses);
  });

  it('former() returns a HomeVillageCraftedDefenses', () => {
    expect(home().craftedDefenses().former()).toBeInstanceOf(HomeVillageCraftedDefenses);
  });

  it('byTargetType() returns a HomeVillageCraftedDefenses', () => {
    expect(home().craftedDefenses().byTargetType('both')).toBeInstanceOf(
      HomeVillageCraftedDefenses,
    );
  });

  it('get() returns an array', () => {
    expect(Array.isArray(home().craftedDefenses().get())).toBe(true);
  });
});
