import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('hogRiderPuppet()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().hogRiderPuppet().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('hog-rider-puppet');
    expect(e.name).toBe('Hog Rider Puppet');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().hogRiderPuppet().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().hogRiderPuppet().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().hogRiderPuppet().first()!;
    expect(e.hero).toBe('royal-champion');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Blacksmith level 7');
    expect(e.ability?.['invisibility']).toBe('1s');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().hogRiderPuppet().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 8 hog riders, level 5, HP+60, HpRec+180, no cost, blacksmith 7', () => {
    const lvl = home().heroEquipment().hogRiderPuppet().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(60);
    expect(lvl.hpRecoveryIncrease).toBe(180);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['summonedHogRiders']).toBe(8);
    expect(lvl.stats['hogRiderLevel']).toBe(5);
  });

  it('level 9: 9 hog riders, level 8, HP+300, HpRec+560, 1800 Shiny+200 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().hogRiderPuppet().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(300);
    expect(lvl.hpRecoveryIncrease).toBe(560);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['summonedHogRiders']).toBe(9);
    expect(lvl.stats['hogRiderLevel']).toBe(8);
  });

  it('level 15: 10 hog riders, level 10', () => {
    const lvl = home().heroEquipment().hogRiderPuppet().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.stats['summonedHogRiders']).toBe(10);
    expect(lvl.stats['hogRiderLevel']).toBe(10);
  });

  it('level 18: 10 hog riders, level 12, HP+570, HpRec+1000, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().hogRiderPuppet().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(570);
    expect(lvl.hpRecoveryIncrease).toBe(1000);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['summonedHogRiders']).toBe(10);
    expect(lvl.stats['hogRiderLevel']).toBe(12);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().hogRiderPuppet()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().hogRiderPuppet()', () =>
  home().heroEquipment().hogRiderPuppet(),
);
