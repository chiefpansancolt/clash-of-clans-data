import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('rocketSpear()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().rocketSpear().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('rocket-spear');
    expect(e.name).toBe('Rocket Spear');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().rocketSpear().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().rocketSpear().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().rocketSpear().first()!;
    expect(e.hero).toBe('royal-champion');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(5);
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
    expect(e.ability?.['attackRange']).toBe('10 tiles');
    expect(e.ability?.['areaDamageRadius']).toBe('0.8 tiles');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().rocketSpear().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 350 damage per shot, 7 attacks, DPS+35, HP+50, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().rocketSpear().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(50);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['damagePerShotIncrease']).toBe(350);
    expect(lvl.stats['numberOfAttacks']).toBe(7);
    expect(lvl.stats['dpsIncrease']).toBe(35);
  });

  it('level 9: 560 damage per shot, 8 attacks, 1800 Shiny+200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().rocketSpear().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(250);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['damagePerShotIncrease']).toBe(560);
    expect(lvl.stats['numberOfAttacks']).toBe(8);
    expect(lvl.stats['dpsIncrease']).toBe(78);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().rocketSpear().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 19: blacksmith 7', () => {
    const lvl = home().heroEquipment().rocketSpear().first()!.levels[18];
    expect(lvl.level).toBe(19);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 27: 980 damage per shot, 10 attacks, DPS+168, HP+700, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().rocketSpear().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(700);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['damagePerShotIncrease']).toBe(980);
    expect(lvl.stats['numberOfAttacks']).toBe(10);
    expect(lvl.stats['dpsIncrease']).toBe(168);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().rocketSpear()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().rocketSpear()', () =>
  home().heroEquipment().rocketSpear(),
);
