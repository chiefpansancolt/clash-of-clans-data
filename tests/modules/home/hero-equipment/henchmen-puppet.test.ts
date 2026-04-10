import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('henchmenPuppet()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().henchmenPuppet().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('henchmen-puppet');
    expect(e.name).toBe('Henchmen Puppet');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().henchmenPuppet().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().henchmenPuppet().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().henchmenPuppet().first()!;
    expect(e.hero).toBe('minion-prince');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(1);
    expect(e.unlockRequirement).toContain('Available by default');
  });

  it('has constant ability henchmenCount and invisibilityDuration', () => {
    const e = home().heroEquipment().henchmenPuppet().first()!;
    expect(e.ability?.['henchmenCount']).toBe(2);
    expect(e.ability?.['invisibilityDuration']).toBe('1s');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().henchmenPuppet().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: henchmen lvl 1, DPS+33, HP+500, HPRecovery+176, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().henchmenPuppet().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(500);
    expect(lvl.hpRecoveryIncrease).toBe(176);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['henchmenLevel']).toBe(1);
    expect(lvl.stats['dpsIncrease']).toBe(33);
  });

  it('level 9: henchmen lvl 4, DPS+92, HP+500, HPRecovery+308, 1800 Shiny+200 Glowy, blacksmith 1', () => {
    const lvl = home().heroEquipment().henchmenPuppet().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(500);
    expect(lvl.hpRecoveryIncrease).toBe(308);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['henchmenLevel']).toBe(4);
    expect(lvl.stats['dpsIncrease']).toBe(92);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().henchmenPuppet().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().henchmenPuppet().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: henchmen lvl 7, DPS+188, HP+500, HPRecovery+538, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().henchmenPuppet().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(500);
    expect(lvl.hpRecoveryIncrease).toBe(538);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['henchmenLevel']).toBe(7);
    expect(lvl.stats['dpsIncrease']).toBe(188);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().henchmenPuppet()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().henchmenPuppet()', () =>
  home().heroEquipment().henchmenPuppet(),
);
