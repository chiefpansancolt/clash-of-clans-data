import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('metalPants()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().metalPants().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('metal-pants');
    expect(e.name).toBe('Metal Pants');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().metalPants().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().metalPants().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().metalPants().first()!;
    expect(e.hero).toBe('minion-prince');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(1);
    expect(e.unlockRequirement).toContain('Blacksmith level 3');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().metalPants().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 9s duration, 46% reduction, HP+850, HPRecovery+1600, no cost, blacksmith 3', () => {
    const lvl = home().heroEquipment().metalPants().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(850);
    expect(lvl.hpRecoveryIncrease).toBe(1600);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(3);
    expect(lvl.stats['abilityDuration']).toBe('9s');
    expect(lvl.stats['incomingDamageReduction']).toBe(46);
  });

  it('level 9: 12s duration, 58% reduction, HP+1250, HPRecovery+2050, 1800 Shiny+200 Glowy, blacksmith 3', () => {
    const lvl = home().heroEquipment().metalPants().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(1250);
    expect(lvl.hpRecoveryIncrease).toBe(2050);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(3);
    expect(lvl.stats['abilityDuration']).toBe('12s');
    expect(lvl.stats['incomingDamageReduction']).toBe(58);
  });

  it('level 13: blacksmith 5', () => {
    const lvl = home().heroEquipment().metalPants().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(5);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().metalPants().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: 15s duration, 70% reduction, HP+1700, HPRecovery+2500, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().metalPants().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(1700);
    expect(lvl.hpRecoveryIncrease).toBe(2500);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['abilityDuration']).toBe('15s');
    expect(lvl.stats['incomingDamageReduction']).toBe(70);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().metalPants()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().metalPants()', () =>
  home().heroEquipment().metalPants(),
);
