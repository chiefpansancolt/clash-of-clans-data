import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Invisibility Spell ───────────────────────────────────────────────────────

describe('invisibilitySpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().invisibilitySpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('invisibility-spell');
    expect(s.name).toBe('Invisibility Spell');
  });

  it('has 4 levels', () => {
    expect(home().spells().invisibilitySpell().first()!.levels).toHaveLength(4);
  });

  it('is a regular spell', () => {
    expect(home().spells().invisibilitySpell().first()!.spellType).toBe('regular');
  });

  it('has radius 4, housing space 1', () => {
    const s = home().spells().invisibilitySpell().first()!;
    expect(s.radius).toBe(4);
    expect(s.housingSpace).toBe(1);
  });

  it('has no pulses, boost time, or constant spell duration', () => {
    const s = home().spells().invisibilitySpell().first()!;
    expect(s.numberOfPulses).toBeUndefined();
    expect(s.boostTime).toBeUndefined();
    expect(s.spellDuration).toBeUndefined();
  });

  it('requires Spell Factory level 6', () => {
    expect(home().spells().invisibilitySpell().first()!.spellFactoryLevelRequired).toBe(6);
  });

  it('has an icon image', () => {
    expect(home().spells().invisibilitySpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: duration 3.5s, no research, TH10', () => {
    const lvl = home().spells().invisibilitySpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.spellDuration).toBe(3.5);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(10);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 9, TH11, 5M Elixir, 3d, duration 3.75s', () => {
    const lvl = home().spells().invisibilitySpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.spellDuration).toBe(3.75);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.researchCost).toBe(5000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 3: Lab 10, TH12, 4d, duration 4s', () => {
    const lvl = home().spells().invisibilitySpell().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.spellDuration).toBe(4);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4: Lab 11, TH13, 7M Elixir, 5d, duration 4.25s', () => {
    const lvl = home().spells().invisibilitySpell().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.spellDuration).toBe(4.25);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(7000000);
    expect(lvl.researchTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().invisibilitySpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().invisibilitySpell()', () =>
  home().spells().invisibilitySpell(),
);

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with invisibility spell', () => {
  it('has 7 spells total', () => {
    expect(home().spells().count()).toBe(7);
  });

  it('byType("regular") returns 7 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(7);
  });

  it('byTownHall(10) includes invisibility spell', () => {
    expect(home().spells().byTownHall(10).find('invisibility-spell')).toBeDefined();
  });

  it('byTownHall(9) does not include invisibility spell', () => {
    expect(home().spells().byTownHall(9).find('invisibility-spell')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byType("regular")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('regular'),
);

testFilterImmutability(
  'byTownHall(10)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(10),
);
