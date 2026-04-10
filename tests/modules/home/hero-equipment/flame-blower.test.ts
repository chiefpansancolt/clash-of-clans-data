import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('flameBlower()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().flameBlower().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('flame-blower');
    expect(e.name).toBe('Flame Blower');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().flameBlower().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().flameBlower().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().flameBlower().first()!;
    expect(e.hero).toBe('dragon-duke');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Available by default');
    expect(e.ability?.['damageRadius']).toBe('12 tiles');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().flameBlower().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: abilityDamage 1300, HP+500, hpRecovery 150, no cost, blacksmith 0', () => {
    const lvl = home().heroEquipment().flameBlower().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(500);
    expect(lvl.hpRecoveryIncrease).toBe(150);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(0);
    expect(lvl.stats['abilityDamage']).toBe(1300);
  });

  it('level 10: blacksmith 3', () => {
    const lvl = home().heroEquipment().flameBlower().first()!.levels[9];
    expect(lvl.level).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().flameBlower().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: abilityDamage 2500, HP+3100, hpRecovery 1500, blacksmith 7', () => {
    const lvl = home().heroEquipment().flameBlower().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(3100);
    expect(lvl.hpRecoveryIncrease).toBe(1500);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['abilityDamage']).toBe(2500);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().flameBlower()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().flameBlower()', () =>
  home().heroEquipment().flameBlower(),
);
