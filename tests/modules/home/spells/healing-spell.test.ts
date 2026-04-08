import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Healing Spell ────────────────────────────────────────────────────────────

describe('healingSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().healingSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('healing-spell');
    expect(s.name).toBe('Healing Spell');
  });

  it('has 12 levels', () => {
    expect(home().spells().healingSpell().first()!.levels).toHaveLength(12);
  });

  it('is a regular spell', () => {
    expect(home().spells().healingSpell().first()!.spellType).toBe('regular');
  });

  it('has radius 5, housing space 2', () => {
    const s = home().spells().healingSpell().first()!;
    expect(s.radius).toBe(5);
    expect(s.housingSpace).toBe(2);
  });

  it('has 41 pulses, 0.3s between pulses', () => {
    const s = home().spells().healingSpell().first()!;
    expect(s.numberOfPulses).toBe(41);
    expect(s.timeBetweenPulses).toBe(0.3);
  });

  it('requires Spell Factory level 2', () => {
    expect(home().spells().healingSpell().first()!.spellFactoryLevelRequired).toBe(2);
  });

  it('has an icon image', () => {
    expect(home().spells().healingSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: totalHealing 615, healingPerPulse 15, heroHealing 338.25, no research, TH6', () => {
    const lvl = home().spells().healingSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.totalHealing).toBe(615);
    expect(lvl.healingPerPulse).toBe(15);
    expect(lvl.totalHealingOnHeroes).toBe(338.25);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(6);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 2, TH6, 75000 Elixir, 3h', () => {
    const lvl = home().spells().healingSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.totalHealing).toBe(820);
    expect(lvl.healingPerPulse).toBe(20);
    expect(lvl.totalHealingOnHeroes).toBe(451);
    expect(lvl.laboratoryRequired).toBe(2);
    expect(lvl.townHallRequired).toBe(6);
    expect(lvl.researchCost).toBe(75000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 3, minutes: 0, seconds: 0 });
  });

  it('level 4: Lab 5, TH7, 300000 Elixir, 12h', () => {
    const lvl = home().spells().healingSpell().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.totalHealing).toBe(1230);
    expect(lvl.healingPerPulse).toBe(30);
    expect(lvl.totalHealingOnHeroes).toBe(676.5);
    expect(lvl.laboratoryRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(7);
  });

  it('level 8: Lab 11, TH13, 6M Elixir, 5d', () => {
    const lvl = home().spells().healingSpell().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.totalHealing).toBe(2050);
    expect(lvl.healingPerPulse).toBe(50);
    expect(lvl.totalHealingOnHeroes).toBe(1127.5);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(6000000);
    expect(lvl.researchTime).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 12: Lab 16, TH17, 3075 total healing, 75 per pulse', () => {
    const lvl = home().spells().healingSpell().first()!.levels[11];
    expect(lvl.level).toBe(12);
    expect(lvl.totalHealing).toBe(3075);
    expect(lvl.healingPerPulse).toBe(75);
    expect(lvl.totalHealingOnHeroes).toBe(1691.25);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(29000000);
    expect(lvl.researchTime).toEqual({ days: 15, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().healingSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().healingSpell()', () => home().spells().healingSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with healing spell', () => {
  it('has 15 spells total', () => {
    expect(home().spells().count()).toBe(15);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byType("dark") returns 5 spells', () => {
    expect(home().spells().byType('dark').count()).toBe(5);
  });

  it('byTownHall(6) includes healing spell', () => {
    expect(home().spells().byTownHall(6).find('healing-spell')).toBeDefined();
  });

  it('byTownHall(5) does not include healing spell', () => {
    expect(home().spells().byTownHall(5).find('healing-spell')).toBeUndefined();
  });

  it('byTownHall(5) still includes lightning spell', () => {
    expect(home().spells().byTownHall(5).find('lightning-spell')).toBeDefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byType("regular")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('regular'),
);

testFilterImmutability(
  'byTownHall(6)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(6),
);
