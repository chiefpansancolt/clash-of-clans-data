import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('electroFangs()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().electroFangs().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('electro-fangs');
    expect(e.name).toBe('Electro Fangs');
  });

  it('has 18 levels', () => {
    expect(home().heroEquipment().electroFangs().first()!.levels).toHaveLength(18);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().electroFangs().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().electroFangs().first()!;
    expect(e.hero).toBe('dragon-duke');
    expect(e.rarity).toBe('Common');
    expect(e.abilityType).toBe('Passive');
    expect(e.unlockRequirement).toContain('Blacksmith level 10');
    expect(e.ability?.['chainDamageDecay']).toBe('-20%');
    expect(e.ability?.['chainDistance']).toBe('3 tiles');
  });

  it('has an icon image', () => {
    const e = home().heroEquipment().electroFangs().first()!;
    expect(e.images.icon).toBeTruthy();
  });

  it('level 1: damage 330, 1 target, HP+400, no cost, blacksmith 10', () => {
    const lvl = home().heroEquipment().electroFangs().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(400);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(10);
    expect(lvl.stats['damagePerHit']).toBe(330);
    expect(lvl.stats['numberOfTargets']).toBe(1);
  });

  it('level 9: damage 360, 3 targets, HP+1750, 1800 shiny, 200 glowy', () => {
    const lvl = home().heroEquipment().electroFangs().first()!.levels[8];
    expect(lvl.level).toBe(9);
    expect(lvl.hitpointIncrease).toBe(1750);
    expect(lvl.upgradeShinyOre).toBe(1800);
    expect(lvl.upgradeGlowingOre).toBe(200);
    expect(lvl.stats['damagePerHit']).toBe(360);
    expect(lvl.stats['numberOfTargets']).toBe(3);
  });

  it('level 15: damage 380, 4 targets', () => {
    const lvl = home().heroEquipment().electroFangs().first()!.levels[14];
    expect(lvl.level).toBe(15);
    expect(lvl.stats['damagePerHit']).toBe(380);
    expect(lvl.stats['numberOfTargets']).toBe(4);
  });

  it('level 18: damage 400, 4 targets, HP+2400, 2700 shiny, 600 glowy, blacksmith 10', () => {
    const lvl = home().heroEquipment().electroFangs().first()!.levels[17];
    expect(lvl.level).toBe(18);
    expect(lvl.hitpointIncrease).toBe(2400);
    expect(lvl.upgradeShinyOre).toBe(2700);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(10);
    expect(lvl.stats['damagePerHit']).toBe(400);
    expect(lvl.stats['numberOfTargets']).toBe(4);
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().electroFangs()).toBeInstanceOf(HomeVillageHeroEquipment);
  });
});

testQueryBaseContract('home().heroEquipment().electroFangs()', () =>
  home().heroEquipment().electroFangs(),
);
