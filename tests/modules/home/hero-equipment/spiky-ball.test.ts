import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('spikyBall()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().spikyBall().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('spiky-ball');
    expect(e.name).toBe('Spiky Ball');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().spikyBall().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().spikyBall().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().spikyBall().first()!;
    expect(e.hero).toBe('barbarian-king');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
    expect(e.unlockRequirement).toHaveLength(6);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().spikyBall().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 1000 dmg, 2 targets, DPS+35, HP+365, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().spikyBall().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(365);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['projectileDamagePerTarget']).toBe(1000);
    expect(lvl.stats['numberOfTargets']).toBe(2);
    expect(lvl.stats['dpsIncrease']).toBe(35);
  });

  it('level 9: 1750 dmg, 5 targets, DPS+65, HP+1265, 1800 Shiny+200 Glowy+10 Starry', () => {
    const lvl = home().heroEquipment().spikyBall().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(1265);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['projectileDamagePerTarget']).toBe(1750);
    expect(lvl.stats['numberOfTargets']).toBe(5);
    expect(lvl.stats['dpsIncrease']).toBe(65);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().spikyBall().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 22: blacksmith 8', () => {
    const lvl = home().heroEquipment().spikyBall().first()!.levels[21];
    expect(lvl.level).toBe(22);
    expect(lvl.blacksmithLevelRequired).toBe(8);
  });

  it('level 27: 3250 dmg, 8 targets, DPS+222, HP+3290, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().spikyBall().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(3290);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['projectileDamagePerTarget']).toBe(3250);
    expect(lvl.stats['numberOfTargets']).toBe(8);
    expect(lvl.stats['dpsIncrease']).toBe(222);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().spikyBall()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().spikyBall()', () =>
  home().heroEquipment().spikyBall(),
);

describe('heroEquipment() namespace', () => {
  it('has 8 equipment', () => {
    expect(home().heroEquipment().count()).toBe(8);
  });

  it('byHero("barbarian-king") includes Spiky Ball', () => {
    expect(home().heroEquipment().byHero('barbarian-king').find('spiky-ball')).toBeDefined();
  });

  it('byRarity("Epic") includes Spiky Ball', () => {
    expect(home().heroEquipment().byRarity('Epic').find('spiky-ball')).toBeDefined();
  });

  it('byRarity("Common") does not include Spiky Ball', () => {
    expect(home().heroEquipment().byRarity('Common').find('spiky-ball')).toBeUndefined();
  });

  it('byBlacksmith(1) includes Spiky Ball', () => {
    expect(home().heroEquipment().byBlacksmith(1).find('spiky-ball')).toBeDefined();
  });
});

testFilterImmutability(
  'byRarity("Epic")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byRarity('Epic'),
);
