import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('eternalTome()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().eternalTome().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('eternal-tome');
    expect(e.name).toBe('Eternal Tome');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().eternalTome().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().eternalTome().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().eternalTome().first()!;
    expect(e.hero).toBe('grand-warden');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Available by default');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().eternalTome().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 3.2s duration, no cost, blacksmith 0', () => {
    const lvl = home().heroEquipment().eternalTome().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(0);
    expect(lvl.stats['abilityDuration']).toBe('3.2s');
  });

  it('level 9: 6.7s duration, 1800 Shiny+200 Glowy, blacksmith 1', () => {
    const lvl = home().heroEquipment().eternalTome().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['abilityDuration']).toBe('6.7s');
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().eternalTome().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().eternalTome().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: 8.2s duration, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().eternalTome().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['abilityDuration']).toBe('8.2s');
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().eternalTome()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().eternalTome()', () =>
  home().heroEquipment().eternalTome(),
);
