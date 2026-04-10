import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('frostFlake()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().frostFlake().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('frost-flake');
    expect(e.name).toBe('Frost Flake');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().frostFlake().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().frostFlake().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().frostFlake().first()!;
    expect(e.hero).toBe('royal-champion');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(2);
    expect(e.ability?.['slowDown']).toBe('100%');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().frostFlake().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: damage 105, slowDown 5.2s, 4 targets, HP+50, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().frostFlake().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(50);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['projectileDamage']).toBe(105);
    expect(lvl.stats['slowDownDuration']).toBe('5.2s');
    expect(lvl.stats['numberOfTargets']).toBe(4);
  });

  it('level 9: damage 168, 5 targets, 200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().frostFlake().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(250);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['projectileDamage']).toBe(168);
    expect(lvl.stats['numberOfTargets']).toBe(5);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().frostFlake().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 19: blacksmith 7', () => {
    const lvl = home().heroEquipment().frostFlake().first()!.levels[18];
    expect(lvl.level).toBe(19);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 27: damage 294, slowDown 7s, 7 targets, HP+700, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().frostFlake().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(700);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['projectileDamage']).toBe(294);
    expect(lvl.stats['slowDownDuration']).toBe('7s');
    expect(lvl.stats['numberOfTargets']).toBe(7);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().frostFlake()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().frostFlake()', () =>
  home().heroEquipment().frostFlake(),
);
