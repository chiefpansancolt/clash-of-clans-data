import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Rage Spell ───────────────────────────────────────────────────────────────

describe('rageSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().rageSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('rage-spell');
    expect(s.name).toBe('Rage Spell');
  });

  it('has 6 levels', () => {
    expect(home().spells().rageSpell().first()!.levels).toHaveLength(6);
  });

  it('is a regular spell', () => {
    expect(home().spells().rageSpell().first()!.spellType).toBe('regular');
  });

  it('has radius 5, housing space 2', () => {
    const s = home().spells().rageSpell().first()!;
    expect(s.radius).toBe(5);
    expect(s.housingSpace).toBe(2);
  });

  it('has 60 pulses, 0.3s between pulses, 1s boost time', () => {
    const s = home().spells().rageSpell().first()!;
    expect(s.numberOfPulses).toBe(60);
    expect(s.timeBetweenPulses).toBe(0.3);
    expect(s.boostTime).toBe(1);
  });

  it('requires Spell Factory level 3', () => {
    expect(home().spells().rageSpell().first()!.spellFactoryLevelRequired).toBe(3);
  });

  it('has an icon image', () => {
    expect(home().spells().rageSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: damageIncrease 130%, speedIncrease 20, no research, TH7', () => {
    const lvl = home().spells().rageSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.damageIncrease).toBe(130);
    expect(lvl.speedIncrease).toBe(20);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(7);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 3, TH7, 400000 Elixir, 6h', () => {
    const lvl = home().spells().rageSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.damageIncrease).toBe(140);
    expect(lvl.speedIncrease).toBe(22);
    expect(lvl.laboratoryRequired).toBe(3);
    expect(lvl.townHallRequired).toBe(7);
    expect(lvl.researchCost).toBe(400000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 6, minutes: 0, seconds: 0 });
  });

  it('level 4: Lab 5, TH7, 1M Elixir, 1d', () => {
    const lvl = home().spells().rageSpell().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.damageIncrease).toBe(160);
    expect(lvl.speedIncrease).toBe(26);
    expect(lvl.laboratoryRequired).toBe(5);
    expect(lvl.townHallRequired).toBe(7);
    expect(lvl.researchCost).toBe(1000000);
    expect(lvl.researchTime).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 6: Lab 10, TH12, 180% damage, speed 30, 5M Elixir, 4d', () => {
    const lvl = home().spells().rageSpell().first()!.levels[5];
    expect(lvl.level).toBe(6);
    expect(lvl.damageIncrease).toBe(180);
    expect(lvl.speedIncrease).toBe(30);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(5000000);
    expect(lvl.researchTime).toEqual({ days: 4, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().rageSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().rageSpell()', () => home().spells().rageSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with rage spell', () => {
  it('has 12 spells total', () => {
    expect(home().spells().count()).toBe(12);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byTownHall(7) includes rage spell', () => {
    expect(home().spells().byTownHall(7).find('rage-spell')).toBeDefined();
  });

  it('byTownHall(6) does not include rage spell', () => {
    expect(home().spells().byTownHall(6).find('rage-spell')).toBeUndefined();
  });
});

// ─── Filter immutability ──────────────────────────────────────────────────────

testFilterImmutability(
  'byType("regular")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('regular'),
);

testFilterImmutability(
  'byTownHall(7)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(7),
);
