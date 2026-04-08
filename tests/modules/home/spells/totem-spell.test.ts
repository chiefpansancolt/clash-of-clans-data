import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Totem Spell ──────────────────────────────────────────────────────────────

describe('totemSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().totemSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('totem-spell');
    expect(s.name).toBe('Totem Spell');
  });

  it('has 4 levels', () => {
    expect(home().spells().totemSpell().first()!.levels).toHaveLength(4);
  });

  it('is a regular spell', () => {
    expect(home().spells().totemSpell().first()!.spellType).toBe('regular');
  });

  it('has radius 5, housing space 1, targetType both', () => {
    const s = home().spells().totemSpell().first()!;
    expect(s.radius).toBe(5);
    expect(s.housingSpace).toBe(1);
    expect(s.targetType).toBe('both');
  });

  it('requires Spell Factory level 9', () => {
    expect(home().spells().totemSpell().first()!.spellFactoryLevelRequired).toBe(9);
  });

  it('has hitpointDecayPerSecond 334', () => {
    expect(home().spells().totemSpell().first()!.hitpointDecayPerSecond).toBe(334);
  });

  it('has an icon image', () => {
    expect(home().spells().totemSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: totemHitpoints 10000, no research, TH13', () => {
    const lvl = home().spells().totemSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.totemHitpoints).toBe(10000);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 14, TH16, 21M Elixir, 12d, totemHitpoints 11000', () => {
    const lvl = home().spells().totemSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.totemHitpoints).toBe(11000);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(21000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 12, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 3: Lab 15, TH17, 22M Elixir, 14d, totemHitpoints 12000', () => {
    const lvl = home().spells().totemSpell().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.totemHitpoints).toBe(12000);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchTime).toEqual({ days: 14, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4: Lab 16, TH17, 23M Elixir, 16d, totemHitpoints 13000', () => {
    const lvl = home().spells().totemSpell().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.totemHitpoints).toBe(13000);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(23000000);
    expect(lvl.researchTime).toEqual({ days: 16, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().totemSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().totemSpell()', () => home().spells().totemSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with totem spell', () => {
  it('has 13 spells total', () => {
    expect(home().spells().count()).toBe(13);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byTownHall(13) includes totem spell', () => {
    expect(home().spells().byTownHall(13).find('totem-spell')).toBeDefined();
  });

  it('byTownHall(12) does not include totem spell', () => {
    expect(home().spells().byTownHall(12).find('totem-spell')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byType("regular")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('regular'),
);

testFilterImmutability(
  'byTownHall(13)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(13),
);
