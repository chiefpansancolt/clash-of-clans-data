import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('seekingShield()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().seekingShield().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('seeking-shield');
    expect(e.name).toBe('Seeking Shield');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().seekingShield().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().seekingShield().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().seekingShield().first()!;
    expect(e.hero).toBe('royal-champion');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Available by default');
    expect(e.ability?.['numberOfTargets']).toBe(4);
    expect(e.ability?.['targets']).toBe('Ground & Air');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().seekingShield().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 1000 projectile damage, HP+40, no cost, blacksmith 0', () => {
    const lvl = home().heroEquipment().seekingShield().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(40);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(0);
    expect(lvl.stats['projectileDamage']).toBe(1000);
  });

  it('level 9: 1750 projectile damage, HP+200, 1800 Shiny+200 Glowy, blacksmith 1', () => {
    const lvl = home().heroEquipment().seekingShield().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(200);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['projectileDamage']).toBe(1750);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().seekingShield().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 13: blacksmith 5', () => {
    const lvl = home().heroEquipment().seekingShield().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(5);
  });

  it('level 18: 2500 projectile damage, HP+380, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().seekingShield().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(380);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['projectileDamage']).toBe(2500);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().seekingShield()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().seekingShield()', () =>
  home().heroEquipment().seekingShield(),
);
