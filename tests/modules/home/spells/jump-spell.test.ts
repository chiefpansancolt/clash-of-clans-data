import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Jump Spell ───────────────────────────────────────────────────────────────

describe('jumpSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().jumpSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('jump-spell');
    expect(s.name).toBe('Jump Spell');
  });

  it('has 5 levels', () => {
    expect(home().spells().jumpSpell().first()!.levels).toHaveLength(5);
  });

  it('is a regular spell', () => {
    expect(home().spells().jumpSpell().first()!.spellType).toBe('regular');
  });

  it('has radius 3.5, housing space 2, boost time 1s', () => {
    const s = home().spells().jumpSpell().first()!;
    expect(s.radius).toBe(3.5);
    expect(s.housingSpace).toBe(2);
    expect(s.boostTime).toBe(1);
  });

  it('has no pulses', () => {
    const s = home().spells().jumpSpell().first()!;
    expect(s.numberOfPulses).toBeUndefined();
    expect(s.timeBetweenPulses).toBeUndefined();
  });

  it('requires Spell Factory level 4', () => {
    expect(home().spells().jumpSpell().first()!.spellFactoryLevelRequired).toBe(4);
  });

  it('has an icon image', () => {
    expect(home().spells().jumpSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: duration 20s, no research, TH8', () => {
    const lvl = home().spells().jumpSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.spellDuration).toBe(20);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 5, TH8, 1M Elixir, 1d, duration 40s', () => {
    const lvl = home().spells().jumpSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.spellDuration).toBe(40);
    expect(lvl.laboratoryRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.researchCost).toBe(1000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 3: Lab 8, TH10, duration 60s', () => {
    const lvl = home().spells().jumpSpell().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.spellDuration).toBe(60);
    expect(lvl.laboratoryRequired).toBe(8);
    expect(lvl.townHallRequired).toBe(10);
  });

  it('level 5: Lab 13, TH15, 8M Elixir, 6d 12h, duration 100s', () => {
    const lvl = home().spells().jumpSpell().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.spellDuration).toBe(100);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(8000000);
    expect(lvl.researchTime).toEqual({ days: 6, hours: 12, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().jumpSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().jumpSpell()', () => home().spells().jumpSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with jump spell', () => {
  it('has 8 spells total', () => {
    expect(home().spells().count()).toBe(8);
  });

  it('byType("regular") returns 8 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(8);
  });

  it('byTownHall(8) includes jump spell', () => {
    expect(home().spells().byTownHall(8).find('jump-spell')).toBeDefined();
  });

  it('byTownHall(7) does not include jump spell', () => {
    expect(home().spells().byTownHall(7).find('jump-spell')).toBeUndefined();
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
