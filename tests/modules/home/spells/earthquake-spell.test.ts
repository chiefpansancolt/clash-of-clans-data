import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

// ─── Earthquake Spell ─────────────────────────────────────────────────────────

describe('earthquakeSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().earthquakeSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('earthquake-spell');
    expect(s.name).toBe('Earthquake Spell');
  });

  it('has 8 levels', () => {
    expect(home().spells().earthquakeSpell().first()!.levels).toHaveLength(8);
  });

  it('is a dark spell', () => {
    expect(home().spells().earthquakeSpell().first()!.spellType).toBe('dark');
  });

  it('has housing space 1', () => {
    expect(home().spells().earthquakeSpell().first()!.housingSpace).toBe(1);
  });

  it('has no top-level radius (per-level instead)', () => {
    expect(home().spells().earthquakeSpell().first()!.radius).toBeUndefined();
  });

  it('requires Dark Spell Factory level 2', () => {
    expect(home().spells().earthquakeSpell().first()!.spellFactoryLevelRequired).toBe(2);
  });

  it('has an icon image', () => {
    expect(home().spells().earthquakeSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: buildingDamagePercent 14.5, radius 3.5, no research, TH8', () => {
    const lvl = home().spells().earthquakeSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.buildingDamagePercent).toBe(14.5);
    expect(lvl.troopDamagePercent).toBeUndefined();
    expect(lvl.radius).toBe(3.5);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 6, TH8, 6000 Dark Elixir, 12h, radius 3.8', () => {
    const lvl = home().spells().earthquakeSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.buildingDamagePercent).toBe(17);
    expect(lvl.radius).toBe(3.8);
    expect(lvl.laboratoryRequired).toBe(6);
    expect(lvl.townHallRequired).toBe(8);
    expect(lvl.researchCost).toBe(6000);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 5: Lab 9, TH11, buildingDamagePercent 29, radius 4.7', () => {
    const lvl = home().spells().earthquakeSpell().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.buildingDamagePercent).toBe(29);
    expect(lvl.troopDamagePercent).toBeUndefined();
    expect(lvl.radius).toBe(4.7);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
  });

  it('level 6: Lab 12, TH14, troopDamagePercent 5, 8d', () => {
    const lvl = home().spells().earthquakeSpell().first()!.levels[5];
    expect(lvl.level).toBe(6);
    expect(lvl.buildingDamagePercent).toBe(29);
    expect(lvl.troopDamagePercent).toBe(5);
    expect(lvl.laboratoryRequired).toBe(12);
    expect(lvl.townHallRequired).toBe(14);
    expect(lvl.researchCost).toBe(120000);
    expect(lvl.researchTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 8: Lab 16, TH17, troopDamagePercent 14.5, 330000 Dark Elixir, 13d 12h', () => {
    const lvl = home().spells().earthquakeSpell().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.buildingDamagePercent).toBe(29);
    expect(lvl.troopDamagePercent).toBe(14.5);
    expect(lvl.radius).toBe(4.7);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(330000);
    expect(lvl.researchTime).toEqual({ days: 13, hours: 12, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().earthquakeSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

// ─── QueryBase contract ───────────────────────────────────────────────────────

testQueryBaseContract('home().spells().earthquakeSpell()', () => home().spells().earthquakeSpell());

// ─── spells() namespace ───────────────────────────────────────────────────────

describe('spells() with earthquake spell', () => {
  it('has 17 spells total', () => {
    expect(home().spells().count()).toBe(17);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byType("dark") returns 7 spells', () => {
    expect(home().spells().byType('dark').count()).toBe(7);
  });

  it('byTownHall(8) includes earthquake spell', () => {
    expect(home().spells().byTownHall(8).find('earthquake-spell')).toBeDefined();
  });

  it('byTownHall(7) does not include earthquake spell', () => {
    expect(home().spells().byTownHall(7).find('earthquake-spell')).toBeUndefined();
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
