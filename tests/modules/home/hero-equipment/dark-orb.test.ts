import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('darkOrb()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().darkOrb().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('dark-orb');
    expect(e.name).toBe('Dark Orb');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().darkOrb().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().darkOrb().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().darkOrb().first()!;
    expect(e.hero).toBe('minion-prince');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(1);
    expect(e.unlockRequirement).toContain('Available by default');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().darkOrb().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: projectile 45, slow 20%, 8s, DPS+10, HP+588, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().darkOrb().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(588);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['projectileDamage']).toBe(45);
    expect(lvl.stats['slowDownPercent']).toBe(20);
    expect(lvl.stats['slowDownDuration']).toBe('8s');
    expect(lvl.stats['dpsIncrease']).toBe(10);
  });

  it('level 9: projectile 75, slow 35%, 11s, DPS+40, HP+719, 1800 Shiny+200 Glowy, blacksmith 1', () => {
    const lvl = home().heroEquipment().darkOrb().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(719);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['projectileDamage']).toBe(75);
    expect(lvl.stats['slowDownPercent']).toBe(35);
    expect(lvl.stats['slowDownDuration']).toBe('11s');
    expect(lvl.stats['dpsIncrease']).toBe(40);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().darkOrb().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().darkOrb().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: projectile 200, slow 50%, 18s, DPS+73, HP+1140, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().darkOrb().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(1140);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['projectileDamage']).toBe(200);
    expect(lvl.stats['slowDownPercent']).toBe(50);
    expect(lvl.stats['slowDownDuration']).toBe('18s');
    expect(lvl.stats['dpsIncrease']).toBe(73);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().darkOrb()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().darkOrb()', () => home().heroEquipment().darkOrb());
