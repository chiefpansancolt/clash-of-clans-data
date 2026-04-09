import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('giantArrow()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().giantArrow().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('giant-arrow');
    expect(e.name).toBe('Giant Arrow');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().giantArrow().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().giantArrow().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().giantArrow().first()!;
    expect(e.hero).toBe('archer-queen');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toEqual(['Blacksmith level 2']);
  });

  it('has ability: damageRadius 1 tile', () => {
    const e = home().heroEquipment().giantArrow().first()!;
    expect(e.ability!['damageRadius']).toBe('1 tile');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().giantArrow().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 750 proj dmg, DPS+20, HP+80, no cost, blacksmith 2', () => {
    const lvl = home().heroEquipment().giantArrow().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(80);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(2);
    expect(lvl.stats['projectileDamage']).toBe(750);
    expect(lvl.stats['dpsIncrease']).toBe(20);
  });

  it('level 9: 1200 proj dmg, DPS+50, HP+199, 1800 Shiny+200 Glowy, blacksmith 2', () => {
    const lvl = home().heroEquipment().giantArrow().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(199);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(2);
    expect(lvl.stats['projectileDamage']).toBe(1200);
    expect(lvl.stats['dpsIncrease']).toBe(50);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().giantArrow().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().giantArrow().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: 2000 proj dmg, DPS+132, HP+581, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().giantArrow().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(581);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['projectileDamage']).toBe(2000);
    expect(lvl.stats['dpsIncrease']).toBe(132);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().giantArrow()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().giantArrow()', () =>
  home().heroEquipment().giantArrow(),
);
