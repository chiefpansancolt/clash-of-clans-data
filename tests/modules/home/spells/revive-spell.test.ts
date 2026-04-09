import { home, HomeVillageSpells } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('reviveSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().reviveSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('revive-spell');
    expect(s.name).toBe('Revive Spell');
  });

  it('has 5 levels', () => {
    expect(home().spells().reviveSpell().first()!.levels).toHaveLength(5);
  });

  it('is a regular spell', () => {
    expect(home().spells().reviveSpell().first()!.spellType).toBe('regular');
  });

  it('has radius 8, housing space 2', () => {
    const s = home().spells().reviveSpell().first()!;
    expect(s.radius).toBe(8);
    expect(s.housingSpace).toBe(2);
  });

  it('requires Spell Factory level 8', () => {
    expect(home().spells().reviveSpell().first()!.spellFactoryLevelRequired).toBe(8);
  });

  it('has an icon image', () => {
    expect(home().spells().reviveSpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: heroHealPercent 60, no research, TH12', () => {
    const lvl = home().spells().reviveSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.heroHealPercent).toBe(60);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(12);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 2: Lab 13, TH15, 18M Elixir, 8d, heroHealPercent 65', () => {
    const lvl = home().spells().reviveSpell().first()!.levels[1];
    expect(lvl.level).toBe(2);
    expect(lvl.heroHealPercent).toBe(65);
    expect(lvl.laboratoryRequired).toBe(13);
    expect(lvl.townHallRequired).toBe(15);
    expect(lvl.researchCost).toBe(18000000);
    expect(lvl.researchCostResource).toBe('Elixir');
    expect(lvl.researchTime).toEqual({ days: 8, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4: Lab 15, TH17, 11d 12h, heroHealPercent 75', () => {
    const lvl = home().spells().reviveSpell().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.heroHealPercent).toBe(75);
    expect(lvl.laboratoryRequired).toBe(15);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchTime).toEqual({ days: 11, hours: 12, minutes: 0, seconds: 0 });
  });

  it('level 5: Lab 16, TH17, 29.5M Elixir, 16d, heroHealPercent 80', () => {
    const lvl = home().spells().reviveSpell().first()!.levels[4];
    expect(lvl.level).toBe(5);
    expect(lvl.heroHealPercent).toBe(80);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(29500000);
    expect(lvl.researchTime).toEqual({ days: 16, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().reviveSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

testQueryBaseContract('home().spells().reviveSpell()', () => home().spells().reviveSpell());
