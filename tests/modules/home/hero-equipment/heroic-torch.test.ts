import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('heroicTorch()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().heroicTorch().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('heroic-torch');
    expect(e.name).toBe('Heroic Torch');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().heroicTorch().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().heroicTorch().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().heroicTorch().first()!;
    expect(e.hero).toBe('grand-warden');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(3);
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().heroicTorch().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 16s duration, speed 5, 6% damage reduction, HpRec+110, DPS+12, DmgRedInc+35, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().heroicTorch().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hpRecoveryIncrease).toBe(110);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['abilityDuration']).toBe('16s');
    expect(lvl.stats['speedIncrease']).toBe(5);
    expect(lvl.stats['incomingDamageReduction']).toBe('6%');
    expect(lvl.stats['dpsIncrease']).toBe(12);
    expect(lvl.stats['damageReductionIncrease']).toBe(35);
  });

  it('level 9: 19s duration, speed 7, 9% damage reduction, 1800 Shiny+200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().heroicTorch().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hpRecoveryIncrease).toBe(190);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['abilityDuration']).toBe('19s');
    expect(lvl.stats['speedIncrease']).toBe(7);
    expect(lvl.stats['incomingDamageReduction']).toBe('9%');
    expect(lvl.stats['dpsIncrease']).toBe(27);
    expect(lvl.stats['damageReductionIncrease']).toBe(63);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().heroicTorch().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 19: blacksmith 7', () => {
    const lvl = home().heroEquipment().heroicTorch().first()!.levels[18];
    expect(lvl.level).toBe(19);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 27: 27.5s duration, speed 9, 15% damage reduction, HpRec+390, DPS+78, DmgRedInc+137, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().heroicTorch().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hpRecoveryIncrease).toBe(390);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['abilityDuration']).toBe('27.5s');
    expect(lvl.stats['speedIncrease']).toBe(9);
    expect(lvl.stats['incomingDamageReduction']).toBe('15%');
    expect(lvl.stats['dpsIncrease']).toBe(78);
    expect(lvl.stats['damageReductionIncrease']).toBe(137);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().heroicTorch()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().heroicTorch()', () =>
  home().heroEquipment().heroicTorch(),
);
