import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('hasteVial()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().hasteVial().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('haste-vial');
    expect(e.name).toBe('Haste Vial');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().hasteVial().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().hasteVial().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().hasteVial().first()!;
    expect(e.hero).toBe('royal-champion');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Blacksmith level 8');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().hasteVial().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 7.0s duration, speed 18, +60% atk spd, DPS+20, +5% hero atk spd, no cost, blacksmith 8', () => {
    const lvl = home().heroEquipment().hasteVial().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(8);
    expect(lvl.stats['abilityDuration']).toBe('7.0s');
    expect(lvl.stats['speedIncrease']).toBe(18.0);
    expect(lvl.stats['abilityAttackSpeedIncrease']).toBe('+60%');
    expect(lvl.stats['dpsIncrease']).toBe(20);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+5%');
  });

  it('level 9: 8.5s duration, speed 28.7, +80% atk spd, 1800 Shiny+200 Glowy, blacksmith 8', () => {
    const lvl = home().heroEquipment().hasteVial().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(8);
    expect(lvl.stats['abilityDuration']).toBe('8.5s');
    expect(lvl.stats['speedIncrease']).toBe(28.7);
    expect(lvl.stats['abilityAttackSpeedIncrease']).toBe('+80%');
    expect(lvl.stats['dpsIncrease']).toBe(52);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+10%');
  });

  it('level 15: +100% ability attack speed', () => {
    const lvl = home().heroEquipment().hasteVial().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.stats['abilityAttackSpeedIncrease']).toBe('+100%');
  });

  it('level 18: 10.0s duration, speed 38.3, +100% atk spd, DPS+88, +16% hero atk spd, 2700 Shiny+600 Glowy, blacksmith 8', () => {
    const lvl = home().heroEquipment().hasteVial().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(8);
    expect(lvl.stats['abilityDuration']).toBe('10.0s');
    expect(lvl.stats['speedIncrease']).toBe(38.3);
    expect(lvl.stats['abilityAttackSpeedIncrease']).toBe('+100%');
    expect(lvl.stats['dpsIncrease']).toBe(88);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+16%');
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().hasteVial()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().hasteVial()', () =>
  home().heroEquipment().hasteVial(),
);
