import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('electroBoots()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().electroBoots().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('electro-boots');
    expect(e.name).toBe('Electro Boots');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().electroBoots().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().electroBoots().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().electroBoots().first()!;
    expect(e.hero).toBe('royal-champion');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toHaveLength(5);
    expect(e.ability?.['auraAttackSpeed']).toBe('0.4s');
    expect(e.ability?.['auraRadius']).toBe('5 tiles');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().electroBoots().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: auraDps 132, auraDamagePerHit 52.8, selfHealing 6, HP+50, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().electroBoots().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(50);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['auraDps']).toBe(132);
    expect(lvl.stats['auraDamagePerHit']).toBe(52.8);
    expect(lvl.stats['selfHealingPerSecond']).toBe(6);
  });

  it('level 9: auraDps 155, 200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().electroBoots().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(250);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['auraDps']).toBe(155);
    expect(lvl.stats['auraDamagePerHit']).toBe(62);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().electroBoots().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 19: blacksmith 7', () => {
    const lvl = home().heroEquipment().electroBoots().first()!.levels[18];
    expect(lvl.level).toBe(19);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 27: auraDps 200, selfHealing 45, HP+700, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().electroBoots().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(700);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['auraDps']).toBe(200);
    expect(lvl.stats['auraDamagePerHit']).toBe(80);
    expect(lvl.stats['selfHealingPerSecond']).toBe(45);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().electroBoots()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().electroBoots()', () =>
  home().heroEquipment().electroBoots(),
);
