import { home } from '@/modules/home';
import { HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Lightning Spell ──────────────────────────────────────────────────────────

describe('lightningSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().lightningSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('lightning-spell');
    expect(s.name).toBe('Lightning Spell');
  });

  it('has 13 levels', () => {
    expect(home().spells().lightningSpell().first()!.levels).toHaveLength(13);
  });

  it('is a regular spell', () => {
    expect(home().spells().lightningSpell().first()!.spellType).toBe('regular');
  });

  it('has radius 2, housing space 1, stun time 0.1s', () => {
    const s = home().spells().lightningSpell().first()!;
    expect(s.radius).toBe(2);
    expect(s.housingSpace).toBe(1);
    expect(s.stunTime).toBe(0.1);
  });

  it('requires Spell Factory level 1', () => {
    expect(home().spells().lightningSpell().first()!.spellFactoryLevelRequired).toBe(1);
  });

  it('has an icon image', () => {
    expect(home().spells().lightningSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: damage 150, no research, TH5', () => {
    const lvl = home().spells().lightningSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damage).toBe(150);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(5);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 1, TH5, 50000 Elixir, 2h', () => {
    const lvl = home().spells().lightningSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.damage).toBe(180);
    expect(lvl.laboratoryRequired).toBe(1);
    expect(lvl.townHallRequired).toBe(5);
    expect(lvl.researchCost).toBe(50000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 2, minutes: 0, seconds: 0 });
  });

  it('level 5: Lab 6, TH8, damage 270', () => {
    const lvl = home().spells().lightningSpell().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.damage).toBe(270);
    expect(lvl.laboratoryRequired).toBe(6);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.researchCost).toBe(600000);
    expect(lvl.researchTime).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 9: Lab 10, TH12, damage 560', () => {
    const lvl = home().spells().lightningSpell().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.damage).toBe(560);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(6300000);
    expect(lvl.researchTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 13: Lab 16, TH17, damage 720, 27M Elixir, 14d', () => {
    const lvl = home().spells().lightningSpell().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.damage).toBe(720);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(27000000);
    expect(lvl.researchTime).toEqual({ days: 14, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().lightningSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().lightningSpell()', () => home().spells().lightningSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells()', () => {
  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells()).toBeInstanceOf(HomeVillageSpells);
  });

  it('has 9 spells total', () => {
    expect(home().spells().count()).toBe(9);
  });

  it('byType("regular") returns 9 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(9);
  });

  it('byType("dark") returns 0 spells', () => {
    expect(home().spells().byType('dark').count()).toBe(0);
  });

  it('byTownHall(5) includes lightning spell', () => {
    expect(home().spells().byTownHall(5).find('lightning-spell')).toBeDefined();
  });

  it('byTownHall(4) does not include lightning spell', () => {
    expect(home().spells().byTownHall(4).find('lightning-spell')).toBeUndefined();
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
