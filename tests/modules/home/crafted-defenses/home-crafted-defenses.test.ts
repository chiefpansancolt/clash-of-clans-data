import { HomeCraftedDefenseQuery, homeCraftedDefenses } from '@/modules/home/crafted-defenses';

describe('homeCraftedDefenses()', () => {
  it('returns a HomeCraftedDefenseQuery', () => {
    expect(homeCraftedDefenses()).toBeInstanceOf(HomeCraftedDefenseQuery);
  });

  it('has 9 defenses (Phase 1 + Phase 2 + Phase 3)', () => {
    expect(homeCraftedDefenses().count()).toBe(9);
  });

  it('byPhase() returns a HomeCraftedDefenseQuery', () => {
    expect(homeCraftedDefenses().byPhase(1)).toBeInstanceOf(HomeCraftedDefenseQuery);
  });

  it('current() returns a HomeCraftedDefenseQuery', () => {
    expect(homeCraftedDefenses().current()).toBeInstanceOf(HomeCraftedDefenseQuery);
  });

  it('former() returns a HomeCraftedDefenseQuery', () => {
    expect(homeCraftedDefenses().former()).toBeInstanceOf(HomeCraftedDefenseQuery);
  });

  it('byTargetType() returns a HomeCraftedDefenseQuery', () => {
    expect(homeCraftedDefenses().byTargetType('both')).toBeInstanceOf(HomeCraftedDefenseQuery);
  });

  it('get() returns an array', () => {
    expect(Array.isArray(homeCraftedDefenses().get())).toBe(true);
  });
});
