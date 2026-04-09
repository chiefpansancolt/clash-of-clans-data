import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('magicMirror()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().magicMirror().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('magic-mirror');
    expect(e.name).toBe('Magic Mirror');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().magicMirror().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().magicMirror().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().magicMirror().first()!;
    expect(e.hero).toBe('archer-queen');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toHaveLength(5);
    expect(e.unlockRequirement).toContain('Buy in Anime Clash event for 3,100 Magic Medals');
    expect(e.unlockRequirement).toContain('Purchasable from the Trader for 1,500 Gems');
  });

  it('has constant ability invisibilityDuration', () => {
    const e = home().heroEquipment().magicMirror().first()!;
    expect(e.ability?.['invisibilityDuration']).toBe('1s');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().magicMirror().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 1 clone, 20s, DPS 136, HP 580, hpRecov+198, HP+88, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().magicMirror().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hpRecoveryIncrease).toBe(198);
    expect(lvl.hitpointIncrease).toBe(88);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['clones']).toBe(1);
    expect(lvl.stats['cloneDuration']).toBe('20s');
    expect(lvl.stats['cloneDps']).toBe(136);
    expect(lvl.stats['cloneHealth']).toBe(580);
  });

  it('level 9: 1 clone, 25s, DPS 346, HP 1459, hpRecov+397, HP+307, 1800 Shiny+200 Glowy+10 Starry, blacksmith 1', () => {
    const lvl = home().heroEquipment().magicMirror().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hpRecoveryIncrease).toBe(397);
    expect(lvl.hitpointIncrease).toBe(307);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(10);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['clones']).toBe(1);
    expect(lvl.stats['cloneDuration']).toBe('25s');
    expect(lvl.stats['cloneDps']).toBe(346);
    expect(lvl.stats['cloneHealth']).toBe(1459);
  });

  it('level 13: blacksmith 3', () => {
    const lvl = home().heroEquipment().magicMirror().first()!.levels[12];
    expect(lvl.level).toBe(13);
    expect(lvl.blacksmithLevelRequired).toBe(3);
  });

  it('level 18: 2 clones, blacksmith 5', () => {
    const lvl = home().heroEquipment().magicMirror().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.blacksmithLevelRequired).toBe(5);
    expect(lvl.stats['clones']).toBe(2);
  });

  it('level 22: blacksmith 8', () => {
    const lvl = home().heroEquipment().magicMirror().first()!.levels[21];
    expect(lvl.level).toBe(22);
    expect(lvl.blacksmithLevelRequired).toBe(8);
  });

  it('level 27: 2 clones, 30s, DPS 765, HP 3216, hpRecov+891, HP+861, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().magicMirror().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hpRecoveryIncrease).toBe(891);
    expect(lvl.hitpointIncrease).toBe(861);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['clones']).toBe(2);
    expect(lvl.stats['cloneDuration']).toBe('30s');
    expect(lvl.stats['cloneDps']).toBe(765);
    expect(lvl.stats['cloneHealth']).toBe(3216);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().magicMirror()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().magicMirror()', () =>
  home().heroEquipment().magicMirror(),
);
