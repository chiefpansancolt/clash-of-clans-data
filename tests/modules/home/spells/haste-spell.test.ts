import { home, HomeVillageSpells } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('hasteSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().hasteSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('haste-spell');
    expect(s.name).toBe('Haste Spell');
  });

  it('has 7 levels', () => {
    expect(home().spells().hasteSpell().first()!.levels).toHaveLength(7);
  });

  it('is a dark spell', () => {
    expect(home().spells().hasteSpell().first()!.spellType).toBe('dark');
  });

  it('has housing space 1, targetType both', () => {
    const s = home().spells().hasteSpell().first()!;
    expect(s.housingSpace).toBe(1);
    expect(s.targetType).toBe('both');
  });

  it('requires Dark Spell Factory level 3', () => {
    expect(home().spells().hasteSpell().first()!.spellFactoryLevelRequired).toBe(3);
  });

  it('has an icon image', () => {
    expect(home().spells().hasteSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: speedIncrease 28, spellDuration 10, radius 4, no research, TH9', () => {
    const lvl = home().spells().hasteSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.speedIncrease).toBe(28);
    expect(lvl.spellDuration).toBe(10);
    expect(lvl.radius).toBe(4);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(9);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 7, TH9, 8000 Dark Elixir, 1d, speedIncrease 34, spellDuration 15', () => {
    const lvl = home().spells().hasteSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.speedIncrease).toBe(34);
    expect(lvl.spellDuration).toBe(15);
    expect(lvl.laboratoryRequired).toBe(7);
    expect(lvl.townHallRequired).toBe(9);
    expect(lvl.researchCost).toBe(8000);
    expect(lvl.researchTime).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 5: Lab 9, TH11, speedIncrease 52, spellDuration 30, radius 4', () => {
    const lvl = home().spells().hasteSpell().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.speedIncrease).toBe(52);
    expect(lvl.spellDuration).toBe(30);
    expect(lvl.radius).toBe(4);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
  });

  it('level 7: Lab 16, TH17, 320000 Dark Elixir, 12d 12h, speedIncrease 56, radius 5', () => {
    const lvl = home().spells().hasteSpell().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.speedIncrease).toBe(56);
    expect(lvl.spellDuration).toBe(30);
    expect(lvl.radius).toBe(5);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(320000);
    expect(lvl.researchTime).toEqual({ days: 12, hours: 12, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().hasteSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

testQueryBaseContract('home().spells().hasteSpell()', () => home().spells().hasteSpell());

describe('spells() with haste spell', () => {
  it('has 17 spells total', () => {
    expect(home().spells().count()).toBe(17);
  });

  it('byType("regular") returns 10 spells', () => {
    expect(home().spells().byType('regular').count()).toBe(10);
  });

  it('byType("dark") returns 7 spells', () => {
    expect(home().spells().byType('dark').count()).toBe(7);
  });

  it('byTownHall(9) includes haste spell', () => {
    expect(home().spells().byTownHall(9).find('haste-spell')).toBeDefined();
  });

  it('byTownHall(8) does not include haste spell', () => {
    expect(home().spells().byTownHall(8).find('haste-spell')).toBeUndefined();
  });
});

testFilterImmutability(
  'byType("dark")',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byType('dark'),
);

testFilterImmutability(
  'byTownHall(9)',
  () => home().spells(),
  (q) => (q as HomeVillageSpells).byTownHall(9),
);
