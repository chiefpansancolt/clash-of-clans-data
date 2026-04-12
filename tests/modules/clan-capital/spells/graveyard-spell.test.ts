import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalSpell } from '@/types';

describe('graveyardSpell() [Clan Capital]', () => {
  const s = clanCapital().spells().graveyardSpell().first()! as ClanCapitalSpell;

  it('has correct identity', () => {
    expect(s.id).toBe('graveyard-spell');
    expect(s.name).toBe('Graveyard Spell');
    expect(s.base).toBe('clan_capital');
    expect(s.category).toBe('spell');
  });

  it('has correct root stats', () => {
    expect(s.housingSpace).toBe(2);
    expect(s.durationAttacks).toBe(2);
    expect(s.requiredSpellFactory).toBe('Graveyard Spell Factory');
  });

  it('has skeleton stats for ground and air', () => {
    expect(s.skeletonStatsGround).toBeDefined();
    expect(s.skeletonStatsGround!.damagePerSecond).toBe(25);
    expect(s.skeletonStatsGround!.hitpoints).toBe(30);
    expect(s.skeletonStatsGround!.shieldHitpoints).toBe(30);
    expect(s.skeletonStatsGround!.targetsType).toBe('ground');
    expect(s.skeletonStatsAir).toBeDefined();
    expect(s.skeletonStatsAir!.damagePerHit).toBe(17.5);
    expect(s.skeletonStatsAir!.targetsType).toBe('both');
  });

  it('has 4 levels', () => {
    expect(s.levels).toHaveLength(4);
  });

  it('level 1 has correct stats', () => {
    const l1 = s.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.skeletonCount).toBe(21);
  });

  it('level 4 has correct stats', () => {
    const l4 = s.levels[3];
    expect(l4.level).toBe(4);
    expect(l4.districtHallRequired).toBe(4);
    expect(l4.skeletonCount).toBe(29);
  });

  it('all levels have valid normal image paths', () => {
    for (const lvl of s.levels) {
      expect(lvl.images.normal).toMatch(
        /^images\/clan-capital\/spells\/graveyard-spell\/normal\/level-\d+\.png$/,
      );
    }
  });
});
