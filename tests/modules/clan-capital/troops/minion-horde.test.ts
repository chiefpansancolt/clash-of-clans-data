import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('minionHorde() [Clan Capital]', () => {
  const t = clanCapital().troops().minionHorde().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('minion-horde');
    expect(t.name).toBe('Minion Horde');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('both');
    expect(t.housingSpace).toBe(2);
    expect(t.movementSpeed).toBe(24);
    expect(t.attackSpeed).toBe(1.0);
    expect(t.range).toBe(1.5);
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(60);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.stats.normal.dps).toBe(56);
    expect(l1.stats.normal.damagePerShot).toBe(56);
  });

  it('level 5 has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(100);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.stats.normal.dps).toBe(80);
    expect(l5.stats.normal.damagePerShot).toBe(80);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/minion-horde/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe('images/clan-capital/troops/minion-horde/normal/level-1.png');
    }
  });
});
