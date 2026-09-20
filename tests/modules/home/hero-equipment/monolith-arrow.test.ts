import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('monolithArrow()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().monolithArrow().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('monolith-arrow');
    expect(e.name).toBe('Monolith Arrow');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().monolithArrow().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().monolithArrow().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().monolithArrow().first()!;
    expect(e.hero).toBe('archer-queen');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toContain('Buy in Anime Fury Medal Event for 3,100 Meow Medals');
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().monolithArrow().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: extra damage 9.5%/7%/4%, reduction 3%, HP+100, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().monolithArrow().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(100);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['extraDamageBelow180']).toBe('9.5%');
    expect(lvl.stats['extraDamage181To250']).toBe('7%');
    expect(lvl.stats['extraDamage251Plus']).toBe('4%');
    expect(lvl.stats['incomingDamageReduction']).toBe('3%');
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().monolithArrow().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 25: blacksmith 9', () => {
    const lvl = home().heroEquipment().monolithArrow().first()!.levels[24];
    expect(lvl.level).toBe(25);
    expect(lvl.blacksmithLevelRequired).toBe(9);
  });

  it('level 27: extra damage 14%/10%/5%, reduction 10%, HP+1160, 3600 shiny, 600 glowy, 150 starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().monolithArrow().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(1160);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['extraDamageBelow180']).toBe('14%');
    expect(lvl.stats['extraDamage181To250']).toBe('10%');
    expect(lvl.stats['extraDamage251Plus']).toBe('5%');
    expect(lvl.stats['incomingDamageReduction']).toBe('10%');
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().monolithArrow()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().monolithArrow()', () =>
  home().heroEquipment().monolithArrow(),
);
