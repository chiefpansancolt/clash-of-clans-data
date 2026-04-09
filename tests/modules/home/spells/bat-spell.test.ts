import { home, HomeVillageSpells } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('batSpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().batSpell().first()!;
    expect(s).toBeDefined();
    expect(s.id).toBe('bat-spell');
    expect(s.name).toBe('Bat Spell');
  });

  it('has 8 levels', () => {
    expect(home().spells().batSpell().first()!.levels).toHaveLength(8);
  });

  it('is a dark spell', () => {
    expect(home().spells().batSpell().first()!.spellType).toBe('dark');
  });

  it('has housing space 1, targetType defenses, radius 3.5', () => {
    const s = home().spells().batSpell().first()!;
    expect(s.housingSpace).toBe(1);
    expect(s.targetType).toBe('defenses');
    expect(s.radius).toBe(3.5);
  });

  it('requires Dark Spell Factory level 5', () => {
    expect(home().spells().batSpell().first()!.spellFactoryLevelRequired).toBe(5);
  });

  it('has an icon image', () => {
    expect(home().spells().batSpell().first()!.images.icon).toBeTruthy();
  });

  it('has batStats with correct values', () => {
    const s = home().spells().batSpell().first()!;
    expect(s.batStats).toBeDefined();
    expect(s.batStats!.preferredTarget).toBe('Defenses');
    expect(s.batStats!.attackType).toBe('Air');
    expect(s.batStats!.movementSpeed).toBe(56);
    expect(s.batStats!.attackSpeed).toBe(2);
    expect(s.batStats!.range).toBe(0.8);
    expect(s.batStats!.damagePerSecond).toBe(30);
    expect(s.batStats!.damageVsResources).toBe(0.4);
    expect(s.batStats!.hitpoints).toBe(20);
  });

  it('level 1: batsGenerated 7, no research, TH10', () => {
    const lvl = home().spells().batSpell().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.batsGenerated).toBe(7);
    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(10);
    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchCostResource).toBe('Dark Elixir');
    expect(lvl.researchTime).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('level 4: batsGenerated 16, Lab 9, TH11, 35000 Dark Elixir, 2d 6h', () => {
    const lvl = home().spells().batSpell().first()!.levels[3];
    expect(lvl.level).toBe(4);
    expect(lvl.batsGenerated).toBe(16);
    expect(lvl.laboratoryRequired).toBe(9);
    expect(lvl.townHallRequired).toBe(11);
    expect(lvl.researchCost).toBe(35000);
    expect(lvl.researchTime).toEqual({ days: 2, hours: 6, minutes: 0, seconds: 0 });
  });

  it('level 8: batsGenerated 25, Lab 16, TH17, 300000 Dark Elixir, 13d', () => {
    const lvl = home().spells().batSpell().first()!.levels[7];
    expect(lvl.level).toBe(8);
    expect(lvl.batsGenerated).toBe(25);
    expect(lvl.laboratoryRequired).toBe(16);
    expect(lvl.townHallRequired).toBe(17);
    expect(lvl.researchCost).toBe(300000);
    expect(lvl.researchTime).toEqual({ days: 13, hours: 0, minutes: 0, seconds: 0 });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().batSpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

testQueryBaseContract('home().spells().batSpell()', () => home().spells().batSpell());
