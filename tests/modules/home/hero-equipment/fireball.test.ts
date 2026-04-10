import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('fireball()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().fireball().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('fireball');
    expect(e.name).toBe('Fireball');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().fireball().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().fireball().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().fireball().first()!;
    expect(e.hero).toBe('grand-warden');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(6);
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
    expect(e.unlockRequirement).toContain(
      'Buy in Super Dragon Spotlight event for 3,100 Super Medals',
    );
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().fireball().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 4 tiles radius, 1500 damage, DPS+21, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().fireball().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['damageRadius']).toBe('4 tiles');
    expect(lvl.stats['projectileDamage']).toBe(1500);
    expect(lvl.stats['dpsIncrease']).toBe(21);
  });

  it('level 9: 5 tiles radius, 2200 damage, DPS+47, 1800 Shiny+200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().fireball().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['damageRadius']).toBe('5 tiles');
    expect(lvl.stats['projectileDamage']).toBe(2200);
    expect(lvl.stats['dpsIncrease']).toBe(47);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().fireball().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 19: blacksmith 7', () => {
    const lvl = home().heroEquipment().fireball().first()!.levels[18];
    expect(lvl.level).toBe(19);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 27: 6 tiles radius, 4100 damage, DPS+101, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().fireball().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['damageRadius']).toBe('6 tiles');
    expect(lvl.stats['projectileDamage']).toBe(4100);
    expect(lvl.stats['dpsIncrease']).toBe(101);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().fireball()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().fireball()', () => home().heroEquipment().fireball());
