import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('rocketBalloon() [Clan Capital]', () => {
  const t = clanCapital().troops().rocketBalloon().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('rocket-balloon');
    expect(t.name).toBe('Rocket Balloon');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('splash');
    expect(t.targetType).toBe('ground');
    expect(t.housingSpace).toBe(8);
    expect(t.movementSpeed).toBe(9);
    expect(t.attackSpeed).toBe(3.0);
    expect(t.preferredTarget).toBe('Defenses');
    expect(t.specialAbility).toBe('Boosters');
    expect(t.boostDuration).toBe(4);
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(720);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.deathDamage).toBe(400);
    expect(l1.stats.normal.dps).toBe(175);
    expect(l1.stats.normal.damagePerShot).toBe(525);
  });

  it('level 5 has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(1040);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.deathDamage).toBe(600);
    expect(l5.stats.normal.dps).toBe(275);
    expect(l5.stats.normal.damagePerShot).toBe(825);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/rocket-balloon/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe(
        'images/clan-capital/troops/rocket-balloon/normal/level-1.png',
      );
    }
  });
});
