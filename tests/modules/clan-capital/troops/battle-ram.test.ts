import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('battleRam() [Clan Capital]', () => {
  const t = clanCapital().troops().battleRam().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('battle-ram');
    expect(t.name).toBe('Battle Ram');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('splash');
    expect(t.targetType).toBe('ground');
    expect(t.housingSpace).toBe(5);
    expect(t.movementSpeed).toBe(16);
    expect(t.range).toBe(0.75);
    expect(t.preferredTarget).toBe('Walls');
    expect(t.wallDamageMultiplier).toBe(40);
    expect(t.spawnedBarbarians).toBe(4);
  });

  it('has 5 levels', () => {
    expect(t.levels).toHaveLength(5);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(800);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.stats.normal.damagePerShot).toBe(125);
    expect(l1.stats.normal.damageVsWalls).toBe(5000);
  });

  it('level 5 has correct stats', () => {
    const l5 = t.levels[4];
    expect(l5.level).toBe(5);
    expect(l5.hitpoints).toBe(1200);
    expect(l5.districtHallRequired).toBe(5);
    expect(l5.stats.normal.damagePerShot).toBe(275);
    expect(l5.stats.normal.damageVsWalls).toBe(11000);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/battle-ram/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe('images/clan-capital/troops/battle-ram/normal/level-1.png');
    }
  });
});
