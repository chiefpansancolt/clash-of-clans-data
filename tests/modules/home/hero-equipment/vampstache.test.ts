import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('vampstache()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().vampstache().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('vampstache');
    expect(e.name).toBe('Vampstache');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().vampstache().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().vampstache().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().vampstache().first()!;
    expect(e.hero).toBe('barbarian-king');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toEqual(['Blacksmith level 3']);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().vampstache().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: healPerHit 60, DPS+10, speed+5%, no cost, blacksmith 3', () => {
    const lvl = home().heroEquipment().vampstache().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(3);
    expect(lvl.stats['healPerHit']).toBe(60);
    expect(lvl.stats['dpsIncrease']).toBe(10);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+5%');
  });

  it('level 9: healPerHit 160, DPS+60, speed+13%, 1800 Shiny+200 Glowy, blacksmith 3', () => {
    const lvl = home().heroEquipment().vampstache().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.blacksmithLevelRequired).toBe(3);
    expect(lvl.stats['healPerHit']).toBe(160);
    expect(lvl.stats['dpsIncrease']).toBe(60);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+13%');
  });

  it('level 13: blacksmith 5', () => {
    const lvl = home().heroEquipment().vampstache().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(5);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().vampstache().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: healPerHit 300, DPS+120, speed+22%, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().vampstache().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['healPerHit']).toBe(300);
    expect(lvl.stats['dpsIncrease']).toBe(120);
    expect(lvl.stats['attackSpeedIncrease']).toBe('+22%');
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().vampstache()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().vampstache()', () =>
  home().heroEquipment().vampstache(),
);

describe('heroEquipment() namespace', () => {
  it('has 8 equipment', () => {
    expect(home().heroEquipment().count()).toBe(8);
  });

  it('byHero("barbarian-king") includes Vampstache', () => {
    expect(home().heroEquipment().byHero('barbarian-king').find('vampstache')).toBeDefined();
  });

  it('byHero("archer-queen") does not include Vampstache', () => {
    expect(home().heroEquipment().byHero('archer-queen').find('vampstache')).toBeUndefined();
  });

  it('byRarity("Common") includes Vampstache', () => {
    expect(home().heroEquipment().byRarity('Common').find('vampstache')).toBeDefined();
  });

  it('byBlacksmith(3) includes Vampstache', () => {
    expect(home().heroEquipment().byBlacksmith(3).find('vampstache')).toBeDefined();
  });

  it('byBlacksmith(2) does not include Vampstache', () => {
    expect(home().heroEquipment().byBlacksmith(2).find('vampstache')).toBeUndefined();
  });
});

testFilterImmutability(
  'byHero("barbarian-king")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byHero('barbarian-king'),
);
