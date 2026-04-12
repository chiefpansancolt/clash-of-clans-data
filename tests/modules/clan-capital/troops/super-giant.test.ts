import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('superGiant() [Clan Capital]', () => {
  const t = clanCapital().troops().superGiant().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('super-giant');
    expect(t.name).toBe('Super Giant');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('ground');
    expect(t.housingSpace).toBe(10);
    expect(t.movementSpeed).toBe(9);
    expect(t.attackSpeed).toBe(2.0);
    expect(t.range).toBe(0.75);
    expect(t.preferredTarget).toBe('Defenses');
    expect(t.specialAbility).toBe('Wall Buster');
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(3000);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.stats.normal.dps).toBe(100);
    expect(l1.stats.normal.damagePerShot).toBe(200);
    expect(l1.stats.normal.damageVsWalls).toBe(1000);
  });

  it('level 5 has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(4400);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.stats.normal.dps).toBe(140);
    expect(l5.stats.normal.damagePerShot).toBe(280);
    expect(l5.stats.normal.damageVsWalls).toBe(1400);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/super-giant/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe('images/clan-capital/troops/super-giant/normal/level-1.png');
    }
  });
});
