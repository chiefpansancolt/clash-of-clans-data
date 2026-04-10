import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('healingTome()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().healingTome().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('healing-tome');
    expect(e.name).toBe('Healing Tome');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().healingTome().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().healingTome().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().healingTome().first()!;
    expect(e.hero).toBe('grand-warden');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Blacksmith level 6');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().healingTome().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: 60 HPS, 15.0s duration, HP+92, HpRec+165, no cost, blacksmith 6', () => {
    const lvl = home().heroEquipment().healingTome().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(92);
    expect(lvl.hpRecoveryIncrease).toBe(165);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(6);
    expect(lvl.stats['healingPerSecond']).toBe(60);
    expect(lvl.stats['abilityDuration']).toBe('15.0s');
  });

  it('level 9: 100 HPS, 18.0s duration, HP+229, HpRec+413, 1800 Shiny+200 Glowy, blacksmith 6', () => {
    const lvl = home().heroEquipment().healingTome().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(229);
    expect(lvl.hpRecoveryIncrease).toBe(413);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(6);
    expect(lvl.stats['healingPerSecond']).toBe(100);
    expect(lvl.stats['abilityDuration']).toBe('18.0s');
  });

  it('level 16: blacksmith 7', () => {
    const lvl = home().heroEquipment().healingTome().first()!.levels[15];
    expect(lvl.level).toBe(16);
    expect(lvl.blacksmithLevelRequired).toBe(7);
  });

  it('level 18: 150 HPS, 20.0s duration, HP+685, HpRec+863, 2700 Shiny+600 Glowy, blacksmith 7', () => {
    const lvl = home().heroEquipment().healingTome().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(685);
    expect(lvl.hpRecoveryIncrease).toBe(863);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(7);
    expect(lvl.stats['healingPerSecond']).toBe(150);
    expect(lvl.stats['abilityDuration']).toBe('20.0s');
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().healingTome()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().healingTome()', () =>
  home().heroEquipment().healingTome(),
);
