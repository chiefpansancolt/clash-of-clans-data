import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('stunBlaster()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().stunBlaster().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('stun-blaster');
    expect(e.name).toBe('Stun Blaster');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().stunBlaster().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().stunBlaster().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().stunBlaster().first()!;
    expect(e.hero).toBe('dragon-duke');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Blacksmith level 9');
    expect(e.ability?.['damageRadius']).toBe('8 tiles');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().stunBlaster().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: damage 150, stun 4.5s, DPS+40, HP+450, no cost, blacksmith 9', () => {
    const lvl = home().heroEquipment().stunBlaster().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(450);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['abilityTotalDamage']).toBe(150);
    expect(lvl.stats['stunDuration']).toBe('4.5s');
    expect(lvl.stats['dpsIncrease']).toBe(40);
  });

  it('all levels require blacksmith 9', () => {
    const levels = home().heroEquipment().stunBlaster().first()!.levels;
    expect(levels.every((l) => l.blacksmithLevelRequired === 9)).toBe(true);
  });

  it('level 18: damage 400, stun 7.5s, DPS+90, HP+2400, blacksmith 9', () => {
    const lvl = home().heroEquipment().stunBlaster().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(2400);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['abilityTotalDamage']).toBe(400);
    expect(lvl.stats['stunDuration']).toBe('7.5s');
    expect(lvl.stats['dpsIncrease']).toBe(90);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().stunBlaster()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().stunBlaster()', () =>
  home().heroEquipment().stunBlaster(),
);
