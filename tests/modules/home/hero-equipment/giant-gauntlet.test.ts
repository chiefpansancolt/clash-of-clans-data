import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('giantGauntlet()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().giantGauntlet().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('giant-gauntlet');
    expect(e.name).toBe('Giant Gauntlet');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().giantGauntlet().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().giantGauntlet().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().giantGauntlet().first()!;
    expect(e.hero).toBe('barbarian-king');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
    expect(e.unlockRequirement).toContain('Purchasable from the League Shop for 750 League Medals');
    expect(e.unlockRequirement).toHaveLength(6);
  });

  it('has ability: areaDamageRadius 2.5', () => {
    const e = home().heroEquipment().giantGauntlet().first()!;
    expect(e.ability!['areaDamageRadius']).toBe(2.5);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().giantGauntlet().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 14s, 20% reduction, DPS+17, heal 6/s, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().giantGauntlet().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['abilityDuration']).toBe('14s');
    expect(lvl.stats['incomingDamageReduction']).toBe('20%');
    expect(lvl.stats['dpsIncrease']).toBe(17);
    expect(lvl.stats['selfHealingPerSecond']).toBe(6);
  });

  it('level 9: 15.5s, 35%, DPS+43, heal 22, 1800 Shiny+200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().giantGauntlet().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['abilityDuration']).toBe('15.5s');
    expect(lvl.stats['incomingDamageReduction']).toBe('35%');
    expect(lvl.stats['dpsIncrease']).toBe(43);
    expect(lvl.stats['selfHealingPerSecond']).toBe(22);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().giantGauntlet().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 22: blacksmith 8', () => {
    const lvl = home().heroEquipment().giantGauntlet().first()!.levels[21];
    expect(lvl.level).toBe(22);
    expect(lvl.blacksmithLevelRequired).toBe(8);
  });

  it('level 27: 19s, 60%, DPS+160, heal 40, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().giantGauntlet().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['abilityDuration']).toBe('19s');
    expect(lvl.stats['incomingDamageReduction']).toBe('60%');
    expect(lvl.stats['dpsIncrease']).toBe(160);
    expect(lvl.stats['selfHealingPerSecond']).toBe(40);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().giantGauntlet()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().giantGauntlet()', () =>
  home().heroEquipment().giantGauntlet(),
);

describe('heroEquipment() namespace', () => {
  it('has 8 equipment', () => {
    expect(home().heroEquipment().count()).toBe(8);
  });

  it('byHero("barbarian-king") includes Giant Gauntlet', () => {
    expect(home().heroEquipment().byHero('barbarian-king').find('giant-gauntlet')).toBeDefined();
  });

  it('byRarity("Epic") includes Giant Gauntlet', () => {
    expect(home().heroEquipment().byRarity('Epic').find('giant-gauntlet')).toBeDefined();
  });

  it('byRarity("Common") does not include Giant Gauntlet', () => {
    expect(home().heroEquipment().byRarity('Common').find('giant-gauntlet')).toBeUndefined();
  });

  it('byBlacksmith(1) includes Giant Gauntlet', () => {
    expect(home().heroEquipment().byBlacksmith(1).find('giant-gauntlet')).toBeDefined();
  });
});

testFilterImmutability(
  'byRarity("Epic")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byRarity('Epic'),
);
