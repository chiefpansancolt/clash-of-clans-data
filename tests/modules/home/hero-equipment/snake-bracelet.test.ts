import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('snakeBracelet()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().snakeBracelet().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('snake-bracelet');
    expect(e.name).toBe('Snake Bracelet');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().snakeBracelet().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().snakeBracelet().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().snakeBracelet().first()!;
    expect(e.hero).toBe('barbarian-king');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toContain('Buy in Snake Festival event for 3,100 Res Snake Medals');
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
    expect(e.unlockRequirement).toHaveLength(4);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().snakeBracelet().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 11 snakes, snake lvl 1, DPS+10, HP+150, +1% atk speed, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().snakeBracelet().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(150);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['maxSummonedSnakes']).toBe(11);
    expect(lvl.stats['snakeLevel']).toBe(1);
    expect(lvl.stats['dpsIncrease']).toBe(10);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+1%');
  });

  it('level 9: 20 snakes, snake lvl 4, DPS+24, HP+1350, +4%, 1800 Shiny+200 Glowy+10 Starry', () => {
    const lvl = home().heroEquipment().snakeBracelet().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(1350);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['maxSummonedSnakes']).toBe(20);
    expect(lvl.stats['snakeLevel']).toBe(4);
    expect(lvl.stats['dpsIncrease']).toBe(24);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+4%');
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().snakeBracelet().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 22: blacksmith 8', () => {
    const lvl = home().heroEquipment().snakeBracelet().first()!.levels[21];
    expect(lvl.level).toBe(22);
    expect(lvl.blacksmithLevelRequired).toBe(8);
  });

  it('level 27: 54 snakes, snake lvl 10, DPS+75, HP+4050, +10%, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().snakeBracelet().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(4050);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['maxSummonedSnakes']).toBe(54);
    expect(lvl.stats['snakeLevel']).toBe(10);
    expect(lvl.stats['dpsIncrease']).toBe(75);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+10%');
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().snakeBracelet()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().snakeBracelet()', () =>
  home().heroEquipment().snakeBracelet(),
);
