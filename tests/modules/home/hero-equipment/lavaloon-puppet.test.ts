import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('lavaloonPuppet()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().lavaloonPuppet().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('lavaloon-puppet');
    expect(e.name).toBe('Lavaloon Puppet');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().lavaloonPuppet().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().lavaloonPuppet().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().lavaloonPuppet().first()!;
    expect(e.hero).toBe('grand-warden');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(4);
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().lavaloonPuppet().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 1 lavaloon, level 1, DPS+10, HP+50, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().lavaloonPuppet().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(50);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['summonedLavaloons']).toBe(1);
    expect(lvl.stats['lavaloonLevel']).toBe(1);
    expect(lvl.stats['dpsIncrease']).toBe(10);
  });

  it('level 9: 2 lavaloons, level 4, DPS+23, HP+77, 1800 Shiny+200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().lavaloonPuppet().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(77);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['summonedLavaloons']).toBe(2);
    expect(lvl.stats['lavaloonLevel']).toBe(4);
    expect(lvl.stats['dpsIncrease']).toBe(23);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().lavaloonPuppet().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 21: 3 lavaloons, blacksmith 7', () => {
    const lvl = home().heroEquipment().lavaloonPuppet().first()!.levels[20];
    expect(lvl.level).toBe(21);
    expect(lvl.stats['summonedLavaloons']).toBe(3);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 27: 3 lavaloons, level 11, DPS+50, HP+150, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().lavaloonPuppet().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(150);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['summonedLavaloons']).toBe(3);
    expect(lvl.stats['lavaloonLevel']).toBe(11);
    expect(lvl.stats['dpsIncrease']).toBe(50);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().lavaloonPuppet()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().lavaloonPuppet()', () =>
  home().heroEquipment().lavaloonPuppet(),
);
