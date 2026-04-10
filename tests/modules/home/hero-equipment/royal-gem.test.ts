import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('royalGem()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().royalGem().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('royal-gem');
    expect(e.name).toBe('Royal Gem');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().royalGem().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().royalGem().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().royalGem().first()!;
    expect(e.hero).toBe('royal-champion');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Available by default');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().royalGem().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 1200 health recovery, DPS+35, HP+60, no cost, blacksmith 0', () => {
    const lvl = home().heroEquipment().royalGem().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(60);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(0);
    expect(lvl.stats['healthRecovery']).toBe(1200);
    expect(lvl.stats['dpsIncrease']).toBe(35);
  });

  it('level 9: 1800 health recovery, 1800 Shiny+200 Glowy, blacksmith 1', () => {
    const lvl = home().heroEquipment().royalGem().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(300);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['healthRecovery']).toBe(1800);
    expect(lvl.stats['dpsIncrease']).toBe(75);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().royalGem().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 13: blacksmith 5', () => {
    const lvl = home().heroEquipment().royalGem().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(5);
  });

  it('level 18: 2400 health recovery, DPS+120, HP+570, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().royalGem().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(570);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['healthRecovery']).toBe(2400);
    expect(lvl.stats['dpsIncrease']).toBe(120);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().royalGem()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().royalGem()', () => home().heroEquipment().royalGem());
