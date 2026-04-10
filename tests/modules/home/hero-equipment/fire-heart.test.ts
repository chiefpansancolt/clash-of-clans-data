import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('fireHeart()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().fireHeart().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('fire-heart');
    expect(e.name).toBe('Fire Heart');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().fireHeart().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().fireHeart().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().fireHeart().first()!;
    expect(e.hero).toBe('dragon-duke');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toContain('Available by default');
    expect(e.ability?.['damageRadius']).toBe('4 tiles');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().fireHeart().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: damage 1000, healing 50, DPS+10, HP+900, no cost, blacksmith 0', () => {
    const lvl = home().heroEquipment().fireHeart().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(900);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(0);
    expect(lvl.stats['damageOnDefeat']).toBe(1000);
    expect(lvl.stats['selfHealingPerSecond']).toBe(50);
    expect(lvl.stats['dpsIncrease']).toBe(10);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().fireHeart().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().fireHeart().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: damage 3000, healing 175, DPS+45, HP+5600, blacksmith 7', () => {
    const lvl = home().heroEquipment().fireHeart().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(5600);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['damageOnDefeat']).toBe(3000);
    expect(lvl.stats['selfHealingPerSecond']).toBe(175);
    expect(lvl.stats['dpsIncrease']).toBe(45);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().fireHeart()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().fireHeart()', () =>
  home().heroEquipment().fireHeart(),
);
