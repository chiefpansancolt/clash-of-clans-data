import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('invisibilityVial()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().invisibilityVial().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('invisibility-vial');
    expect(e.name).toBe('Invisibility Vial');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().invisibilityVial().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().invisibilityVial().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().invisibilityVial().first()!;
    expect(e.hero).toBe('archer-queen');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toEqual(['Available by default']);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().invisibilityVial().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 4.2s, DmgPerShot+340, HP+80, no cost, blacksmith 0', () => {
    const lvl = home().heroEquipment().invisibilityVial().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(80);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(0);
    expect(lvl.stats['abilityDuration']).toBe('4.2s');
    expect(lvl.stats['damagePerShotIncrease']).toBe(340);
  });

  it('level 9: 6.0s, DmgPerShot+1120, HP+340, 1800 Shiny+200 Glowy, blacksmith 1', () => {
    const lvl = home().heroEquipment().invisibilityVial().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(340);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['abilityDuration']).toBe('6.0s');
    expect(lvl.stats['damagePerShotIncrease']).toBe(1120);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().invisibilityVial().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().invisibilityVial().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: 7.8s, DmgPerShot+1740, HP+700, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().invisibilityVial().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(700);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['abilityDuration']).toBe('7.8s');
    expect(lvl.stats['damagePerShotIncrease']).toBe(1740);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().invisibilityVial()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().invisibilityVial()', () =>
  home().heroEquipment().invisibilityVial(),
);

describe('heroEquipment() namespace', () => {
  it('has 13 equipment', () => {
    expect(home().heroEquipment().count()).toBe(15);
  });

  it('byHero("archer-queen") includes Invisibility Vial', () => {
    expect(home().heroEquipment().byHero('archer-queen').find('invisibility-vial')).toBeDefined();
  });

  it('byRarity("Common") includes Invisibility Vial', () => {
    expect(home().heroEquipment().byRarity('Common').find('invisibility-vial')).toBeDefined();
  });

  it('byRarity("Epic") does not include Invisibility Vial', () => {
    expect(home().heroEquipment().byRarity('Epic').find('invisibility-vial')).toBeUndefined();
  });

  it('byBlacksmith(1) includes Invisibility Vial', () => {
    expect(home().heroEquipment().byBlacksmith(1).find('invisibility-vial')).toBeDefined();
  });
});

testFilterImmutability(
  'byRarity("Common")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byRarity('Common'),
);
