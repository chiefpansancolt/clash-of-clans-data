import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testFilterImmutability, testQueryBaseContract } from '../../../helpers';

describe('earthquakeBoots()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().earthquakeBoots().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('earthquake-boots');
    expect(e.name).toBe('Earthquake Boots');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().earthquakeBoots().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().earthquakeBoots().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().earthquakeBoots().first()!;
    expect(e.hero).toBe('barbarian-king');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toEqual(['Blacksmith level 1']);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().earthquakeBoots().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: HP+209, blacksmith 1, 10% building dmg, 5% troop dmg, 13 DPS', () => {
    const lvl = home().heroEquipment().earthquakeBoots().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(209);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['buildingDamagePercent']).toBe('10%');
    expect(lvl.stats['troopDamagePercent']).toBe('5%');
    expect(lvl.stats['dpsIncrease']).toBe(13);
  });

  it('has ability: abilityRadius 8, targets Ground', () => {
    const e = home().heroEquipment().earthquakeBoots().first()!;
    expect(e.ability!['abilityRadius']).toBe(8);
    expect(e.ability!['targets']).toBe('Ground');
  });

  it('level 9: HP+522, 1800 Shiny+200 Glowy, blacksmith 1, 34% building dmg', () => {
    const lvl = home().heroEquipment().earthquakeBoots().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(522);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['buildingDamagePercent']).toBe('34%');
    expect(lvl.stats['dpsIncrease']).toBe(32);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().earthquakeBoots().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 18: HP+2500, 2700 Shiny+600 Glowy, blacksmith 7, 40% building dmg, 102 DPS', () => {
    const lvl = home().heroEquipment().earthquakeBoots().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(2500);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['buildingDamagePercent']).toBe('40%');
    expect(lvl.stats['troopDamagePercent']).toBe('20%');
    expect(lvl.stats['dpsIncrease']).toBe(102);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().earthquakeBoots()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().earthquakeBoots()', () =>
  home().heroEquipment().earthquakeBoots(),
);

describe('heroEquipment() namespace', () => {
  it('has 8 equipment', () => {
    expect(home().heroEquipment().count()).toBe(8);
  });

  it('byHero("barbarian-king") includes Earthquake Boots', () => {
    expect(home().heroEquipment().byHero('barbarian-king').find('earthquake-boots')).toBeDefined();
  });

  it('byHero("archer-queen") does not include Earthquake Boots', () => {
    expect(home().heroEquipment().byHero('archer-queen').find('earthquake-boots')).toBeUndefined();
  });

  it('byRarity("Common") includes Earthquake Boots', () => {
    expect(home().heroEquipment().byRarity('Common').find('earthquake-boots')).toBeDefined();
  });

  it('byBlacksmith(1) includes Earthquake Boots', () => {
    expect(home().heroEquipment().byBlacksmith(1).find('earthquake-boots')).toBeDefined();
  });

  it('byBlacksmith(0) does not include Earthquake Boots', () => {
    expect(home().heroEquipment().byBlacksmith(0).find('earthquake-boots')).toBeUndefined();
  });
});

testFilterImmutability(
  'byHero("barbarian-king")',
  () => home().heroEquipment(),
  (q) => (q as HomeVillageHeroEquipment).byHero('barbarian-king'),
);
