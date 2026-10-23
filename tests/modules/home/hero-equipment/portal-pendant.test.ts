import { home, HomeVillageHeroEquipment } from '@/modules/home';
import { testQueryBaseContract } from '../../../helpers';

describe('portalPendant()', () => {
  it('returns a HeroEquipment', () => {
    const e = home().heroEquipment().portalPendant().first()!;
    expect(e).toBeDefined();
    expect(e.id).toBe('portal-pendant');
    expect(e.name).toBe('Portal Pendant');
  });

  it('has 27 levels', () => {
    expect(home().heroEquipment().portalPendant().first()!.levels).toHaveLength(27);
  });

  it('is hero-equipment in home base', () => {
    const e = home().heroEquipment().portalPendant().first()!;
    expect(e.category).toBe('hero-equipment');
    expect(e.base).toBe('home');
  });

  it('has correct top-level stats', () => {
    const e = home().heroEquipment().portalPendant().first()!;
    expect(e.hero).toBe('minion-prince');
    expect(e.rarity).toBe('Epic');
    expect(e.abilityType).toBe('Active');
    expect(e.unlockRequirement).toContain('Buy in Portal Panic event for 3,100 Rift Medals');
    expect(e.ability?.['redeploySpeedIncrease']).toBe(56);
  });

  it('has an icon image', () => {
    expect(home().heroEquipment().portalPendant().first()!.images.icon).toBeTruthy();
  });

  it('level 1: radius 7, heal 22%, haste 3.5s, capacity 160, HP+550, no cost, blacksmith 1', () => {
    const lvl = home().heroEquipment().portalPendant().first()!.levels[0];
    expect(lvl.level).toBe(1);
    expect(lvl.hitpointIncrease).toBe(550);
    expect(lvl.hpRecoveryIncrease).toBe(558);
    expect(lvl.upgradeShinyOre).toBe(0);
    expect(lvl.upgradeGlowingOre).toBe(0);
    expect(lvl.upgradeStarryOre).toBe(0);
    expect(lvl.blacksmithLevelRequired).toBe(1);
    expect(lvl.stats['portalTileRadius']).toBe(7);
    expect(lvl.stats['healingOnRedeploy']).toBe('22%');
    expect(lvl.stats['hasteOnRedeploy']).toBe('3.5s');
    expect(lvl.stats['recallCapacity']).toBe(160);
  });

  it('level 13: blacksmith 3', () => {
    expect(home().heroEquipment().portalPendant().first()!.levels[12].blacksmithLevelRequired).toBe(
      3,
    );
  });

  it('level 27: radius 10, heal 35%, haste 8s, capacity 400, HP+1200, 3600 Shiny+600 Glowy+150 Starry, blacksmith 9', () => {
    const lvl = home().heroEquipment().portalPendant().first()!.levels[26];
    expect(lvl.level).toBe(27);
    expect(lvl.hitpointIncrease).toBe(1200);
    expect(lvl.hpRecoveryIncrease).toBe(1381);
    expect(lvl.upgradeShinyOre).toBe(3600);
    expect(lvl.upgradeGlowingOre).toBe(600);
    expect(lvl.upgradeStarryOre).toBe(150);
    expect(lvl.blacksmithLevelRequired).toBe(9);
    expect(lvl.stats['portalTileRadius']).toBe(10);
    expect(lvl.stats['healingOnRedeploy']).toBe('35%');
    expect(lvl.stats['hasteOnRedeploy']).toBe('8s');
    expect(lvl.stats['recallCapacity']).toBe(400);
  });

  it('hit point increase grows by 25 per level', () => {
    const levels = home().heroEquipment().portalPendant().first()!.levels;
    levels.forEach((l, i) => expect(l.hitpointIncrease).toBe(550 + 25 * i));
  });

  it('returns a HomeVillageHeroEquipment instance', () => {
    expect(home().heroEquipment().portalPendant()).toBeInstanceOf(HomeVillageHeroEquipment);
  });

  it('is found by hero minion-prince', () => {
    expect(home().heroEquipment().byHero('minion-prince').find('portal-pendant')).toBeDefined();
  });
});

testQueryBaseContract('home().heroEquipment().portalPendant()', () =>
  home().heroEquipment().portalPendant(),
);
