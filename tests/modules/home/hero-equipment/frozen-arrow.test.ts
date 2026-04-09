import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('frozenArrow()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().frozenArrow().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('frozen-arrow');
    expect(e.name).toBe('Frozen Arrow');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().frozenArrow().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().frozenArrow().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().frozenArrow().first()!;
    expect(e.hero).toBe('archer-queen');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toContain('Buy in Dragon Festival event for 3,100 Dragon Medals');
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
    expect(e.unlockRequirement).toContain('Purchasable from the League Shop for 750 League Medals');
    expect(e.unlockRequirement).toHaveLength(6);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().frozenArrow().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 25% slow, 0.75s, DPS+35, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().frozenArrow().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['slowDown']).toBe('25%');
    expect(lvl.stats['slowDownDuration']).toBe('0.75s');
    expect(lvl.stats['dpsIncrease']).toBe(35);
  });

  it('level 9: 37% slow, 1.50s, DPS+78, 1800 Shiny+200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().frozenArrow().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['slowDown']).toBe('37%');
    expect(lvl.stats['slowDownDuration']).toBe('1.50s');
    expect(lvl.stats['dpsIncrease']).toBe(78);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().frozenArrow().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 22: blacksmith 8', () => {
    const lvl = home().heroEquipment().frozenArrow().first()!.levels[21];
    expect(lvl.level).toBe(22);
    expect(lvl.blacksmithLevelRequired).toBe(8);
  });

  it('level 27: 65% slow, 3.00s, DPS+168, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().frozenArrow().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['slowDown']).toBe('65%');
    expect(lvl.stats['slowDownDuration']).toBe('3.00s');
    expect(lvl.stats['dpsIncrease']).toBe(168);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().frozenArrow()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().frozenArrow()', () =>
  home().heroEquipment().frozenArrow(),
);
