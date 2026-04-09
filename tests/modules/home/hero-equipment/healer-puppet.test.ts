import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('healerPuppet()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().healerPuppet().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('healer-puppet');
    expect(e.name).toBe('Healer Puppet');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().healerPuppet().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().healerPuppet().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().healerPuppet().first()!;
    expect(e.hero).toBe('archer-queen');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toEqual(['Blacksmith level 5']);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().healerPuppet().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 1 healer, lvl 4, selfHeal+6, HP+132, no cost, blacksmith 5', () => {
    const lvl = home().heroEquipment().healerPuppet().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(132);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(5);
    expect(lvl.stats['summonedHealers']).toBe(1);
    expect(lvl.stats['healerLevel']).toBe(4);
    expect(lvl.stats['selfHealingPerSecond']).toBe(6);
  });

  it('level 9: 2 healers, lvl 6, selfHeal+22, HP+331, 1800 Shiny+200 Glowy, blacksmith 5', () => {
    const lvl = home().heroEquipment().healerPuppet().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(331);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(5);
    expect(lvl.stats['summonedHealers']).toBe(2);
    expect(lvl.stats['healerLevel']).toBe(6);
    expect(lvl.stats['selfHealingPerSecond']).toBe(22);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().healerPuppet().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: 3 healers, lvl 8, selfHeal+35, HP+968, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().healerPuppet().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(968);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['summonedHealers']).toBe(3);
    expect(lvl.stats['healerLevel']).toBe(8);
    expect(lvl.stats['selfHealingPerSecond']).toBe(35);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().healerPuppet()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().healerPuppet()', () =>
  home().heroEquipment().healerPuppet(),
);

describe('heroEquipment() namespace', () => {
  it('has 13 equipment', () => {
    expect(home().heroEquipment().count()).toBe(15);
  });

  it('byHero("archer-queen") includes Healer Puppet', () => {
    expect(home().heroEquipment().byHero('archer-queen').find('healer-puppet')).toBeDefined();
  });

  it('byRarity("Common") includes Healer Puppet', () => {
    expect(home().heroEquipment().byRarity('Common').find('healer-puppet')).toBeDefined();
  });

  it('byRarity("Epic") does not include Healer Puppet', () => {
    expect(home().heroEquipment().byRarity('Epic').find('healer-puppet')).toBeUndefined();
  });

  it('byBlacksmith(5) includes Healer Puppet', () => {
    expect(home().heroEquipment().byBlacksmith(5).find('healer-puppet')).toBeDefined();
  });

  it('byBlacksmith(4) does not include Healer Puppet', () => {
    expect(home().heroEquipment().byBlacksmith(4).find('healer-puppet')).toBeUndefined();
  });
});

testFilterImmutability(
  'byRarity("Common")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byRarity('Common'),
);
