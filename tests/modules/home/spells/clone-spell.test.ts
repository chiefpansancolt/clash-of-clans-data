import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Clone Spell ──────────────────────────────────────────────────────────────

describe('cloneSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().cloneSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('clone-spell');
    expect(s.name).toBe('Clone Spell');
  });

  it('has 8 levels', () => {
    expect(home().spells().cloneSpell().first()!.levels).toHaveLength(8);
  });

  it('is a regular spell', () => {
    expect(home().spells().cloneSpell().first()!.spellType).toBe('regular');
  });

  it('has radius 3.5, housing space 3', () => {
    const s = home().spells().cloneSpell().first()!;
    expect(s.radius).toBe(3.5);
    expect(s.housingSpace).toBe(3);
  });

  it('has constant spell duration 18s and cloned lifespan 30s', () => {
    const s = home().spells().cloneSpell().first()!;
    expect(s.spellDuration).toBe(18);
    expect(s.clonedLifespan).toBe(30);
  });

  it('requires Spell Factory level 5', () => {
    expect(home().spells().cloneSpell().first()!.spellFactoryLevelRequired).toBe(5);
  });

  it('has an icon image', () => {
    expect(home().spells().cloneSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: clonedCapacity 22, no research, TH9', () => {
    const lvl = home().spells().cloneSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.clonedCapacity).toBe(22);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(9);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 8, TH10, 1.5M Elixir, 1d, capacity 24', () => {
    const lvl = home().spells().cloneSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.clonedCapacity).toBe(24);
    expect(lvl.laboratoryRequired).toBe(8);
    expect(lvl.townHallRequired).toBe(10);
    expect(lvl.researchCost).toBe(1500000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4: Lab 9, TH11, 2d 6h, capacity 28', () => {
    const lvl = home().spells().cloneSpell().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.clonedCapacity).toBe(28);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.researchTime).toEqual({ days: 2, hours: 6, minutes: 0, seconds: 0 });
  });

  it('level 8: Lab 13, TH15, 9M Elixir, 7d, capacity 42', () => {
    const lvl = home().spells().cloneSpell().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.clonedCapacity).toBe(42);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(9000000);
    expect(lvl.researchTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().cloneSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().cloneSpell()', () => home().spells().cloneSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with clone spell', () => {
  it('has 16 spells total', () => {
    expect(home().spells().count()).toBe(16);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byTownHall(9) includes clone spell', () => {
    expect(home().spells().byTownHall(9).find('clone-spell')).toBeDefined();
  });

  it('byTownHall(8) does not include clone spell', () => {
    expect(home().spells().byTownHall(8).find('clone-spell')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byType("regular")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('regular'),
);

testFilterImmutability(
  'byTownHall(9)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(9),
);
