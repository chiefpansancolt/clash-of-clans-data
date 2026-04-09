import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('rageVial()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().rageVial().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('rage-vial');
    expect(e.name).toBe('Rage Vial');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().rageVial().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().rageVial().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().rageVial().first()!;
    expect(e.hero).toBe('barbarian-king');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toEqual(['Available by default']);
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().rageVial().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: Recovery+150, no cost, blacksmith 0, +120% dmg, 18.0 speed, 17 DPS', () => {
    const lvl = home().heroEquipment().rageVial().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hpRecoveryIncrease).toBe(150);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(0);
    expect(lvl.stats['damageIncrease']).toBe('+120%');
    expect(lvl.stats['movementSpeedIncrease']).toBe(18.0);
    expect(lvl.stats['dpsIncrease']).toBe(17);
  });

  it('has ability: abilityDuration 10', () => {
    const e = home().heroEquipment().rageVial().first()!;
    expect(e.ability!['abilityDuration']).toBe(10);
  });

  it('level 9: Recovery+780, 1800 Shiny+200 Glowy, blacksmith 1', () => {
    const lvl = home().heroEquipment().rageVial().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hpRecoveryIncrease).toBe(780);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['damageIncrease']).toBe('+140%');
    expect(lvl.stats['dpsIncrease']).toBe(60);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().rageVial().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 18: Recovery+1890, 2700 Shiny+600 Glowy, blacksmith 7, +155% dmg, 38.3 speed, 128 DPS', () => {
    const lvl = home().heroEquipment().rageVial().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hpRecoveryIncrease).toBe(1890);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['damageIncrease']).toBe('+155%');
    expect(lvl.stats['movementSpeedIncrease']).toBe(38.3);
    expect(lvl.stats['dpsIncrease']).toBe(128);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().rageVial()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().rageVial()', () => home().heroEquipment().rageVial());
