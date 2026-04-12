import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('raidCart() [Clan Capital]', () => {
  const t = clanCapital().troops().raidCart().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('raid-cart');
    expect(t.name).toBe('Raid Cart');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('ground');
    expect(t.housingSpace).toBe(30);
    expect(t.movementSpeed).toBe(9);
    expect(t.attackSpeed).toBe(2.5);
    expect(t.range).toBe(4.5);
    expect(t.specialAbility).toBe('Last Stand');
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(2800);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.lastStandHitpoints).toBe(1200);
    expect(l1.stats.normal.dps).toBe(240);
    expect(l1.stats.normal.damagePerShot).toBe(600);
  });

  it('level 5 has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(4000);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.lastStandHitpoints).toBe(2000);
    expect(l5.stats.normal.dps).toBe(400);
    expect(l5.stats.normal.damagePerShot).toBe(1000);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/raid-cart/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe('images/clan-capital/troops/raid-cart/normal/level-1.png');
    }
  });
});
