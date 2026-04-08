import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Freeze Spell ─────────────────────────────────────────────────────────────

describe('freezeSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().freezeSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('freeze-spell');
    expect(s.name).toBe('Freeze Spell');
  });

  it('has 7 levels', () => {
    expect(home().spells().freezeSpell().first()!.levels).toHaveLength(7);
  });

  it('is a regular spell', () => {
    expect(home().spells().freezeSpell().first()!.spellType).toBe('regular');
  });

  it('has radius 3.5, housing space 1', () => {
    const s = home().spells().freezeSpell().first()!;
    expect(s.radius).toBe(3.5);
    expect(s.housingSpace).toBe(1);
  });

  it('has no pulses or boost time', () => {
    const s = home().spells().freezeSpell().first()!;
    expect(s.numberOfPulses).toBeUndefined();
    expect(s.boostTime).toBeUndefined();
  });

  it('requires Spell Factory level 4', () => {
    expect(home().spells().freezeSpell().first()!.spellFactoryLevelRequired).toBe(4);
  });

  it('has an icon image', () => {
    expect(home().spells().freezeSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: freeze 2.5s, no research, TH8', () => {
    const lvl = home().spells().freezeSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.spellDuration).toBe(2.5);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 7, TH9, 1.2M Elixir, 1d, freeze 3.0s', () => {
    const lvl = home().spells().freezeSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.spellDuration).toBe(3.0);
    expect(lvl.laboratoryRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(9);
    expect(lvl.researchCost).toBe(1200000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
  });

  it('levels 3–5 all require Lab 8, TH10', () => {
    const levels = home().spells().freezeSpell().first()!.levels;
    expect(levels[2].laboratoryRequired).toBe(8);
    expect(levels[2].townHallRequired).toBe(10);
    expect(levels[3].laboratoryRequired).toBe(8);
    expect(levels[3].townHallRequired).toBe(10);
    expect(levels[4].laboratoryRequired).toBe(8);
    expect(levels[4].townHallRequired).toBe(10);
  });

  it('level 7: Lab 10, TH12, 5.5s freeze, 7M Elixir, 5d', () => {
    const lvl = home().spells().freezeSpell().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.spellDuration).toBe(5.5);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(7000000);
    expect(lvl.researchTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().freezeSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().freezeSpell()', () => home().spells().freezeSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with freeze spell', () => {
  it('has 16 spells total', () => {
    expect(home().spells().count()).toBe(16);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byTownHall(8) includes freeze spell', () => {
    expect(home().spells().byTownHall(8).find('freeze-spell')).toBeDefined();
  });

  it('byTownHall(7) does not include freeze spell', () => {
    expect(home().spells().byTownHall(7).find('freeze-spell')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byType("regular")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('regular'),
);

testFilterImmutability(
  'byTownHall(8)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(8),
);
