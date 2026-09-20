import { home, HomeVillageSpells } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('recallSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().recallSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('recall-spell');
    expect(s.name).toBe('Recall Spell');
  });

  it('has 7 levels', () => {
    expect(home().spells().recallSpell().first()!.levels).toHaveLength(7);
  });

  it('is a regular spell', () => {
    expect(home().spells().recallSpell().first()!.spellType).toBe('regular');
  });

  it('has radius 5, housing space 2, targetType both', () => {
    const s = home().spells().recallSpell().first()!;
    expect(s.radius).toBe(5);
    expect(s.housingSpace).toBe(2);
    expect(s.targetType).toBe('both');
  });

  it('requires Spell Factory level 7', () => {
    expect(home().spells().recallSpell().first()!.spellFactoryLevelRequired).toBe(7);
  });

  it('has an icon image', () => {
    expect(home().spells().recallSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: recalledCapacity 83, no research, TH11', () => {
    const lvl = home().spells().recallSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.recalledCapacity).toBe(83);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 11, TH13, 7.5M Elixir, 7d, capacity 89', () => {
    const lvl = home().spells().recallSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.recalledCapacity).toBe(89);
    expect(lvl.laboratoryRequired).toBe(11);
    expect(lvl.townHallRequired).toBe(13);
    expect(lvl.researchCost).toBe(7500000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 7, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4: Lab 13, TH15, 8d, capacity 101', () => {
    const lvl = home().spells().recallSpell().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.recalledCapacity).toBe(101);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 6: Lab 15, TH17, 19M Elixir, 11d, capacity 113', () => {
    const lvl = home().spells().recallSpell().first()!.levels[5];
    expect(lvl.level).toBe(6);
    expect(lvl.recalledCapacity).toBe(113);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(19000000);
    expect(lvl.researchTime).toEqual({ days: 11, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 7: Lab 16, TH18, recalled capacity 120, 29M Elixir, 16d', () => {
    const lvl = home().spells().recallSpell().first()!.levels[6];
    expect(lvl.level).toBe(7);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(18);
    expect(lvl.recalledCapacity).toBe(120);
    expect(lvl.researchCost).toBe(29000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 16, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().recallSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

testQueryBaseContract('home().spells().recallSpell()', () => home().spells().recallSpell());
