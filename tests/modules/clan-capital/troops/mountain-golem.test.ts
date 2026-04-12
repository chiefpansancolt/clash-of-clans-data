import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('mountainGolem() [Clan Capital]', () => {
  const t = clanCapital().troops().mountainGolem().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('mountain-golem');
    expect(t.name).toBe('Mountain Golem');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('splash');
    expect(t.targetType).toBe('ground');
    expect(t.housingSpace).toBe(160);
    expect(t.movementSpeed).toBe(6);
    expect(t.attackSpeed).toBe(3.0);
    expect(t.range).toBe(2);
    expect(t.specialAbility).toBe('Crush');
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(30000);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.deathDamage).toBe(300);
    expect(l1.stats.normal.dps).toBe(800);
    expect(l1.stats.normal.damagePerShot).toBe(2400);
  });

  it('level 5 has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(44000);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.deathDamage).toBe(500);
    expect(l5.stats.normal.dps).toBe(1200);
    expect(l5.stats.normal.damagePerShot).toBe(3600);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/mountain-golem/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe(
        'images/clan-capital/troops/mountain-golem/normal/level-1.png',
      );
    }
  });
});
