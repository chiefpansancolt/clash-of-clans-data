import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('actionFigure()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().actionFigure().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('action-figure');
    expect(e.name).toBe('Action Figure');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().actionFigure().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().actionFigure().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().actionFigure().first()!;
    expect(e.hero).toBe('archer-queen');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(5);
    expect(e.unlockRequirement).toContain('Buy in Friend or Foe event for 3,100 Champ Medals');
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
  });

  it('has constant ability invisibilityDuration', () => {
    const e = home().heroEquipment().actionFigure().first()!;
    expect(e.ability?.['invisibilityDuration']).toBe('1s');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().actionFigure().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: GG lvl 1, selfHeal 6, DPS+28, HP+159, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().actionFigure().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(159);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['giantGiantLevel']).toBe(1);
    expect(lvl.stats['selfHealingPerSecond']).toBe(6);
    expect(lvl.stats['dpsIncrease']).toBe(28);
  });

  it('level 9: GG lvl 4, selfHeal 22, DPS+63, HP+318, 1800 Shiny+200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().actionFigure().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(318);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['giantGiantLevel']).toBe(4);
    expect(lvl.stats['selfHealingPerSecond']).toBe(22);
    expect(lvl.stats['dpsIncrease']).toBe(63);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().actionFigure().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 22: blacksmith 8', () => {
    const lvl = home().heroEquipment().actionFigure().first()!.levels[21];
    expect(lvl.level).toBe(22);
    expect(lvl.blacksmithLevelRequired).toBe(8);
  });

  it('level 27: GG lvl 10, selfHeal 40, DPS+135, HP+713, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().actionFigure().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(713);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['giantGiantLevel']).toBe(10);
    expect(lvl.stats['selfHealingPerSecond']).toBe(40);
    expect(lvl.stats['dpsIncrease']).toBe(135);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().actionFigure()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().actionFigure()', () =>
  home().heroEquipment().actionFigure(),
);

describe('heroEquipment() namespace', () => {
  it('has 15 equipment', () => {
    expect(home().heroEquipment().count()).toBe(15);
  });

  it('byHero("archer-queen") includes Action Figure', () => {
    expect(home().heroEquipment().byHero('archer-queen').find('action-figure')).toBeDefined();
  });

  it('byRarity("Epic") includes Action Figure', () => {
    expect(home().heroEquipment().byRarity('Epic').find('action-figure')).toBeDefined();
  });

  it('byRarity("Common") does not include Action Figure', () => {
    expect(home().heroEquipment().byRarity('Common').find('action-figure')).toBeUndefined();
  });

  it('byBlacksmith(1) includes Action Figure', () => {
    expect(home().heroEquipment().byBlacksmith(1).find('action-figure')).toBeDefined();
  });
});

testFilterImmutability(
  'byRarity("Epic")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byRarity('Epic'),
);
