import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('stickHorse()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().stickHorse().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('stick-horse');
    expect(e.name).toBe('Stick Horse');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().stickHorse().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().stickHorse().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().stickHorse().first()!;
    expect(e.hero).toBe('barbarian-king');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toEqual(['Buy in Wise Warriors event for 3,100 Res Grumpy Medals']);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().stickHorse().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 12s, 9.5 mov, +2% atk, DPS+35, HP+311, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().stickHorse().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(311);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['abilityDuration']).toBe('12s');
    expect(lvl.stats['movementSpeedIncrease']).toBe(9.5);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+2%');
    expect(lvl.stats['dpsIncrease']).toBe(35);
  });

  it('level 9: 18s, 14.3 mov, +11% atk, DPS+65, HP+1678, 1800 Shiny+200 Glowy+10 Starry', () => {
    const lvl = home().heroEquipment().stickHorse().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(1678);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['abilityDuration']).toBe('18s');
    expect(lvl.stats['movementSpeedIncrease']).toBe(14.3);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+11%');
    expect(lvl.stats['dpsIncrease']).toBe(65);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().stickHorse().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 22: blacksmith 8', () => {
    const lvl = home().heroEquipment().stickHorse().first()!.levels[21];
    expect(lvl.level).toBe(22);
    expect(lvl.blacksmithLevelRequired).toBe(8);
  });

  it('level 27: 30s, 24 mov, +33% atk, DPS+222, HP+4606, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().stickHorse().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(4606);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['abilityDuration']).toBe('30s');
    expect(lvl.stats['movementSpeedIncrease']).toBe(24);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+33%');
    expect(lvl.stats['dpsIncrease']).toBe(222);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().stickHorse()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().stickHorse()', () =>
  home().heroEquipment().stickHorse(),
);

describe('heroEquipment() namespace', () => {
  it('has 8 equipment', () => {
    expect(home().heroEquipment().count()).toBe(8);
  });

  it('byHero("barbarian-king") includes Stick Horse', () => {
    expect(home().heroEquipment().byHero('barbarian-king').find('stick-horse')).toBeDefined();
  });

  it('byRarity("Epic") includes Stick Horse', () => {
    expect(home().heroEquipment().byRarity('Epic').find('stick-horse')).toBeDefined();
  });

  it('byRarity("Common") does not include Stick Horse', () => {
    expect(home().heroEquipment().byRarity('Common').find('stick-horse')).toBeUndefined();
  });

  it('byBlacksmith(1) includes Stick Horse', () => {
    expect(home().heroEquipment().byBlacksmith(1).find('stick-horse')).toBeDefined();
  });
});

testFilterImmutability(
  'byRarity("Epic")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byRarity('Epic'),
);
