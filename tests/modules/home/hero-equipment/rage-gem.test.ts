import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('rageGem()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().rageGem().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('rage-gem');
    expect(e.name).toBe('Rage Gem');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().rageGem().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().rageGem().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().rageGem().first()!;
    expect(e.hero).toBe('grand-warden');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toContain('Blacksmith level 4');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().rageGem().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 15% damage increase, DPS+12, speed+5%, no cost, blacksmith 4', () => {
    const lvl = home().heroEquipment().rageGem().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(4);
    expect(lvl.stats['damageIncreasePercent']).toBe('15%');
    expect(lvl.stats['dpsIncrease']).toBe(12);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+5%');
  });

  it('level 9: 30% damage increase, DPS+30, speed+13%, 1800 Shiny+200 Glowy, blacksmith 4', () => {
    const lvl = home().heroEquipment().rageGem().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(4);
    expect(lvl.stats['damageIncreasePercent']).toBe('30%');
    expect(lvl.stats['dpsIncrease']).toBe(30);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+13%');
  });

  it('level 13: blacksmith 5', () => {
    const lvl = home().heroEquipment().rageGem().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(5);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().rageGem().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: 50% damage increase, DPS+88, speed+22%, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().rageGem().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['damageIncreasePercent']).toBe('50%');
    expect(lvl.stats['dpsIncrease']).toBe(88);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+22%');
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().rageGem()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().rageGem()', () => home().heroEquipment().rageGem());
