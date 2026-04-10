import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('lifeGem()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().lifeGem().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('life-gem');
    expect(e.name).toBe('Life Gem');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().lifeGem().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().lifeGem().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().lifeGem().first()!;
    expect(e.hero).toBe('grand-warden');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toContain('Available by default');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().lifeGem().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 50% HP increase, 640 max HP, DPS+11, HP+170, no cost, blacksmith 0', () => {
    const lvl = home().heroEquipment().lifeGem().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(170);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(0);
    expect(lvl.stats['hpIncreasePercent']).toBe('50%');
    expect(lvl.stats['maxHpIncrease']).toBe(640);
    expect(lvl.stats['dpsIncrease']).toBe(11);
  });

  it('level 9: 90% HP increase, 930 max HP, DPS+32, HP+311, 1800 Shiny+200 Glowy, blacksmith 1', () => {
    const lvl = home().heroEquipment().lifeGem().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(311);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['hpIncreasePercent']).toBe('90%');
    expect(lvl.stats['maxHpIncrease']).toBe(930);
    expect(lvl.stats['dpsIncrease']).toBe(32);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().lifeGem().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().lifeGem().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: 120% HP increase, 1200 max HP, DPS+75, HP+500, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().lifeGem().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(500);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['hpIncreasePercent']).toBe('120%');
    expect(lvl.stats['maxHpIncrease']).toBe(1200);
    expect(lvl.stats['dpsIncrease']).toBe(75);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().lifeGem()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().lifeGem()', () => home().heroEquipment().lifeGem());
