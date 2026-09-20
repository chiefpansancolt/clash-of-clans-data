import { home, HomeVillageSpells } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('angrySpell()', () => {
  it('returns a HomeSpell', () => {
    const s = home().spells().angrySpell().first()!;

    expect(s).toBeDefined();
    expect(s.id).toBe('angry-spell');
    expect(s.name).toBe('Angry Spell');
  });

  it('has 4 levels', () => {
    expect(home().spells().angrySpell().first()!.levels).toHaveLength(4);
  });

  it('is a dark spell', () => {
    expect(home().spells().angrySpell().first()!.spellType).toBe('dark');
  });

  it('has radius 6, housing space 1', () => {
    const s = home().spells().angrySpell().first()!;

    expect(s.radius).toBe(6);
    expect(s.housingSpace).toBe(1);
  });

  it('requires Dark Spell Factory level 8', () => {
    expect(home().spells().angrySpell().first()!.spellFactoryLevelRequired).toBe(8);
  });

  it('targets both ground and air troops', () => {
    expect(home().spells().angrySpell().first()!.targetType).toBe('both');
  });

  it('has an icon image', () => {
    expect(home().spells().angrySpell().first()!.images.icon).toBeTruthy();
  });

  it('level 1: 7s anger, 5s duration, no research', () => {
    const lvl = home().spells().angrySpell().first()!.levels[0];

    expect(lvl.level).toBe(1);
    expect(lvl.angerDuration).toBe(7);
    expect(lvl.spellDuration).toBe(5);
    expect(lvl.movementSpeedIncrease).toBe(35);

    expect(lvl.laboratoryRequired).toBe(0);
    expect(lvl.townHallRequired).toBe(15);

    expect(lvl.researchCost).toBe(0);
    expect(lvl.researchTime).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 2: Lab14 TH16 150k DE 9d8h', () => {
    const lvl = home().spells().angrySpell().first()!.levels[1];

    expect(lvl.level).toBe(2);
    expect(lvl.angerDuration).toBe(8);

    expect(lvl.researchCost).toBe(150000);
    expect(lvl.researchCostResource).toBe('Dark Elixir');

    expect(lvl.researchTime).toEqual({
      days: 9,
      hours: 8,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 3: Lab15 TH17 250k DE 12d', () => {
    const lvl = home().spells().angrySpell().first()!.levels[2];

    expect(lvl.level).toBe(3);
    expect(lvl.angerDuration).toBe(10);

    expect(lvl.researchTime).toEqual({
      days: 12,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('level 4: Lab16 TH18 400k DE 15d', () => {
    const lvl = home().spells().angrySpell().first()!.levels[3];

    expect(lvl.level).toBe(4);
    expect(lvl.angerDuration).toBe(12);

    expect(lvl.researchCost).toBe(400000);

    expect(lvl.researchTime).toEqual({
      days: 15,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it('returns a HomeVillageSpells instance', () => {
    expect(home().spells().angrySpell()).toBeInstanceOf(HomeVillageSpells);
  });
});

testQueryBaseContract('home().spells().angrySpell()', () => home().spells().angrySpell());
