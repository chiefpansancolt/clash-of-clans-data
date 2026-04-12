import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('megaSparky() [Clan Capital]', () => {
  const t = clanCapital().troops().megaSparky().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('mega-sparky');
    expect(t.name).toBe('Mega Sparky');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('splash');
    expect(t.targetType).toBe('ground');
    expect(t.housingSpace).toBe(100);
    expect(t.movementSpeed).toBe(8);
    expect(t.attackSpeed).toBe(4);
    expect(t.range).toBe(4);
    expect(t.preferredTarget).toBe('Defenses');
  });

  it('has 4 levels', () => {
    expect(t.levels).toHaveLength(4);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(10000);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.stats.normal.dps).toBe(400);
    expect(l1.stats.normal.damagePerShot).toBe(1600);
  });

  it('level 4 has correct stats', () => {
    const l4 = t.levels[3];
    expect(l4.level).toBe(4);
    expect(l4.hitpoints).toBe(13600);
    expect(l4.districtHallRequired).toBe(4);
    expect(l4.stats.normal.dps).toBe(550);
    expect(l4.stats.normal.damagePerShot).toBe(2200);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/mega-sparky/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe('images/clan-capital/troops/mega-sparky/normal/level-1.png');
    }
  });
});
