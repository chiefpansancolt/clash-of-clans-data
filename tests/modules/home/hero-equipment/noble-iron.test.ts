import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('nobleIron()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().nobleIron().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('noble-iron');
    expect(e.name).toBe('Noble Iron');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().nobleIron().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().nobleIron().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().nobleIron().first()!;
    expect(e.hero).toBe('minion-prince');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toHaveLength(1);
    expect(e.unlockRequirement).toContain('Blacksmith level 5');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().nobleIron().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: dmg 350, range 10, attacks 5, speed+6%, HP+500, no cost, blacksmith 5', () => {
    const lvl = home().heroEquipment().nobleIron().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(500);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(5);
    expect(lvl.stats['damagePerShotIncrease']).toBe(350);
    expect(lvl.stats['attackRange']).toBe(10);
    expect(lvl.stats['numberOfAttacks']).toBe(5);
    expect(lvl.stats['attackSpeedIncrease']).toBe(6);
  });

  it('level 9: dmg 560, range 11, attacks 7, speed+11%, HP+500, 1800 Shiny+200 Glowy, blacksmith 5', () => {
    const lvl = home().heroEquipment().nobleIron().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(500);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(5);
    expect(lvl.stats['damagePerShotIncrease']).toBe(560);
    expect(lvl.stats['attackRange']).toBe(11);
    expect(lvl.stats['numberOfAttacks']).toBe(7);
    expect(lvl.stats['attackSpeedIncrease']).toBe(11);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().nobleIron().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: dmg 770, range 12, attacks 10, speed+18%, HP+500, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().nobleIron().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(500);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['damagePerShotIncrease']).toBe(770);
    expect(lvl.stats['attackRange']).toBe(12);
    expect(lvl.stats['numberOfAttacks']).toBe(10);
    expect(lvl.stats['attackSpeedIncrease']).toBe(18);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().nobleIron()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().nobleIron()', () =>
  home().heroEquipment().nobleIron(),
);
