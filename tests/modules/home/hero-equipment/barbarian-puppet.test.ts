import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('barbarianPuppet()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().barbarianPuppet().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('barbarian-puppet');
    expect(e.name).toBe('Barbarian Puppet');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().barbarianPuppet().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().barbarianPuppet().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().barbarianPuppet().first()!;
    expect(e.hero).toBe('barbarian-king');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toEqual(['Available by default']);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().barbarianPuppet().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: HP+309, Recovery+110, no cost, blacksmith 0', () => {
    const lvl = home().heroEquipment().barbarianPuppet().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(309);
    expect(lvl.hpRecoveryIncrease).toBe(110);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(0);
    expect(lvl.stats['summonedBarbarians']).toBe(8);
    expect(lvl.stats['barbarianDamageIncrease']).toBe('+100%');
    expect(lvl.stats['barbarianSpeedIncrease']).toBe(9.5);
  });

  it('has ability: barbarianRageDuration 20', () => {
    const e = home().heroEquipment().barbarianPuppet().first()!;
    expect(e.ability!['barbarianRageDuration']).toBe(20);
  });

  it('level 9: HP+1045, Recovery+572, 1800 Shiny+200 Glowy, blacksmith 1', () => {
    const lvl = home().heroEquipment().barbarianPuppet().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(1045);
    expect(lvl.hpRecoveryIncrease).toBe(572);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['summonedBarbarians']).toBe(30);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().barbarianPuppet().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 18: HP+3366, Recovery+1386, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().barbarianPuppet().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(3366);
    expect(lvl.hpRecoveryIncrease).toBe(1386);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['summonedBarbarians']).toBe(44);
    expect(lvl.stats['barbarianDamageIncrease']).toBe('+220%');
    expect(lvl.stats['barbarianSpeedIncrease']).toBe(28.7);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().barbarianPuppet()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().barbarianPuppet()', () =>
  home().heroEquipment().barbarianPuppet(),
);

describe('heroEquipment() namespace', () => {
  it('has 8 equipment', () => {
    expect(home().heroEquipment().count()).toBe(8);
  });

  it('byHero("barbarian-king") includes Barbarian Puppet', () => {
    expect(home().heroEquipment().byHero('barbarian-king').find('barbarian-puppet')).toBeDefined();
  });

  it('byHero("archer-queen") does not include Barbarian Puppet', () => {
    expect(home().heroEquipment().byHero('archer-queen').find('barbarian-puppet')).toBeUndefined();
  });

  it('byRarity("Common") includes Barbarian Puppet', () => {
    expect(home().heroEquipment().byRarity('Common').find('barbarian-puppet')).toBeDefined();
  });

  it('byRarity("Epic") does not include Barbarian Puppet', () => {
    expect(home().heroEquipment().byRarity('Epic').find('barbarian-puppet')).toBeUndefined();
  });

  it('byBlacksmith(1) includes Barbarian Puppet', () => {
    expect(home().heroEquipment().byBlacksmith(1).find('barbarian-puppet')).toBeDefined();
  });

  it('byBlacksmith(0) includes Barbarian Puppet (level 1 has no requirement)', () => {
    expect(home().heroEquipment().byBlacksmith(0).find('barbarian-puppet')).toBeDefined();
  });
});

testFilterImmutability(
  'byHero("barbarian-king")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byHero('barbarian-king'),
);
