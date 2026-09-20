import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('revengeDeck()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().revengeDeck().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('revenge-deck');
    expect(e.name).toBe('Revenge Deck');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().revengeDeck().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().revengeDeck().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().revengeDeck().first()!;
    expect(e.hero).toBe('dragon-duke');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toContain('Buy in Awesome Medal Event for 3,100 Quest Medals');
    expect(e.ability?.['maxCounterRange']).toBe('25 tiles');
    expect(e.ability?.['counterCooldown']).toBe('0.8s');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().revengeDeck().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: heal 30, counter damage 150, HP+900, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().revengeDeck().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(900);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['healPerCounter']).toBe(30);
    expect(lvl.stats['counterDamage']).toBe(150);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().revengeDeck().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 25: blacksmith 9', () => {
    const lvl = home().heroEquipment().revengeDeck().first()!.levels[24];
    expect(lvl.level).toBe(25);
    expect(lvl.blacksmithLevelRequired).toBe(9);
  });

  it('level 27: heal 60, counter damage 225, HP+3200, 3600 shiny, 600 glowy, 150 starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().revengeDeck().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(3200);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['healPerCounter']).toBe(60);
    expect(lvl.stats['counterDamage']).toBe(225);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().revengeDeck()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().revengeDeck()', () =>
  home().heroEquipment().revengeDeck(),
);
