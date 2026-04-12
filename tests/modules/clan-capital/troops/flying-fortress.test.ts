import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('flyingFortress() [Clan Capital]', () => {
  const t = clanCapital().troops().flyingFortress().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('flying-fortress');
    expect(t.name).toBe('Flying Fortress');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('both');
    expect(t.housingSpace).toBe(100);
    expect(t.movementSpeed).toBe(9);
    expect(t.attackSpeed).toBe(2.0);
    expect(t.range).toBe(4.5);
    expect(t.preferredTarget).toBe('Defenses');
    expect(t.specialAbility).toBe('Skeleton Crew');
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(12000);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.spawnedSkeletonGliders).toBe(10);
    expect(l1.spawnedSkeletonsOnDeath).toBe(22);
    expect(l1.stats.normal.dps).toBe(300);
    expect(l1.stats.normal.damagePerShot).toBe(600);
  });

  it('level 5 has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(18000);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.spawnedSkeletonGliders).toBe(18);
    expect(l5.spawnedSkeletonsOnDeath).toBe(30);
    expect(l5.stats.normal.dps).toBe(400);
    expect(l5.stats.normal.damagePerShot).toBe(800);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/flying-fortress/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe(
        'images/clan-capital/troops/flying-fortress/normal/level-1.png',
      );
    }
  });
});
