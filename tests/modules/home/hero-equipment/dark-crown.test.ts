import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('darkCrown()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().darkCrown().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('dark-crown');
    expect(e.name).toBe('Dark Crown');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().darkCrown().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().darkCrown().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().darkCrown().first()!;
    expect(e.hero).toBe('minion-prince');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toHaveLength(4);
    expect(e.unlockRequirement).toContain('Buy in Dark Deal event for 3,100 Mischief Medals');
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().darkCrown().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 3% health/damage, speed+1%, HP+550, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().darkCrown().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(550);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['maxHealthIncrease']).toBe(3);
    expect(lvl.stats['maxDamageIncrease']).toBe(3);
    expect(lvl.stats['attackSpeedIncrease']).toBe(1);
  });

  it('level 9: 12% health/damage, speed+4%, HP+750, 1800 Shiny+200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().darkCrown().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(750);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['maxHealthIncrease']).toBe(12);
    expect(lvl.stats['maxDamageIncrease']).toBe(12);
    expect(lvl.stats['attackSpeedIncrease']).toBe(4);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().darkCrown().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 19: blacksmith 7', () => {
    const lvl = home().heroEquipment().darkCrown().first()!.levels[18];
    expect(lvl.level).toBe(19);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 27: 30% health/damage, speed+11%, HP+1200, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().darkCrown().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(1200);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['maxHealthIncrease']).toBe(30);
    expect(lvl.stats['maxDamageIncrease']).toBe(30);
    expect(lvl.stats['attackSpeedIncrease']).toBe(11);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().darkCrown()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().darkCrown()', () =>
  home().heroEquipment().darkCrown(),
);
