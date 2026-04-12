import { clanCapital } from '@/modules/clan-capital';
import { ClanCapitalTroop } from '@/types';

describe('superMiner() [Clan Capital]', () => {
  const t = clanCapital().troops().superMiner().first()! as ClanCapitalTroop;

  it('has correct identity', () => {
    expect(t.id).toBe('super-miner');
    expect(t.name).toBe('Super Miner');
    expect(t.base).toBe('clan_capital');
    expect(t.category).toBe('troop');
  });

  it('has correct root stats', () => {
    expect(t.damageType).toBe('single');
    expect(t.targetType).toBe('ground');
    expect(t.housingSpace).toBe(25);
    expect(t.movementSpeed).toBe(24);
    expect(t.attackSpeed).toBe(0.25);
    expect(t.range).toBe(0.6);
    expect(t.specialAbility).toBe('Last Blast');
  });

  it('has 4 levels', () => {
    expect(t.levels).toHaveLength(4);
  });

  it('level 1 has correct stats', () => {
    const l1 = t.levels[0];
    expect(l1.level).toBe(1);
    expect(l1.hitpoints).toBe(3300);
    expect(l1.districtHallRequired).toBe(1);
    expect(l1.deathDamage).toBe(1400);
    expect(l1.stats.normal.drillInitialDps).toBe(160);
    expect(l1.stats.normal.drillDpsAfter1_5s).toBe(340);
    expect(l1.stats.normal.drillDpsAfter3s).toBe(630);
  });

  it('level 4 has correct stats', () => {
    const l4 = t.levels[3];
    expect(l4.level).toBe(4);
    expect(l4.hitpoints).toBe(3900);
    expect(l4.districtHallRequired).toBe(4);
    expect(l4.deathDamage).toBe(2300);
    expect(l4.stats.normal.drillInitialDps).toBe(190);
    expect(l4.stats.normal.drillDpsAfter1_5s).toBe(430);
    expect(l4.stats.normal.drillDpsAfter3s).toBe(720);
  });

  it('has valid icon image path', () => {
    expect(t.images.icon).toBe('images/clan-capital/troops/super-miner/icon.png');
  });

  it('all levels reference the normal level-1 image', () => {
    for (const lvl of t.levels) {
      expect(lvl.images.normal).toBe('images/clan-capital/troops/super-miner/normal/level-1.png');
    }
  });
});
