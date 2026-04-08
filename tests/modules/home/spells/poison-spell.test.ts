import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Poison Spell ─────────────────────────────────────────────────────────────

describe('poisonSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().poisonSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('poison-spell');
    expect(s.name).toBe('Poison Spell');
  });

  it('has 12 levels', () => {
    expect(home().spells().poisonSpell().first()!.levels).toHaveLength(12);
  });

  it('is a dark spell', () => {
    expect(home().spells().poisonSpell().first()!.spellType).toBe('dark');
  });

  it('has radius 4, housing space 1, targetType both', () => {
    const s = home().spells().poisonSpell().first()!;
    expect(s.radius).toBe(4);
    expect(s.housingSpace).toBe(1);
    expect(s.targetType).toBe('both');
  });

  it('has spellDuration 16', () => {
    expect(home().spells().poisonSpell().first()!.spellDuration).toBe(16);
  });

  it('requires Dark Spell Factory level 1', () => {
    expect(home().spells().poisonSpell().first()!.spellFactoryLevelRequired).toBe(1);
  });

  it('has an icon image', () => {
    expect(home().spells().poisonSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: maxDamagePerSecond 90, speedDecrease 26, attackRateDecrease 35, no research, TH8', () => {
    const lvl = home().spells().poisonSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.maxDamagePerSecond).toBe(90);
    expect(lvl.speedDecrease).toBe(26);
    expect(lvl.attackRateDecrease).toBe(35);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 6, TH8, 5000 Dark Elixir, 6h, maxDPS 115', () => {
    const lvl = home().spells().poisonSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.maxDamagePerSecond).toBe(115);
    expect(lvl.laboratoryRequired).toBe(6);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.researchCost).toBe(5000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 6, minutes: 0, seconds: 0 });
  });

  it('level 8: Lab 12, TH14, 100000 Dark Elixir, 6d 12h, maxDPS 300', () => {
    const lvl = home().spells().poisonSpell().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.maxDamagePerSecond).toBe(300);
    expect(lvl.speedDecrease).toBe(46);
    expect(lvl.attackRateDecrease).toBe(68);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.researchCost).toBe(100000);
    expect(lvl.researchTime).toEqual({ days: 6, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 12: Lab 16, TH17, 350000 Dark Elixir, 14d 12h, maxDPS 380', () => {
    const lvl = home().spells().poisonSpell().first()!.levels[11];
    expect(lvl.level).toBe(12);
    expect(lvl.maxDamagePerSecond).toBe(380);
    expect(lvl.speedDecrease).toBe(52);
    expect(lvl.attackRateDecrease).toBe(74);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(350000);
    expect(lvl.researchTime).toEqual({ days: 14, hours: 12, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().poisonSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().poisonSpell()', () => home().spells().poisonSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with poison spell', () => {
  it('has 13 spells total', () => {
    expect(home().spells().count()).toBe(13);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byType("dark") returns 3 spells', () => {
    expect(home().spells().byType('dark').count()).toBe(3);
  });

  it('byTownHall(8) includes poison spell', () => {
    expect(home().spells().byTownHall(8).find('poison-spell')).toBeDefined();
  });

  it('byTownHall(7) does not include poison spell', () => {
    expect(home().spells().byTownHall(7).find('poison-spell')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byType("dark")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('dark'),
);

testFilterImmutability(
  'byTownHall(8)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(8),
);
