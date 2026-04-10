import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('rocketBackpack()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().rocketBackpack().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('rocket-backpack');
    expect(e.name).toBe('Rocket Backpack');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().rocketBackpack().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().rocketBackpack().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().rocketBackpack().first()!;
    expect(e.hero).toBe('dragon-duke');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(1);
    expect(e.ability?.['damageArea']).toBe('4 tiles');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().rocketBackpack().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: abilityDamage 575, DPS+20, HP+900, hpRecovery 300, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().rocketBackpack().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(900);
    expect(lvl.hpRecoveryIncrease).toBe(300);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['abilityDamage']).toBe(575);
    expect(lvl.stats['dpsIncrease']).toBe(20);
  });

  it('level 9: 200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().rocketBackpack().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['abilityDamage']).toBe(1125);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().rocketBackpack().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 19: blacksmith 7', () => {
    const lvl = home().heroEquipment().rocketBackpack().first()!.levels[18];
    expect(lvl.level).toBe(19);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 27: abilityDamage 2200, DPS+86, HP+3200, hpRecovery 2000, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().rocketBackpack().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(3200);
    expect(lvl.hpRecoveryIncrease).toBe(2000);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['abilityDamage']).toBe(2200);
    expect(lvl.stats['dpsIncrease']).toBe(86);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().rocketBackpack()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().rocketBackpack()', () =>
  home().heroEquipment().rocketBackpack(),
);
