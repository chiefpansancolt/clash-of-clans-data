import { home, HomeVillageSpells } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('overgrowthSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().overgrowthSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('overgrowth-spell');
    expect(s.name).toBe('Overgrowth Spell');
  });

  it('has 4 levels', () => {
    expect(home().spells().overgrowthSpell().first()!.levels).toHaveLength(4);
  });

  it('is a dark spell', () => {
    expect(home().spells().overgrowthSpell().first()!.spellType).toBe('dark');
  });

  it('has housing space 2, targetType both, radius 6', () => {
    const s = home().spells().overgrowthSpell().first()!;
    expect(s.housingSpace).toBe(2);
    expect(s.targetType).toBe('both');
    expect(s.radius).toBe(6);
  });

  it('requires Dark Spell Factory level 6', () => {
    expect(home().spells().overgrowthSpell().first()!.spellFactoryLevelRequired).toBe(6);
  });

  it('has an icon image', () => {
    expect(home().spells().overgrowthSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: spellDuration 22, no research, TH11', () => {
    const lvl = home().spells().overgrowthSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.spellDuration).toBe(22);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: spellDuration 23, Lab 10, TH12, 62500 Dark Elixir, 5d 12h', () => {
    const lvl = home().spells().overgrowthSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.spellDuration).toBe(23);
    expect(lvl.laboratoryRequired).toBe(10);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(62500);
    expect(lvl.researchTime).toEqual({ days: 5, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 4: spellDuration 25, Lab 14, TH16, 175000 Dark Elixir, 10d', () => {
    const lvl = home().spells().overgrowthSpell().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.spellDuration).toBe(25);
    expect(lvl.laboratoryRequired).toBe(14);
    expect(lvl.townHallRequired).toBe(16);
    expect(lvl.researchCost).toBe(175000);
    expect(lvl.researchTime).toEqual({ days: 10, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().overgrowthSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

testQueryBaseContract('home().spells().overgrowthSpell()', () => home().spells().overgrowthSpell());
