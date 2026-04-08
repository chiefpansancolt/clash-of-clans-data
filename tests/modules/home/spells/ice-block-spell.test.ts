import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Ice Block Spell ──────────────────────────────────────────────────────────

describe('iceBlockSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().iceBlockSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('ice-block-spell');
    expect(s.name).toBe('Ice Block Spell');
  });

  it('has 5 levels', () => {
    expect(home().spells().iceBlockSpell().first()!.levels).toHaveLength(5);
  });

  it('is a dark spell', () => {
    expect(home().spells().iceBlockSpell().first()!.spellType).toBe('dark');
  });

  it('has housing space 1, targetType both, radius 5', () => {
    const s = home().spells().iceBlockSpell().first()!;
    expect(s.housingSpace).toBe(1);
    expect(s.targetType).toBe('both');
    expect(s.radius).toBe(5);
  });

  it('requires Dark Spell Factory level 7', () => {
    expect(home().spells().iceBlockSpell().first()!.spellFactoryLevelRequired).toBe(7);
  });

  it('has an icon image', () => {
    expect(home().spells().iceBlockSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: incomingDamageReduction 86, spellDuration 7, no research, TH12', () => {
    const lvl = home().spells().iceBlockSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.incomingDamageReduction).toBe(86);
    expect(lvl.spellDuration).toBe(7);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 3: incomingDamageReduction 90, Lab 13, TH15, 200000 Dark Elixir, 11d', () => {
    const lvl = home().spells().iceBlockSpell().first()!.levels[2];
    expect(lvl.level).toBe(3);
    expect(lvl.incomingDamageReduction).toBe(90);
    expect(lvl.spellDuration).toBe(7);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(200000);
    expect(lvl.researchTime).toEqual({ days: 11, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: incomingDamageReduction 94, Lab 15, TH17, 320000 Dark Elixir, 16d', () => {
    const lvl = home().spells().iceBlockSpell().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.incomingDamageReduction).toBe(94);
    expect(lvl.spellDuration).toBe(7);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(320000);
    expect(lvl.researchTime).toEqual({ days: 16, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().iceBlockSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().iceBlockSpell()', () => home().spells().iceBlockSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with ice block spell', () => {
  it('has 17 spells total', () => {
    expect(home().spells().count()).toBe(17);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byType("dark") returns 7 spells', () => {
    expect(home().spells().byType('dark').count()).toBe(7);
  });

  it('byTownHall(12) includes ice block spell', () => {
    expect(home().spells().byTownHall(12).find('ice-block-spell')).toBeDefined();
  });

  it('byTownHall(11) does not include ice block spell', () => {
    expect(home().spells().byTownHall(11).find('ice-block-spell')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byType("dark")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('dark'),
);

testFilterImmutability(
  'byTownHall(12)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(12),
);
