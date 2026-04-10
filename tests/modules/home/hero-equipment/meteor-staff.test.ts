import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('meteorStaff()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().meteorStaff().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('meteor-staff');
    expect(e.name).toBe('Meteor Staff');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().meteorStaff().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().meteorStaff().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().meteorStaff().first()!;
    expect(e.hero).toBe('minion-prince');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toHaveLength(3);
    expect(e.unlockRequirement).toContain('Buy in Cosmic Rock event for 3,100 Music Medals');
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().meteorStaff().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 10s cooldown, 250 dmg, DPS+13, HP+558, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().meteorStaff().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(558);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['cooldownTime']).toBe('10s');
    expect(lvl.stats['damagePerHit']).toBe(250);
    expect(lvl.stats['dpsIncrease']).toBe(13);
  });

  it('level 9: 8.5s cooldown, 400 dmg, DPS+45, HP+788, 1800 Shiny+200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().meteorStaff().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(788);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['cooldownTime']).toBe('8.5s');
    expect(lvl.stats['damagePerHit']).toBe(400);
    expect(lvl.stats['dpsIncrease']).toBe(45);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().meteorStaff().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 19: blacksmith 7', () => {
    const lvl = home().heroEquipment().meteorStaff().first()!.levels[18];
    expect(lvl.level).toBe(19);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 27: 5s cooldown, 850 dmg, DPS+125, HP+1381, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().meteorStaff().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(1381);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['cooldownTime']).toBe('5s');
    expect(lvl.stats['damagePerHit']).toBe(850);
    expect(lvl.stats['dpsIncrease']).toBe(125);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().meteorStaff()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().meteorStaff()', () =>
  home().heroEquipment().meteorStaff(),
);
