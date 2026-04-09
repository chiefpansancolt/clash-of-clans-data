import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('archerPuppet()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().archerPuppet().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('archer-puppet');
    expect(e.name).toBe('Archer Puppet');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().archerPuppet().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().archerPuppet().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().archerPuppet().first()!;
    expect(e.hero).toBe('archer-queen');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toEqual(['Available by default']);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().archerPuppet().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 5 archers, 3.5s invis, DPS+28, HPRec+176, no cost, blacksmith 0', () => {
    const lvl = home().heroEquipment().archerPuppet().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hpRecoveryIncrease).toBe(176);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(0);
    expect(lvl.stats['summonedArchers']).toBe(5);
    expect(lvl.stats['archerInvisibilityDuration']).toBe('3.5s');
    expect(lvl.stats['dpsIncrease']).toBe(28);
  });

  it('level 9: 20 archers, 5.0s invis, DPS+99, HPRec+308, 1800 Shiny+200 Glowy, blacksmith 1', () => {
    const lvl = home().heroEquipment().archerPuppet().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hpRecoveryIncrease).toBe(308);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['summonedArchers']).toBe(20);
    expect(lvl.stats['archerInvisibilityDuration']).toBe('5.0s');
    expect(lvl.stats['dpsIncrease']).toBe(99);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().archerPuppet().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().archerPuppet().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: 35 archers, 6.5s invis, DPS+159, HPRec+484, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().archerPuppet().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hpRecoveryIncrease).toBe(484);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['summonedArchers']).toBe(35);
    expect(lvl.stats['archerInvisibilityDuration']).toBe('6.5s');
    expect(lvl.stats['dpsIncrease']).toBe(159);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().archerPuppet()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().archerPuppet()', () =>
  home().heroEquipment().archerPuppet(),
);
